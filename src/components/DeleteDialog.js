import Modal from "./UI/Modal";

import classes from "./DeleteDialog.module.css"
import { useEffect, useRef } from "react";

export default function DeleteDialog({ toBeDeletedItem, onClose, onDelete }) {
    const deleteDialogRef = useRef();

    useEffect(() => {
        if (toBeDeletedItem) deleteDialogRef.current.showModal();
    }, [toBeDeletedItem])

    const closeHandler = () => {
        deleteDialogRef.current.close()
    }

    const deleteHandler = (id) => {
        onDelete(id);
        closeHandler();
    }

    return (
        <Modal ref={deleteDialogRef} onClose={onClose}>
            <div className={classes.deleteDialog}>
                <h1>Are you sure?</h1>
                <div className={classes.control}>
                    <button onClick={() => deleteHandler(toBeDeletedItem)} className={classes.positive}>Yes</button>
                    <button className={classes.negative} onClick={closeHandler}>No</button>
                </div>
            </div>
        </Modal>
    )
}