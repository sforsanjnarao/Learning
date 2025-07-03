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
const pg_1 = require("pg"); //it's like mongoose(ODM) to which helps talk to the database
const pgClient = new pg_1.Client('postgresql://neondb_owner:npg_dGukJq30yrRQ@ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//another way of building connection
// const pgClient2= new Client({
//     user:"neondb_owner",
//     password:"npg_dGukJq30yrRQ",
//     port:5432,
//     database:'neondb',
//     host:"ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech",
//     ssl: true
// })
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect(); //like mongoose.connect()
    });
}
main();
app.post('/signup', (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    //we can use the validation
    const User = yield pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);
    res.status(200).json(console.log('YOU are going write'));
}));
app.listen(3000, () => {
    console.log('server is on the run');
});
