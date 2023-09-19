import { writeTextDal } from "./../DAL/ApiInsret";

export function writeText(text: string) {
    try {
        if (text.trim().length === 0) {
            throw "The string is empty";
        } else {
            return writeTextDal(text);
        }
    }
    catch (error) {
        return error;
    }
}

