import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 8080

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello CI/CD :)!' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})