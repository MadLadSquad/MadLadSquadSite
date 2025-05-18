Welcome to the May 2025 edition of the monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework
Development of the 1.1 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) started this month.

The current plan for May is to:

1. Change our fork update strategy
1. Move our dear imgui fork to SDL3
1. Create a better renderer abstraction
1. Allow for users to plug custom renderers into the framework

The plan for 1.2, 1.3 and 1.4 is to:

1. Move to the SDL3 branch of the dear imgui fork
1. Move the renderers to use SDL3 surfaces
1. Redesign the window interface to use SDL3
1. Add additional build options for SDL3 in the build system
1. Completely move to SDL3
1. Apply SDL3 improvements(DPI scaling, copy-paste in WASM, etc)
1. Optional: Try to add Wayland support for missing platform functions or move platform functions to SDL3 if supported there
1. Document the entire move to SDL3
1. Generate C bindings for implot
1. Create an adapter over OS-native and imgui-native menu bar drawing(mainly for macOS systems)
1. Rework or remove titlebar components completely
1. Document all new features

Release 1.1 should be done by the end of the month. Releases 1.2, 1.3 and 1.4 should be done by the end of August.

### pkggen
Development of pkggen will start in July after at least release 1.1 and 1.2 are done.

## Heapforge
### Tiny.lol
Development on tiny.lol has briefly paused and is due to be restarted in June.
