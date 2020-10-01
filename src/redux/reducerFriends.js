import f1 from '../components/Friends/FriendItem/f1.png'
import f2 from '../components/Friends/FriendItem/f2.png'
import f3 from '../components/Friends/FriendItem/f3.png'
import m1 from '../components/Friends/FriendItem/m1.png'
import m2 from '../components/Friends/FriendItem/m2.png'

let initialState = {
    friend: [
      { id: 1, name: 'Katushka', avatar: f1 },
      { id: 2, name: 'Arina', avatar: f3 },
      { id: 3, name: 'Mama', avatar: f2 },
      { id: 4, name: 'Papa', avatar: m2 },
      { id: 5, name: 'Bro', avatar: m1 }
    ]
}
const reducerFriends = (state = initialState, action) => {
    return state;
}
export default reducerFriends;