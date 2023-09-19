import { createInsertService } from "./insertService";

const insertHost = process.env.REACT_APP_INSERT_SERVICE_HOST;
const insertPort = process.env.REACT_APP_INSERT_SERVICE_PORT;

if (!insertHost || !insertPort) {
    throw new Error("insert service host or port not provided");
}


const API = {
    insertService: createInsertService({
        host: insertHost,
        port: parseInt(insertPort),
        pathMap: { insert: "inserts" }
    })
};

export default API;
