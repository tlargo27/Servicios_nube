# Demostrar el uso de devops

[![CircleCI Status](https://circleci.com/gh/edisoncast/ucp-devops.svg?style=svg)](https://circleci.com/gh/edisoncast/ucp-devops)

Pruebas de terraform utilizando node, docker y usando pruebas.

Para correr con docker debemos realizar:

docker build -t ucp/devops .

docker run ucp/devops npm test
