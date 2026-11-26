dia 2: 

BIBLIOTECA-SERVIDOR
o nosso projeto é o backend em Node.js com Express. Inclua as dependências essenciais: express, cors e dotenv(necessario para ler variáveis de ambiente no deploy).


package.json: inclua o script "start": "node server.js", fundamental para a publicação na nuvem.


.gitignore: você deve ignorar as pastas node_modules/ e o arquivo .env(para evitar o vazamento de segredos, o que descontaria pontos da rubrica)


arquivo principal(server.js): crie a aplicação Express configurada com os middlewares cors e  express.json().


.env.example: me de um arquivo de exemplo com a variável PORT


A porta da aplicação deve escutar process.env.PORT || 3000, garantindo compatibilidade com plataformas de deploy como o render

BIBLIOTECA-SITE
arquivos a serem criados:
crie o arquivo index.html com arquivos de apoio como style.css para estilos e script.js para lógica do front end


navegação e estrutura do index.html:
inclua o titulo da biblioteca ( Biblioteca da Associação de Moradores do Jardim das Acácias ) no cabeçalho, crie uma barra de navegaçãou ou menu contendo os links para as paginas mapeadas no plano ( livro.html, lista_livro.html, emprestimo.html e lista_emprestimo.html)


vínculos: a tag  tem que conectar o arquivo CSS no  e a tag  carregue o arquivo JavaScript ao final do 


etapa 3:
ontexto: o projeto backend já possui servidor Express, MongoDB configurado


tarefa: agora deve ser constrúido o modelo de coleção de livros e rotas CRUD para cadastrar, listar, buscar por ID, editar e excluir ( get / livros, post / livros, delete / livros/:id, put / livros/:id, get / livros/:id)


restrições: entidade livros: titulo(obrigatorio, string), autor(obrigatorio, string)
os campos obrigatorios devem ser validados no backend e retornar status http 400 se estiverem ausentes
nao criar pacotes, arquivos ou pastas não solicitados


pronto quando: Resposta 201 ao criar um livro com sucesso
.
Resposta 200 ao listar, buscar por ID ou editar
.
Resposta 400 com mensagem de erro clara ao tentar cadastrar ou editar sem um campo obrigatório
.
Resposta 404 ("não encontrado") quando um ID inexistente ou inválido for buscado, editado ou excluído, sem derrubar a aplicação