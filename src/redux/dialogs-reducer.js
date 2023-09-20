const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ],
    newMessageText: 'New message...',
    conversation1: {
        messages1: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            // { id: 4, message: "Cool!" },
            // { id: 5, message: "Fine!" },
            // { id: 6, message: "Go play basketball!" }
        ],
        messages2: [
            // { id: 1, message: "Hi!" },
            // { id: 2, message: "How are you?" },
            // { id: 3, message: "Yo!" },
            { id: 4, message: "Cool!" },
            { id: 5, message: "Fine!" },
            { id: 6, message: "Go play basketball!" }
        ],
    },
    conversation2: {
        messages1: [
            // { id: 1, message: "Hi!" },
            // { id: 2, message: "How are you?" },
            // { id: 3, message: "Yo!" },
            { id: 4, message: "Cool!" },
            { id: 5, message: "Fine!" },
            { id: 6, message: "Go play basketball!" }
        ],
        messages2: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo!" },
            // { id: 4, message: "Cool!" },
            // { id: 5, message: "Fine!" },
            // { id: 6, message: "Go play basketball!" }
        ],
    },
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageText
            }

            state.conversation1.messages1.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;