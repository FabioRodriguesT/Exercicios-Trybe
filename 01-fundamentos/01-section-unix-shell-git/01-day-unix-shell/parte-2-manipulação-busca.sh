## Parte II - Manipulação e busca

#Dica 👀: Crie um novo diretório chamado unix_tests_search e navegue até ele.

mkdir unix_test_search
cd unix_test_search

# 1- Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl. Conheça mais sobre esse comando nesse link.

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"


# 2- Mostre todo o conteúdo do arquivo countries.txt na tela.

cat countries.txt

# 3- Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

less countries.txt
q # para sair da paginação

# 4- Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

less countries.txt
/Zambia
q # para sair da paginação.

# 5- Busque por Brazil no countries.txt.

grep Brazil countries.txt


# 6- Busque novamente por brazil, mas agora utilize o lower case e não considere letras maiúsculas ou minúsculas.

grep -i brazil countries.txt

# Dica 👀: Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não é necessário criar o arquivo pelo terminal.

cat >> phrases.txt

Criando um novo arquivo.
Algumas frases aleatorias-1.
Algumas frases aleatorias-2.
Algumas frases aleatorias-3.

ctrl+D

# 7- Busque pelas frases que não contenham a palavra fox.

grep -v fox phrases.txt

# 8- Conte o número de palavras do arquivo phrases.txt.

wc -w phrases.txt

# 9- Conte o número de linhas do arquivo phrases.txt.

wc -l phrases.txt

# Dica 👀: Para contar o número de caracteres de um arquivo, não use wc -c, e sim wc -m.

wc -m phrases.txt

# 10- Crie os arquivos empty.tbt e empty.pdf.

touch empty.tbt empty.pdf

# 11- Liste todos os arquivos do diretório unix_tests_search.

ls #já estou dentro desse diretório.
ls unix_tests_search # se eu não estiver

# 12- Liste todos os arquivos que terminem com txt.

ls *txt

# 13- Liste todos os arquivos que terminem com tbt ou txt.

ls *t?t

# 14- Acesse o manual do comando ls.

man ls