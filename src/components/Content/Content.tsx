import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import React, { ReactNode, useContext } from "react";
import Customer from "../Customer/Customer";
import { MyContext } from "@/App";
const Content = React.memo(({ children }: { children: ReactNode }) => {
    const { customers, handlerDelete } = useContext(MyContext);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                    {children}
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>번호</TableCell>
                                    <TableCell>이미지</TableCell>
                                    <TableCell>이름</TableCell>
                                    <TableCell>생년월일</TableCell>
                                    <TableCell>성별</TableCell>
                                    <TableCell>직업</TableCell>
                                    <TableCell>삭제</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((customer, index) => (
                                    <Customer
                                        key={`${customer.id}_${index}`}
                                        info={customer}
                                        handlerDelete={handlerDelete}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
});

export default Content;
