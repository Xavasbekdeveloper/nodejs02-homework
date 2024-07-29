const express = require("express");
const app = express();

app.use(express.json());

const Users = require("./routes/users");
app.use("/users", Users);

const Product = require("./routes/products");
app.use("/products", Product);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
