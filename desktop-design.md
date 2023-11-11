This page details some guidelines and suggestions when developing UDE applications o

## DISCLAIMER
Any applications and comments on their UI here are for pure example reasons, we do not want to criticize the applications for 
being incompatible with our recommended style guidelines. They are developed by their own teams using their own style. We 
have no word in saying what an application should or shouldn't look like, especially if the application is not made by us. 
The applications listed here are purely as examples to show what we recommend you to do and what not to do.

## Design policies
1. Keep UI simple and intuitive, if there are a lot of options try hiding them in some way such as a ribbon menu
1. Keep frequently accessed areas clear and easy to access and try to hide non-important or less frequently accessed areas
1. Prefer to automate user action as much as possible
1. Reduce the number of steps to perform a task
1. Reduce the amount of information on the screen
1. Keep text short
1. Try to prevent user mistakes
1. Allow undo and redo for destructive actions
1. Don't be annoying with interruptions, distractions and notifications
1. Use generally accepted shortcuts
1. Use system adapter libraries for global shortcuts and other similar features
1. When writing text try to be as to the point as possible. Text should be quick to understand and read
1. When developing an application think of its usage. Some applications may require usage of certain terminology
1. When marking up text, try to stick to proven conventions, bold for important information, etc.
1. Try to not hardcode text as this might not be helpful to users with different visibility problems

### UI elements
Most of those only apply for custom applications. The default settings of the 
[UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) represent the generally accepted standard.

1. Avoid overly-large buttons
1. Keep text in normal readable size, not too small but not too big. Strive to make text a little bit larger than a standard book
1. Make UI elements keyboard navigable
1. When an action requires multiple steps in something like a modal window, use `...` at the end of the label name to guide the
user

### Layout
1. We generally don't restrict minimal sizes for most applications, though if your application is not specialised use 800x600
1. Large window sizes present the following issues:
   1. Items are too far apart
   1. Text becomes too long - Can be fixed by setting a maximum width of the given text container
