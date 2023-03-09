"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
class App {
    // this construct the object app and there has the functions usables.
    constructor(PORT) {
        this.PORT = PORT;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewars();
        this.routes();
    }
    // This if for the settings the variables how port and others env.variables.
    settings() {
        this.app.set('port', this.PORT || process.env.PORT || 3000);
    }
    //This is where use the porto for start the program.
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log(`http://localhost:${this.app.get('port')}/`);
        });
    }
    middlewars() {
        this.app.use((0, morgan_1.default)('dev'));
    }
    //Router 
    //This file manage the routes in the url and control the data sended from the front.
    routes() {
        this.app.use(index_routes_1.default);
    }
}
exports.App = App;
