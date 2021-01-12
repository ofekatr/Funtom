import BaseError from "../models/errors/BaseError";

const errorHandlingMiddleware = (err, _, res, __) => {
    if (err instanceof BaseError) {
        const { code, message } = err;
        res.status(code).send(message);
        return;
    }
    res.status(500).send("An error has occured on the server.");
}

export { errorHandlingMiddleware };