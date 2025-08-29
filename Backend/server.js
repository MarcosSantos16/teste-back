const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // 👈 só essa linha

app.use(cors());
app.use(express.json());

const alunoRoutes = require("./routes/tb_aluno");
const professorRoutes = require("./routes/tb_professor");
const enderecoRoutes = require("./routes/tb_endereco");

app.use("/tb_aluno", alunoRoutes);
app.use("/tb_professor", professorRoutes);
app.use("/tb_endereco", enderecoRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});
