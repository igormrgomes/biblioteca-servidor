1.

Quem vai usar o sistema:

As voluntárias da biblioteca comunitaria




Os problemas identificados:

o problema é que eles usam folhas para anotar em forma de caderno as retiradas e devoluções de livros mas pode ocorrer confusoes, como se alguem anotar na pagina errada, duas pessoas "pegarem" o mesmo livro porque a voluntaria anotou sem ver que já tinham pegado o livro que ela marcou, quando um livro demora a voltar ninguem percebe, somente se folhear o caderno todo, chega livros novos toda semana e a lista na folha fica desatualizada, quando precisa ligar pra um cliente que esta com o livro a muito tempo tem q caçar o numero no outro caderno, esse tipo de problemas de organização.




Como a cliente saberá que a solução funcionou:

vai saber no momento que receber uma solução em que ela consiga saber na hora quais livros a biblioteca tem, quantos estão emprestados e com quem, e qual deveria ter voltado. E também que qualquer voluntaria consiga registrar um empréstimo ou devolução sem depender da coordenadora voluntaria


2 . NECESSIDADES:
 as voluntarias precisam de acesso ao sistema que permitem elas a verificar qual livro está disponivel, voluntarias precisam de acesso ao sitema para ver se ja tem algum emprestimo com tal nome, voluntarias precisam de acesso ao sistema para identificar devoluções com atraso, voluntarias precisam de acesso ao sistema para atualizar o acervo e acessar o telefone do leitor



3 . SUPOSIÇÕES
acredito que tenha prazo de devolução de 14 dias, haverá multa por atraso.



4 . ENTIDADES:
o sistema precisará guardar o nome do livro, o nome do cliente e o livro deve possuir uma identificação junto com o cliente para não acontecer de registrar o emprestimo do mesmo livro ou pro mesmo cliente



CAMPOS: 
entidade livros: titulo(obrigatorio), autor(obrigatorio)
entidade emprestimo: cliente(obrigatorio) que fará ligação com o livro_id,  telefone(obrigatorio), data do emprestimo(obrigatorio), data de devolução prevista(obrigatorio) e data real da devolução(opcional) o formato das datas é AAAA-MM-DD,


5 . ESCOPO EM 3 COLUNAS

OBRIGATORIO:
o sistema precia ter cadastro de livros, registro de emprestimos, de devoluções e lista de livros com filtros, lista de emprestimo com filtros e lista de devoluções com filtros, opção de editar e excluir para livros e emprestimos, não permitir emprestar um livro que ja ta emprestado

DESEJAVEL
so o login eu imagino


FORA DO ESCOPO
lista de clientes, registro de voluntaria, lista de voluntaria


6 . 
TELAS
index.html com o link das paginas, emprestimo.html, livro.html, lista_livro.html, lista_emprestimo.html

ROTAS
get / livros, get / emprestimos, post / livros, post /emprestimos, delete / livros, delete / emprestimos, put / livros, put / emprestimos


7 . 
Regra de Negócio
o backend deve garantir que não seja possivel registrar um novo emprestimo para um livro que ja tenha um emprestimo em aberto, ou seja, sem data de devolução e deve retornar um status HTTP 400 com mensagem pro usuario



Validações de Campos Obrigatórios:
vai ter prevent default pra n deixar mandar e uma mensagem pedindo pra preencher oq falta de obrigatorio, o backend tem que garantir que caso algum campo obrigatorio chegue vazio, o servidor responda com mensagem de erro sem quebrar a aplicação


8.
Projeto
o sistema sera dividido em dois repositorios/projetos, o servidor(biblioteca-servidor) e o site (biblioteca-site). o front end sera elaborado no biblioteca-site e o backend no biblioteca-servidor.

Nome da branch
cadastro-livros(biblioteca-servidor), listar-livros(biblioteca-site), editar-livros(biblioteca-servidor), excluir-livros(biblioteca-servidor), cadastro-emprestimos(biblioteca-servidor), editar-emprestimos(biblioteca-servidor), excluir-emprestimos(biblioteca-servidor), filtrar-livros(biblioteca-site), filtrar-emprestimos(biblioteca-site)

Dia previsto
dia 2:  esqueleto-servidor(biblioteca-servidor) - criar estrutura do Express e preparar deploy
esqueleto-site(biblioteca-site) - criar HTML base e preparar deploy


dia 3: tarefas para subir o deploy público do servidor  e do site
crud-livros-backend(biblioteca-servidor) - Rotas de criar, listar, editar e excluir livros


dia 4 e 5: Tarefas do biblioteca-site para cadastrar, listar, editar , excluir e filtrar livros(Fechando 100% a entidade Livros)


dia 6 a 8: tarefas no biblioteca para emprestimos e a regra de negocio
tarefas no biblioteca-site para formulario, listagem com titulo do livro e filtro de emprestimos em aberto
login(biblioteca-servidor/biblioteca-site) - apenas no dia 8, se o minimo estiver pronto
dia 9: auditoria escrita por mim , documentos em dia, links finais enviados. Só correções
dia 10: demonstrar, explicar dois trechos, fazer uma pequena alteração ao vivo

