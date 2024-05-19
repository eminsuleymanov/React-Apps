const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json())


const ProductsForWomen = new mongoose.Schema({
    imageSrc: String,
    title: String,
    price: Number

}, { timestamps: true })

const ProductsModel = mongoose.model("Products", ProductsForWomen)

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Get ALL method
app.get("/api/womenproducts", async (req, res) => {
    let products;
    const { title } = req.query;
    if (title) products = await ProductsModel.find({ title: title })
    else products = await ProductsModel.find()

    if (products.length > 0) {
        res.status(200).send({
            message: "success",
            data: products,
        });
    } else {
        res.send({
            message: "not found",
            data: null,
        });
    }
})

// Get One Method
app.get("/api/womenproducts/:id", async (req, res) => {
    const { id } = req.params
    let product;
    try {
        product = await ProductsModel.find(id);
    } catch (error) {
        res.send({ error: error })
    }
    if (product) {
        res.status(200).send({
            message: "founded one",
            data: product
        })
    }
    else {
        res.send({
            message: "not found",
            data: null
        })
    }
    res.send({
        oneproduct: product
    })
})
// DELETE METHOD
app.delete("/api/womenproducts/:id", async (req, res) => {
    const { id } = req.params;
    let response;
    try {
        response = await ProductsModel.findByIdAndDelete(id);
    } catch (error) {
        res.send({ error: error })
    }
    res.send({
        message: "deleted",
        data: response
    })
})
// POST METHOD
app.post("/api/womenproducts", async (req, res) => {
    const product = new ProductsModel(req.body)
    await product.save();
    res.send({
        message: "product posted",
        data: product
    })

})

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("Connected to MongoDB!")
})
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})