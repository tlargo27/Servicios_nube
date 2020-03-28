# Demostrar el uso de devops

Programa para la UCP utilizando node, docker y usando pruebas.

Para correr con docker debemos realizar:

docker build -t ucp/devops .

docker run ucp/devops npm test
