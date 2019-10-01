# SECTION 01: EJEMPLO 02. EJEMPLO BOX-SIZING CON 4 CAJAS
Ejemplo de cuatro cajas al 25%, con borde, que no caben dentro de la línea horizontal de la página y su solución.

## HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejemplo 02</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="box"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui eveniet porro, saepe magnam illo sunt ex quibusdam voluptas quidem. </div>
    <div class="box"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui eveniet porro, saepe magnam illo sunt ex quibusdam voluptas quidem. </div>
    <div class="box"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui eveniet porro, saepe magnam illo sunt ex quibusdam voluptas quidem. </div>
    <div class="box"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui eveniet porro, saepe magnam illo sunt ex quibusdam voluptas quidem. </div>
</body>
</html>
```

## CSS (CONTENT-BOX)
```
.box {
    width: 25%;
    height: 20rem;
    background-color: salmon;
    color: white;
    float: left;
    padding: 2rem;
    border: 1px solid black;
}
```

## CSS (SOLUCIÓN)
```
*, *::before, *::after, *:before, *:after {
    box-sizing: border-box;
}
```
Hacemos un reset a todos los elementos y pseudo elementos para que tenga el box-sizing correcto.
```
.box {
    width: 25%;
    height: 20rem;
    background-color: salmon;
    color: white;
    float: left;
    padding: 2rem;
    border: 1px solid black;
}
```
Ahora las 4 cajas entran en la horizontal de la página

## CSS (FINAL)
```
*, *::before, *::after, *:before, *:after {
    box-sizing: border-box;
}
.box {
    width: 25%;
    height: 20rem;
    background-color: salmon;
    color: white;
    float: left;
    padding: 2rem;
    border: 1px solid black;
}
```