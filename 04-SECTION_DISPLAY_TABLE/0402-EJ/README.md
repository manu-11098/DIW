# Ejemplos de menus con display: table

Se muestran tres formas diferentes de hacer menus con **display: table**.

## Primera forma

``` sass
ul {
        display: table;
        width: 100%;
        table-layout: fixed;

     li {
            display: table-cell;
            text-align: center;
            a {
                padding: 1em;
                display: block;
            }
        }
    }
```

## Segunda forma

``` sass
 ul {
        // border-collapse: separate; // Por defecto, me pinta los bordes colindantes de ambas celdas // Paso 1
        // border-collapse: collapse; // Con esta propiedad solo me pinta uno (los colapsa)
        border-spacing: .5em 1em; // Cuidado aquí la primera medida es izquierda y derecha y la última arriba y abajo
     }

    li {
        border: 2px solid white;
        border-radius: .5em; // Junto con border-spacing
    }
```

## Tercera forma

``` sass
background-color: transparent;
    color: salmon;
    li {
        border: 1px solid deepskyblue;
        width: 15rem; // Se utilizan medidas absolutas ya que el display: table no funciona con porcentajes. 1rem ~ 16px
    }

    ul {
        width: auto; // Calcula automáticamente el tamaño de la tabla sumando el tamaño de las celdas
        margin: 0 auto;
    }
```
