import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
import NewItem from "./components/NewItem";

function App() {
    const response = [
        {
            itemName: "Nirma",
            itemDate: "20",
            ItemMonth: "June",
            itemyear: "1998",
        },
        {
            itemName: "Nirma2",
            itemDate: "202",
            ItemMonth: "June2",
            itemyear: "19982",
        },
        {
            itemName: "Nirma3",
            itemDate: "203",
            ItemMonth: "June3",
            itemyear: "19983",
        },
    ];

    function printProductData(data) {
      console.log("i am inside APP.js")
      console.log(data)
    }
    return (
        <div>
          <NewItem Ehtesham = {printProductData} />

            <Card>
                <Item name={response[0].itemName}>
                    Hello main hun apki first item
                </Item>
                <ItemDate
                    day={response[0].itemDate}
                    month={response[0].ItemMonth}
                    year={response[0].itemyear}
                ></ItemDate>

                <Item name={response[1].itemName}></Item>
                <ItemDate
                    day={response[1].itemDate}
                    month={response[1].ItemMonth}
                    year={response[1].itemyear}
                ></ItemDate>

                <Item name={response[2].itemName}></Item>
                <ItemDate
                    day={response[2].itemDate}
                    month={response[2].ItemMonth}
                    year={response[2].itemyear}
                ></ItemDate>
                <div className="App">Hello Jee</div>
            </Card>

            <NewItem />
        </div>
    );
}

export default App;
