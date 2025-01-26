import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },

});
const Employees =mongoose.model('Employees',employeeSchema);
export default Employees;