// Query resolvers
const user = async (_, { id }, { getUsers }) => {
    const user = await getUsers('/' + id);
    const a = await user.json();
    return a;
}

const users = async (_, { input }, { getUsers }) => {
    const apiFiltersInput = new URLSearchParams(input);
    const users = await getUsers('/?' + apiFiltersInput);
    return users.json()
};

// Fields Resolvers
const posts = ({ id }, _, { dataSources }) => {
    return dataSources.postApi.dataLoader.load(id)
};

// Mutations
const createUser = async (_, { data }, { dataSources }) => {
    return dataSources.userApi.createUser(data);
};

const updateUser = async (_, { userId, data }, { dataSources }) => {
    return dataSources.userApi.updateUser(userId, data)
};

const deleteUser = async (_, { userId }, { dataSources }) => {
    return dataSources.userApi.deleteUser(userId);
};

export const userResolvers = {
    Query: { user, users },
    User: { posts },
    Mutation: { createUser, updateUser, deleteUser }
};
