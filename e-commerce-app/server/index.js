const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//Category services
const CategorySchema = new mongoose.Schema(
    {
        name: String
    },
    {timestamps:true}
)
const CategoryModel = mongoose.model("Categories",CategorySchema);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/categories",async(req,res)=>{
    const {name} = req.query;
    let categories;
    if(name) categories = await CategoryModel.find({name:name});
    else categories = await CategoryModel.find();
    if (categories.length > 0) {
        res.status(200).send({
          message: "success",
          data: categories,
        });
      } else {
        res.status(204).send({
          message: "not found",
          data: null,
        });
      }

})
//End category


mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
