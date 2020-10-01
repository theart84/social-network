import React from 'react'
import dialogs from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {
    let dialogsElements = props.dialog.map(e => <DialogItem name={e.name} id={e.id} avatar={e.avatar} />)
    let messagesElements = props.messages.map(e => <Message text={e.text}/>)

    let newPost = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
        
    }
    let onUpdateTextarea = () => {
        let text = newPost.current.value;
        props.updateTextarea(text); 
    }
    return (
        <div className={dialogs.wrapper}>
            <h2 className={dialogs.section_title}>Messages</h2>
            <div className={dialogs.dialogs_wrapper}>
                <div className={dialogs.dialogs}>
                    {dialogsElements}
                </div>
                <div className={dialogs.message_wrapper}>
                    <textarea onChange={onUpdateTextarea}
                              value={props.newPostText} 
                              ref={newPost} 
                              className={dialogs.post_field} 
                              placeholder='your text...' />
                    <button onClick={onAddMessage} className={dialogs.send_btn}>Send</button>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;