Here is a list of common errors and fixes

# No audio
If you have no audio inside of the container that might be a problem with you pulse audio configuration. Here is a fix:
1. Test if pulse is working on the host
1. Try to update pulse on the container and the host to the latest version
1. Restart and check if pulse still works on the host
1. If pulse still doesn't work on the container, it may be caused by a socket issue
   1. Check if the variable `XDG_RUNTIME_DIR` is not empty and defined in the environment variables list
   1. If it is re-add the socket with the following commands
   ```
   lxc config device remove <your container's name here> PASocket1
   lxc config device add <your container's name here> PASocket1 proxy bind=container "connect=unix:${XDG_RUNTIME_DIR}/pulse/native" listen=unix:/pulse-native uid=1000 gid=1000 mode=0777 security.uid=1000 security.gid=1000
   ```
   3. If the `XDG_RUNTIME_DIR` variable doesn't exist, try to find the pulse socket. It is mostly stored under
      - `/pulse-native`
      - `/run/user/1000/pulse/native`
      - `/var/run/user/1000/pulse/native`
      - `/home/<username>/pulse-native`
      - the `PULSE_SERVER` environment variable
      - `/home/<username>/.config/pulse/`
      - `/home/<username>/.pulse/`

# No windows showing up
This might be a problem with your X configuration. 
1. Make sure your GPU supports the latest AMD/Intel/NVidia(non-free) drivers and that they can be found on the arch linux archive
1. Make sure you have the `DISPLAY` environment variable set to `:0`, this indicates to GUI programs what display they should display a window to(do this on both the host and on the container)
1. Make sure you have the right access control settings for X set on the host, run the command `xhost +local:` to enable it
1. Make sure your GPU drivers are at the same version on the host and container(especially for NVidia users), if they are not us the update command from the GUI or CLI to install the same one as is on the host
1. This is a very rare issue but make sure your X socket is located under `/tmp/.X11-unix/`, if it isn't do the following
   1. Find the new location of the X socket
   1. Execute the following commands, they will remove and re-add the socket to the container
   ```
   lxc config device remove <your container's name here> X0
   lxc config device add <your container's name here> X0 proxy bind=container connect=unix:<your new socket location here> listen=unix:/tmp/.X11-unix/X0 uid=1000 gid=1000 mode=0777 security.uid=1000 security.gid=1000
   ```
   3. If there is still no connection check for the socket on the container's side and if it is not under `/tmp/.X11-unix/X0` then do the same commands as above but replace the `listen=unix:/tmp/.X11-unix/X0` part of the second command with `listen=unix:<your new socket location here>`

# No network connection
This might indicate a problem with your internet or your LXC bridge configuration. LXC bridge management is outside of the scope of this program, refer to LXC documentation and guides in order to fix your problem! Remember your LXC container's name is the same as the one in the manager!

# Errors when installing
If you get some error similar to this `Error: Get "http://unix.socket/1.0": dial unix /var/lib/lxd/unix.socket: connect: connection refused`, you have 2 possible fixes
1. You need to refresh your session for groups to update
1. Use `lxd --debug --group lxd`

Guide for users who chose the second option:
1. If you get an error similar to this ```
Error: Failed to start dqlite server: raft_start(): io: load closed segment 0000000000000002-0000000000000002: unexpected format version 8095768602490157155```
    1. You have a problem with the LXD segments, to fix it navigate to `/var/lib/lxd/database/global` and remove the listed segments
    1. Restart the LXD daemon
