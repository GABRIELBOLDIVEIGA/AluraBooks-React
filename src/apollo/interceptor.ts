// https://cursos.alura.com.br/course/react-combinando-context-api-apollo-client/task/121999

// Como o foco desse curso não é autenticação, acabamos por não implementar isso no Alura Books. Mas como é um tema bastante importante, reservei esse espacinho aqui pra dividir contigo algumas dicas e truques sobre como lidar com isso no nosso dia a dia. Bora dar uma olhada?

// Segue o fio:

// A autenticação é um processo importante em muitas aplicações, pois garante que apenas usuários autorizados tenham acesso a determinadas áreas ou funcionalidades.

// No Apollo Client, existem algumas formas de lidar com a autenticação, dependendo do tipo de autenticação que a sua aplicação está utilizando. Vou explicar cada uma delas a seguir:

// Autenticação com JWT (JSON Web Token): Se a sua aplicação está usando JWTs para autenticação, uma opção é armazenar o token em uma variável de estado ou em um cookie e adicioná-lo ao cabeçalho de autorização de cada requisição. Para isso, basta criar um interceptor com a função request do Apollo Client e adicionar o token no cabeçalho da requisição.
// Exemplo:

// const authLink = new ApolloLink((operation, forward) => {
//   // Obtém o token do estado ou do cookie
//   const token = getTokenFromStateOrCookie();
//   // Adiciona o token ao cabeçalho da requisição
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   });
//   // Executa a requisição
//   return forward(operation);
// });COPIAR CÓDIGO
// Autenticação com cookies: Se a sua aplicação está usando cookies para autenticação, uma opção é enviar os cookies junto com cada requisição. Para isso, basta criar um interceptor com a função request do Apollo Client e adicionar os cookies no cabeçalho da requisição. Exemplo:
// const authLink = new ApolloLink((operation, forward) => {
//   // Obtém os cookies da aplicação
//   const cookies = getAppCookies();
//   // Adiciona os cookies ao cabeçalho da requisição
//   operation.setContext({
//     headers: {
//       cookie: cookies
//     }
//   });
//   // Executa a requisição
//   return forward(operation);
// });COPIAR CÓDIGO
// Autenticação com outros métodos: Se a sua aplicação está usando outro método de autenticação, como autenticação por API key ou autenticação com sessão, basta seguir o mesmo processo de criar um interceptor com a função request do Apollo Client e adicionar o método de autenticação específico no cabeçalho da requisição.
// Exemplo:

// const authLink = new ApolloLink((operation, forward) => {
//   // Obtém a API key da aplicação
//   const apiKey = getApiKey();
//   // Adiciona a API key ao cabeçalho da requisição
//   operation.setContext({
//     headers: {
//       'x-api-key': apiKey
//     }
//   });
//   // Executa a requisição
//   return forward(operation);
// });COPIAR CÓDIGO
// Outra coisa importante a considerar é como lidar com erros de autenticação. Se o servidor retornar um erro de autenticação, é importante que a aplicação reaja de forma adequada, como redirecionar o usuário para a tela de login ou exibir uma mensagem de erro.

// Para tratar erros de autenticação, basta criar um interceptor com a função response do Apollo Client e verificar se o erro é de autenticação. Em seguida, basta reagir de acordo com o que a sua aplicação precisar.

// Exemplo:

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.forEach(({ message, locations, path }) => {
//       if (message === 'Unauthorized') {
//         // Redireciona o usuário para a tela de login
//         redirectToLogin();
//       } else {
//         // Exibe a mensagem de erro
//         showError(message);
//       }
//     });
//   }
//   if (networkError) {
//     // Exibe a mensagem de erro de rede
//     showError(networkError.message);
//   }
// });COPIAR CÓDIGO
// E é isso! Espero que tenha gostado dessa explicação mais técnica sobre autenticação e o Apollo Client. Se você tiver dúvidas ou quiser mais informações, deixe um post no fórum que eu vou tentar te ajudar.

export const nada = 0;