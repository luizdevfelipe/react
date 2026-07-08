import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard, Login, Test } from "../pages";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} /> 
                <Route path="/home" element={<Dashboard />} />
                <Route path="/" element={<Test />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}