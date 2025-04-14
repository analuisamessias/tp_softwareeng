# Como executar o back-end do projeto

Versão do Python: 3.13.3  
Versão do PostgreSQL: 17.4

## 1. (Opcional) Crie e ative o seu venv

É recomendado utilizar um virtual environment (venv) ao executar projetos Python.
Você pode ver mais sobre isso [neste link](https://docs.python.org/3/tutorial/venv.html). Caso decida uilizar um ambiente virtual, ative-o antes de prosseguir com os passos seguintes.

## 2. Instale os pacotes necessários

Instale os pacotes necessários com o comando `pip install -r requirements.txt`.

## 3. Instale o PostgreSQL

O PostgreSQL 17.4 é o banco de dados utilizado no projeto. Você pode instalar a
versão 17.4 no [site do PostgreSQL](https://www.postgresql.org/download/).

## 4. Crie o banco de dados no PostgreSQL

No Postgres, crie um banco de dados para ser utilizado na aplicação. O exemplo de código abaixo cria um banco de dados com o nome "dcchub" utilizando o código abaixo:

```postgres
CREATE DATABASE dcchub
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

## 5. Preencha o arquivo de configuração

Quando o PostgreSQL estiver instalado e o banco de dados estiver criado, renomeie o arquivo `.pgconf.example.json` para `.pgconf.json` e preencha os arquivos com as suas configurações do PostgreSQL:

NAME = o nome do banco de dados criado. No caso do exemplo acima, "dcchub".  
USER = o seu usuário do PostgreSQL (por padrão, se chama postgres).
PASSWORD = a senha do usuário acima.

> **ATENÇÃO:** Não commite este arquivo renomeado - esses dados são  sensíveis.

## 6. Execute as migrações do banco de dados

Execute os comandos abaixo para que o Django crie as tabelas correspondentes aos modelos no banco de dados:

```bash
python manage.py makemigrations
python manage.py migrate
```

Ao fim dessa execução, as tabelas devem ter sido criadas no banco de dados.

## 7. Execute a aplicação

Para iniciar o projeto, basta executar o comando `python manage.py runserver` e o servidor executará a aplicação.
