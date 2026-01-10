

const usersSchema = new mongoose.schema({
    name:{
        type: String,
        required: true,
       
    },
    age:{
        type: Number,
        required: true,
    },
    adulte:{
        type : Boolean,
    }
})