const ConstItemArr = () => {
    const itemArr = [
        {
            name: "CPU",
            price: 400000,
            quantity: 1,
        },
        {
            name: "Main Board",
            price: 120000,
            quantity: 1,
        },
        {
            name: "DDR6 RAM",
            price: 640000,
            quantity: 2,
        },
    ]

    return (
        <div className="DataType">
            {itemArr[0].name}, {itemArr[0].price}, {itemArr[0].quantity}<br/>
            {itemArr[1].name}, {itemArr[1].price}, {itemArr[1].quantity}<br/>
            {itemArr[2].name}, {itemArr[2].price}, {itemArr[2].quantity}<br/>
        </div>
    );
}

export default ConstItemArr;
