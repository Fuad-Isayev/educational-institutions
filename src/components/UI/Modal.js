import { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import classes from "./Modal.module.css";

const ResultModal = forwardRef(function Modal({ children, onClose }, ref) {
    return <dialog ref={ref} onClose={onClose} className={classes.modal}>
        {children}
        <form method="dialog">
            <button className={classes.iconButton}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        </form>
    </dialog>
})

export default ResultModal;