import { Link } from "react-router-dom";

import classes from "./SideBar.module.css";

const paths = ["universities", "schools", "highschools"]

export default function SideBar() {
    return (
        <div className={classes.sidebar}>
            <header>
                <h1>
                    Sections
                </h1>
            </header>
            <ul>
                {paths.map(path => (
                    <li key={path}>
                        <Link relative="path" to={path}>{path}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}