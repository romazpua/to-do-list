import './style.css'
import Cards from "./components/Cards";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setTasks} from "./redux/slices/tasksSlice";
import {data} from "./data";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTasks(data))
    }, []);

  return (
    <div className="App">
        <div className="container">
            <h1 className="title">ToDo List</h1>
            <Cards/>
        </div>
    </div>
  );
}

export default App;