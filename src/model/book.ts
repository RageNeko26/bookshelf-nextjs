import { Sequelize,  DataTypes } from "sequelize"
import { DBCredentials } from "../types/db"

const config: DBCredentials = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME,
}

const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.db}`)

const book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

sequelize.authenticate().then((_res) => {
  console.log("Connection to database is success!")
}).catch((err) => {
  console.log(err)
})
