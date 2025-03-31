## Trabalho Prático Engenharia de Software (DCC Hub)

## Membros e Papéis
- Ana Luisa Messias Ferreira Mendes: UX/UI designer, Dev Front-end
- Gabriel Coelho Dos Santos: Dev Back-end
- Matheus Batista Pederzini de Oliveira: Dev Back-end, Scrum Master
- Nathally Fernandes de Brito Oliveira: Dev Back-end


## Escopo
O sistema DCC Hub é uma plataforma web que visa facilitar a localização de informações das disciplinas ofertadas pelo DCC, do respectivo semestre, em uma única página, eliminando a necessidade de buscar complementos de uma informação em sites diferentes. 
Como por exemplo, uma lista única que possui: disciplina, turma, horário, professor e a sala em que a aula será ministrada.


## Figma
>>> [Link para o Figma] ()


## Principais Features
**Como administrador eu quero:**
  1. Cadastrar, editar e deletar meu perfil na plataforma
  2. Cadastrar, editar ou remover uma disciplina e suas informações
  3. Editar banner do site para informar a qual semestre as informações pertencem
  4. Integrar o banco de dados das salas com horário do sistema para mostrar se uma sala está disponível ou não em determinado horário
  5. Fazer integração com o SIGA para atualizar e mostrar em tempo real a quantidade de vagas em determinada turma
  6. Adicionar na informação da disciplina um documento PDF com a ementa 


**Como usuário eu quero:**
  1. Visualizar e filtrar a lista de disciplinas ofertadas, bem como as turmas, horários, professor e sala de aula
  2. Pesquisar por uma disciplina específica
  3. Acessar uma página com informações sobre como chegar à sala da disciplina
  4. Cadastrar, editar e deletar meu perfil na plataforma
  5. Cadastrar meu horário do semestre no site para visualizar diretamente em um quadro as informações das minhas disciplinas matriculadas
  6. Exportar a ementa da disciplina
  
## Tecnologias
### Linguagens de Programação (LP):
- React para o frontend
- Python e Django para o backend

### Banco de Dados (BD):
- PostgreSQL para o gerenciamento do banco de dados

### Outras tecnologias:
- Figma para design e prototipagem
- GitHub para controle de versão, colaboração no código e elaboração do Kanban Board




### Sprint backlog
>>> Kanban board encontra-se na seção "Projetos" deste repositório.

1. Cadastrar, editar e deletar perfil de administrador na plataforma
   - Tarefas e responsáveis:
     Criar protótipo e implementar tela de login [Ana]
     
     Instalar e configurar banco de dados e definir modelo das primeiras tabelas [ Gabriel]
     
     Instalar e configurar Django [Gabriel]
     
     Criar modelo de usuário administrador no banco de dados [Matheus]
     
     Criar autenticação e autorização para administradores ( Django Auth) [Matheus]
     
     Implementar endpoints para CRUD do perfil do administrador [Náthally]
     
     Criar middleware para restringir acesso a funcionalidades admnistrativas

2. Administrador pode Cadastrar, editar ou remover uma disciplina e suas informações
   - Tarefas e responsáveis:
     Criar protótipo e implementar tela de cadastro e edição de disciplinas [Ana]
     
     Criar modelos de disciplinas no banco de dados [Náthally]
     
     Implementar endpoints para CRUD de disciplinas [Náthally]
     
     Criar validações para garantir que os dados das disciplinas estão corretos [Matheus]
     
     Implementar relacionamento entre disciplina e professor [ Gabriel]

3. Cadastrar, editar e deletar perfil de usuário na plataforma
   - Tarefas e responsáveis:
     Criar protótipo e implementar tela de CRUD de usuário [Ana]
     
     Criar modelo de usuário comum no banco de dados [Gabriel]
     
     Implmentar autenticação e autorização para usuários comuns [Matheus]
     
     Criar endpoints para CRUD do perfil do usuário [Náthally]
 
4. Visualizar e filtrar a lista de disciplinas ofertadas, bem como as turmas, horários, professor e sala de aula
   - Tarefas e responsáveis:
     Criar protótipo e implementar tela principal das disciplinas [Ana]
     
     Vincular usuário a disciplina [ Gabriel]
     
     Criar endpoint para listar todas as disciplinas [Náthally]
     
     Implementar filtros para busca por disciplina, professor e horário [Náthally]
     
     Criar relacionamento entre usuário e disciplinas matriculadas [Matheus]
     
  
