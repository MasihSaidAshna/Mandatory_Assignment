import express from "express";

const app = express();

app.use(express.static("public"));

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
