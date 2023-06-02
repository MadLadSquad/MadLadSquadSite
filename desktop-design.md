In this page, we're going to be discussing how we design our applications. This is not a strict requirement and most things can be skipped.

## DISCLAIMER
Any applications and comments on their UI here are for pure example reasons, we do not want to criticize the applications for 
being incompabitle with our recommended style guidelines. They are developed by their own teams using their own style and we 
have no word in saying what an application should or shouldn't look like, especially if the application is not made by us. 
The applications listed here are purely as examples to show what we recommend you to do and what not to do.

## Design policies
We design our applications like this:

![image](https://user-images.githubusercontent.com/40400590/193206959-17f1ad58-074a-4507-8f8e-4492f57f6794.png)

We have a bar at the top that has the standard `File`, `Edit`, etc popups that have a list of buttons that execute actions.

For UI elements we prefer square elements with hard edges, while for modals you can implement edge rounding on the window. Edge 
rounding isn't really a problem, if not applied excessively.

Next, prefer using modals for popups like here:

![image](https://user-images.githubusercontent.com/40400590/193212925-156e34ad-0a1b-44fd-8353-a2eea7e3b3e0.png)

We prefer our applications to look like ones developed for Windows. The reason is, that most GUI applications are written for 
Windows anyway, so we need to adapt to their standards in some way, this is why we use such a design. 
This leads to more uniformity, for example applications like [Discord](https://discord.com):

![image](https://user-images.githubusercontent.com/40400590/193214135-44b52e80-8055-409c-9b0b-10f12d283e4f.png)

KCalc:

![image](https://user-images.githubusercontent.com/40400590/193214225-1a59d3df-0db3-4f1c-84c6-2ed06a13a097.png)

The [UntitledLinuxGameManager](https://github.com/MadLadSquad/UntitledLinuxGameManager):

![image](https://user-images.githubusercontent.com/40400590/193206959-17f1ad58-074a-4507-8f8e-4492f57f6794.png)

and firefox:

![image](https://user-images.githubusercontent.com/40400590/193214635-acd6830a-1e22-40d6-b7ac-8fb3a685a04e.png)

are all compatible with each other, while applications like gnome calculator are somewhere in between:

![image](https://user-images.githubusercontent.com/40400590/193214799-e215bca2-0a47-4d9e-adc6-19182a899c60.png)

and applications like xfce-settings-manager look somewhat inconsistent.

![image](https://user-images.githubusercontent.com/40400590/193215681-250ebae3-519c-45ca-a9cd-31828ff61b67.png)

Overall most applications that are problematic are gnome and GTK apps. The problems there are the scale of the UI elements, 
buttons and menu bars are way too large. This is expected since gnome is designed for both normal desktops and laptops, tablets, 
etc so these large UI elements are needed.

Our design policies don't recommend you make applications using this style, as our DE is only for desktop consumption and this 
design wastes way too much screen real estate.

Additionally make sure that you follow the settings set in the window manager and remove the subset of client side decorations if 
server side dectorations are removed, for example, xfce4-about doesn't remove the top part of the window even though I have 
explicitly disabled decorations:

![image](https://user-images.githubusercontent.com/40400590/193217625-d18b57fa-f90d-4c3f-bf87-9f3dcdf2b5f4.png)

In cases like gnome calculator, consider removing the window interaction buttons, but leave everything on the bar untouched if 
decorations are removed:

![image](https://user-images.githubusercontent.com/40400590/193218031-f6bd7553-d881-4fc2-a0cb-3fa865ef42c3.png)

You might also want to disable moving windows by dragging on the bar, but that's not an issue to nitpick about.

---

Next, talking about themes, use a standardized theming API, APIs like libadwaita and our own themes system are a great example. 
It's fine to use whatever you want since we have compatibility APIs for GTK, QT and libadwaita. In general libadwaita is 
misunderstood in the linux community as being this library that restrics theming to a single theme or a collection of predefined 
themes and its name derived from the default gnome theme, adwaita doesn't do it any favours either. This however, is not the 
case. While it definitely didn't have a theming API in its early stages, it now has a bunch of 
[named colours](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/named-colors.html) that the user can theme.

---

This section will be expanded in the future as we're currently looking for other design decisions to put here.
