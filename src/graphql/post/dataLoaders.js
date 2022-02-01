import DataLoader from 'dataloader';


export const makePostDataLoader = (getPosts) => {
    return new DataLoader(async (ids) => {
        const queryUrl = ids.join('&userId=')
        const posts = await getPosts('?userId=' + queryUrl);
        return ids.map(id => {
            return posts.filter(post => post.userId === id);
        });
    });
};
