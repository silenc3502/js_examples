function ArrayMethod() {
    console.log("Array Method Test")
    var arr = ["one", "two", "three"]

    console.log(arr.toString())
    console.log(arr.join("*"))

    console.log("Before Pop = " + arr)
    var elem = arr.pop()
    console.log("After Pop = " + arr)
    console.log("Pop element = " + elem)

    console.log("Before Push = " + arr)
    var len = arr.push("seven")
    console.log("After Push = " + arr)
    console.log("current len = " + len)

    elem = arr.shift()
    console.log("After Shift = " + arr)
    console.log("Shift Value = " + elem)

    len = arr.unshift("333")
    console.log("After Unshift = " + arr)
    console.log("Array Length = " + len)

    arr.splice(2, 0, "elem1", "elem2")
    console.log("After splice = " + arr)

    arr.splice(2, 2, "elem3", "elem4")
    console.log("After splice = " + arr)

    arr.splice(1, 2)
    console.log("After splice = " + arr)

    var test = ["four", "six", "ten"]

    arr = arr.concat(test)
    console.log("After concat = " + arr)

    arr = arr.concat("I can add string")
    console.log("After concat = " + arr)

    var testArr1 = [1, 3]
    var testArr2 = [3, 7]
    arr = arr.concat(testArr1, testArr2)
    console.log("After concat = " + arr)

    arr = [1, 2, 3, 4, 5, 6, 7]
    var slicedArr = arr.slice(1)
    console.log("After Slice = " + arr)
    console.log("Result of Slice = " + slicedArr)

    arr = [1, 2, 3, 4, 5, 6, 7]
    var slicedArr = arr.slice(3)
    console.log("After Slice = " + arr)
    console.log("Result of Slice = " + slicedArr)

    return (
        <div className="SpreadTest">
            <p>
                ArrayMethod
            </p>
        </div>
    )
}

export default ArrayMethod