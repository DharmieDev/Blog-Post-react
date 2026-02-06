import { Routes, Route } from "react-router";
import "./App.css";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";

// Lazy loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const SideBar = lazy(() => import("./pages/SideBar"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SideBar />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
