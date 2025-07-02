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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client('postgresql://neondb_owner:npg_dGukJq30yrRQ@ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
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
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * FROM users;");
        console.log(response.rows);
    });
}
main();
