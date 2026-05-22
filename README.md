Primeiros passos:
Após criar um novo projeto, criei os arquivos e pastas a serem utilizadas. 
Dentro de src crirei a pasta components, contexts, pages e routes, dentro delas  por enquanto coloquei herader, favoritos, home e login. 
As tres paginas entro de page inicialmente apenas criei a parte do link de redirecionamento, nada de conteúdo. 
No app.jsx configurei o BROWSERRROUTER, apos a intalação também feita inicialmente, apoós a instalação do react em java.
Agora criei o herader com os links, não utilizei o <a> pois não possui necessidade de recarregar a pagina inteira toda vez, isso não funciona com o SPA que estamos usando. Adicionei ele no app.jsx. 
Criei o theme context, que é a parte html da tela, onde inserir a função dos botões de acesso as páginas e o modo claro ou escuro a ser escolhido, assim reorganizei as rotas e o app para que fique tudo alinhado. Aqui utilizei o usereffect para ele modificar o tema ao ser acionado.

Passo 2:
Após a criação do theme context, o hearde precisou ser modificado para eu por o contexto nele, usei o userContext para pegar esses dados do contexto, sem props.
Depopis envolvi o app com o provider, assim além do pai qualquer filho tem acesso a esses dados envolvidos na aplicação.

Passo 3:
Agora comecei a mexer com a parte o login, no context criei o authcontext para pedir as informações do usuário a ser logado, como não tenho banco de dados ele entra após qualquer digitação no campo de nome. O authcontext ele resolve que toda a aplicação tenha uma única autenticação, ou seja, o mesmo login para todas as páginas que o usuário logado queira entrar. O useEffect é muito utilizado aqui pois ele evita que o usuário se deslogue após a atualização da página, ele salva o usuário no navegador.
O provider ele compartilha os dados, aqui no ath qualquer componente consegue acessar algumas coisas como login, usuario e logout. 
O header agora ele nevega entre páginas, troca de tema, mostra usuário logado e tem o botão de logout.
Criei a rota protegida, que verifica se tem usuário logado para ser feita a rotatividade dele na rota sugerida - login - home...

