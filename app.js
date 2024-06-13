const addDays = require('date-fns/addDays')
const express = require('express')
const app = express()
let date1 = new Date()
/*const date = addDays(
  new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()),
  100,
)*/
app.get('/', (req, res) => {
  const date = addDays(
    new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()),
    100,
  )
  res.send(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
})

app.listen(3000)
module.exports = app
