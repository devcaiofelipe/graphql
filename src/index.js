import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema.js';
import { context } from './graphql/context.js';
import { PostsApi } from './graphql/post/datasources.js';
import { UsersApi } from './graphql/user/datasources.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    dataSources: () => {
        return {
            postApi: new PostsApi(),
            userApi: new UsersApi(),
        }
    }
});

server.listen(4003).then(({ url }) => {
    console.log(`Server listening on url: ${url}`);
});
