# 1- Crie uma pasta em seu computador;

mkdir nova-pasta

# 2- Acesse a pasta que você acabou de criar;

cd nova-pasta

# 3- Inicie o versionamento por meio do comando git init;

git init

# 4- Abra a pasta no VS Code por meio do comando code .;

code .

# 5- Crie um arquivo chamado README.md;

touch README.md

# 6- Adicione o arquivo novo em staging e realize um commit, como em git add . e git commit -m "Descreva a alteração realizada";

git add .
or
git add README.md

git commit -m "Criacao do readme"

# 7- Crie uma nova branch por meio do comando git checkout -b, como em git checkout -b adiciona-readme;

git checkout -b nova-branch

# 8- Faça uma alteração em README.md e, depois, realize um novo commit, como em git add . e git commit -m "Alterando o README";

cat >> README.md

### Alteração no arquivo readme.
## Primeira linha.
# Segunda linha.
Terceira linha.
Quarta linha.
Quinta linha.

ctrl + D

git add .

git commit -m "Alterando o README"

# 9- Retorne para a branch main e, em seguida, realize o merge das alterações por meio do comando git merge nome-da-branch, como em git merge adiciona-readme.

git checkout main

git merge nova-branch

# 10- Como você já criou a pasta e “mergeou” as alterações, vamos avançar e criar novas branches. Faça os exercícios a seguir.

