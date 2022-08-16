import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Page2 from "../Page/Page2";
import Page3 from "../Page/Page3";
import Page4 from "../Page/Page4";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page2" element={<Page2 />}></Route>
            <Route path="/page3" element={<Page3 />}></Route>
            <Route path="/page4" element={<Page4 />}></Route>
        </Routes>
    );
};

export default PageRouter;
