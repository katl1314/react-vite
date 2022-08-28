import "./App.css";
import Customer from "./components/Customer/Customer";
import { ICustomerInfo } from "./Interface/interface";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { useQuery } from "react-query";
import { useState } from "react";
// 절대 경로
import { customer } from "@/api/customer";

function App() {
    const [customers, setCustomers] = useState([]);

    const getAsyncCustomer = async () => {
        try {
            const response = await customer.get("customer", {});
            const data = await response.json();
            return data;
        } catch (err: any) {
            throw new Error(err);
        }
    };

    // 서버의 최신 데이터를 가리키기 위해 useQuery를 사용하였다.
    const { isLoading } = useQuery(["customer"], getAsyncCustomer, {
        refetchOnWindowFocus: true,
        retryDelay: 3000,
        onSuccess: (data) => {
            setCustomers(data);
        },
        onError: (err) => {
            console.error(err);
        },
    });

    return (
        <div>{isLoading ? <Loading /> : <Content customers={customers} />}</div>
    );
}

const Loading = () => {
    return <div>로딩중...</div>;
};

const Content = ({ customers }: { customers: ICustomerInfo[] }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}>
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((customer, index) => (
                                <Customer
                                    key={`${customer.id}_${index}`}
                                    info={customer}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default App;
