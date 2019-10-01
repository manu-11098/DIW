# SECTION 1: EJEMPLO 03. EJEMPLO BOX-SIZING VERSIÓN 2
Se distribuyen 4 cajas en la horizontal de la página con un width: 22%, por lo que queda disponible un 12% de espacio para distribuir entre cada caja.

## HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sección 01. Ejemplo 03</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="box">Laboris culpa eu dolore mollit ullamco occaecat ea amet aute. Dolor aliquip adipisicing cillum irure occaecat. Pariatur tempor voluptate officia excepteur veniam id culpa sint amet excepteur. Tempor officia nostrud eu enim exercitation. Aute duis labore minim qui ullamco sint incididunt laborum. Qui elit ex ullamco commodo cupidatat incididunt sit sit ipsum.</div>
    <div class="box">Sint Lorem ut minim duis dolore magna aliquip consectetur aliquip fugiat sit eiusmod. Cillum enim ex minim ut irure. Consectetur commodo eu consectetur voluptate mollit exercitation nostrud mollit eiusmod reprehenderit ullamco commodo. Ad veniam adipisicing ipsum occaecat duis occaecat duis consectetur fugiat sit in. Nisi ad laborum veniam amet velit exercitation dolor consequat quis consequat elit non minim.</div>
    <div class="box">Sint commodo eu culpa reprehenderit officia mollit tempor. Fugiat tempor irure reprehenderit labore pariatur sunt excepteur velit pariatur ad. Voluptate do culpa amet velit sunt et dolor nisi ad occaecat consectetur. Veniam nostrud adipisicing cillum aute laborum. Nisi adipisicing aute id in id elit velit sit voluptate veniam nostrud.</div>
    <div class="box">Excepteur minim in mollit deserunt consequat est velit nostrud duis esse magna veniam. Deserunt officia labore excepteur aliquip fugiat reprehenderit esse deserunt. Velit commodo officia in ex excepteur ipsum.</div>    
</body>
</html>
```
## css
### PROPIEDADES DEL BOX
```
.box {
    width: 22%;
    height: 20rem;
    background-color: salmon;
    color: white;
    float: left;
    padding: 2rem;
    border: 10px solid blue;
}
.box:not(:last-child) {
    margin-right: 4%; 
}
```
Donde :not(:last.child) afecta a todos los box menos al último.
Esta solución solo el válida abriendo el HTML directamente, ya que los entornos de desarrollo crean un script para usar el LIVE SERVER y este pasaría a ser el "last-child".

### CSS (COMPLETO)
```
*, *::before, *::after, *:before, *:after {
    box-sizing: border-box;
}
body {
    padding: 0;
    margin: 0;
}
.box {
    width: 22%;
    height: 20rem;
    background-color: salmon;
    color: white;
    float: left;
    padding: 2rem;
    border: 10px solid blue;
}
.box:not(:last-child) {
    margin-right: 4%; 
}
```