import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

export default function Login() {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        navigate("/")
    }
    return <div className={classes.login}>
        <section>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <button>Login</button>
            </form>
        </section>
    </div>
}