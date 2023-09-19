const fs = require("fs")
const fd = fs.openSync("db1.txt", "w");

export function writeTextDal(text: string) {
    try {
        fs.writeSync(fd, Buffer.from(text+"\n"));
        return "The string is updated";
    } catch (error) {
        return error;
    }
}
