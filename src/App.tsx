import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Customer from "./components/Customer/Customer";
import { ICustomerInfo } from "./Interface/interface";
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
            name: "박길동",
            number: 123456,
            gender: "female",
            age: 26,
            job: "프로그래머",
        },
    ];
    return (
        <div>
            <Customer info={customers} />
        </div>
    );
}

export default App;
