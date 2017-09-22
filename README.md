![empty-state](https://raw.githubusercontent.com/wildhaber/empty-state/master/assets/readme_lead.png?token=AEfJht6Rpf7j8v2IQDcI4jNcAlxHD47Fks5Zzm0qwA%3D%3D)

[empty-state](https://www.npmjs.com/package/empty-state) is a mix of Sass mixins and function to simplify the process drawing empty state skeleton backgrounds. These states are often used to provide an indication how the content that is loading is looking and it will be replaced when content is loaded.

A detailed introduction you can find here:
- [Draw Skeleton Backgrounds with Sass](https://medium.com/@hello.raphael/draw-skeleton-backgrounds-with-sass-2c1b1017d2d0) @ Medium.com


# Installation

```bash
npm install empty-state
```

---

# Usage

## Import

```scss
@import '~empty-state/skeleton';
```

## Drawing

### lines (function)
```scss
lines(
    $count: 3,
    $color: #fcfcfc,
    $width: 100%,
    $height: 10px,
    $gutter: 10px,
    $x: 0,
    $y: 0,
    $lastWidth: 100%,
    $outline: false,
    $outline-width: 1px,
    $outline-fill: #ffffff
)

// @returns: [<shape>,<shape>,...]
```

### circle (function)
```scss
circle(
    $color,
    $diameter,
    $x,
    $y
)

// @returns: <shape>
```

### circle-outline (function)
```scss
circle-outline(
    $color,
    $diameter,
    $x,
    $y,
    $outline: 1px,
    $fill : #ffffff
)

// @returns: [<shape>,<shape>]
```

### rect (function)
```scss
rect(
    $color,
    $width,
    $height,
    $x,
    $y
)

// @returns: <shape>
```

### rect-outline (function)
```scss
rect-outline(
    $color,
    $width,
    $height,
    $x,
    $y,
    $outline: 1px,
    $fill: #ffffff
)

// @returns: [<shape>,<shape>]
```

### shape (function)
A shape is mostly just internally used to unify the format of the shapes like circles or rects
```scss
shape(
    $background,
    $background-size,
    $background-position
)

// @returns { bg, size, position }
```

## Collecting and rendering

### skeleton (mixin)
```scss
skeleton($shapes...)
```

Example:

![empty-state](https://raw.githubusercontent.com/wildhaber/empty-state/master/assets/s-text-example.png?token=AEfJhoS1pZ12zE_SQZtkHd_JT4MA3w8mks5Zzm1hwA%3D%3D)

```sass
.s-text-lines {
    $shapes: join(
        lines(2, #B8B8B8, 90%, 20px, 10px, center, 0px, 50%, true, 2px, white),
        lines(5, #D8D8D8, 100%, 14px, 7px, center, 80px, 90%)
    );

    @include skeleton($shapes...);
    height: 190px;
}
```

results in:

```css
.s-text-lines {
    background: linear-gradient(180deg, white, white),
        linear-gradient(180deg, #B8B8B8, #B8B8B8),
        linear-gradient(180deg, white, white),
        linear-gradient(180deg, #B8B8B8, #B8B8B8),
        linear-gradient(180deg, #D8D8D8, #D8D8D8),
        linear-gradient(180deg, #D8D8D8, #D8D8D8),
        linear-gradient(180deg, #D8D8D8, #D8D8D8),
        linear-gradient(180deg, #D8D8D8, #D8D8D8),
        linear-gradient(180deg, #D8D8D8, #D8D8D8);
    background-size: calc(90% - 4px) calc(20px - 4px),
        90% 20px,
        calc(50% - 4px) calc(20px - 4px),
        50% 20px,
        100% 14px,
        100% 14px,
        100% 14px,
        100% 14px,
        90% 14px;
    background-position:
        center calc(0px + 2px),
        center 0px,
        center calc(30px + 2px),
        center 30px,
        center 80px,
        center 101px,
        center 122px,
        center 143px,
        center 164px;
    background-repeat: no-repeat;
    height: 190px;
}
```
