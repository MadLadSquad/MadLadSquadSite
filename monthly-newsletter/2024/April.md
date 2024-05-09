Welcome to the April 2024 monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 0.8.7.0 to 0.8.7.8
New releases of the framework in April include various improvements to the installation experience, documentation, modules and
more.

Most important changes:
1. Symlinks now work on windows
1. The create project script can now elevate its priviliges to administrator
1. Fixed production export on Windows
1. Libraries are installed in the build directory on Windows
1. New production settings in the `uvproj.yaml` file
1. New updated & workng UntitledOpen implementation(not fully operational on Linux)

### UntitledOpen 1.9.8.0
This new version of UntitledOpen can now open native file pickers and URIs on Windows and MacOS, Linux coming soon.

This version uses a C/C++ library for handling file pickers, removing our dependency on rust. It also doesn't crash the renderer
on Linux.

## Multilingual
### Youyin editor
The new Youyin editor had a few quality of life updates. New working features will be added in the following months.
