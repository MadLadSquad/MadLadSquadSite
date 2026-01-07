Welcome to the January 2026 edition of the monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 2.2, 2.3, 2.4 and 2.5
Our plan is to release these 4 releases of the UntitledImGuiFramework in January. Due to the way some changes are related to other changes
in this broader release bundle, there may be less point releases than ones listed here.

The plan for this release is:

- 2.2 - Move from yaml-cpp entirely to rapidyaml for faster YAML parsing + no dependency on exceptions
- 2.3 - Refactor much of the UVKBuildTool
- 2.4 - UntitledCLIParser 6.0
- 2.5 - Add back the WebGPU renderer

We plan to release 2.2 and 2.3 by the end of the first week of January. Releases 2.4 and 2.5 should land by the end of the month, with one
of them landing by the end of the second week of January.

### UntitledDBusUtils 2.2
Version 2.2 of UntitledDBusUtils will introduce a new API for the 2 functions for checking whether a container type is a map or an array.

Previously, users had to define custom macros and they had to rewrite functions just to be able to use their own custom container 
types with our API. From version 2.2 we no longer use macros and custom functions, instead we utilise the new C++ feature called concepts,
which allows us to handle new types automatically.

## pkggen
In the last days of January, after all the framework work is done, we plan to restart development on pkggen, as we prepare to release
versions 0.1, 0.2, 0.3, 0.4 and 0.5 by the end of February
