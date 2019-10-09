# Ejemplo menú con propiedad :hover

En el ejemplo se muestra un menú en el que queremos que se subrayen las opciones al situarse encima con el puntero mediante **:hover**.

Al poner solo la propiedad **hover** el div inferior se desplaza hacia abajo.

Para solucionarlo ponemos un margen "invisible" y en la propiedad **hover** lo coloreas de naranja y se hace visible, evitando el desplazamiento del div.

```sass
a {
                padding: 1em;
                display: inline-block;
                border-bottom: $borde transparent; // El borde siempre está pero no se ve
                &:hover{
                    border-bottom: $borde orange; // El borde se colorea de naranja
                }
            }
```
