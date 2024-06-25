import { useEffect, useRef } from "react";
import Modal from "./UI/Modal";

import classes from "./CorporaModal.module.css";

export default function CorporaModal({ listOfCorpora, show, onClose }) {
    const corporaModal = useRef();
    
    useEffect(() => {
        if (show) corporaModal.current.showModal();
    }, [show])

    return <Modal ref={corporaModal} onClose={onClose} >
        <div className={classes.corporaModal}>
            <ul>
                {listOfCorpora.map(corpora => <li key={corpora}>{corpora}</li>)}
            </ul>
        </div>
    </Modal>
}