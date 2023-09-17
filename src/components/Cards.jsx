import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask, tasksSelect} from "../redux/slices/tasksSlice";
import Card from "./Card";
import styles from './Cards.module.css'


const add_task_btn = <svg className={styles.item} height="1.2em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>

const Cards = () => {

    const dispatch = useDispatch()
    const todos = useSelector(tasksSelect)

    const getUTCTimestamp = () => {
        return new Date().toISOString()
    }

    const func = () => {
        dispatch(addTask({
            id: 1,
            done: false,
            title: 'New task',
            value: 'New task text',
            timestamp: getUTCTimestamp(),
        }))
    }

    return (
        <div className={styles.cards}>
            {
                todos?.map((todo, index) => {
                    return <Card key={index} todo={todo}/>
                })
            }
            {/*<div onClick={func} className="card add_task">{add_task_btn}</div>*/}
            <div onClick={func} className={styles.add_task_btn}>{add_task_btn}</div>
        </div>
    );
};

export default Cards;