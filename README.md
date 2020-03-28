# Demostrar el uso de devops

[![CircleCI](https://circleci.com/gh/edisoncast/ucp-devops.svg?style=svg)](https://circleci.com/gh/edisoncast/ucp-devops)

Programa para la UCP utilizando node, docker y usando pruebas.

Para correr con docker debemos realizar:

docker build -t ucp/devops .

docker run ucp/devops npm test
