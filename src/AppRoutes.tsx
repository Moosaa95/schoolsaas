import { Route, Routes } from "react-router-dom";
import { Login } from "./auth";
import Layout from "./layout/Layout";
import DashboardLayout from "./layout/dashboard/DashboardLayout";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import AdminDashboard from "./layout/dashboard/AdminDashboard";
import StudentDashboard from "./layout/dashboard/StudentDashboard";
import TeacherDashboard from "./layout/dashboard/TeacherDashboard";
import ParentDashboard from "./layout/dashboard/ParentDashboard";
import {ProtectedRoute, RoleBasedRedirect} from "./auth/PrivateRoute";
import { ListAnnouncements, ListAssignments, ListClasses, ListEvents, ListExams, ListLessons, ListParents, ListResults, ListStudents, ListSubjects, ListTeachers,  StudentDetail,  TeacherDetail } from "./pages";

export default function AppRoutes() {
    return (
        <Routes>
        {/* Public Routes */}
            <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            </Route>
    
            {/* Protected Routes */}
            <Route path="/dashboard">
                <Route element={<DashboardLayout /> }>
                    {/* <Route index element={<RoleBasedRedirect />} /> */}
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="student" element={<StudentDashboard />} />
                    <Route path="teacher" element={<TeacherDashboard />} />
                    <Route path="parent" element={<ParentDashboard />} />
                    
                    <Route path="teachers">
                        <Route path="list" element={<ListTeachers />} />
                        <Route path=":id" element={<TeacherDetail />} />

                    </Route>
                    <Route path="students">
                        <Route path="list" element={<ListStudents />} />
                        <Route path=":id" element={<StudentDetail />} />
                    </Route>
                    <Route path="parents">
                        <Route path="list" element={<ListParents />} />
                    </Route>
                    <Route path="subjects">
                        <Route path="list" element={<ListSubjects />} />
                    </Route>
                    <Route path="classes">
                        <Route path="list" element={<ListClasses />} />
                    </Route>
                    <Route path="lessons">
                        <Route path="list" element={<ListLessons />} />
                    </Route>
                    <Route path="exams">
                        <Route path="list" element={<ListExams />} />
                    </Route>
                    <Route path="assignments">
                        <Route path="list" element={<ListAssignments />} />
                    </Route>
                    <Route path="results">
                        <Route path="list" element={<ListResults />} />
                    </Route>
                    <Route path="events">
                        <Route path="list" element={<ListEvents />} />
                    </Route>
                    <Route path="announcements">
                        <Route path="list" element={<ListAnnouncements />} />
                    </Route>
                </Route>
            </Route>
    
            {/* Catch-all Route for undefined paths */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}


{/* <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="unauthorized" element={<UnauthorizedPage />} />
                <Route path="teacher" element={<TeacherDashboard />} />
                <Route path="student" element={<StudentDashboard />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="parent" element={<ParentDashboard />} />
            </Route> */}