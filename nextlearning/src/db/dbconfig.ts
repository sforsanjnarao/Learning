import mongoose from 'mongoose';

export async function dbConnect() {
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error',(err)=>{
            console.error('MongoDB connection error:', err);
        })
    }catch (error) {
        console.error('MongoDB connection error:', error);
    }
}