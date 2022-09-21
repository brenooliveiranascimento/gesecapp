# gesecapp
## App de receitas inusitada!

   ### Sobre o App
  Venha e registre alguma receita esquisita!
  Nesta aplicação é possivél editar e excluir apenas as suas próprias receitas.
  
 
  ### Aprendizado
  Neste Projeto fui capaz de:
  - Criar um sistema de login e cadastro com Firebase e React Native
  - Criar um CRUD com Firebase
  - Controlar o estado global da plicação com Redux e Redux Thunk para assincronicidade
  - Permitir que apenas os donos da receita possam editar e deletar apenas as próprias publicações
  
  ## Para Rodar na sua máquina
  Necessario ter o AndroidSturio e Java versão 8 ou superior
  - Clone o repositorio
  - Abra o terminal e navegue até a pasta raiz do app
  - Execute o comando npm install
  - Caso ocorra algum erro execute npm install --force
  - Rode o comando npx react-native run-android
  - E por último rode o comando npx react-native start
   
   ## Testes
   Utilizei o detox para realizar os testes, para roda-lo utilize o app precisa estar em execução, logo após executar
   o app com npm start rode o comando "npx detox test -c android.emu.debug" ou "yarn detox test -c android.emu.debug"
   ### IMPORTANTE
   caso tenha problemas para executar os testes, entre no arquivo .detoxrc.json que se encontra na raiz do projeto e substitua o nome da chave
   avdName que por padado deixei Pixel_3a_API_30 e coloque o nome device que voce está utilizando, lembre-se de substituir todos os espaços por _
   
  


Tecnologias utilizadas:<br/>
<a href="https://www.javascript.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width=30 height=30></a>
<a href="https://www.javascript.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width=30 height=30></a>
<a href="https://www.reactnative.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" height=30 width=30></a>
<a href="https://styled-components.com/"><img src="https://user-images.githubusercontent.com/94801880/152538254-c2893779-4869-4474-9997-96ad488c6ae7.png" width=90></a>
  <a href="https://rnfirebase.io/"><img src="https://user-images.githubusercontent.com/94801880/152535515-3503ef54-50a0-4765-a057-6013f4aa8521.png" width=90></a>
