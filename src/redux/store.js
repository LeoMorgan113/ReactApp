import {act} from "@testing-library/react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        sidebarPage: {
            friends: [
                {id: 1, name: 'Lesha'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Nikita'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how a u?', likeCounter: '20'},
                {id: 2, message: 'Look! I`m on TV, mom.', likeCounter: '30'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber(){
        console.log("State changes")
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;


