![enter image description here](https://www.brainvire.com/wp-content/uploads/Express.JS-%E2%80%93-An-Ideal-Node.JS-Framework-to-develop-Enterprise-Web-Applications.jpg)

## REST API - NODE.JS | EXPRESS

Neste artigo pretendo mostrar a simplicidade de se criar um servidor [nodejs](https://nodejs.org/en/) com [express](http://expressjs.com/). Pressupondo que você já tenha o [nodejs](https://nodejs.org/en/) e o npm instalado seguiremos para o código.

Para aqueles que não tem o nodejs instalado, basta acessar o link abaixo e baixar a versão LTS, mesma que será utilizada neste tutorial.

[https://nodejs.org/en/](https://nodejs.org/en/)

Após a instalação do nodejs, vamos começar criando nossa pasta aonde será armazenado os arquivos deste projeto.

Para isto abra o prompt de comando, navegue até o diretório e crie a pasta do projeto.

> cd Desktop
> mkdir crud-express
> cd crud-express

Pronto, agora vamos utilizar o npm para iniciar nosso projeto.

> npm init

Após isto será criado um arquivo chamado **package.json**, este arquivo é responsável por referência as dependências que vamos utilizar no projeto.

Agora vamos instalar o express como dependência do nosso projeto.

> npm install express

Depois de toda essa instalação finalmente vamos ao código. Dentro da pasta, **'crud-express'**, vamos criar um arquivo chamado index.js aonde vamos estanciar nosso servidor e fazer nossas rotas.

Vamos começar importando o express.

    const express = require('express');

Após importa o express, vamos agora criar a estrutura base do nosso servidor, no fim seu arquivo deve se parecer como este.

     const express = require('express');
     const app = express();
	 app.get('/', (req, res) => {
	    return res.send('Hello World');
    }
    app.listen(3333);

Com isto você já tem sua primeira rota criada a variável **app** recebe o valor de express e a partir dela podemos utilizar todos os métodos de uma REST API. ([app.[method]](http://expressjs.com/en/5x/api.html#app)).

  

No fim do arquivo dizemos que este servidor deve ouvir a porta **3333.** ([app.listen([port])](http://expressjs.com/en/5x/api.html#app)).

Pronto, agora se rodarmos o comando que inicializa o node, teremos um servidor que responde na porta 3333, podemos chamar no nosso navegador, '[http://localhost:3333](http://localhost:3333/)', e receberemos a mensagem, **'Hello World'**.

## :clap: Meus Parabêns! 
Se você chegou até aqui quer dizer que conseguiu criar sua primeira API, utilizando node.js

Agora vamos criar as rotas que representaram os métodos do CRUD.

* Create (POST).
* Reader (GET).
* Update (PUT).
* Delete (Delete).

Primeiro vamos criar um array com valores fakes para que possamos trabalhar as rotas.

    const users = ['Luis', 'Felipe', 'Maria', 'Joana'];

Agora no método get que criamos no exemplo anterior vamos fazer chamar está variável users no return do método.

    return res.json(users);
Se chamarmos a rota, 'http://localhost:3333/', no método **get** teremos o resultado abaixo.

> [   "Luis",   "Felipe",   "Maria",   "Joana" ]
