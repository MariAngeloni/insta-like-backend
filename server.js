import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads")) //aqui estamos dizendo pro express que tudo o que estiver dentro da pasta uploads vai abrir para ser acessado/servido (servir arquivos estáticos)
routes(app)

//inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});