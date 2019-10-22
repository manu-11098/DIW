# Sección 02. Ejemplo 03: Ejemplo de anidación de propiedades

La anidación de las propiedades permite un código más claro.

## Sintanxis CSS (normal)

``` scss
.box {
    padding: 10px;
    background-color: #E6EBE0;
    border-radius: 5px;
    margin-bottom: 20px;
}

.box .head {
    border-bottom: 1px solid #9BC1BC;
    padding-bottom: 10px;
}

.box .head h3 {
    margin: 0;
    color: #5CA4A9;
}

.box .cont {
    padding-top: 10px;
}
*/
```

## Sintaxis con SASS

``` scss
.box {
    padding: 10px;
    background-color: #E6EBE0;
    border-radius: 5px;
    margin-bottom: 20px;
    .head {
        border-bottom: 1px solid #9BC1BC;
        padding-bottom: 10px;
        h3 {
            margin: 0;
            color: #5CA4A9;
        }
    }
    .cont {
        padding-top: 10px;
    }
}
```
