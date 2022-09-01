import { memo } from "react";

const Button = ({ handlerCount }: { handlerCount: () => void }) => {
    return <button onClick={handlerCount}>클릭</button>;
};

export default memo(Button);
