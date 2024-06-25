import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Filters.module.css";

export default function Filters({ institutionType, onFilterChange }) {
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = useSelector(state => state[institutionType].filterFields);
    const dispatch = useDispatch();

    const changeHandler = (filterKey, filterValue) => {
        setSelectedFilters((previousFilters) => {
            const updatedFilters = { ...previousFilters };
            updatedFilters[filterKey] = filterValue;
            return updatedFilters;
        })
    }

    const clearFiltersHandler = () => {
        if (Object.keys(selectedFilters).length) {
            setSelectedFilters({})
            onFilterChange();
        }
    }

    useEffect(() => {
        //clear filters if there is any empty input
        if (Object.keys(selectedFilters).some(f => selectedFilters[f] == "")) {
            clearFiltersHandler();
        };

        if (Object.keys(selectedFilters).length) {
            const debounce = setTimeout(() => {
                onFilterChange(selectedFilters);
            }, 500)
            return () => clearTimeout(debounce)
        }
    }, [dispatch, selectedFilters])

    return (
        <div className={classes.filters}>
            {filters.length && filters.map(filter => (
                <div key={filter.key}>
                    <div className={classes.filter}>
                        <label htmlFor={filter.key}>{filter.key.replace("_", " ")}</label>
                        {filter.type === "select" ? (
                            <select
                                name={filter.key}
                                onChange={e => changeHandler(filter.key, e.target.value)}
                                value={selectedFilters[filter.key] || ""}
                            >
                                {filter.options.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={filter.key}
                                type={filter.type}
                                value={selectedFilters[filter.key] || ""}
                                onChange={e => changeHandler(filter.key, e.target.value)}
                            />
                        )}
                    </div>
                </div>
            ))}
            <div className={classes.button}>
                <button onClick={clearFiltersHandler}>Clear Filters</button>
            </div>
        </div>
    )
}