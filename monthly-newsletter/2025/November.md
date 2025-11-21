Welcome to the November 2025 edition of the monthly newsletter.

## Framework 2.1
Unfortunately, release 2.0 was only stable for 1.5 weeeks 😂. Due to changes in Emscripten, WebGPU now uses the Dawn headers instead of the
wgpu headers. Unfortunately, we're not yet ready to make the jump, due to technical difficulties. The TLDR is that to use the Emscripten 
Dawn API we need to use Asyncify or JSPI, however Asyncify does not allow for us to use any exceptions, which makes many libraries, including
the YAML loading library we use, major blockers. JSPI could allow us to not have to disable exceptions, but then, since JSPI is not yet 
adopted, there's no way to guarantee stable support for it.

Therefore, we decided that we will be temporarily removing the WebGPU renderer until 2027. We think that this will be enough time for
browsers to sync up with the JSPI standard and for us to be able to integrate this renderer once again.
