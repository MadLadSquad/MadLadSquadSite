Welcome to the June 2025 edition of the monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework
Releases 1.1, 1.2 and 1.3 of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) will be made available by the
end of the month. Release 1.4 might also start this month.

With release 1.1 the [implot](https://github.com/epezent/implot) library now has a C API thanks to the 3.0 release of the 
[cimgui\_extra](https://github.com/MadLadSquad/cimgui_extra) library.

With release 1.2 the pluggable renderer API is now finished which allows developers to use their own custom renderers instead of the
minimal built-in ones.

The goals for 1.3 and 1.4 are to:

1. Completely rework or remove titlebar components
1. Create an adapter that allows applications to be able to render the same title bar with dear imgui or with the native OS menu API. This
   is extremely important for macOS
1. Move to the SDL3 branch of the dear imgui fork
1. Move the renderers to use SDL3 surfaces
1. Redesign the window interface to use SDL3
1. Add additional build options for SDL3 in the build system
1. Completely move to SDL3
1. Apply SDL3 improvements(DPI scaling, copy-paste in WASM, etc)
1. Optional: Try to add Wayland support for missing platform functions or move platform functions to SDL3 if supported there
1. Document the entire move to SDL3

### UImGuiBgfx
The [UImGuiBgfx](https://github.com/MadLadSquad/UImGuiBgfx) project is a new example that showcases the abilities of the new pluggable
renderer interface using the popular [bgfx](https://github.com/bkaradzic/bgfx) renderer library

## pkggen
We might also start the development of [pkggen](https://pkggen.madladsquad.com) this month too.
