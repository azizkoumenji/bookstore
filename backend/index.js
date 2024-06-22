import express, { response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express();

app.use(express.json()) //JSON parsing middleware.
app.use(cors()) //Middleware for handeling CORS (allowing all origins).

/*
You can allow custom origins (client address) with:
app.use(cors({
  origin: "https://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))
*/

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("Welcome to BookStore!")
})

app.use("/books", booksRoute)

mongoose.connect(mongoDBURL).then(() => {
  console.log("Connected to database!")
  app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
  })
}).catch((error) => {
  console.log("Error connecting to database!")
  console.log(error)
})


