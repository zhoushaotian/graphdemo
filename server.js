const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);
var root = {
    hello: () => {
        return 'zst';
    }
};
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000);