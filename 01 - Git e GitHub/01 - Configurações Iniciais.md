# Configurações Iniciais
````bash
git config --global user.name "nome_do_usuario"
git config --global user.email "email_do_usuario"
git config --global core.editor "code --wait"
````

## Conectar-se ao GitHub com Chave SSH
https://docs.github.com/pt/authentication/connecting-to-github-with-ssh


## Inicialização de Repositório
````bash
git init
ls -la
````

## Criação do Repositório no GitHub
Seguir instruções da plataforma.


## Visualização e Configuração do Repositório Remoto
``````bash
git remote
git remote -v
git remote set-url origin [url_repositório]
``````

## Consultando as Configurações
````bash
git config user.name
git config user.email
git config --list
````