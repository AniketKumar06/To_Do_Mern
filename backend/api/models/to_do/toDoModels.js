import { Schema,model } from "mongoose";


const toDOModelSchema = new Schema({
    title:{
        type : String,
        require : true
    },
    description:{
        type: String,
        require:true
    },
    timeDate:{
        type: String,
        require:true
    }
}, { timestamps: true });

export default model("todo",toDOModelSchema); 