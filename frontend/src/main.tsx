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

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route element={<PrivateRoute />}>
                        <Route element={<Layout />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
