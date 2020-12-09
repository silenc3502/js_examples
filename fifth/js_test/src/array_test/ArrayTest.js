function ArrayTest() {
    var arr = ["one", "two", "three"]

    console.log(arr)

    var one = arr[0]
    var two = arr[1]
    var three = arr[2]

    console.log("one = " + one + ", two = " + two + ", three = " + three)

    arr = new Array("test1", "test2", "test3")

    console.log(arr)

    var len = arr.length

    console.log("Length = " + len)
    console.log("Last arr = " + arr[len - 1])

    arr = [1, 3, 4, 8, 2]
    console.log("Before Sort = " + arr)
    var sortArr = arr.sort()
    console.log("After Sort = " + sortArr)

    len = sortArr.length

    var text = "<ul>"
    for (var i = 0; i < len; i++) {
        text += "<li>" + sortArr[i] + "</li>"
    }
    text += "</ul>"

    console.log(text)

    sortArr.push(77)

    console.log("After push = " + sortArr)

    var newArr = []
    newArr["first"] = "Java"
    newArr["second"] = "Python"
    newArr["third"] = "Golang"

    console.log("Hash Array - newArr[first] = " + newArr["first"] + ", [second] = " + newArr["second"] + ", [third] = " + newArr["third"])
    console.log("Is it array ? newArr = " + Array.isArray(newArr))
    console.log("Is it Class Object ? newArr = " + (newArr instanceof Array))

    return (
        <div className="SpreadTest">
            <p>
                ArrayTest
            </p>
        </div>
    )
}

export default ArrayTest