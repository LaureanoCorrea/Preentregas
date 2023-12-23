const express = require("express");
const productRouter = require("./Routes/products.router");
const cartRouter = require("./Routes/carts.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));