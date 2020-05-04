import React, { useState, FC } from "react";
import ReactDOM from 'react-dom'
// import Card from "./Card";


type Memo = {
    title: string
    text: string
    date: string
    person: string
    limit: string
}


const Memos: Memo[] = [
    {
        title: "1",
        text: "",
        date: "",
        person: "",
        limit: ""
    },
    {
        title: "2",
        text: "",
        date: "",
        person: "",
        limit: ""
    },
    {
        title: "3",
        text: "",
        date: "",
        person: "",
        limit: ""
    },
    {
        title: "4",
        text: "",
        date: "",
        person: "",
        limit: ""
    },
    {
        title: "5",
        text: "",
        date: "",
        person: "",
        limit: ""
    },

];

const Card: FC<Memo> = (Memo) => (
    <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col"><h4>{Memo.title}</h4></div>
                <div className="col"><button className="btn-danger">×</button></div>
            </div>
        </div>
        <div className="card-body">{Memo.text}</div>
        <div className="card-footer">
            <div className="row">
                <div className="col"><h6>{Memo.person}</h6></div>
                <div className="col"><h6><span>{Memo.date}</span></h6></div>
                <div className="col"><h6>{Memo.limit}</h6></div>
            </div>
        </div>
    </div>
)

const Posttodo = () => {

    const [text, setText] = useState("");

    const eventHandler = (e: any) => {
        return setText(e.target.value)
    }

    const clickHolder = () => {
        ReactDOM.render(
            <React.StrictMode>

            </React.StrictMode>,
            document.getElementById('cardfield')
        )
    }
    return (
        <div>
            <form action="">
                <input type="text" className="form-controll" id="title"
                    onChange={(e) => eventHandler(e)} />
                <button className="btn btn-info"
                    onClick={() => clickHolder()}>送信</button>
            </form>
            <p>{text}</p>
        </div>

    )
}

export default Posttodo;