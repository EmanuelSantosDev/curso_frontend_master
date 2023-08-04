# Gerenciamento de Alterações


````bash
git status
git add [nome_do_arquivo]
git add .
git commit -m "mensagem"
git commit -am "mensagem"
git diff
````


## Desfazendo Alterações
````bash
# desfaz as alterações no arquivo, restaurando para a versão mais recente confirmada no repositório
git checkout [nome_do_arquivo]

# retira o arquivo do staged
git restore --staged [file]

# de comitado para staged
git reset --soft [hash_commit_anterior]

# de comitado para modificado
git reset --mixed [hash_commit_anterior]

# de comitado para exclusão total das modificações
git reset --hard [hash_commit_anterior]
````

