# Demostrar el uso de devops

[![CircleCI Status](https://circleci.com/gh/edisoncast/Servicios_nube.svg?style=svg)](https://circleci.com/gh/edisoncast/Servicios_nube)

Pruebas de terraform utilizando node, docker y usando pruebas.

Para correr con docker debemos realizar:

docker build -t cloud/devops .

docker run cloud/devops npm test
