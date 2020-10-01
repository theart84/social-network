import f1 from '../components/Friends/FriendItem/f1.png'
import f2 from '../components/Friends/FriendItem/f2.png'
import f3 from '../components/Friends/FriendItem/f3.png'
import m1 from '../components/Friends/FriendItem/m1.png'
import m2 from '../components/Friends/FriendItem/m2.png'
import reducerProfile from './reducerProfile'
import reducerMessages from './reducerMessages'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Привет! Как твои дела?', likesCounter: 12 },
        { id: 2, message: 'Это мой первый пост!', likesCounter: 24 }
      ],
      newPostText: ''
    },
    messagesPage: {
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
    },
    friendsPage: {
      friend: [
        { id: 1, name: 'Katushka', avatar: f1 },
        { id: 2, name: 'Arina', avatar: f3 },
        { id: 3, name: 'Mama', avatar: f2 },
        { id: 4, name: 'Papa', avatar: m2 },
        { id: 5, name: 'Bro', avatar: m1 }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscribe() { },
  subscribe(observer) {
    this._callSubscribe = observer;
  },  
  dispatch(action) {
    this._state.profilePage = reducerProfile(this._state.profilePage, action);
    this._state.messagesPage = reducerMessages(this._state.messagesPage, action);
    this._state.friendsPage = reducerMessages(this._state.friendsPage, action);
    this._callSubscribe(this._state)
  },
  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCounter: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscribe(this._state);
  },
  _addNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscribe(this._state);
  },
  _addMessage() {
    let newPost = {
      id: 7,
      text: this._state.messagesPage.newPostText
    };
    this._state.messagesPage.messages.push(newPost);
    this._state.messagesPage.newPostText = '';
    this._callSubscribe(this._state);
  },
  _addNewMessagesText(text) {
    this._state.messagesPage.newPostText = text;
    this._callSubscribe(this._state);
  }
}

export default store;


