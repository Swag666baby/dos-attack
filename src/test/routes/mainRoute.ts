import {Router, response} from "express";
const route = Router();

route.get("/", async(request, response) => {
    response.send("running...")
});

export default route