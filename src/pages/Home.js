import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import classes from "./Home.module.css";

export default function Home() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('auth') === 'true';

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate])

    return <div className={classes.home}>
        <Header />
        <section>
            <aside>
                <SideBar />
            </aside>
            <main>
                <Outlet />
            </main>
        </section>
    </div>
}