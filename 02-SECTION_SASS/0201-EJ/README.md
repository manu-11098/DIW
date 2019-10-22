# Sección 02. Ejemplo 01. Introducción a Sass

## Ejemplo de declaración de variable

Se declara una variable y se establece el color

``` scss
$text: blue;
```

A continuación utiliza la variable en la propiedad color del body

``` scss
$text: blue;
body {
    color: $text;
}
```

## Compilación del .scss

Mediante **prepros** se autocompila el archivo ``scss`` cada vez que realizamos alguna modificación y se muestra en el live view.
