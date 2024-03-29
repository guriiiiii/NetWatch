const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auths')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')
const cors = require('cors');


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log(`success`)).catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)
app.listen(process.env.PORT ||8800, ()=>{
    console.log(`Backend is running`);
})