import React from 'react';
import {svg_check, svg_del, svg_edit, svg_move_down, svg_move_top, svg_uncheck} from "./svgs";
import {deleteTask} from "../redux/slices/tasksSlice";
import {useDispatch} from "react-redux";
import styles from './Card.module.css'


const Card = ({todo}) => {

    const {id, done, title, value, timestamp} = todo

    const dispatch = useDispatch()

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = String(date.getUTCFullYear()).slice(2);
        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    const delTodo = () => {
        dispatch(deleteTask(timestamp))
    }

    return (
        <div className={styles.card}>
            {done ? svg_check : svg_uncheck}
            <h4 className="card_title item">{title}</h4>
            {svg_edit}
            <svg onClick={delTodo} className="del item" height="1em" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
            {svg_move_top}
            {svg_move_down}
            <span className='timestamp'>{formatDate(timestamp)}</span>
        </div>
    );
};

export default Card;