import express from "express"

const App = express()


App.all("*", (req, res) => {
  res.send("Hello world")
})

const start = async () => {
  const port = 3000
  App.listen(port,() => {
    console.log(`App has been started at ${port} port`)
  })
}

start()