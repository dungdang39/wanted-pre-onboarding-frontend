import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { lazy, Suspense } from "react";

const Todo = lazy(() => import("./pages/Todo"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/todo"
          element={
            <Suspense fallback={<div>... 로딩중</div>}>
              <Todo />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
