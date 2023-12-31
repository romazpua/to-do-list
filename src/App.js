import './main.css'
import Cards from "./components/Cards";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setTasks} from "./redux/slices/tasksSlice";
import {data} from "./data";
import Popup from "./components/Popup";
import {popupSelect} from "./redux/slices/popupSlice";
import QuillEditor from "./components/QuillEditor";

function App() {

    const dispatch = useDispatch()
    const {show} = useSelector(popupSelect)

    useEffect(() => {
        dispatch(setTasks(data))
    }, []);

    return (
        <div className="App">
            {show && <Popup/>}
            <div className="container">
                <h1 className="list_title">ToDo List</h1>
                <Cards/>
                <QuillEditor/>
            </div>
        </div>
    );
}

export default App;