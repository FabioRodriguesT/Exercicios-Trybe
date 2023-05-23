# 1- Crie a pasta unix_tests_skills e navegue até ela.

mkdir unix_test_skills
cd unix_test_skills

# 2- Crie um arquivo de texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, cada um em sua linha.

cat >> skills2.txt

Internet
Unix
Bash

ctrl + D

# 3- Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.

cat >> skills2.txt

JavaScript
Ruby
Phyton
HTML
CSS

ctrl + D

sort < skills2.txt

# 4- Conte o número de linhas do arquivo skills2.txt.

wc -l skills2.txt

# 5- Crie um arquivo chamado top_skills.txt usando o skills2.txt. Ele deve conter as 3 primeiras skills em ordem alfabética.

sort < skill2.txt | head -n 3 > top_skills.txt

# 6- Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

cat >> phrases2.txt

Frase a sua escolha 01.
Frase a sua escolha 02.
Frase a sua escolha 03.
Frase a sua escolha 04.
Frase a sua escolha 05.

ctrl + D

# 7- Conte o número de linhas que contêm as letras br.

grep br phrases2.txt

# 8- Conte o número de linhas que não contêm as letras br.

wc -l phrases2.txt

# 9- Adicione dois nomes de países ao final do arquivo phrases2.txt.

cat >> phrases2.txt

Brazil
Russia
Canada

ctrl + D

# 10- Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# 11- Ordene o arquivo bunch_of_things.txt-

sort bunch_of_things.txt