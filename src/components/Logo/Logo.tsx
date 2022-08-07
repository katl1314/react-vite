import React from "react";
import { H1 } from "./Logo.style";
const Logo = React.memo(() => {
    return (
        <H1>
            <a href="/">Blog</a>
        </H1>
    );
});

export default Logo;
