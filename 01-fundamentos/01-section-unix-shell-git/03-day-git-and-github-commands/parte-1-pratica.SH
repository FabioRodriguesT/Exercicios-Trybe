# 1- Anteriormente, você iniciou um repositório de exercícios e, dentro dele, uma pasta com uma lista de habilidades a serem aprendidas no curso da Trybe. O objetivo agora é realizar algumas modificações para treinar suas habilidades de Git e para entender completamente qual o fluxo de desenvolvimento utilizando um DVCS.

link repositório: https://github.com/FabioRodriguesT/trybe-exercicios

# 2- Após desenvolver a capacidade de gerenciar localmente seus códigos e de enviá-los para o GitHub, é hora de organizar seu portfólio de exercícios. Caso você ainda não tenha criado um, faça isso agora mesmo.

link poritolio: https://github.com/FabioRodriguesT/trybe-exercicios

# 3- Após criar o repositório, já com um README.md, e cloná-lo:

git clone git@github.com:FabioRodriguesT/trybe-exercicios.git

# 4- Crie uma nova branch;

git checkout -b nova-branch

# 5- Organize suas pastas de acordo com as instruções do Portfólio de Exercícios. Desse modo, você criará a estrutura de diretórios que serão usados ao longo de todo o curso para guardar seus exercícios.

 /trybe-exercicios
        └── fundamentos
        └── front-end
        └── back-end
        └── ciencia-da-computacao

# 6- O README.md que você criou é referente ao repositório trybe-exercicios. Com isso em mente, é interessante que você adicione informações relacionadas ao curso da Trybe ao que você está desenvolvendo e vai desenvolver;

link de exemplo de readme: https://github.com/FabioRodriguesT/trybe-exercicios/blob/main/README.md

# 7- Também é interessante adicionar um README.md dentro do diretório de exercícios do dia, para colocar a descrição dos exercícios que você realizou;

link de exemplo de readme: https://github.com/FabioRodriguesT/trybe-exercicios/blob/main/01-fundamentos/01-section-unix-shell-git/01-day-unix-shell/README.md


# 8- Lembre-se de fazer commits com frequência;

git add . #para adicionar todos os arquivos modificados na area de staging
git commit -m "Descricao do commit"

# 9- Depois de alguns commits, sempre faça um push;

git push

# 10-. Abra o pull request;

git pull

# 11-. Confira as alterações no GitHub;

link: https://github.com/FabioRodriguesT/trybe-exercicios

# 12-. Realize o merge no GitHub;

git merge nova-branch

# 13-. Dê um pull das alterações “mergeadas”.

git pull origin main #pega as alterações feitas na main e transfere para o branch que você está.