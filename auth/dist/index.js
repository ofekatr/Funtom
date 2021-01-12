"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json);
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
//# sourceMappingURL=index.js.map