import React from "react";
import Card from "./Card";
import Posttodo from "./Posttodo";

const Home = () => {
    return (
        <div >
            <h2>Home</h2>
            <p>Welcome to ようこそ</p>
            <p>本来はTLに流すようなやつが作りたいが、とりあえずTO DOリストみたいなやつを作る</p>
            {/* <button className="btn btn-info" data-toggle="modal" data-target="#alert1"
                onClick={handleClick}>新規作成</button> */}
            <Posttodo />

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
            <div className="card-columns">
                <Card title="今の課題" text="こんばんは" date="5/6" person="TK" limit="5/10" />
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
