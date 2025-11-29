import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

describe('Model JSON Schema Validation', () => {
  const projectRoot = resolve(process.cwd());
  const modelsDir = resolve(projectRoot, 'models');

  // Initialize AJV validator
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);

  // Get all JSON files in the models directory
  const modelFiles = readdirSync(modelsDir)
    .filter((file: string) => file.endsWith('.json'))
    .map((file: string) => join(modelsDir, file));

  it('should have at least one model file', () => {
    expect(modelFiles.length).toBeGreaterThan(0);
  });

  // Test each model file
  modelFiles.forEach((modelPath: string) => {
    const modelFileName = modelPath.split('/').pop() || modelPath;

    describe(`Validating ${modelFileName}`, () => {
      it(`should be valid JSON`, () => {
        expect(() => {
          JSON.parse(readFileSync(modelPath, 'utf-8'));
        }).not.toThrow();
      });

      it(`should have a $schema property`, () => {
        const modelData = JSON.parse(readFileSync(modelPath, 'utf-8'));
        expect(modelData).toHaveProperty('$schema');
        expect(typeof modelData.$schema).toBe('string');
        expect(modelData.$schema.length).toBeGreaterThan(0);
      });

      it(`should conform to the schema defined in $schema`, () => {
        const modelData = JSON.parse(readFileSync(modelPath, 'utf-8'));

        // Get the schema path from the $schema property
        const schemaRelativePath = modelData.$schema;
        if (!schemaRelativePath) {
          throw new Error(`${modelFileName} is missing a $schema property`);
        }

        // Resolve the schema path relative to the JSON file's directory
        const modelDir = dirname(modelPath);
        const schemaPath = resolve(modelDir, schemaRelativePath);

        // Load and compile the schema
        const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
        const validate = ajv.compile(schema);

        // Validate the model data
        const valid = validate(modelData);

        if (!valid) {
          const errors = validate.errors
            ?.map((err) => {
              const path = err.instancePath || err.schemaPath;
              return `  - ${path}: ${err.message}`;
            })
            .join('\n');
          console.error(`Validation errors in ${modelFileName}:\n${errors}`);
        }

        expect(valid).toBe(true);
      });
    });
  });
});
