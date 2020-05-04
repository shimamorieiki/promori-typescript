import React, { useState } from "react";

const Posttodo = () => {

    const [text, setText] = useState("");

    const eventHandler = (e: any) => {
        return setText(e.target.value)
    }
    return (
        <div>
            <form action="">
                <input type="text" className="form-controll" id="title"
                    onChange={(e) => eventHandler(e)} />
                <button className="btn btn-info">送信</button>
            </form>
            <p>{text}</p>
        </div>

    )
}

export default Posttodo;