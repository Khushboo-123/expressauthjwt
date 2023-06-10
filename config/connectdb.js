const mongoose = require('mongoose');


const connectdb =  async ()=>{
     await mongoose.connect("mongodb://localhost:27017/userDetails");

     const detaisSchema =  new mongoose.Schema({
        name: String,
     });

     const detailsModel = mongoose.model("Details" , detaisSchema);
     const data = new detailsModel({name:"khushboo"});
     let result = await data.save();
     consolelog(result)

}
module.exports = connectdb;
