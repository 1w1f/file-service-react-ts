import { Route, Routes, Navigate } from "react-router-dom";
import AuthRoute from "./AuthRoute/AuthRoute";
import BaseLayout from "./layout/baseLayout";
import DiskDetail from "./pages/DiskDetail";
import Files from "./pages/Files";
import Home from "./pages/Home/Home";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} replace />} />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route element={<BaseLayout />}>
        <Route index element={<Navigate to={"/home"} replace />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/files"
          element={
            <AuthRoute>
              <Files />
            </AuthRoute>
          }
        />
        <Route
          path="/diskDetail"
          element={
            <AuthRoute>
              <DiskDetail />
            </AuthRoute>
          }
        />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to={"/404"} replace />} />
    </Routes>
  );
}

export default App;
