function DestructTest() {
    let coffee = {
        name : "test",
        price : 4700
    }

    let coffeeName = coffee.name
    let coffeePrice = coffee.price

    console.log(coffeeName)
    console.log(coffeePrice)

    let {name: nameTest, price: priceTest} = coffee

    console.log(nameTest)
    console.log(priceTest)

    let {undef: undefTest} = coffee

    console.log(undefTest)

    let {name, price} = coffee

    console.log(name)
    console.log(price)

    const arrName = [
        "index1", "index2", "index3"
    ]

    const idx1 = arrName[0]
    const idx2 = arrName[1]
    const idx3 = arrName[2]

    console.log(idx1)
    console.log(idx2)
    console.log(idx3)

    const arrTest = [
        "test1", "test2"
    ]

    const [idx1, idx2, idx3] = arrTest

    console.log(idx1)
    console.log(idx2)
    console.log(idx3)

    return (
        <div className="DestructTest">
            <p>
                DestructTest
            </p>
        </div>
    )
}

export default DestructTest