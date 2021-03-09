const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Lesha'},
        {id: 4, name: 'Masha'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How a u?'},
        {id: 3, message: 'kek'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export const sendMessageBodyCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export default dialogsReducer;