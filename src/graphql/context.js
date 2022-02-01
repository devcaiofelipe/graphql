import fetch from 'node-fetch'
import { getUsers } from './user/utils.js';
import { getPosts } from './post/utils.js';
import { makeUserDataLoader } from './user/dataLoaders.js';

const _getUsers = getUsers(fetch);
const _getPosts = getPosts(fetch);

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(_getUsers),
        getUsers: _getUsers,
        getPosts: _getPosts,
    };
};
