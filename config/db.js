const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected ${mongoose.connection.host}`.bgGreen.black);
    } catch(error){
        console.log(`Mongodb Database Error ${error}`.bgRed.black)
    }
};
module.exports=connectDB;