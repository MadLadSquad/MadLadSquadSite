# Preparing for installation
You're going to need the following dependencies
1. CMake
2. GNU make
3. A C++ 17 compiler with a compatible standard library(GCC, clang)
4. Have the glxinfo utility installed
5. You need to be running PulseAudio
6. You need to be running X11
7. You need to be running a still supported Intel, AMD or Nvidia GPU
8. Bash

When you have all of that set up you can move to the following:
1. Run the `buildall.sh` script as your standard permission user

# Using the CLI installer
1. Install lxd
    1. On Gentoo: `root # emerge lxd`
    1. On Arch: `root # pacman -S lxd`
    1. On Debian/Ubuntu: `root # apt install lxd`
1. Run the `user $ ./copy-scripts.sh` script, it will copy all the needed files and create the necessary folders
1. Run the `root # ./ugm-cli-prepare-install.sh` script, this should only be run once per installation of the manager on the system
1. Add the following to the `PATH` environment variable `export PATH=~/.config/UntitledGameSystemManager/scripts/:$PATH`
1. You might have some audio and networking problems, restart your computer and if you still have them go to the [Troubleshooting](https://github.com/MadLadSquad/UntitledLinuxGameManager/wiki/Troubleshooting) entry
1. If everything until here was successful, run the `user $ lxc launch images:archlinux <system-name-here>`, this will create a container with a given name
1. Run `user $ ./ugm-cli-install.sh`, this will start the installer, follow the steps and provide the correct information
1. By the end of the install script you would have a fully functional system and can move to using the managers and as always, if there are any problems go to [Troubleshooting](https://github.com/MadLadSquad/UntitledGameSystemManager/wiki/Troubleshooting), and if they aren't listed here, create an issue

# Installing the managers
You can run a the `user $ ./buildall.sh` script to build all installers and managers, otherwise

1. Change into the `Managers` directory
2. To compile the CLI manager do the following
```
user $ cd CLi/ && mkdir build && cd build && cmake -G "Unix Makefiles" ..
user $ make -j <number of compute jobs> 
user $ cp ugm-cli ../../../
```
3. To compile the GUI manager do the following
```
user $ cd GUI/ && mkdir build && cd build && cmake -G "Unix Makefiles" ..
user $ make -j <number of compute jobs> 
user $ cp ugm-gui ../../../
```

## Usage
For the cli manager use the `ugm-cli` utility, for the gui `ugm-gui`

You can get a help message for the `ugm-cli` utility by using the `--help` option