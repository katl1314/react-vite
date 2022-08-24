import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import "./css/main.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// react-query사용시 최상위 컴포넌트에서 작성한다.
// react-query를 사용하는 이유 => 서버의 실시간 데이터를 가져오는 것도 있음.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true, // browser에 포커스햇을때 데이터를 조회할지.
            retry: 3000,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Reset />
                {/* <ReactQueryDevtools initialIsOpen={true} /> */}
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
