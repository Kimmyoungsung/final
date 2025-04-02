import './App.css';
import Box from "./component/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-close-up-of-big-stone-isolated-big-rock-png-image_10211347.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://media.istockphoto.com/id/1146263300/ko/%EB%B2%A1%ED%84%B0/%EA%B0%80-%EC%9C%84-%EB%B2%A1%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=612x612&w=0&k=20&c=tvVxRZQlHbhDeDBObE2kRMT3D_wogwuhaJe97CD722A="
  },
  paper: {
    name: "Paper",
    img: "https://www.hobbycraft.co.uk/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8aedf2d1/images/large/584769_1000_1_-white-premium-smooth-paper-a4-100-pack.jpg"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setcomputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);
  };

  const randomChoice=() => {
    let itemArray = Object.keys(choice);//객체의 키값만 뽑아서 어레이로 만들어준다다
    console.log("item array",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="computerSelect" item={computerSelect}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
