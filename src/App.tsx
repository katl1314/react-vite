import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Customer from "./components/Customer/Customer";
import { ICustomerInfo } from "./Interface/interface";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function App() {
    const customers: ICustomerInfo[] = [
        {
            id: 1,
            image: "https://placeimg.com/64/64/1",
            name: "홍길동",
            number: 970530,
            gender: "male",
            age: 26,
            job: "프로그래머",
        },
        {
            id: 2,
            image: "https://placeimg.com/64/64/2",
            name: "최민혁",
            number: 970530,
            gender: "male",
            age: 26,
            job: "프로그래머",
        },
        {
            id: 3,
            image: "https://placeimg.com/64/64/3",
            name: "임꺽정",
            number: 970530,
            gender: "male",
            age: 26,
            job: "프로그래머",
        },
        {
            id: 4,
            image: "https://placeimg.com/64/64/4",
            name: "대관령",
            number: 970530,
            gender: "male",
            age: 26,
            job: "프로그래머",
        },
    ];

    return (
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
                    {customers.map((customer) => (
                        <Customer info={customer} />
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default App;
