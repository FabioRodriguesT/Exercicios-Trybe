# 1. Acesse a branch main e crie uma branch nova chamada atualiza-readme.

git checkout main

git branch atualiza-readme

# 2. Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt.

git checkout atualiza-readme
touch infos.txt

# 3. Adicione as alterações em staging e realize um commit.
git add .
git commit -m "Criando o infos.txt"

# 4. Adicione seu nome e sobrenome ao arquivo infos.txt.

cat >> infos.txt

Fabio Rodrigues Teles

ctrl + D

# 5. Adicione novamente as alterações em staging e realize um commit.

git add .
git commit -m "Adicionando meu nome ao infos.txt"

# 6. Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos.

git branch adiciona-infos

# 7. Acesse a branch adiciona-infos e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no README.md. Por exemplo: 

git checkout adiciona-infos

cat >> README.md

"O primeiro passo é ter uma pasta versionada e criar um estrutura inicial, e fazemos isso utilizando o comando git init. 
O segundo passo é criar uma branch nova com o comando git branch nome-da-branch ou git checkout -b nome-da-branch…” Você pode, também, utilizar esse momento para registrar, em forma de perguntas e respostas, as dúvidas que ainda tiver sobre versionamento."

ctrl + D

# 8. Adicione as alterações em staging e realize o commit.

git add .
git commit -m "Criacao e descrição do versionamento no arquivo readme.md"

# 9. Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos.

git checkout atualiza-readme
git merge adiciona-infos

# 10. Retorne para a branch main e realize o merge das alterações.

git checkout main
git merge atualiza-readme