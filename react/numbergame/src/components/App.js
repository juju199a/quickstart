import { useEffect, useState } from "react";
import Button from "./Button";

function App() {

    const [count, setCount] = useState(1);
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState(0);
    const numbers = [1,2,3,4,5,6,7,8,9,0];

    const handlerNumberClick = (e) => {
        const nextNumber = number + e.target.value;
        setNumber(nextNumber);
    };

    const handlerCheckClick = () => {
        const ipt = Number(number);
        const ans = Number(answer);
        const diff = ans - ipt;

        if (diff === 0) {
            setMessage('정답입니다.');
        }else {
            const nextCount = Number(count) + 1;
            setCount(nextCount);
            setNumber("");
            setMessage('정답이 아닙니다.');
        }
    };

    const handlerDeleteClick = () => {
        const nextNumber = number.slice(0,number.length-1);
        setNumber(nextNumber);
    };

    useEffect(() => {
        setAnswer(Math.floor(Math.random() * 100) + 1);
    }, []);

    return <div>
        <div>숫자 맞추기 게임(1~100)</div>
        <div>
            <div>정답: {answer}</div>
            <div>{message}</div>
            <div>{count}회차</div>
            <div>{number}</div>
            <div>
                {numbers.map((num) => {
                    return <button value={num} onClick={handlerNumberClick}>{num}</button>;
                })}
                
                <button onClick={handlerDeleteClick}>Del</button>
                <button onClick={handlerCheckClick}>확인</button>
            </div>
        </div>
    </div>
}

export default App;