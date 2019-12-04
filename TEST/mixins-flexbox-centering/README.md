# Centering elements with flexbox

You only need paste this code on the father element or import the _mixins file and call the mixin inside the father.

```scss
@import "_mixins.scss";
body{
    //@include centerX;
    @include centerXY;
    //@include centerY;
}
```

## Horizontal centering

```scss
    display: flex;
    justify-content: center;
    align-items: center;
```

## Vertical centering

```scss
    height: 100vh;
    display: flex;
    align-items: center;
```

## Both

```scss
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
```
