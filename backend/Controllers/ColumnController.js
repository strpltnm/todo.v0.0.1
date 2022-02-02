import Column from '../Models/Column.js'
import * as uuid from 'uuid'

class ColumnController{

    async create(req, res){
        try {
            const {name} = req.body;
            const id = uuid.v4();
            const newColumn = await Column.create({id, name});
            return res.json(newColumn);        
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async get(req, res){
        try {
            const columns = await Column.find();
            return res.json(columns);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async update(req, res){
        try {
            const column = req.body;
            const newColumn = await Column.findByIdAndUpdate(column._id, column, {new : true}); 
            return res.json(newColumn);       
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async delete(req, res){
        try {
            const deletedColumn = await Column.findByIdAndDelete(req.params.id);
            return res.json(deletedColumn);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new ColumnController();