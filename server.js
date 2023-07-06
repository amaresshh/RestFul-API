const express = require('express')
const studentsRoutes = require('./src/students/routes')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Creating my API....')
})

app.use('/api/v1/students', studentsRoutes)

app.listen(PORT, () => console.log(`Server running on ${PORT}....`))
