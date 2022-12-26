# UntitledDesktopEnvironment themes official specification extension: imspinner
## Authors
1. [Stanislav Vasilev(Madman10K)](https://github.com/Madman10K)

## Brief summary
The goal of this standard extension is to provide the theming framework with a standardised interface for theming applications using the widely used
[imspinner](https://github.com/dalerank/imspinner) library

## Format
### Global
The following variables and colours can be set as globals for all spinners

Colours:
```yaml
imspinner-colour: [ 0, 0, 0, 0 ]
imspinner-colour-bg: [ 0, 0, 0, 0 ]
imspinner-colour-alt: [ 0, 0, 0, 0 ]
```
Variables:
```yaml
imspinner-radius: 1.0
imspinner-speed: 1.0
imspinner-thickness: 1.0
imspinner-angle: 1.0
imspinner-angle-min: 1.0
imspinner-angle-max: 1.0
imspinner-min-thickness: 1.0
imspinner-delta: 1.0
imspinner-dots: 1
imspinner-middle-dots: 1
imspinner-reverse: false
```

### Local
Additionally you may use the same variables but under a type of spinner. These are the current contexts you can use:
```yaml
imspinner-rainbow:
imspinner-angle:
imspinner-dots:
imspinner-ang:
imspinner-vdots:
imspinner-bounce-ball:
imspinner-eclipse:
imspinner-ingyang:
```
