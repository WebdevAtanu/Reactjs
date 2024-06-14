import './App.css'; // The css file should be imported for use.
import { useState, useEffect, useMemo,useRef } from "react"; // Importing the state method.
import { NewWorld } from "./NewWorld"; // An external component imported.
import { Propfunc } from "./prop"; // An external component imported.
import style from "./custom.module.css"; //importing css as a module
import Button from 'react-bootstrap/Button'; //bootstrap import
import Card from 'react-bootstrap/Card';
import img from "./ex.jpg";
import {ListProp} from "./listProp";
import {Child} from "./childProp";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Home} from "./routerHome";
import {About} from "./routerAbout";
import {Def} from "./routerDef";

function App() {
    return (
        <div className="App">
      <header>
        Hello World
      </header>
      <NewWorld/>
    </div>
    );
}
export default App;


// This is a new component which is exist in same js file and exported.
export function NewApp() {
    return (
        <div className="App">
      <header>
        Hello New App
      </header>
      <hr/>
    </div>
    );
}

// Click event
export function Click() {
    let name = "Atanu";
    function alertevt() {
        alert("Button clicked by " + name);
    }
    return (
        <div className="App">
    <button onClick={alertevt}>First button</button> { /* Function call declartion*/ }
    <button onClick={() => alert("Second button clicked")}>Second button</button> { /* Inline button function*/ }
    <hr/>
    </div>
    )
}

// Using state
export function StateChange() {
    const [data, UpdateCount] = useState(0); // "data" is the initial variable which is used inside div, "UpdateCount" used for changing the state.
    function counter() {
        UpdateCount(data + 1);
    }
    return (
        <div className="App">
    <h1>Click to change state- {data}</h1>
    <button onClick={counter}>Count</button>
    <hr/>
  </div>
    )
}

// Props
export function MyProp(Myprops) {
    return (
        <div className="App">
      <h1>Hello {Myprops.name} {Myprops.surname}</h1> 
      <hr/>
    </div>
    )
}

// Input box
export function InputBox() {
    const [Inpdata, setData] = useState(null); // The initial value of 'Inpdata' is null.
    const [print, setPrint] = useState(false); // The setPrint function is false now.
    function GetText(data) {
        console.log(data.target.value); // This will print data in console.
        setData(data.target.value) // This will attach the input data to 'Inpdata'.
        setPrint(false); // 'setPrint' function will be false for retype.
    }
    return (
        <div className="App">
      {
        print ? // is the value of 'print' is true?
            <h1>{Inpdata}</h1> // Then 'Inpdata' will be returned
            : null // Or it will return null value.
        }
      <input type="text" onChange={GetText}></input>
      <button onClick={() => setPrint(true)}>Print Me</button>
      <hr/>
    </div>
    )
}

// Toggle button
export function Toggle() {
    const [stat, ChangeStat] = useState(true);
    return (
        <div className="App">
    {
        stat ?
            <h1>Show/Hide function</h1>
            : null
        }
      <button onClick={() => ChangeStat(!stat)}>Toggle</button>
      <hr/>
    </div>
    )
}

// Handling form
export function FormHandle() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [passwd, setPassword] = useState("");
    const [passlen, setLen] = useState(false);
    const [TnC, setTnc] = useState(false);
    const [opt, setopt] = useState("");
    function getData(e) {
        e.preventDefault();
        console.log(name, surname, passwd, TnC, opt,);
    }
    function passwordHandle(e) {
        let passlen = e.target.value.length;
        if (passlen < 6) {
            setLen(true);
        } else {
            setLen(false);
        }
    }

    return (
        <div className="App">
      <form onSubmit={getData} className="MyForm">
        <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)}/>
        <input type="password" placeholder="Enter 6 digit valid password" onChange={passwordHandle} onBlur={(e) => setPassword(e.target.value)}/>{passlen ? <span id="errorText">Password should be 6 digit</span> : ""}
       <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/> Check the box
        <select name="" id="" onChange={(e) => setopt(e.target.value)}>
          <option>DC</option>
          <option>Marvel</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <hr/>
    </div>
    )
}

// Conditioning
export function Conditioning() {
    const [log] = useState(true);
    return (
        <div className="App"> 
        {
        log === true ? <p>Log is true</p> : log === false ? <p>Log is false</p> : <p>Not defined</p>
        }
        <hr/>
        </div>
    )
}

// prop function
export function ExtProp(){
    function propData(){
        alert("It is prop data")
    }
    return(
       <div className="App">
           <Propfunc data={propData}/>
           <hr/>
       </div>
        )
}


//useEffect call for a particular state
export function UseEffectFunc(){
    let [counter1,update1]=useState(0);
    let [counter2,update2]=useState(0);
    const inc=()=>{
        update1(counter1+1);
    }
    const dec=()=>{
        update2(counter2-1)
    }
    useEffect(()=>{
        console.log("useEffect call on counter1 function")
        console.log(counter1*2);
    },[counter1])
    return(
        <div className="App">
            <p><span>{counter1}</span><span>{counter2}</span></p>
            <button onClick={inc}>Up</button>
            <button onClick={dec}>down</button>
            <hr/>
        </div>
        )
}


