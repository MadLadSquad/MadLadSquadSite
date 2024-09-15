Welcome to the September 2024 monthly newsletter!

## UntitledDesktop
### UntitledImGuiFramework 0.9.8.0
The 0.9.8.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) will feature fully finished
Vulkan and WebGPU renderers as well as improved plugin support and additional C APIs for libraries related to dear imgui.

### UntitledImGuiTextUtils 1.5.0.0
The 1.5.0.0 release of the [UntitledImGuiTextUtils](https://github.com/MadLadSquad/UntitledImGuiTextUtils) library adds a number of
improvements, including a C API, `va_list` specialisations of variadic functions and more.

### Cleaning up all codebases
Due to a lot of our code being coupled with legacy constructs from the 
[UntitledVulkanGameEngine](https://github.com/MadLadSquad/UntitledVulkanGameEngineOld), some large parts of our code has had some legacy
naming remaining. In preparation for [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) 0.9.8.0 we decided
to clean up these references and make the code more modern.
