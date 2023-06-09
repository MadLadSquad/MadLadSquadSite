Welcome to the June 2023 edition of the monthly newsletter

## UntitledDesktop
### Announcing UDE flow
![udeflow](https://github.com/MadLadSquad/MadLadSquadSite/assets/40400590/2ac900cd-e261-46cc-a426-692d38c87a6f)

\* Logo derived from Chinese character 川, meaning river/stream.

UntitledDesktop Flow, shortened to UDF will be the reference implementation of a complete desktop environment using the
UntitledDesktopEnvironment base.

The UntitledDesktopEnvironment is mostly a minimal environment that doesn't include a graphic shell i.e. applications such
as status bars and application launchers. UDF, on the other hand, will implement a shell.
This includes the following applications:
1. A minimal application launcher - [UDFApplicationLauncher](https://github.com/MadLadSquad/UDFApplicationLauncher)
2. A minimal and highly customisable bar - [UDFPanel](https://github.com/MadLadSquad/UDFPanel)

Additional applications may be planned for a future date.

### UntitledImGuiFramework 0.5.0.0: Part 2
The framework is still not done for release 0.5. Currently, the following features need to be finished:
- [x] Reworked build system
   - [x] Adding install statements to cmake
   - [x] Creating the multiple library layouts system
   - [x] Multiplatform build
   - [x] Static builds
   - [x] Vendored builds
- [ ] Threads system
- [x] Production export system
- [x] Renaming of locale module to i18n module
- [ ] Creating a custom i18n library
- [ ] C API for 0.5.0.0
- [ ] Finishing the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [ ] Rewriting the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) to use the templating engine

We estimate 0.5.0.0 that would be released around the end of July. The most meaningful features, such as the reworked build
and export system will be released by the end of June.

### UntitledCalculator and UntitledMathSolver
Announcing UntitledCalculator and UntitledMathSolver. UntitledCalculator will be a frontend for UntitledMathSolver, 
which will be a C and C++ library for solving math problems as well as evaluating expressions using a custom function interface. 

The UntitledCalculator will contain the following modes:
1. Basic
2. Advanced
3. Programmer
4. Financial

It will be able to be extended using custom functions and variables, support for plotting and exporting of plots is
also going to be supported. Official plugins for complex functionality will also be released.

We expect to finish development of the UntitledMathSolver and UntitledCalculator around the end of August 2023.

## Multilingual
The current tasks for the multilingual project are as follows:
- [ ] Cooperation with the [i18n subproject](https://madladsquad.com/untitled-desktop/subprojects/i18n) on the custom i18n
library for the framework
- [ ] Creating a static site component based system for [Youyin](https://youyin.madladsquad.com/) using the templating engine
- [ ] Figuring out how to add more character data to [Youyin](https://youyin.madladsquad.com/)
- [ ] Autogenning the Adobe SourcePro and Google Noto fonts in Funtoo linux, [FL-10383](https://bugs.funtoo.org/browse/FL-10383)
- [ ] Rework the MadLadSquad website

### New MadLadSquad website
The current website is hard to navigate efficiently, which is why we decided to create a better redesign for it. This
is what it looks like right now:

![image](https://github.com/MadLadSquad/MadLadSquadSite/assets/40400590/68af2eea-a2fa-484e-b273-38933629a633)

### Additional scripts to Youyin
We're currently working on adding additional writing systems to [Youyin](https://youyin.madladsquad.com/), with the first
ones being the following:
1. [BoPoMoFo/zhuyin](https://en.wikipedia.org/wiki/Bopomofo)
2. Latin
3. Cyrillic

Progress on this front is currently slow, as it requires a lot of manual work to modify the SVGs in a proper way. Expect zhuyin
added to the database around the end of July.
