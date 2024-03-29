import { homePageRender, aboutRender, contactRender, nodejsRender, expressRender, deploymentRender, expimpRender, ssrcsrRender } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homePageRender);
});

router.get("/about", (req, res) => {
    res.send(aboutRender);
});

router.get("/contact", (req, res) => {
    res.send(contactRender);
});

router.get("/nodejs", (req, res) => {
    res.send(nodejsRender);
});

router.get("/express", (req, res) => {
    res.send(expressRender);
});

router.get("/deploy", (req, res) => {
    res.send(deploymentRender);
});

router.get("/expimp", (req, res) => {
    res.send(expimpRender);
});

router.get("/ssrcsr", (req, res) => {
    res.send(ssrcsrRender);
});


export default router;