In this page we are going to detail some of the features and plans for our desktop envirionment, we hope that this page can clear up any questions on
what we desire to achieve with this project

## Motivation
Our motivation is simple, create a great desktop environment for Linux and other operating systems running components made by the 
[freedesktop foundation](https://freedesktop.org)

But beyond that, why are we creating it in the first place and what are the problems we want to fix. But before that to begin with a quick rant on open
source software. Most open source applications have a problem with communicating with one another, the main issue on desktops is that Unix based OS'
architectures don't feature the desktop as an essential component since their architecture was developed way before the concept of GUI applicaitons
became a thing. 

Because of this the GUI became a thing for third parties, and as a result of this we don't have the same uniformity as systems like
Windows, MacOS or even Android flavours which negatively impacts users of desktops. This is unfortunately not a fixable issue, fortunately shells
like Gnome and KDE have for the most part removed most problems to date and the user's experience is definitely a great one over there.

So why even consider UDE when you said that KDE and Gnome are great 😂. Well here's the thing, we're actually not trying to compete with them, all we
want to create is an alternative desktop experience. Here are our priorities:
1. Freedom
1. Cross-desktop compatibility
1. A fully community-centered approach to development
1. A uniform experience or as close as we can get to it
1. A user experience no matter your level of knowledge
1. A fully modifiable and hackable application suite out of the box
1. Even more small things such as great multilingual experience

We will cover all of those points in the headers below

## Freedom
We want the user to have full freedom in whatever applications they want to use, and to give this freedom without impacting the approximately good UX

What do we mean by this? A user shall have the ability to
1. Replace the desktop widgets system(i.e. wallpaper manager, status bar), applications, libraries, etc. and the system should work normally and shall not
be a monolith that breaks on the removal of any applications, regardless of how large or small it is
3. Use any configuration format, library and/or programming language they want in configuring their programs
4. The user shall have full conscious choice on all features he/she wants and shall be able to completely control which components get installed
5. The user shall have the freedom to modify every application he/she desires in an easy manner using plugins that don't discriminate against the 
programming language, configuration format or general technology the user deems fit for the job
6. Not creating a pedantic environment, where we force all developers to the desktop's specific application guidelines

### Configurability
We want the user to have freedom, and this cannnot be done without the ability of the user to easily configure their system and applicaiton in whatever
way they desire. Here is what we provide with our applications:
1. A standard C and C++ API for all applications that can benefit from it, so that a user can make a plugin using bindings for another programming
language or use a plugin that provides a runtime environment in case it's a scripting language. The intention is to let the users use whatever technologies
they want and not force them use a single programming language for development of plugins. We think that this positively impacts our user experience,
not only because advanced users can feel right at home by using whatever tools they want, but also because a larger number of advanced users can develop 
plugins, making the plugin ecosystem richer and therefore the end user experience better
1. Every application is a self-sustained atom, meaning that it can be swapped out with some other application at any time without breaking the system
1. Cross-format and cross-desktop compatibility so that users can easily convert their old configs into our ecosystem without having to manually
tinker for hours or even days
1. Compile flags that can be used by the user to enable or disable any additional features. This is important because it provides
minimalist users with the option to have a minimal environment. The benefits of minimalism are many including less bugs and higher security, but we cannot
discuss all of them here

## Cross-desktop compatibility
What we mean by cross-desktop compatibility is, paradigms and components made for desktops such as Gnome and KDE, shall have the ability to work
effordlessly on our system. This includes things such as:
1. Having converters for config files, plugins, themes, etc.
1. Listening for signals from dbus and responding to them appropriately
1. Not creating pedantic design policies and requirements

This section will be expanded to be more detailed soon!

## A fully community-centered approach to development
We want our community to control the direction of our projects, that's why we distribute our software as open source, but that isn't the full picture

We want our users, developers and contributors to work together in the development of the desktop, but not only that, we also want them to contribute
in a decentralized way. 

Here are the roles and their responsibilities in our software development process:
1. A maintainer - A maintainer's job is to primarily fix bugs and coordinate the scope of the project. This means that a maintainer can do things such as
merging a bug fix PR, but they also have the responsibility of monitoring issues for the creation of new subprojects, features and so on. This however,
doesn't include 
3. A developer - A developer's job is to primarily add feature updates, but to also fix bugs
