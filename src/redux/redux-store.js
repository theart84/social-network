import reducerProfile from './reducerProfile'
import reducerMessages from './reducerMessages'
import reducerFriends from './reducerFriends'
import { createStore, combineReducers } from 'redux'
import reducerUsers from './reducerUsers'


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagesPage: reducerMessages,
    friendsPage: reducerFriends,
    usersPage: reducerUsers
})
let store = createStore(reducers);

export default store;