import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import "./Assets/css/main.css";
import { QueryClient, QueryClientProvider } from "react-query";

// QueryClient객체 생성
const myQueryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* react-query 사용시 최상위 컴포넌트에 QueryClientProvider를 사용한다. */}
        <QueryClientProvider client={myQueryClient}>
            <BrowserRouter>
                <Reset />
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
