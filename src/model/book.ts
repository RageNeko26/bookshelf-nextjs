import { Sequelize,  DataTypes } from "sequelize"

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

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
