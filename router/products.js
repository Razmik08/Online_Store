
import express from 'express';

export const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
    res.send({
        ok: true,
        message: "Welcome to items"
    });
});

productsRouter.get("/items", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products?limit=5"
        );

        if (!response.ok) {
            return res.status(response.status).send({
                ok: false,
                message: "Failed to fetch items"
            });
        }

        const items = await response.json();

        res.send({ ok: true, items });
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: "Internal server error"
        });
    }
});

productsRouter.get("/categories", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
            return res.status(response.status).send({
                ok: false,
                message: "Failed to fetch categories"
            });
        }

        const categories = await response.json();

        res.send({ ok: true, categories });
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: "Internal server error"
        });
    }
});
