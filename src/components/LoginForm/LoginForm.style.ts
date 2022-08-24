import styled from "styled-components";

interface LabelPropsType {
    type: "info" | "warn";
}

export const Form = styled.div`
    width: 80%;
    height: 400px;
    margin: 0 auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
`;

export const Label = styled.div`
    font-size: ${(props: LabelPropsType) =>
        props.type === "info" ? "14px" : "12px"};
    font-weight: bold;
    color: ${(props: LabelPropsType) =>
        props.type === "info" ? "#000" : "#f00"};
    margin: 0.2rem 0px;
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 0px;
    border: 0px solid;
    background: black;
    font-size: 15px;
    color: white;
    padding: 10px;
    cursor: pointer;
`;
