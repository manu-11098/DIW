# Deleting white-space on images display

En el ejemplo se puede ver que las imagenes debido a su naturaleza inline guardan un pequeño espacio en la parte inferior, creando así una separación entre la misma imagen y el div contenedor. Esto se debe a que al estar en línea con otros elementos reserva un espacio para carácteres como la p,q...

Este mixin lo que hace es establecer el **font-size** del elemento padre a 0 y restablecerlo en el elemento hijo.

```scss
    font-size: 0;

    & ~ div { // Restablece el font-size a todos los div que sean contenidos por del elemento padre
        font-size: 1rem;
    }
```
