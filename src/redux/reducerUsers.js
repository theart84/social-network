const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
  users: [
    {
      id: 1,
      firsName: 'Sergey',
      avatarURL: 'https://volynstal.com.ua/uploads/thumbs/site-5d1b1b80340eb.jpg',
      followed: true,
      location: {
        country: 'Russia',
        cityName: 'Chelyabinsk'
      }
    },
    {
      id: 2,
      firsName: 'Kate',
      avatarURL: 'https://sun9-66.userapi.com/c851028/v851028730/3b4b6/59nUedLnmkM.jpg?ava=1',
      followed: false,
      location: {
        country: 'Russia',
        cityName: 'Moscow'
      }
    },
    {
      id: 3,
      firsName: 'Hippolyte',
      avatarURL: 'https://sun9-53.userapi.com/c851136/v851136630/1249b/zHMMzL19wqA.jpg?ava=1',
      followed: false,
      location: {
        country: 'Russia',
        cityName: 'Noskovsk'
      }
    }
  ]
}
const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            user.followed = true;
          }
          return user
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            user.followed = false;
          }
          return user
        })

      }
    }
    case SETUSERS: {
      return {
        ...state,
      users: [...state.users, ...action.users]
      }
    }
    default:
      return state;
  }
}
export const followAC = (userID) => ({type: FOLLOW, id: userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, id: userID});
export const setUserAC = (users) => ({type: SETUSERS, users: users});


export default reducerUsers;