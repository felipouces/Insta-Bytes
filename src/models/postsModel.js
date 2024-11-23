import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";
// Conecta ao banco de dados utilizando a string de conexão 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


/*getTodosPosts: Uma função assíncrona que:
conexao.db("imersao-instabytes"): Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.*/
export /*default*/ async function getTodosPosts() {
    // Seleciona o banco de dados imersao-instabytes
    const db = conexao.db ("imersao-instabytes");
   // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts")
     // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray()
  }

  export async function criarPost(novoPost) {
    const db = conexao.db ("imersao-instabytes");
     const colecao = db.collection("posts");
     return colecao.insertOne(novoPost)
  }

  export async function atualizarPost(id, novoPost) {
    const db = conexao.db ("imersao-instabytes");
     const colecao = db.collection("posts");
     const objID = ObjectId.createFromHexString(id)
     return colecao.updateOne( {_id: new ObjectId(objID)}, {$set:novoPost})
  }
