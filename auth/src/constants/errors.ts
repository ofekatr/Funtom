import { ErrorData } from "src/types/errors/ErrorData";
import ErrorEnum from "src/types/errors/ErrorEnum";

export const errorDataMap = new Map<ErrorEnum, ErrorData>([
    [ErrorEnum.GENERIC_ERROR, {
        code: 500,
        message: "An error has occured on the server."
    }],
]);