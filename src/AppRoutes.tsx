import { Route, Routes } from "react-router-dom";
import { Home, About, AdminDashboard, TeacherDashboard, StudentDashboard, ParentDashboard } from "./pages";
import { Login } from "./auth";
import Layout from "./layout/Layout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/parent/dashboard" element={<ParentDashboard />} />
        </Routes>
    );
}
