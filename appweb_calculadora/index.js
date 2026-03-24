// Carrega framwork express
const express =  require('express');

// cria um app usando a função exprexx
const app = express();

//define porta da aplicação
const PORT = 8080;

app.get('/', function(req, res){
    res.send('<h1>Olá, Mundo!</h1> <p>Estou na web...</p>');
});

app.get('/bem-vindo', function(req, res){
    res.send('<h1>Bem vindo ao desenvolvimento WEB!</h1>');
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
