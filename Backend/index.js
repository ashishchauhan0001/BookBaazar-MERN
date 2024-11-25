import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"


const app = express()

app.use(cors()); // like a middleware
app.use(express.json()); // json me parsing

dotenv.config();

const PORT=process.env.PORT||5050
const URI=process.env.MongoDBURI;
// we are using "nodemon" instead of "node" in dependencies bcz it provides real time change refelection on the server without being restart

// app.get('/', (req, res) => {
//   res.send('Mern Project of BookStore')
// })

try {
     mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,}
    );
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ",error);
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})