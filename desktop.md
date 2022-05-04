Here are the components of the UntitledDesktopEnvironment
- UntitledDEPowerManager
- UntitledDESessionManager
- UntitledFileManager[1]
- UntitledDEDesktopManager
- UntitledWindowManager[2]
- UntitledWidgets[1]
- UntitledDEGTKCompat
- UntitledDEKompat

[1] - Cross-platform
[2] - Any X-Org running system

## Power and session manager
Controls sleep, hibernation, restarts, logging out, saving sessions and more
## Widgets
Renders interactive widgets on the screen
## GTKCompat
A compatibility layer with GTK that enables the following
- Conversion of GTK themes to UntitledDE themes
- GTK compatibility layer to morph GTK applications into looking and feeling like ones made with imgui
## UntitledDEKompat
A program to convert KDE themes to UntitledDEThemes
# Motivation and info
The motivation behind the UntitledDesktopEnvironment is simple: Have a desktop that gives the user and developer freedom. In the creation of a desktop environment, its developers choose a development toolkit. This toolkit however, can be as minimal as imgui, or as bloated as GTK.
In reality it doesn't matter what toolkit you use as long as you get the job done. The only problem with this is that uniformity across the system is lost, GTK programs do not feel and look anything close to QT or imgui ones which makes the user experience fragmented.

Our motivation is that we will set guidelines that developers can either follow or not. These guideline will then be applied to any program to keep a uniform widget style, solving the GTK/QT compat issues
## Widget style
Here begins our beef with GTK. Gnome and its UI can be best described as a tablet OS, meaning that there are huge buttons, massive title bars and so on. This is fine for mobile but for desktop and laptop use it takes up a lot of screen real estate, not to mention how it also makes removing the titlebars for windows impossible on configurations running a tiling window manager

Our solution? Stick to the good old design of QT and Windows. While many Linux users undeniably dislike or even hate Windows, UI there is very clear and is built for the desktop first. QT also has a similar layout design language as on Windows, which makes it compatible with our style. GTK however, has problems.

And how do we fix those problems? 
