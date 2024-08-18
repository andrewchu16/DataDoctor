import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import LandingPage from "./pages/landingPage/index.tsx";
import Home from "./pages/home/index.tsx";
import PageNotFound from "./pages/pageNotFound/index.tsx";
import Profile from "./pages/profile/index.tsx";
import SignUp from "./pages/signUp/index.tsx";
import Layout from "./components/layout/index.tsx";
import PrivateRoute from "./components/privateRoute/index.tsx";
import LogIn from "./pages/logIn/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <BrowserRouter>
            <AuthProvider>
                <div className="constrainer">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        {/* <Route element={<PrivateRoute />}> */}
                        <Route element={<Layout />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        {/* </Route> */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
