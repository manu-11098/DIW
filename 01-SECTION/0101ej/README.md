# SECTION 01: EJEMPLO 01. Ejemplo sin border box
Ejemplo en el que se ven los cambios producidos al cambiar el box-sizing de content-box a border-box.
## box-sizing: content-box
```
div {
    width: 20rem;
    height: 20rem;
    background-color: salmon;
    padding: 5rem;
    border: 20px solid blue;
}
```
El tamaño del div aumenta a medida que le vas añadiendo paddin y border.

## box-sizing: border-box
```
div {
    box-sizing: border-box;
    width: 20rem;
    height: 20rem;
    background-color: salmon;
    padding: 5rem;
    border: 20px solid blue;
}
```
El tamaño del div se mantiene en los 20rem y el padding y el border se "recortan hacia dentro".

## HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Section 01: Ejemplo 01</title>
    <link rel="stylesheet" href="index.css">

</head>
<body>
    <div> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quasi quia, fuga rem assumenda dolor harum asperiores exercitationem expedita repudiandae! </div>
</body>
</html>
```