import { Outlet } from "react-router-dom";
import Header from "./header/Header.tsx";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
