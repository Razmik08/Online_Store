import express from 'express'
import dotenv from 'dotenv'

import { appRouter } from './router/appRouter.js'
import { productsRouter } from './router/products.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.listen(PORT, console.log(`server runing on PORT ${PORT}`));


app.set("view engine", "ejs");
app.set("views", "./pages");

app.use("/", appRouter);
app.use("/products", productsRouter);