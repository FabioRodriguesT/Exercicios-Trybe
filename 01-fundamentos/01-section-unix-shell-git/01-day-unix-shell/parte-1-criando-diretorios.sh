
# 1- Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

mkdir unix-tests
cd unix-tests

# 2- Crie um arquivo de texto com o nome trybe.txt.

touch trybe.txt

# 3- Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

cp trybe.txt trybe_backup.txt

# 4- Renomeie o arquivo trybe.txt.

mv trybe.txt trybe-renome.txt

# 5- Dentro de unix_tests, crie um novo diretório chamado backup.

mkdir backup

# 6- Mova o arquivo trybe_backup.txt para o diretório backup.

mv trybe_backup.txt backup/trybe_backup.txt

# 7- Dentro de unix_tests, crie um novo diretório chamado backup2.

mkdir backup2

# 8- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

mv backup/trybe.backup.txt backup2/trybe.backup.txt

# 9- Apague a pasta backup.
# backup está vazio, se não estive o comando é rm -rf.

rm backup

# 10- Renomeie a pasta backup2 para backup.

mv backup2 backup

# 11- Veja qual é o path completo do diretório atual e liste todos os arquivos dentro dele.

pwd #diretório atual
ls #listar os arquivos

# 12- Apague o diretório backup.
# backup está com o arquivo trybe.backup.txt por isso o rf.
rm -rf backup

# 13- Limpe o terminal.

ctrl + L ou digitar clear no terminal

# Dica - Para os próximos exercícios, crie manualmente na parte gráfica do seu sistema operacional (com o mouse) um arquivo de texto chamado skills.txt com o conteúdo abaixo.

# Copiar
# Internet
# Unix
# Bash
# HTML
# CSS
# JavaScript
# React
# SQL

cat >> skills.txt

Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

ctrl + D

# 14- Mostre na tela as 5 primeiras skills do arquivo skills.txt.

head -5 skills.txt

# 15- Mostre na tela as 4 últimas skills do arquivo skills.txt.

tail -4 skills.txt

# 16- Apague todos os arquivos que terminam em .txt.

rm *.txt