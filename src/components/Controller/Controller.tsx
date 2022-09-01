import { MyContext } from "@/App";
import { useContext } from "react";

// 조작에 대한 Controller
const Controller = ({
    nameRef,
    jobRef,
}: {
    nameRef: React.MutableRefObject<null>;
    jobRef: React.MutableRefObject<null>;
}) => {
    const { handlerCustomerAdd } = useContext(MyContext);
    return (
        <>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" ref={nameRef}></input>
                <label htmlFor="name">직업</label>
                <input type="text" id="job" name="job" ref={jobRef}></input>
            </div>
            <div>
                {/* 리액트의 htmlFor는 html의 for와 같음. 해당 input의 id와 일치하면 해당 엘리먼트 포커스 */}
                <label>성별 </label>
                <label htmlFor="male">남성</label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    defaultChecked
                ></input>
                <label htmlFor="female">여성</label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                ></input>
            </div>
            <div>
                <button onClick={handlerCustomerAdd}>Add</button>
            </div>
        </>
    );
};

export default Controller;
