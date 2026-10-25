Welcome to the November 2026 edition of the monthly newsletter!

## pkggen
We're planning to release the 1.0 release of [pkggen](https://pkggen.madladsquad.com) by the end of November. It will release with full support
for all features in the initial spec. Specifically, we fully support the following packaging formats:

1. deb packages
1. RPMs
1. Arch Linux PKGBUILDs
1. Gentoo Ebuilds
1. Alpine packages
1. Void templates

For each of these formats we support:

1. Generating and bootstrapping package repositories
1. Fetching the latest versions from source code repositories such as GitHub and GitLab
1. Generating packages from templates
1. Building and testing packages in containers
1. Deploying packages to third-party repositories such as git repositories, the AUR or S3 buckets
1. Running the entire toolkit on foreign platforms like Windows or macOS

## UntitledDesktop
### New features, bug fixes and security improvements
The new features, security fixes and bug fixes from last month's entry are planned to land on time in the first week of November.

### UntitledImGuiFramework 3.0
We're planning on releasing the 3.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework)
in the first week of November. This release includes close to a year of fixes in our dependencies + new improvements to 
the pluggable renderer and windowing systems.

The development of this release has been sponsored by one of our new projects at [Heapforge](https://heapforge.com).

### New packaging workflow
With the introduction of pkggen, we're announcing that we'll be dropping our existing Linux packaging repositories' build systems
and we're moving to deploying every package using pkggen.

Along with that, we're also launching our brand new repositories for Alpine Linux and Void Linux.

## Youyin ML experiments
We're currently training a machine learning model for automatically generating character data from any font. We'll share more information on this experiment in late December.
