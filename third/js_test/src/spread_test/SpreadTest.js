function SpreadTest() {
    let arrColor = ["red", "green", "blue"]
    let newArrColor = [...arrColor, "purple"]

    console.log(arrColor)
    console.log(newArrColor)

    let arrNum = [2, 3, 4]
    let newArrNum = [1, ...arrNum, 5]

    console.log(arrNum)
    console.log(newArrNum)

    function myPrint(a, b, c) {
        console.log(a)
        console.log(b)
        console.log(c)
    }

    let arr = [1, 2, 3]

    console.log(arr)

    myPrint(...arr)

    let arrStr = [..."xyz"]

    console.log(arrStr)

    myPrint(...arrStr)

    arr = ["a", "b", "c"]

    arr.push(...["d", "e"])

    console.log(arr)

    arr = [10, 20, 60, 50, 30]

    console.log(Math.max(...arr))

    let newObj = {
        name: "newObj",
        number: 3
    }

    console.log(newObj)
    console.log(newObj.name)
    console.log(newObj.number)

    let newObj2 = {...newObj}

    console.log(newObj2)
    console.log(newObj2.name)
    console.log(newObj2.number)

    newObj2 = {
        nick: "test"
    }

    let newObj3 = {...newObj, ...newObj2}

    console.log(newObj3)
    console.log(newObj3.name)
    console.log(newObj3.number)

    return (
        <div className="SpreadTest">
            <p>
                SpreadTest
            </p>
        </div>
    )
}

export default SpreadTest