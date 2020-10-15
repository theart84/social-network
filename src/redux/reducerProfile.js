const ADD_POST = 'ADD-POST'
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Привет! Как твои дела?', likesCounter: 12},
    {id: 2, message: 'Это мой первый пост!', likesCounter: 24}
  ],
  newPostText: ''
}
const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 3, message: state.newPostText, likesCounter: 0}],
        newPostText: ''
      }
    }
    case ADD_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text
      }
    }
    default:
      return state;
  }
}

export const addPostCreateAction = () => ({type: ADD_POST});
export const addNewPostTextCreateAction = (text) => ({type: ADD_NEW_POST_TEXT, text: text});


export default reducerProfile;