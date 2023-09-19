import axios from 'axios';


interface ServiceConfig<T>{
    host: string;
    port: number;
    pathMap: T
}
type ServiceMap = {
    insert: "inserts"
}


export function createInsertService(config: ServiceConfig<ServiceMap>) {
    const insertUrl = `http://${config.host}:${config.port}/${config.pathMap.insert}`
    return {
        createInsert: async function(insert: string) {
            console.log("jjjjj",insert)
            const t = {
                "string":insert
              }
              
            const result = await axios.post<JSON>(insertUrl,t)
            return result.data;
        }
    }
}


