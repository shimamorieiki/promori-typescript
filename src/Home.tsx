// import Posttodo from "./Posttodo";
import React, { useState } from "react";
import Card from './Card';

const Home = () => {

    const [text, setText] = useState("");

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
        }

    ];

    const eventHandler = (e: any) => {
        return setText(e.target.value)
    }

    const clickHandler = () => {
        const newmemo = {
            title: "6",
            text: "",
            date: "",
            person: "",
            limit: ""
        }
        return Memos.push(newmemo);
    };


    const listItems = Memos.map((memo) =>
        <Card
            title={memo.title}
            text={memo.text}
            date={memo.date}
            person={memo.person}
            limit={memo.limit}
        />);

    return (
        <div >
            <h2>Home</h2>
            <p>本来はTLに流すようなやつが作りたいが、とりあえずTO DOリストみたいなやつを作る</p>
            <form action="">
                <input type="text" className="form-controll" id="title"
                    onChange={(e) => eventHandler(e)} />
                <button className="btn btn-info"
                    onClick={() => clickHandler()}>送信</button>
            </form>
            <p>{text}</p>

            <button className="btn btn-info dropdown-toggle"
                id="dropdown" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                並べ替える</button>
            <div className="dropdown-menu" aria-labelledby="dropdown1">
                <h6 className="dropdown-header">select</h6>
                <button className="dropdown-item">期日</button>
                <button className="dropdown-item">重要</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">追加日</button>
            </div>
            <div className="card-columns" id="cardfield" >
                {listItems}
            </div>
            {/* 新規作成ボタンを押したらカードを作る画面
            　　がモーダルで出てきてクリック入力で追加 */}
            <div className="modal fade" id="alert1" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <h3 className="modal-header">POP</h3>
                        <div className="modal-body">
                            <p>popcontent</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary"
                            >click</button>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home;
