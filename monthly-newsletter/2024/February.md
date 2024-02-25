Welcome to the February 2024 monthly newspaper

## Incorporating
We've got our finances in order and are almost ready to incorporate 🥳

## UntitledDesktop
### UntitledGameSystemManager 2.0
If you've been following the news related to LXD lately, you might have noticed that the ownership of LXD has shifted to Canonical
from Linuxcontainers. Canonical also changed the licensing to the AGPLv3 and requires contributors to sign a CLA. Therefore, it's
not ideal for us to continue using LXD.

Fortunately, this situation did not sit right with a lot of LXD users, so a fork of LXD was made by the Linuxcontainers developers
called [incus](https://github.com/lxc/incus). Since its release it has become slimmer than the original LXD and also has more bug
fixes and a somewhat cleaner API.

This prompted us to convert all of our existing architecture to incus, including our LXD game system containers. And because LXD
and incus use different APIs, we also rewrote the LXD bindings into incus bindings and released a 2.0 version of the
[UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager).

For users of version v1.X.X.X, chech [this update guide](https://github.com/MadLadSquad/UntitledGameSystemManager/wiki/Upgrading-from-1.X.X.X-to-2.X.X.X) for version 2.

## New and improved character editor for Youyin
Youyin uses character data, provided by [hanzi-writer-data](https://github.com/chanind/hanzi-writer-data)\*, which itself uses the 
[makemeahanzi](https://github.com/skishore/makemeahanzi) project that contains SVGs, character decomposition and more in a single
GitHub repository.

\* Other data was gathered through other souces, mainly: [hanzi-writer-data-jp](https://github.com/chanind/hanzi-writer-data-jp),
which uses [AnimCJK](https://github.com/parsimonhi/animCJK) for character data.

The data for [makemeahanzi](https://github.com/skishore/makemeahanzi) is generated through a GUI editor, however on our quest to
generate handwriting data for all writing sysems we hit a roadblock: The editor doesn't have the ability to work well with simple
shapes with a limited number of SVG points.

The good news is that [Nick](https://github.com/fami-fish) has been working on upgrades to the editor that will hopefully fix the
remaining issues.

Once fixed, we will gradually generate almost all writing systems.

## Modus Mio BG
Nothing much happened this February, but we did hit 150 followers 🥳
