Welcome to the July 2024 monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 0.9.4.0
The 0.9.4.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) added major improvements to the
[UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) and full initial support for WASM.

Amongst the major improvements of the build system is that `CMakeLists.txt` breakages no longer happen, due to us moving 95% of all CMake code
to separate files in the `Framework` folder. Additionally, we added a new per-project CMake configuration file that includes patches for the
specific applications, without the need to edit the root `CMakeLists.txt` file directly.

The code was also refactored so that there's no need to do heavy templating for generating the CMake scripts.

### UntitledImGuiFramework 0.9.5.0
The 0.9.5.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) added many major improvements to the
[UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) that fix almost all annoying parts of working with the framework.

From version 0.9.5.0, module settings can just be defined in the `uvproj.yaml` file and a corresponding CMake configuration file can be
generated automatically.

It also adds full 1.0 support for WASM and adds a WebGPU renderer.

### UntitledImGuiFramework 0.9.6.0
The 0.9.6.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) fully completes the Vulkan renderer.

### UntitledImGuiFramework interactive web demo
With the release of the 0.9.4.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework), we can now
target WASM. We took advantage of that and we made a demo site for the framework, you can check it out on <https://uimgui.madladsquad.com>,
or as an embed below:

<div id="demo-div" style="width: 100%; height: 100%; min-width: 800px; min-height: 600px; display: flex; flex-direction: column;"></div>
