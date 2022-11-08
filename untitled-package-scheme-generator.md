The UntitledPackageSchemeGenerator project is a CLI application that generates the following package formats:
1. DEB - Debian based Linux distros
1. RPM - Fedora and Redhat based Linux distros
1. Ebuilds for Funtoo and Gentoo - Gentoo based Linux distros
1. Pacman pkgbuilds - Arch based Linux distros
1. Winget - Official Windows package manager
1. Windows Installers - MSI/EXE windows installers
1. Flatpak - All Linux machines(uses containers)

The goal is to have a single build and installation script for an application, and using it, construct package formats for all different distribution platforms.

Believe it or not, the different Linux packaging formats aren't that different as they all require common information. We decided to make use of the Ebuild package
format, as we saw it as the best and most interoperable one out of the list. This also allows us to skip creating our own format and makes our job easier by having 2
out of the 8 formats ready for use

For more information check out the [wiki](https://madladsquad.com/docs/UntitledPackageSchemeGenerator/Home)
