import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
    const navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.setItem('auth', 'false');
        navigate("/login")
    }
    return (
        <div className={classes.header}>
            <h1>Educational Institutions</h1>
            <nav>
                <button onClick={logOutHandler}>Logout</button>
            </nav>
        </div>
    )
}