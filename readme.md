# Instrucciones a nivel de desarrollo
`npm init -yes`

`npm i express morgan dotenv mongoose`

`npm i sequelize`


`npm install cors --save`
# Entidades incluidas
- Televisores 
- Marcas 
- Modelos


# Instrucciones para desarrollar localmente
### Renombrar el archivo .env.example a .env

### Ejecución de test de postman (requiere npm install -g newman)
`newman run postman/postman.json` 


# Videos de interes:
- 1 to 1: https://www.youtube.com/watch?v=ocysQ07G4PQ

- 1 to n: https://www.youtube.com/watch?v=wgLo_0FL0yc


# Carga de datos
## Requiere:
`npm install -g sequelize-cli`

## Creación de archivo seed de televisores
`npx sequelize-cli seed:generate --name create-televisores` genera un archivo en la carpeta seeds del proyecto

## Cargar los datos de interes en el archivo seed generado

## Para "sembrar los datos en la base de datos", si no lo hizo antes se deberá:
`sequelize init`
> Pueder borrar las carpetas migrations y models (no las usaremos)

## Configurar el archivo config/config.jsos (utilizado por sequelize-cli)

## Ejecutar todos los seeds se deberá hacer de la siguiente manera:
`npx sequelize-cli db:seed:all`

## Ejecutar un seed en particular se deberá hacer de la siguiente manera:
`npx sequelize-cli db:seed:20210909030232-create-data`

## Para deshacer el ingreso de un determinado seed se deberá hacer de la siguiente manera:
`npx sequelize-cli db:seed:undo --seed:20210909030232-create-data`

## Para deshacer todos los seeds se deberá hacer de la siguiente manera:
`npx sequelize-cli db:seed:undo`



## Aseguramiento de la API 
`npm install helmet`
> Agrega en el header de respuesta en la key Content-Security-Policy el siguiente contenido: 
 default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;
 frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr > 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests 


