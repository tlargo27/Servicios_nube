const express =require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) =>  {
 return res.sendFile(__dirname + '/public/index.html');
});

app.get('/test', (req,res) =>  {
 console.log(req.ip);
 res.statusMessage = "Respuesta desde prueba";
 res.status(200).end();
});


app.get('/*', (req,res) => {
 return res.redirect('/');
})

module.exports = app;