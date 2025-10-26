Welcome to the November 2025 edition of the monthly newsletter.

## Framework 2.1
Unfortunately, release 2.0 was only stable for 1.5 weeeks 😂. Due to changes in Emscripten, WebGPU now uses the Dawn headers instead of the
wgpu headers. Unfortunately, dear imgui is not yet ready to make the jump, though there is a PR in place. We hope to deliver release 2.1 with
a rewritten WebGPU renderer using the Dawn headers by the end of the month/year.

## pkggen
We are planning on releasing the following versions of pkggen this month:

1. 0.2 - Gentoo ebuild support
1. 0.3 - Arch pkgbuild support
1. 0.4 - RPM support
1. 0.5 - DEB support(from RPM)

Each of these packaging formats will not only have a package generator, but also a repository generator.

We're planning to release versions 0.6 by the end of December and versions 0.7 - 0.9 by the end of January. We expect for the 1.0 release 
to be ready by the middle of February.
