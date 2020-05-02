import React from "react";

const Test = (props: string) => (
    <div>
        <p>出力してくれると嬉しい{props}</p>
    </div>
)

const Testfun = () => (
    Test("おもしろ")
)

export default Testfun
