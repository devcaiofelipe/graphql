import { userTypeDefs } from './user/typeDef.js';
import { userResolvers } from './user/resolvers.js';
import { postTypeDefs } from './post/typeDef.js';
import { postResolvers } from './post/resolvers';
import { gql } from 'apollo-server-core';
import { apiFiltersTypeDefs } from './api-filters/typeDef.js';
import { apiFiltersResolvers } from './api-filters/resolvers.js';


const rootTypeDefs = gql`
    type Query {
        _empty: Boolean
    }
    type Mutation {
        _empty: Boolean
    }
`;

const rootResolvers = {
    Query: {
        _empty: () => true
    },
    Mutation: {
        _empty: () => true
    }
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers, apiFiltersResolvers];
