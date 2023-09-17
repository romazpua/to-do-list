import React, {useEffect, useRef} from 'react';
import styles from './Popup.module.css'
import {useDispatch, useSelector} from "react-redux";
import {popupSelect, setPopup} from "../redux/slices/popupSlice";
import {actionsTypes} from "./helpers";
import {deleteTask} from "../redux/slices/tasksSlice";

const Popup = () => {

    const dispatch = useDispatch()
    const {show, coordinates, title, action} = useSelector(popupSelect)
    const block = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick)
        return () => document.removeEventListener('mousedown', handleDocumentClick)
    }, []);

    const handleDocumentClick = (e) => {
        if (show && !e.composedPath().includes(block.current)) {
            closePopup()
        }
    }

    const closePopup = () => {
        dispatch(setPopup({
            show: false,
            coordinates: [],
            title: '',
            action: {}
        }))
    }

    const executeAction = () => {

        switch (action.type){
            case actionsTypes.DELETE_TASK:
                dispatch(deleteTask(action.payload))
                break
        }

        closePopup()
    }

    return (
        <div ref={block} className={styles.block} style={{top: coordinates[1] + 'px', left: coordinates[0] + 'px'}}>
            <button onClick={closePopup} className={styles.btn + ' ' + styles.cancel}>cancel</button>
            <button onClick={executeAction} className={styles.btn + ' ' + styles.action}>{title}</button>
        </div>
    );
};

export default Popup;