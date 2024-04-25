import mongoose from 'mongoose'

export async function connect(){
  try{

    mongoose.connect(process.env.MONGO_URI!)

    const connection=mongoose.connection

    connection.on('connected',()=>{
      console.log('mongodb connected');
    })

    connection.on('error',(err)=>{
      console.log('mongodb connection error,please make sure your db is up and running'+err);
      process.exit()
      //we failed to connect mongodb so there is no use to go further so just do exit from the process;
    })



  }
  catch(error){
    console.log('something went wrong in connecting the db');
    console.log(error);
  }

}