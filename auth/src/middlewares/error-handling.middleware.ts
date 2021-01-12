import { errorDataMap } from "src/constants/errors";
import { ErrorData } from "src/types/errors/ErrorData";
import ErrorEnum from "src/types/errors/ErrorEnum";
import BaseError from "../types/errors/BaseError";

const errorHandlingMiddleware = (err, _, res, __) => {
    if (err instanceof BaseError) {
        const { code, message } = err;
        res.status(code).send(message);
        return;
    }
    const { code, message }: ErrorData = errorDataMap.get(ErrorEnum.GENERIC_ERROR)!;
    res.status(code).send(message);
}

export { errorHandlingMiddleware };