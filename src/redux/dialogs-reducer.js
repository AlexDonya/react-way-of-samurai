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
    conversation: {
        messagesPersonLeft: [
            { id: 1, message: "Hi!" },
            { id: 3, message: "Fine!" },
            { id: 5, message: "Yo! Go!" },
        ],
        messagesPersonRight: [
            { id: 2, message: "Hello!" },
            { id: 4, message: "How are you?" },
            { id: 6, message: "Go play basketball!" },
        ],
    },
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 7,
                message: state.newMessageText
            }
            return {
                ...state,
                conversation: {
                    messagesPersonLeft: [...state.conversation.messagesPersonLeft],
                    messagesPersonRight: [...state.conversation.messagesPersonRight, newMessage]
                },
                newMessageText: '',
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;