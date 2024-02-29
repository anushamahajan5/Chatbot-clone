const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const bodyparser=require('body-parser')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB=require("./config/db")
const authRoutes=require('./router/authRoutes')
const errorhandler = require('./middlewares/errorMiddleware')

dotenv.config();

connectDB();

const app=express();
const port=3001;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(errorhandler)

app.use('/api/v1/auth',authRoutes);

app.listen(port,()=>{
    console.log(`Server running on port number ${port}`);
})