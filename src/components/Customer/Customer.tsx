// 리액트 기능을 사용하기 위해 import함.
import React from "react";
// material ui
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Gender, ICustomer } from "../../Interface/interface";
import styled from "styled-components";

const Customer = ({ info }: ICustomer) => {
    return (
        <CustomTableRow>
            <TableCell>{info.id}</TableCell>
            <TableCell>
                <img src={info.image} alt="profile" />
            </TableCell>
            <TableCell>{info.name}</TableCell>
            <TableCell>{info.number}</TableCell>
            <TableCell>{Gender[info.gender]}</TableCell>
            <TableCell>{info.job}</TableCell>
        </CustomTableRow>
    );
};

const CustomTableRow = styled(TableRow)`
    transition: 0.2s;
    &:hover {
        background-color: black;
        opacity: 0.5;

        & > td {
            color: white;
        }
    }
`;


// 컴포넌트 내보내기
export default Customer;
