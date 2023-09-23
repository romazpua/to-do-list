import React, {useEffect, useState} from 'react'
import styles from './EditCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {editCardSelect, handleEditCard} from "../redux/slices/editCardSlice";
import {actionsTypes, timestampToDate} from "./helpers";
import {setPopup} from "../redux/slices/popupSlice";
import {singleTaskSelect} from "../redux/slices/tasksSlice";

const EditCard = () => {

    const {sizes, timestamp} = useSelector(editCardSelect)
    const dispatch = useDispatch()

    const task = useSelector(state => singleTaskSelect(state, timestamp)) // ?????????????????

    console.log('task', task)

    const [editCard, setEditCard] = useState(sizes)

    useEffect(() => {
        setEditCard({
            width: '1200px',
            height: '600px',
            left: '50%',
            top: '50%'
        })
    }, []);

    const callPopup = (e) => {
        const x = e.clientX
        const y = e.clientY
        dispatch(setPopup({
            show: true,
            coordinates: [x,y],
            title: 'delete',
            action: {
                type: actionsTypes.DELETE_TASK,
                payload: timestamp
            }
        }))
    }

    const closeEditCard = () => {
        setEditCard(sizes)
        const hideEditCard = () => {
            dispatch(handleEditCard({
                show: false,
                sizes: {
                    width: '0px',
                    height: '0px',
                    left: '0px',
                    top: '0px',
                },
                timestamp: ''
            }))
        }

        const timer = setTimeout(()=>{
            hideEditCard()
            clearTimeout(timer)
        }, 500)
    }

    return (
        <>
            <div onClick={closeEditCard} className={styles.edit_card_layer}></div>
            <div className={styles.edit_card}
                 style={{
                     width: editCard.width,
                     height: editCard.height,
                     left: editCard.left,
                     top: editCard.top,
                 }}>
                <div className={styles.head}>
                    <div className={styles.head_title}>
                        <h4 className={styles.head_title}>{'title'}</h4>
                    </div>
                    <div className={styles.head_controls}>
                        <svg onClick={(e)=>callPopup(e)} height="1em" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                        <span className={styles.timestamp}>{timestampToDate(timestamp)}</span>
                    </div>
                </div>
                <div className={styles.body}>
                    <p className={styles.body_value}>{'value'}</p>
                </div>
            </div>
        </>

    )
}

export default EditCard