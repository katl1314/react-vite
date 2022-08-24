import React from "react";
import { H1 } from "../../Font/Font.style";
const Logo = React.memo(() => {
    return (
        <H1>
            <a href="/">편의점 재고관리</a>
        </H1>
    );
});

export default Logo;
