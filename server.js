//Importa o módulo express, que é a base para criar a nossa aplicação web.
import express from 'express';
import routes from './src/config/routes/postsRoutes.js';

/*posts: Cria um array de objetos, onde cada objeto representa um post com informações como ID, descrição e URL da imagem. Esses dados são utilizados para testes ou como um conjunto inicial de dados. 
const posts = [
    {
      id: 1, descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2, descricao: "Paisagem montanhosa",
      imagem: "https://source.unsplash.com/random/300x150/?mountain"
    },
    {
        id: 3, descricao: "Cachorro brincando",
      imagem: "https://source.unsplash.com/random/300x150/?dog,play"
    },
    {
        id: 4, descricao: "Comida deliciosa",
      imagem: "https://source.unsplash.com/random/300x150/?food"
    },
    {
        id: 5, descricao: "Cidade à noite",
      imagem: "https://source.unsplash.com/random/300x100/?city,night"
    },
    {
        id: 6, descricao: "Pessoas sorrindo",
      imagem: "https://source.unsplash.com/random/300x150/?people,smile"
    }
  ];*/

/*express(): Cria uma nova instância do aplicativo Express.
 */
const app = express();
app.use(express.static("uploads"))
routes(app)

//app.listen(3000): Inicia o servidor na porta 3000.
//console.log: Exibe uma mensagem no console para indicar que o servidor está em execução.
app.listen(3000, () => {
    console.log("Servidor executando...." );
});


/*function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id == Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});*/
