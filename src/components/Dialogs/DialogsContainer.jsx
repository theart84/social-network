import { addMessageCreateAction, addMessagesTextCreateAction } from '../../redux/reducerMessages'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialog: state.messagesPage.dialog,
        newPostText: state.messagesPage.newPostText,
        messages: state.messagesPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageCreateAction()),
        updateTextarea: (text) => dispatch(addMessagesTextCreateAction(text))
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;