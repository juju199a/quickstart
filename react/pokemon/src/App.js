import { useEffect, useState } from 'react';
import mockItems from './pokemons';

function Pokemon({item, onDelete}) {

    const handleDeleteClick = () => {
        onDelete(item.id);
    }

    return (
        <div>
            No.{item.id} {item.name}
            <button onClick={handleDeleteClick}>삭제</button>
        </div>
    );
}

function App() {
    
    // const [direction, setDirection] = useState(1);
    // const [items, setItems] = useState(mockItems);

    // const handleAscClick = () => setDirection(1);
    // const handleDescClick = () => setDirection(-1);
    // const handleDeleteClick = (id) => {
    //     const nextItems = items.filter((item) => item.id != id);
    //     setItems(nextItems);
    // }

    // const sortedItems = items.sort((a,b) => direction * (a.id - b.id));

    // return (
    //     <div>
    //         <div>
    //             <button onClick={handleAscClick}>순서대로</button>
    //             <button onClick={handleDescClick}>역순으로</button>
    //         </div>
    //         <ul>
    //             {sortedItems.map((item) => (
    //                 <li key={item.id}><Pokemon item={item} onDelete={handleDeleteClick}/></li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    // const [first, setFirst] = useState(1);
    // const [second, setSecond] = useState(1);

    // const handleFirstClick = () => setFirst(first + 1);

    // const handleSecondClick = () => setSecond(second + 1);

    // useEffect(() => {
    //     console.log('렌더링 이후', first, second);
    // }, [first, second]);

    // console.log('렌더링', first, second);

    // return (
    //     <div>
    //     <h1>
    //         {first}, {second}
    //     </h1>
    //     <button onClick={handleFirstClick}>First</button>
    //     <button onClick={handleSecondClick}>Second</button>
    //     </div>
    // );
  const [num, setNum] = useState(-1);

  const handleClick = () => setNum(num + 1);

  return (
    <div>
      <button onClick={handleClick}>더하기</button>
      {num}
      {num && <p>num이 0 보다 크다!</p>}
    </div>
  );

};

export default App;