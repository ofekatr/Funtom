import BaseError from "./BaseError";

export default class BaseApiError extends BaseError {
    constructor(message: string) {
        super(500, message);
    }
};