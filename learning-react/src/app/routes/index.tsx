import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/entrar" element={<Login />} />  */}
                <Route path="/home" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}