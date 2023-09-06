Welcome to the September 2023 edition of the monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 0.8, 0.8.6 and 0.9.0
In September, we plan to release the 0.8, 0.8.6 and 0.9.0 releases of the framework, which would bring the following features:

1. UntitledOpen 1.0 - For the ability to open URLs and Files in a default application/file picker
1. UntitledDBusUtils 1.0 - For the dbus submodule of the OS module
1. UntitledI18N 1.0 - for the I18N module

### UntitledOpen 1.0
The [UntitledOpen](https://github.com/MadLadSquad/UntitledOpen) library allows us to open URIs with a default application.
It also allows us to open a file picker for a file or folder. It's developed as bindings for the 
[opener](https://github.com/Seeker14491/opener) Rust library.

## Multilingual
### Working on Youyin 1.0
We have a new vision for implementing the 1.0 release of Youyin and are starting development in September. Some features that will
release in September are:

1. Phrase support

Work on adding more writing systems to the character database also started. [Zhuyin](https://en.wikipedia.org/wiki/Bopomofo)
is the first writing system we decided to add and data for most characters in it can already be used on the website.

Additionally, development of the future backend, account system and more have started. Once we reach a good enough point, we will
launch the whole service at once.

### New Youyin scripts
We are planning to add the following scripts to Youyin by the end of the month:
1. Zhuyin
1. Greek
1. Latin
1. Cyrillic

### UntitledI18N 1.0
We plan on releasing the 1.0 release of the UntitledI18N library this month. It will mainly deal with translating strings in our
applications, however more features could be added in further releases.

The library will be integrated into the web module of the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool), which will
enable us to easily generate translations of our websites.
