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

    let [index1, index2, index3] = arrTest

    console.log(index1)
    console.log(index2)
    console.log(index3)

    let arrayTest = [
        "test1"
    ]

    let [id1, id2 = "default"] = arrayTest

    console.log(id1)
    console.log(id2)

    let valueTest = [
        "one", "two", "three"
    ]

    let [first, , third] = valueTest

    console.log(first)
    console.log(third)

    valueTest = [
        "one", "two", "three", "four", "five", "six", "seven"
    ]

    let [, ...res] = valueTest

    console.log(res)

    return (
        <div className="DestructTest">
            <p>
                DestructTest
            </p>
        </div>
    )
}

export default DestructTest