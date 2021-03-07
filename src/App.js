import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const friends  =[
    {name: "Khairul", roll: "01", GPA: "5.00"},
    {name: "Taki Kauser", roll: "02", GPA: "5.00"},
    {name: "Omer Faruk Rafsan", roll: "03", GPA: "5.00"},
    {name: "Mahfuz Alom", roll: "04", GPA: "5.00"},
    {name: "Tonmoy Kumar Roy", roll: "05", GPA: "5.00"}
  ]
  const food = [
    {name: 'am', type: 'misty', time : 'summer', color: 'yellow'},
    {name: 'lichu', type: 'misty', time : 'summer', color: 'red'},
    {name: 'kathal', type: 'misty', time : 'summer', color: 'green'},
    {name: 'kumra', type: 'no-test', time : 'winter', color: 'green'}
  ]
  var person = {
    name: "Dr. mahfuz",
    age: 65,
    home: 'borisal',
    town: 'Dhaka',
  }
  // const studentName = students.map(student => student.name);
  // console.log(studentName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit korteci ha ha ha <code>src/App.js</code> and save to reload.
        </p>
        <Users></Users>
        <Counter></Counter>
        {/* <ul>
          <li>{friends[0]}</li>
          <li>{friends[1]}</li>
          <li>{friends[2]}</li>
          <li>{friends[3]}</li>
        </ul> */}
        <ul>
          {
            friends.map(friend=> <li>{friend.name}</li>)
          }
        </ul>

        {
          food.map(foods =><Food foods={foods} ></Food>)
        }
        <Person name='nayok' naika = 'sabana'></Person>
        <Person name='dipjol' naika = 'sabnur'></Person>
        <Person name='kalia' naika = 'sumi'></Person>

        <Student name="Khairul" roll="01" GPA="5.00"></Student>
        <Student name="Taki Kauser" roll="02" GPA="5.00"></Student>
        <Student name="Omer Faruk Rafsan" roll="03" GPA="5.00"></Student>
        <Student name="Mahfuz Alom" roll="04" GPA="5.00"></Student>

        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
        <Friend friend = {friends[0]} ></Friend>
        <Friend friend = {friends[1]} ></Friend>
        <Friend friend = {friends[2]} ></Friend>
        <Friend friend = {friends[3]} ></Friend>
        <Friend friend = {friends[4]} ></Friend>


        <h1>Person Detail : {person.name +" "+ person.age +" "+ person.town}</h1>
      </header>
    </div>
  );
}
function Friend(props){
  const friendStyle={
    backgroundColor: 'lightGray',
    width: '250px',
    hight: '250px',
    borderRadius: '5px',
    color: 'black',
    margin: '5px'
  }
  const {name, roll} = props.friend;
  return(
    <div style = {friendStyle}>
      <h2>name: {name}</h2>
      <h4>roll: {roll}</h4>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border: '2px solid blue',
    margin: '5px',
    padding: '5px 30%',
    color: 'tomato',
    backgroundColor: 'gray'
  }
  
  return (
    <div style = {personStyle}>    
    {/* <div style = {{border: '2px solid blue', margin: '5px', padding: '5px 30%'}}></div> this line is simeler to 31 no line  */}
      <h2>{props.name}</h2>
      <h3>{props.naika}</h3>
      <h4>home: borisal</h4>
    </div>
  )
}
function Student(props){
  return(
    <div style={{border: '2px solid red', padding: '5px', margin: '5px', width: '70%'}}>
      <h4>Name: {props.name}</h4>
      <h6>Roll: {props.roll}</h6>
      <h6>GPA: {props.GPA}</h6>
    </div>
  )
}

function Food(props){
  const foodStyle ={
    backgroundColor: 'tomato',
    color: 'black',
    borderRadius: '5px',
    border: '2px solid black',
    width: '30%',
    height: '250px',
    margin: '5px'
  }
  const{name, type, time} = props.foods;
  return(
    <div style = {foodStyle}>
      <h2>Name : {name}</h2>
      <h3>Type : {type}</h3>
      <h4>Time : {time}</h4>
    </div>
  )
}

//state
function Counter(){
  const [count, setCount] = useState(0);
  const countIncrease = () => setCount(count +1);
  const countDecrease = () => setCount(count -1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={countIncrease}>Click Me</button>
      <button onClick={countDecrease}>Click Me</button>
    </div>
  )
}

//user  this very very important for me

function Users(){
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);
  console.log(users)
  return(
    <div>
      <h1>Total Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
      
    </div>
  )
};
export default App;
