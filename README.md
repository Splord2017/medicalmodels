# Medical Models

This repository contains 3D printable models for medical training and education. The primary focus is on anatomical models and medical device simulators designed to enhance medical education and training.

## Patella Reduction Model

The **3D Printed Patella Reduction Model** is a comprehensive training simulator designed to teach medical students and healthcare professionals the procedure of patella reduction. This model simulates a dislocated patella and provides hands-on training for reduction techniques.

### Medical Context

- **ICD-10 Code**: S83.0 (Patella dislocation)
- **CPT Codes**: 27560, 27562
- **Purpose**: Medical training and simulation

### Model Overview

This model consists of 11 3D-printed components that assemble to create a functional knee joint simulator with a dislocatable patella. The model includes:

- Anterior and posterior patella components
- Knee joint components (anterior and posterior)
- Leg components (anterior and posterior, upper and lower)
- Mechanical components (axle shaft, ratchet wheel, clips, hinge pins, latches)

### Model Components

The model includes the following printable components:

1. **Anterior Patella** - Connects to posterior patella via 4x #2-56 screws
2. **Posterior Patella** - Connects to anterior patella with 4x #2-56 machine screws
3. **Axle Shaft** - Holds elastic band in place, attaches to anterior leg (print 2)
4. **Posterior Knee Joint** - Connects to anterior knee via 2x hinge pins and 2x latches
5. **Anterior Knee Joint** - Connects to posterior knee via hinge pin and latch
6. **Clip** - Holds ratchet wheel in locked/unlocked position (print 2)
7. **Hinge Pin** - Internal brace for knee joint (print 2)
8. **Latch** - External brace for knee joint (print 2)
9. **Anterior Leg** - Used for both upper and lower leg (print 2)
10. **Posterior Leg** - Used for both upper and lower leg
11. **Ratchet Wheel** - Provides tension for tendon/elastic band (print 2)

### Print Settings

**Recommended Print Parameters:**

- **Material**: PLA
- **Material Size**: 1.75 mm
- **Color**: Gray (recommended)
- **Layer Height**: 0.2 mm
- **Wall Thickness**: 0.8 mm
- **Top/Bottom Thickness**: 0.8 mm
- **Infill**: 20%
- **Supports**: Required
- **Raft**: Required
- **Nozzle Temperature**: 200°C
- **Bed Temperature**: 55°C
- **Bed Adhesion**: Glue recommended

**Software:**

- **CAD Software**: Rhinoceros V8
- **Slicer**: Ultimaker Cura 5.10.1

### Files

All model files and print parameters are located in the `models/` directory:

- `patella_reduction_print_parameters.json` - Complete metadata including:
  - Individual component specifications
  - Print dimensions and material requirements
  - Print times and filament usage
  - Assembly instructions references

### Resources

- **Atomized Images**: [View component breakdown](https://drive.google.com/file/d/1pWquUtt-59-18FUezPp3vgjcDjOSwysS/view?usp=drive_link)
- **Assembly Guide**: [View assembly instructions](https://drive.google.com/file/d/13t6kkBVhMiJ73t4HvmNwJiyL0WwY_wif/view?usp=drive_link)
- **Assembly Video**: [Watch assembly tutorial](https://www.youtube.com/watch?v=DxuaFY34vbE&t=65s)
- **Materials List**: See `Patella_Reduction_Purchases_Itemized.xlsx` in the repository

### DOI

**NIH 3D Print Exchange DOI**: [10.60705/3dpx/22804.1](https://3dprint.nih.gov/discover/3dpx-22804.1)

### Authors

- Spencer Lord
- Garrett Lord

**Creation Date**: January 17, 2024

### Usage

1. Review the print parameters in `models/patella_reduction_print_parameters.json`
2. Print all required components according to the specifications
3. Follow the assembly guide and video for proper construction
4. Use the model for training patella reduction procedures

### Keywords

- Patella dislocation (ICD10: S83.0)
- CPT code: 27560, 27562
- 3D-printing
- Simulation model
- Medical training
- Orthopedic training

## Repository Structure

```
MedicalModels/
├── LICENSE                    # Creative Commons Attribution 4.0 International License
├── README.md                  # This file
└── models/                    # 3D model files and metadata
    └── patella_reduction_print_parameters.json
```

## License

This work is licensed under the **Creative Commons Attribution 4.0 International License** (CC BY 4.0).

This means you are free to:

- **Share** - copy and redistribute the material in any medium or format
- **Adapt** - remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:

- **Attribution** - You must give appropriate credit, provide a link to the license, and indicate if changes were made

See the [LICENSE](LICENSE) file for the full legal text.

## Contributing

Contributions, improvements, and feedback are welcome. Please ensure any modifications maintain the educational and medical training objectives of the models.

## Disclaimer

These models are intended for **educational and training purposes only**. They are not medical devices and should not be used for actual patient care. Always follow proper medical protocols and use approved medical devices for patient treatment.

## Citation

If you use this model in your research or educational materials, please cite:

```
3D Printed Patella Reduction Model
Spencer Lord, Garrett Lord
Creative Commons Attribution 4.0 International License
DOI: 10.60705/3dpx/22804.1
```

---

For questions or support, please refer to the assembly guides and video tutorials linked above.
