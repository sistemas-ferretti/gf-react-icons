# Levantar Contenedor

Ejecutar el siguiento comando en la raiz del proyecto (gf-react-icons)

- docker-compose -f docker-compose-dev.yml up -d

Este comando levantara el contenedor del proyecto, podemos ver lo que esta se esta ejecutando para levantar el contenedor con el comando

- docker logs -f --tail 100 id_del_contenedor

una vez levantado podremos ver el proyecto en el puerto 5173. (localhost:5173)
