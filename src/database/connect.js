const mongoose = require("mongoose");
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://admin:root@todolist.jiwtwmv.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        console.log(`falha ao conectar com o banco de dados: ${error}`);
      } else {
        console.log("conectado ao banco de dados com sucesso ");
      }
    }
  );
};

module.exports = connectToDatabase;
