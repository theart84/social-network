import f1 from '../components/Friends/FriendItem/f1.png'
import f2 from '../components/Friends/FriendItem/f2.png'
import f3 from '../components/Friends/FriendItem/f3.png'
import m1 from '../components/Friends/FriendItem/m1.png'
import m2 from '../components/Friends/FriendItem/m2.png'

const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

let initialState = {
    dialog: [
      { id: 1, name: 'Katushka', avatar: f1 },
      { id: 2, name: 'Arina', avatar: f3 },
      { id: 3, name: 'Mama', avatar: f2 },
      { id: 4, name: 'Papa', avatar: m2 },
      { id: 5, name: 'Bro', avatar: m1 }
    ],
    messages: [
      { id: 1, text: 'Привет! Как твои дела?' },
      { id: 2, text: 'Все норм, работаю.' },
      { id: 3, text: 'А я пытаюсь разобраться с React' },
      { id: 4, text: 'Молодец' },
      { id: 5, text: 'Но пока что-то туго идет' },
      { id: 6, text: 'Давай, у тя получится, ты же красавчик, херячь)))' },

    ],
    newPostText: ''
  }
const reducerMessages = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
          return {
          ...state,
            messages: [...state.messages, {id: 7, text: state.newPostText}],
            newPostText: ''
          }
        case ADD_MESSAGE_TEXT:
          return {
            ...state,
            newPostText: action.text,
          }
        default:
            return state;
    }
}
export const addMessageCreateAction = () => ({ type: ADD_MESSAGE });
export const addMessagesTextCreateAction = (text) => ({ type: ADD_MESSAGE_TEXT, text: text });

export default reducerMessages;