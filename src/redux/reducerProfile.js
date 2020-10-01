const ADD_POST = 'ADD-POST'
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, message: 'Привет! Как твои дела?', likesCounter: 12 },
      { id: 2, message: 'Это мой первый пост!', likesCounter: 24 }
    ],
    newPostText: ''
  }
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCounter: 0
              };            
              let newState = {...state};
              newState.posts = [...state.posts];
              newState.posts.push(newPost);
              newState.newPostText = '';
            return newState;
        }
        case ADD_NEW_POST_TEXT: {
            let newState = {...state}
            newState.newPostText = action.text;
            return newState; 
        }
        default:
            return state;
    } 
}

export const addPostCreateAction = () => ({ type: ADD_POST });
export const addNewPostTextCreateAction = (text) => ({ type: ADD_NEW_POST_TEXT, text: text });


export default reducerProfile;