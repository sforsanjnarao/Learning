import { Client } from "pg"; //it's like mongoose(ODM) to which helps talk to the database
const pgClient= new Client('postgresql://neondb_owner:npg_dGukJq30yrRQ@ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')
//buildinging connection



//another way of building connection

// const pgClient2= new Client({
//     user:"neondb_owner",
//     password:"npg_dGukJq30yrRQ",
//     port:5432,
//     database:'neondb',
//     host:"ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech",
//     ssl: true

// })

async function main() {
    await pgClient.connect()
    const response=await pgClient.query("SELECT * FROM users;")
    console.log(response.rows)
}
main()