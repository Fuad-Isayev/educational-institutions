import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../../components/Table";
import Filters from "../../components/Filters";
import { fetchAll, deleteItem } from "../../store/actions/highschools-actions";

export default function HighSchools() {
    const highSchools = useSelector(state => state.highSchools.items);
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
            <h1>High Schools</h1>
        </header>
        <section>
            <Filters institutionType="highSchools" onFilterChange={filterChangeHandler} />
        </section>
        <main>
            {!highSchools.length ?
                (<p>Data not found</p>) : (
                    <Table
                        data={highSchools}
                        onDeleteRow={deleteHandler}
                    />)
            }
        </main>
    </div>
}