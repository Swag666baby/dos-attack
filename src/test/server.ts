import * as express from "express";
import route from "./routes/mainRoute";
const app = express();

app.use("/",
    route
)

app.listen(3000, () => {
    console.log("server running on port 3000");
})