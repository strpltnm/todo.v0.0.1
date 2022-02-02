import express from 'express'
import mongoose from 'mongoose'
import taskRouter from './Routers/TaskRouter.js'
import columnRouter from './Routers/ColumnRouter.js';

const PORT = 5000;
const DBuri = "mongodb+srv://admin:Admin112200@cluster0.igh3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use('/tasks', taskRouter);
app.use('/columns', columnRouter);

async function startServer(){
    try {
        await mongoose.connect(DBuri, { useNewUrlParser: true, useUnifiedTopology: true });    
        app.listen(PORT, () => {console.log(`server started on port ${PORT}`);});        
    } catch (error) {
        console.log(error);
    }
}

startServer();