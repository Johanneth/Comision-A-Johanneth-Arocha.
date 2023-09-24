import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_forum", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({ force: true });
    await sequelize.sync(); 
    console.log("Conexion establecida.");
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
};
