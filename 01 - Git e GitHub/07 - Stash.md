# Stash

Permite trabalhar em uma tarefa diferente sem levar as alterações não comitadas para a nova branch.
````bash
# guarda o estado atual sem commitar (esconder)
git stash save "<mensagem>"

# lista os estados salvos no stash
git stash list

# para retomar o trabalho na branch original
git stash apply <identificador-do-stash>

# apaga os estados salvos no stash
git stash clear
````