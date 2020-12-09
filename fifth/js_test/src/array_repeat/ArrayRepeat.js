function ArrayRepeat() {
    console.log("ArrayRepeat")

    var arr = [1, 3, 8, 10, 7, 11, 19, 77, 33]
    var txt = "";

    arr.forEach(testFunc)

    function testFunc(value) {
        txt = txt + value + "<br>"
    }

    console.log(txt)

    var sequence = [1, 2, 3, 4, 5]
    var squareSeq = sequence.map(squareFunc)

    function squareFunc(value) {
        return value * value
    }

    console.log(sequence)
    console.log(squareSeq)

    var over3 = sequence.filter(filterFunc)

    function filterFunc(value) {
        return value > 3
    }

    console.log(over3)

    var sum = sequence.reduce(reduceFunc)

    function reduceFunc(total, value) {
        return total + value
    }

    console.log(sum)

    var testSum = sequence.reduce(reduceFunc, 333)
    console.log(testSum)

    var andTestSuccess = sequence.every(andTestFunc)

    function andTestFunc(value) {
        return value > 3
    }

    console.log(andTestSuccess)

    var orTestSuccess = sequence.some(orTestFunc)

    function orTestFunc(value) {
        return value > 3
    }

    console.log(orTestSuccess)

    var vendors = ["ti", "stm", "adi", "nvidia", "qualcomm"]
    var idx = vendors.lastIndexOf("adi")

    console.log(vendors)
    console.log(idx)

    var firstFind = sequence.find(firstFindFunc)

    function firstFindFunc(value) {
        return value > 3
    }

    console.log(firstFind)

    var firstFindIdx = squareSeq.findIndex(firstFindIdxFunc)

    function firstFindIdxFunc(value) {
        return value > 5
    }

    console.log(squareSeq)
    console.log(firstFindIdx)

    return (
        <div className="SpreadTest">
            <p>
                ArrayRepeat
            </p>
        </div>
    )
}

export default ArrayRepeat