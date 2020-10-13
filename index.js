const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const db = require('./queries.js')

const PORT = process.env.PORT || 3000;
//package body-parser để truy xuất dữ liệu trong form gửi lên server theo phương thức POST
app.use(bodyParser.json())
//test postman : x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/', (request, response) => {
  response.json({ info: 'Build local api with Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => {

  console.log(`App đang chạy với port ${PORT}.`)
})



