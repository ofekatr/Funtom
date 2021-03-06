import BaseError from "../types/errors/BaseError";

const notFoundMiddleware = (_, __, next) => {
    return next(new BaseError(404, "Not Found."));
};

export { notFoundMiddleware };