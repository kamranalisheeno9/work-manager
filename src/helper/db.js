import { User } from "@/model/user";
import mongoose from "mongoose";

const config={
  isConnected:0,
}
export const connectDB = async () => {

  // Checking whether the dabase is already coonected of not if yes then do not need to make another db connection.

  if(config.isConnected){
    return;
  }

  try {
    // Connecting application to databse
    
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work-manager",
    });

    // Setting Ready State For Database into config.isCOnnected.

    config.isConnected=connection.readyState;
    console.log("Database connected");
    console.log(connection.name);
   
  } catch (error) {
    console.log("error occured");
    console.log("error", error);
  }
};
