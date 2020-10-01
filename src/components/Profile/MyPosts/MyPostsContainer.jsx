import { addPostCreateAction, addNewPostTextCreateAction } from '../../../redux/reducerProfile'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreateAction());
    },
    updateTextarea: (text) => {
      dispatch(addNewPostTextCreateAction(text));
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;