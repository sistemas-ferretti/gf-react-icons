# Levantar Contenedor

Ejecutar el siguiento comando en la raiz del proyecto (gf-react-icons)

- docker-compose -f docker-compose-dev.yml up -d

Este comando levantara el contenedor del proyecto, podemos ver lo que esta se esta ejecutando para levantar el contenedor con el comando

- docker logs -f --tail 100 id_del_contenedor

una vez levantado podremos ver el proyecto en el puerto 5173. (localhost:5173)

## Subir cambios
1. Hacer build en la raiz del proyecto
2. Hacer build dentro de la carpeta example
3. hacer npm publish en la raiz del proyecto (para actualizar la libreria en npm)
