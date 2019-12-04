# Variables, tipos de datos y mapas

Sass entiende de 7 tipos de datos:

- CSS
  - String
  - Number
  - Colores
- Extendidos de Sass
  - Boolean
  - null
  - Listas
  - Maps

## Declaraciones y uso de variables

```scss
$font-size: 14px; // var-name = value

p{
    font-size:  $font-size; // propiedad: var
}

```

## Listas multidimensionales

```scss
$numeros: (3 "three") (4 "four");

@each $i in $numeros {
      /* CSS styles */
}
```

## Mapas

```scss
$numeros: (
    "3": "three",
    "4": "four"
)

each $number, $i in $numeros{
    /* CSS styles */
}
```
