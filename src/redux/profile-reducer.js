import { profileAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "It's my first post", likes: 20 },
    { id: 3, message: "It's my second post", likes: 9 },
    { id: 4, message: "It's my twenty post", likes: 452 },
    { id: 5, message: "It's my eight post", likes: 7 }
  ],
  newPostText: 'New post text...',
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state;
  }
}

// action creators 
export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// thunk creators
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId)
    .then((data) => {
      dispatch(setUserProfile(data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then((data) => {
      dispatch(setStatus(data));
    });
}
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(data));
      }
    });
}

export default profileReducer;