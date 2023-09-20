const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
        { id: 3, message: "It's my second post", likes: 9 },
        { id: 4, message: "It's my twenty post", likes: 452 },
        { id: 5, message: "It's my eight post", likes: 7 }
    ],
    newPostText: 'New post text...',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 6,
                message: state.newPostText,
                likes: 0
            }

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;