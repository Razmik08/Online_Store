
import express from 'express';

export const appRouter = express.Router();

appRouter.get("/", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            return res.status(response.status).send({
                ok: false,
                message: "Failed to fetch products"
            });
        }

        const products = await response.json();

        res.send({
            ok: true,
            products
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: "Internal server error"
        });
    }
});

appRouter.get("/about", (req, res) => {
    res.render("about");
});

appRouter.get("/contacts", (req, res) => {
    res.render("contacts");
});
