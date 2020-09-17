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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={"Pavel"} id={1}/>
                <DialogItem name={"Andrey"} id={2}/>
                <DialogItem name={"Sveta"} id={3}/>
                <DialogItem name={"Sasha"} id={4}/>
                <DialogItem name={"Valera"} id={5}/>
                <DialogItem name={"Dima"} id={6}/>
            </div>

            <div className={s.messages}>
                <Message messages={"Hello"}/>
                <Message messages={"How are you?"}/>
                <Message messages={"Yo, man"}/>
                <Message messages={"Yo, man"}/>
                <Message messages={"Yo, man"}/>
                <Message messages={"Yo, man"}/>
            </div>
        </div>
    )
}

export default Dialogs;