import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import { Contact, Login, Homepage } from "pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Homepage />
          </RequireAuth>
        }
      />
      <Route
        path="/contact-table"
        element={
          <RequireAuth>
            <Contact />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);
