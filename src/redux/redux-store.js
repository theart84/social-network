import reducerProfile from './reducerProfile'
import reducerMessages from './reducerMessages'
import reducerFriends from './reducerFriends'

import { createStore, combineReducers } from 'redux'


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagesPage: reducerMessages,
    friendsPage: reducerFriends
})
let store = createStore(reducers);

export default store;