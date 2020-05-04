import React from "react";
import { FC } from "react";

type Memo = {
    title: string
    text: string
    date: string
    person: string
    limit: string
}

const Card: FC<Memo> = ({ title, text, date, person, limit }) => (
    <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col"><h4>{title}</h4></div>
                <div className="col"><button className="btn-danger">×</button></div>
            </div>
        </div>
        <div className="card-body">{text}</div>
        <div className="card-footer">
            <div className="row">
                <div className="col"><h6>{person}</h6></div>
                <div className="col"><h6><span>{date}</span></h6></div>
                <div className="col"><h6>{limit}</h6></div>
            </div>
        </div>
    </div>
)

export default Card;