import { connect } from 'react-redux'
import {followAC, setUserAC, unfollowAC} from "../../redux/reducerUsers";
import Users from "./Users";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => { dispatch(followAC(id))},
    unfollow: (id) => { dispatch(unfollowAC(id))},
    setUser: (users) => { dispatch(setUserAC(users))}
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;