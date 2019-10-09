# Ejemplo de elementos inline

## Alto y ancho

En el ejemplo se utiliza un elementos inline (un link) dentro de una caja y se cambian sus dimensiones de alto y ancho

``` sass
a {
    ...
    width: 10em;
    height: 10em;
    ...
}
```

En los elementos en línea las propiedades de alto y ancho no tienen efecto.

## Pading y margin

En el ejemplo también se establece un padding desplazando los elementos de forma horizontal, pero no vertical.
El efecto parece que también los desplaza verticalmente, sin embargo, lo que ocurre es que se quedan en segundo plano, para mostrar mejor el efecto se establece la propiedad **background-color** con un nivel de transparencia.

``` sass
a {
    ...
    padding: 3em;
    background-color: rgba(255, 255, 255, 0.2);
    ...
}
```
