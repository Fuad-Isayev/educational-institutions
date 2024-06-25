import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../../components/Table";
import Filters from "../../components/Filters";
import { fetchAll, deleteItem } from "../../store/actions/universities-actions";

export default function Universities() {
    const universities = useSelector(state => state.universities.items);
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
            <h1>Universities</h1>
        </header>
        <section>
            <Filters institutionType="universities" onFilterChange={filterChangeHandler} />
        </section>
        <main>
            {!universities.length ?
                (<p>Data not found</p>) : (
                    <Table
                        data={universities}
                        onDeleteRow={deleteHandler}
                    />)
            }
        </main>
    </div>
}