# Mesclagem


## Merge
- Cria um novo commit para mesclar as alterações da branch de trabalho com a branch principal
- Operação não destrutiva (mantem a ordem cronológica)
- Commit extra
- Histórico poluído (efeito diamante)
````bash
git merge [nome_da_branch]
````


## Rebase
- Aplica as mudanças "jogando" os commits para a branch principal
- Evita commits extras
- Histórico linear (linha reta)
- Perde a ordem cronológica
````bash
git rebase [nome_da_branch]
````