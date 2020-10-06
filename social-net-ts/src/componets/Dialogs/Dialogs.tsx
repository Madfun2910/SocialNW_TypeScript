import React from "react";
import  s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}
type MessagesType = {
    messages : string
}

const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagesType) => {
    return (
        <div className={s.message}>{props.messages}</div>
    )
}

const Dialogs = () => {
    let dialogsData  = [
        {id:1, name:'Pavel'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Valera'},
        {id:6, name:'Dima'}
        ]

    let messagesData  = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you'},
        {id:3, message:'Im fine'},
        {id:4, message:'Yo'},
        {id:5, message:'yo'},
        {id:6, message:'yo'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>

            <div className={s.messages}>
                <Message messages={messagesData[0].message}/>
                <Message messages={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;