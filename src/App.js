import "./App.css";
import react, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrollTop/scrollTop";
import Loading from "./components/loading/loading";

const Home = react.lazy(() => import("./components/pages/home"));
const Tour = react.lazy(() => import("./components/pages/tour"));
const Signup = react.lazy(() => import("./components/pages/signup"));
const Faq = react.lazy(() => import("./components/pages/faq"));
const Tourism = react.lazy(() => import("./components/pages/tourism"));

function App() {
  return (
    <react.Fragment>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/tourism"
            exact
            element={
              <Suspense fallback={<Loading />}>
                <Tourism />
              </Suspense>
            }
          />
          <Route
            path="/tour"
            exact
            element={
              <Suspense fallback={<Loading />}>
                <Tour />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            exact
            element={
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            exact
            element={
              <Suspense fallback={<Loading />}>
                <Faq />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </react.Fragment>
  );
}

export default App;
