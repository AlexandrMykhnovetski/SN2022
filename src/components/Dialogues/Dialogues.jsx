import React from "react"
import s from "./Dialogues.module.css"
import { NavLink } from "react-router-dom";

const Dialog_name = (props) => {
    return <div className={s.dialog_name + " " + s.active}>
    <NavLink to={'/dialogues/' + props.id} > {props.name} </NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.message}> {props.message} </div>
}


const Dialogues = (props) => {
    
            let dialogues = [
                {id: "1", name: "Alex"},
                {id: "2", name: "Dimych"},
                {id: "3", name: "Pasha"},
                {id: "4", name: "Andrew"},
                {id: "5", name: "Vanka"}
            ];

            let messages = [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "Yo"}
            ];

            let dialoguesElements = dialogues
            .map(d => <Dialog_name name={d.name} id = {d.id} />)

            let messagesElements = messages
            .map(m=> <Message message={m.message} id={m.id}/>)
    
    return (
        <div className={s.dialogues}>

                <div className={s.dialogues_names}>   
                   {dialoguesElements}
                </div>

             <div className={s.messages}>
                  {messagesElements}
             </div>

       </div>
    );

}

export default Dialogues;