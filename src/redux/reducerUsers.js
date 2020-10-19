const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
  users: []
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
      // debugger;
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