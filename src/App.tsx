import {Routes, Route, Navigate} from "react-router-dom";
import { Home, About, Contact, Search, Resume, Skills } from "./pages/pages.tsx";
import Layout from "./layouts/Layout.tsx";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/search" element={<Search />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/skills" element={<Skills />} />
                {/* fallback for old routes like /services */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}