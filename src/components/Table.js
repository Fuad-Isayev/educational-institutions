import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import classes from "./Table.module.css";
import CorporaModal from './CorporaModal';
import DeleteDialog from './DeleteDialog';

export default function Table({ data, onDeleteRow }) {
    const [listOfCorpora, setListOfCorpora] = useState([])
    const [showCorporaModal, setShowCorporaModal] = useState(false);
    const [toBeDeletedItem, setToBeDeletedItem] = useState(null);

    const viewCorporaHandler = (corpora) => {
        setShowCorporaModal(true);
        setListOfCorpora(corpora);
    }

    const closeCorporaHandler = () => {
        setShowCorporaModal(false);
    }

    const deleteRowHandler = (id) => {
        setToBeDeletedItem(id);
    }

    const closeDeleteDialogHandler = () => {
        setToBeDeletedItem(false);
    }

    const headers = Object.keys(data[0]);
    return (
        <div className={classes.table}>
            <CorporaModal
                show={showCorporaModal}
                onClose={closeCorporaHandler}
                listOfCorpora={listOfCorpora}
            />
            <DeleteDialog
                toBeDeletedItem={toBeDeletedItem}
                onClose={closeDeleteDialogHandler}
                onDelete={onDeleteRow}
            />
            <table className={classes.table}>
                <thead>
                    <tr>
                        {headers.map((key) => (
                            <th key={key}>{key.replace("_", " ")}</th>
                        ))}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {headers.map(header => (
                                <td key={header}>{header === "corpus" ?
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        onClick={() => viewCorporaHandler(item.corpus)}
                                    /> :
                                    item[header]}</td>
                            ))}
                            <td className={classes.deleteIcon}>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    onClick={() => deleteRowHandler(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}