import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../../components/Table";
import Filters from "../../components/Filters";
import { fetchAll, deleteItem } from "../../store/actions/schools-actions";

export default function Schools() {
    const schools = useSelector(state => state.schools.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch])

    const deleteHandler = (id) => {
        dispatch(deleteItem(id));
    }

    const filterChangeHandler = (query) => {
        dispatch(fetchAll(query))
    }

    return <div className="institutions">
        <header>
            <h1>Schools</h1>
        </header>
        <section>
            <Filters institutionType="schools" onFilterChange={filterChangeHandler} />
        </section>
        <main>
            {!schools.length ?
                (<p>Data not found</p>) : (
                    <Table
                        data={schools}
                        onDeleteRow={deleteHandler}
                    />)
            }
        </main>
    </div>
}