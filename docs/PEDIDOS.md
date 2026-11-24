dia 2: 
o nosso projeto é o backend em Node.js com Express. Inclua as dependências essenciais: express, cors e dotenv(necessario para ler variáveis de ambiente no deploy).


package.json: inclua o script "start": "node server.js", fundamental para a publicação na nuvem.


.gitignore: você deve ignorar as pastas node_modules/ e o arquivo .env(para evitar o vazamento de segredos, o que descontaria pontos da rubrica)


arquivo principal(server.js): crie a aplicação Express configurada com os middlewares cors e  express.json().


.env.example: me de um arquivo de exemplo com a variável PORT


A porta da aplicação deve escutar process.env.PORT || 3000, garantindo compatibilidade com plataformas de deploy como o render