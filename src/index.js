const express = require('express') //receber o express
const path = require('path') //receber o módulo path para manipulação de caminhos de arquivo

//controllers
const ProductController = require('./controllers/ProductController') //receber o controlador
const HomeController = require('./controllers/HomeController')

//configurações do serviço
const app = express()
app.set('view engine', 'pug') //configurar o pug para ser o "motor de tela"
app.set('views', path.resolve(__dirname, 'views')) //caminho para buscar o arquivo pug
app.use(express.urlencoded()) //pegar as informações do formulário como body da requisição

//rotas
app.get('/', HomeController.home)
app.get('/products', ProductController.list) //lista os produtos quando o formulário for acessado
app.get('/products/form', ProductController.form) //carrega a tela do formulário
app.post('/products/create', ProductController.create) //quando submeter o formulário, criará um post
//para essa rota, possibilitando a criação de um novo produto

//executar o serviço
app.listen(3005, () => { //comando para rodar o app express
    console.log('Serviço executando em http://localhost:3005')
    console.log('Para parar o serviço aperte CTRL+C')
})

//Essa aplicação foi desenvolvida seguindo o padrão MVC (organiza a estrutura interna e separa claramente os dados (Model), 
//a apresentação (View) e a lógica de controle (Controller). Ela também pode ser interpretada como uma aplicação Cliente/Servidor
//(que se concentra na interação entre duas partes distintas (cliente e servidor) onde o cliente envia requisições e o servidor 
//responde - e que pode seguir o padrão MVC internamente).