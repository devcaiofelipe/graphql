// Query resolvers
const post = async (_, { id }, { dataSources }) => {
    const post = dataSources.postApi.getPost(id);
    return post;
};

const posts = async (_, { input }, { dataSources }) => {
    const posts = dataSources.postApi.getPosts(input)
    return posts;
};

// Mutation resolvers
const createPost = async (_, { data }, { dataSources }) => {
    return dataSources.postApi.createPost(data);
};

const  updatePost = async (_, { postId, data }, { dataSources }) => {
    return dataSources.postApi.updatePost(postId, data);
};

const deletePost = async (_, { postId }, { dataSources }) => {
    return dataSources.postApi.deletePost(postId);
};

// Field resolvers
const user = async ({ userId }, __, { userDataLoader }) => {
    return userDataLoader.load(userId);
}

export const postResolvers = {
    Query: { post, posts },
    Mutation: { createPost, updatePost, deletePost },
    Post: { user }
};
