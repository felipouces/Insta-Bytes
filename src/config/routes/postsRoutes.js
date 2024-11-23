import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem,  atualizarNovoPost} from "../../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000", 
    optionsSuccessStatus: 200
}
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage})

 const routes = (app) => {
    /* Configura o middleware express.json() para analisar o corpo das requisições que contêm dados no formato JSON. Isso é essencial para receber dados de formulários ou de outras fontes que enviam dados em JSON.
     */
    app.use(express.json());
    // Rota para buscar todos os posts
    app.use(cors(corsOptions))
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;