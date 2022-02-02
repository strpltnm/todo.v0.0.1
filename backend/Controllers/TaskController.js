import Task from '../Models/Task.js'
import * as uuid from 'uuid'

class TaskController{

    async create(req, res){
        try {
            const {columnId, name} = req.body;
            const id = uuid.v4();
            const newTask = await Task.create({id, columnId, name});
             res.json(newTask);        
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async get(req, res){
        try {
            const tasks = await Task.find();
            return res.json(tasks);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async update(req, res){
        try {
            const task = req.body;
            const newTask = await Task.findByIdAndUpdate(task._id, task, {new : true}); 
            return res.json(newTask);       
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async delete(req, res){
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            return res.json(deletedTask);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new TaskController();