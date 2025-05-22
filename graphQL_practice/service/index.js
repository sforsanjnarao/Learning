const express=require('express');
const {ApolloServer}= require('@apollo/server');
const bodyParser=require('body-parser');
const {expressMiddleware}=require("@apollo/server/express4");
const cors=require('cors');

async function startServer() {
    const app=express();
    const server=new ApolloServer({ 
        typeDefs: `
            type Todo {
                id: ID!
                title: String!
                completed: Boolean!
            }
                type Query {
                    getTodos: [Todo]
                }
        `,
        resolvers: {}
    });
    
    await server.start();
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/graphql', expressMiddleware(server));


    app.listen(4000, () => {
        console.log('Server is running on http://localhost:4000/graphql');
    })
}

startServer();

