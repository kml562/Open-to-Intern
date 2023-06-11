import mongoose from "mongoose";

export const startServer = async(app,PORT,MONGODB_URL)=>{
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to DB")


        app.listen(PORT, ()=>{
            console.log(`Running Up The Hill At ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error.message)
    }
}