# Sección 02. Ejemplo 02: Ejemplo de Sass tratamiento de ficheros

## Ficheros sourcemap
Estos ficheros enlazan en el depurador el css con el fichero .scss origen
El compilador genera ficheros sourcemap (.map) por defecto, es posible evitarlo mediante otras opciones

## @import
La directiva @import permite realizar una referencia a un archivo externo, es como añadir una nueva etiqueta <link> a un archivo html.
Admite diferentes formatos:
- @import '/archivo.css';
- @import url() screen and (min-width: 860px);
- @import '_variables.scss' (realiza un copy y paste del archivo en el lugar donde hicimos el import). Adicionalmente las variables, mixins, funciones, etc. Importados quedarán disponibles a continuación y el @imports posteriores

Utilizando el _ le indicamos a Sass que no compile esos archivos,ya que serán importados en el archivo principal/es que si serán procesados.

Podemos realizar los imports de esta manera:
```
@import '_variables.scss';
@import '_layout.scss';
```

La división en varios ficheros, permite tener el código divido en partes más fáciles de mantener.