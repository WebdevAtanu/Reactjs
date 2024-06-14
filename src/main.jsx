import React from 'react'; //react component imported
import ReactDOM from 'react-dom/client'; //react-dom/client component imported
import './index.css'; //css file imported
import App from './App'; //default function 'App' imported
import {NewApp,Click,StateChange,MyProp,InputBox,Toggle,FormHandle,Conditioning,ExtProp,UseEffectFunc,ModuleCss,MyCard,StudentList,PropList,ChildProp,UseMemoFunc,DomUseRef,Hoc,ReactRouter,ApiFetcher} from './App'; // imported component should wrap in '{}' brackets.
import ClassApp from './ClassApp';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NewApp/>
    <Click/>
    <StateChange/>
    <MyProp name={"Atanu"} surname="Mondal"/>
    <InputBox/>
    <Toggle/>
    <FormHandle/>
    <Conditioning/>
    <ExtProp/>
    <ClassApp/>
    <UseEffectFunc/>
    <ModuleCss/>
    <MyCard/>
    <StudentList/>
    <PropList/>
    <ChildProp/>
    <UseMemoFunc/>
    <DomUseRef/>
    <Hoc/>
    <ReactRouter/>
    <ApiFetcher/>
  </React.StrictMode>,
)
