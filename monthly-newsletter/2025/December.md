Welcome to the December 2025 edition of the monthly newsletter.

## UntitledDesktop
We drafted the plan for releases 2.2, 2.3, 2.4 and 2.5. Our plan is the following:

1. Changing the YAML library from yaml-cpp to rapidyaml, which will theoretically allow us to compile without any exceptions,
   which is important for adding back the WebGPU renderer, which couldn't work mainly because we couldn't use ASYNCIFY if our code
   throws exceptions
1. Refactoring and rewriting the UVKBuildTool - it is in dire need of a rewrite... again! We hope to finally be able to clean it up and
   so that we can leave it as is
1. Refactoring and rewriting UntitledCLIParser - as part of the UVKBuildTool rewrite, the UntitledCLIParser library lacks some core
   features that need to be added for both better developer, and user experience.
1. Adding back the WebGPU renderer - after changing the YAML library, if it's possible to compile and run successfully,
   we'll attempt to add back the WebGPU renderer

We also cleaned up some old compatibility code for old dear imgui versions from some of our libraries.

## pkggen
Our plan for November was not executed due to lack of development time. We'll try implementing some parts of it in December, though we're
planning on moving much of these tasks to January 2026.
