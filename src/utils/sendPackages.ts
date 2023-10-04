export const sendPackage = (message: any, client: any, ip: string, port:number, socket: number, sentPackage: number) => {
    client.send(message, ip, port, socket,(err:any) => {
        if(err) console.log("error in: ", err)
        else sentPackage++

        if(sentPackage < socket) sendPackage(message, client, ip, port, socket, sentPackage)
        else client.close
    })
}