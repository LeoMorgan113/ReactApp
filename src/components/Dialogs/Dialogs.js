import React from 'react';
import '../.././App.css';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessageBody();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter'
                              cols="30" rows="10" />
                </div>
                <div>
                    <button onClick={onSendMessageClick} className="btn">Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;