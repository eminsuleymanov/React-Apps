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
const cors = require('cors')
app.use(cors())
//Category services
const CategorySchema = new mongoose.Schema(
  {
    name: String
  },
  { timestamps: true }
)
const CategoryModel = mongoose.model("Categories", CategorySchema);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/categories", async (req, res) => {
  const { name } = req.query;
  let categories;
  if (name) categories = await CategoryModel.find({ name: name });
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
app.get("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  let category;
  try {
    category = await CategoryModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (category) {
    res.status(200).send({
      message: "success",
      data: category,
    });
  } else {
    res.send({
      message: "no content",
      data: null,
    });
  }
});
app.post("/api/categories", async (req, res) => {
  const category = new CategoryModel(req.body);
  await category.save();
  res.send({
    message: "category posted",
    data: category
  })
})
app.delete("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await CategoryModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({
      error: error,
    });
  }
  res.send({
    message: "deleted",
    response: response,
  });
});

app.patch("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  const response = await CategoryModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "updated",
    response: response,
  });
});

//End category

//Products endpoints
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    salePrice: Number,
    costPrice: Number,
    imgSrc: String,
    discountPercentage: Number,
    description: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
    stockCount: Number
  }, { timestamps: true }
)
const ProductModel = mongoose.model("Products", ProductSchema);

app.get("/api/products", async (req, res) => {
  const { name } = req.query;
  let products;
  if (name) products = await ProductModel.find({ name: name });
  else products = await ProductModel.find();
  if (products.length > 0) {
    res.status(200).send({
      message: "success",
      data: products,
    });
  } else {
    res.status(204).send({
      message: "not found",
      data: null,
    });
  }

})
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await ProductModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (category) {
    res.status(200).send({
      message: "success",
      data: product,
    });
  } else {
    res.send({
      message: "no content",
      data: null,
    });
  }
});
app.post("/api/products", async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.send({
    message: "product posted",
    data: product
  })
})
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await ProductModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({
      error: error,
    });
  }
  res.send({
    message: "deleted",
    response: response,
  });
});

app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const response = await ProductModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "updated",
    response: response,
  });
});
//End Products

//Users endpoint
const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    profileImg: String,
    balance: Number,
    basketItems: Array,
    role: String

  },
  {timestamps:true}
)
const UserModel = mongoose.model("Users",UserSchema);

app.get("/api/users", async (req, res) => {
  const { username } = req.query;
  let users;
  if (username) users = await UserModel.find({ username: username });
  else users = await UserModel.find();
  if (users.length > 0) {
    res.status(200).send({
      message: "success",
      data: users,
    });
  } else {
    res.status(204).send({
      message: "not found",
      data: null,
    });
  }

})
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await UserModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (user) {
    res.status(200).send({
      message: "success",
      data: user,
    });
  } else {
    res.send({
      message: "no content",
      data: null,
    });
  }
});
app.post("/api/users", async (req, res) => {
  const user = new UserModel(req.body);
  await user.save();
  res.send({
    message: "user posted",
    data: user
  })
})
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await UserModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({
      error: error,
    });
  }
  res.send({
    message: "deleted",
    response: response,
  });
});

app.patch("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const response = await UserModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "updated",
    response: response,
  });
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
