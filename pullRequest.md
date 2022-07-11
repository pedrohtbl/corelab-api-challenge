Durante o desenvolvimento do back-end eu utilizei o  express para contruir a api, além do banco de dados postregesql feito com typeorm, eu acabei fazendo algumas rotas a mais, pois achei que fazia mais sentido dessa forma e queria mostrar um pouco mais do que eu podia fazer, então fiz além das rotas de veiculos e das rotas de favoritos que eu decidi fazer, fiz tb alguma rotas de usuario, por falta de tempo (só tive o fim de semana pra fazer) não finalizei o crud do usuario, mas o de veiculos sim, além de uma rota de login.
Todas as rotas de veiculos precisam de autenticação, ou seja precisa estar logado.
Na pasta entities foram feitas as entidades para a criação de tabelas do banco, com todas as sua configurações e relações, além das rotas eu configurei também o container do docker , mas eu fiz o deploy da api no heroku para facilitar a utilização no front, então algumas configurações de conexão precisam ser alteradas para utilizar o docker novamente, eu queria ter feito os testes também, mas infelizmente faltou tempo mas farei assim que possivel, nem que seja pra praticar.

link do heroku para utilizar a api - https://api-vehicles-pedrohtbl.herokuapp.com

endpoints

usuarios:

POST /users  - criação de usuario
ex: 
{
  "name": "pedro henrique",
  "email": "pedro@email.com",
  "password": "pedro123"
}

GET /users  - listar usuarios

login:

POST /login  - login na aplicação - retorna um token e o id do user
ex:
{
  "email": "pedro@email.com",
  "password": "pedro123"
}

veiculos:

todas as rotas abaixo precisam do Bearer token dado no login parar autenticação 

POST /vehicles - criar veiculo
ex:
{
	"color": "branco",
  "description": "5 anos de uso",
  "model": "Novo Fiesta Turbo",
  "name": "fiesta",
  "plate": "aaaa-22223",
  "price": 50000,
  "year": 2016
}

GET /vehicles - listar todos os veiculos

GET /vehicles/:id - listar um veiculo

PATCH /vehicles/:id -  editar um veiculo - apenas o usuario que criou pode editar

DELETE /vehicles/:id - deletar um veiculo - apenas o usuario que criou pode deletar

rotas extras  

POST /vehicles/favorite/:id - favoritar um veiculo - sem body
DELETE /vehicles/favorite/:id - retirar o favorito

bibliotecas utilizadas 
-express
-typeorm
-bcrypt - criptografia das senhas
-jsonwebtoken - geração de token
-pg 
-dotenv
-class-transformer - retirar a senha da resposta da requisição]
-cors

