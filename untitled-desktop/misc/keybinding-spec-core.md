# UntitledDesktopEnvironment Core Keybinding Format Specification
## Authors
1. [Stanislav Vasilev(Madman10K)](https://github.com/Madman10K)

## Version
Current version is 0.9.0.0

## Overview
The UntitledDesktopEnvironment strives to support multiple types of input devices and systems. This specification establishes
a core format for laying out application specific keybindings. This format supports the following input devices:

1. Standard keyboards
1. Standard mice
1. Touchscreen actions
1. Any device that functions like a keyboard or mouse

This version of the specification does not currently support, but will support the following devices in future revisions:

1. Joysticks

Any other devices are currently not considered by the specification.

## Format
The format is specified in pure YAML, using the following schema:
```yaml
bindings:
  - key: empty-binding
    val: [ key code 1, key code 2, key code 3 ]
```
Each binding is part of the global array of bindings called `bindings`. Each binding is stored as a key-value pair inside the 
array:

1. The `key` key, sets the string ID for the given keybinding, which is used by the application to fetch its state.
1. The `val` key, sets the keys that need to be activated for the binding to be in `pressed` or `repeat` state. This is an array
   of key codes specified in 
   [this file](https://github.com/MadLadSquad/UntitledImGuiFramework/blob/master/Framework/Core/Events/Keys.hpp)

Revisions before version 0.9.0.0 did not include support for multikey bindings. Since they were developed duging the standard's
experimental phase, they are not supported by input systems used by current MadLad Squad applications/libraries/frameworks.