//CSS module
export function ModuleCss(){
    return(
        <div className="App">
        <div className={style.style}>
        <h1>Css module</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <hr/>
        </div>
        )
}


// bootstrap
export function MyCard() {
  return (
    <div className="App">
    <h1>Bootstrap Card</h1>
    <Card style={{ width: '20%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}


//making a list from array
export function StudentList(){
    const arr=[
        {id:1001,name:"ram"},
        {id:1002,name:"sam"},
        {id:1003,name:"tom"},
        ]
    return(
        <div className="App">
        <h1>Array map</h1>
        {/* mapping */}
        {
        arr.map((val,index)=>
            <p className="text-warning" key={index}><span>index-{index} </span><span>{val.id} </span><span>{val.name}</span></p> //map will return only one enclosed tag. key will discard warning.
        )}
        {/* mapping with ondition */}
        {
        arr.map((val,index)=>
            val.id!==1002?
            <p className="text-danger" key={index}><span>index-{index} </span><span>{val.id} </span><span>{val.name}</span></p> //turnery check discard the id:2 value
            :null
        )}

        </div>
        )
}

// parent to child prop
export function PropList(){
    const newArr=[
        {id:1001,name:"ram"},
        {id:1002,name:"sam"},
        {id:1003,name:"tom"},
        ]
    return(
        <div className="App">
        <h1>Array map via prop</h1>
        {
        newArr.map((item,index)=>
            <ListProp data={item} key={index}/>
        )
        }
        </div>
        )
}

// child to parent prop
export function ChildProp(){
    function showProp(data){
        console.log(data);
    }
    return(
        <div className="App">
        <h1>Child to parent prop</h1>
        <Child propFunc={showProp}/>
        </div>
    )
}


//useMemo return a function when a particular state updated 
export function UseMemoFunc(){
    let [counter1,update1]=useState(0);
    let [counter2,update2]=useState(0);
    const inc=()=>{
        update1(counter1+1);
    }
    const dec=()=>{
        update2(counter2-1)
    }
    const multiCounter1=useMemo(()=>{
        console.log("useMemo called on counter1")
        return counter1*2;
    },[counter1])
    return(
        <div className="App">
        <h1>useMemo return multiply function on counter1 only</h1>
            <p><span>{counter1}</span> <span>{counter2}</span></p>
            <p>Counter1 multiply with 2: {multiCounter1}</p>
            <button onClick={inc}>Up</button>
            <button onClick={dec}>down</button>
            <hr/>
        </div>
        )
}


// useRef use for dom element manipulation

export function DomUseRef(){
    const inputRef=useRef();
    function useRefFunc(){
        inputRef.current.value="atanu"; //set the value 'atanu'
        inputRef.current.focus(); //focus on box
        inputRef.current.style.color="red"; //changing the style
    }
    return(
        <div className="App">
            <input type="text" ref={inputRef}/>
            <button onClick={useRefFunc}>use Ref</button>
            <hr/>
        </div>
        )
}

// heigher order component use to return component as prop
function HOCcounter(){
    let [counter,setCount]=useState(0);
    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=>{setCount(counter+1)}}>Update</button>
        </div>
        )
}

export function Hoc(){
    return(
    <div className="App">
    <h1>HOC</h1>
    <div style={{display:'flex',gap:'0.5rem'}}>
    <HOCredbg cmp={HOCcounter}/>
    <HOCbluebg cmp={HOCcounter}/>
    <HOCgreenbg cmp={HOCcounter}/>
    </div>
    <hr/>
    </div>
    )
}

function HOCredbg(props){
    return(
        <div style={{backgroundColor:'red',padding:'1rem'}}>
            <props.cmp/>
        </div>
        )
}
function HOCgreenbg(props){
    return(
        <div style={{backgroundColor:'green',padding:'1rem'}}>
            <props.cmp/>
        </div>
        )
}
function HOCbluebg(props){
    return(
        <div style={{backgroundColor:'blue',padding:'1rem'}}>
            <props.cmp/>
        </div>
        )
}

//React router dom
export function ReactRouter()
{
    return(
    <div className="App">
        <h1>React router dom</h1>
        <Router>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* default route set on '/' */}
            <Route path="/" exact={true} element={<Def/>}/> 
            </Routes>
            
        </Router>
        <hr/>
    </div>
    )
}


//fetching api
export function ApiFetcher(){
    const [jsondata,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
            resp.json().then((data)=>{
                setData(data);
            })
        })
    },[])
    return(
        <div className="App">
            <h1>Fetch API</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Website</td>
                    </tr>
                    {
                    jsondata.map((item)=>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                    </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        )
}