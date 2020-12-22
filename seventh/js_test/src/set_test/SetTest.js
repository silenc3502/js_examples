function SetTest() {
    console.log("SetTest")

    let setData = new Set()

    console.log(setData)

    let setData2 = new Set(["Banana", "Watermelon"])

    console.log(setData2)
    console.log(setData2.size)

    setData2.add("Cherry")
    setData2.add("Strawberry")
    setData2.add("Grape")

    console.log(setData2.has("Grape"))
    console.log(setData2.has("Banana"))

    setData2.clear()

    console.log(setData2)

    var setKeyIter = setData2.keys()

    for(var key of setKeyIter) {
        console.log(key)
    }

    var setEntryIter = setData2.entries()

    for(var entry of setEntryIter) {
        console.log(entry)
    }

    setData2.forEach(function(val1, val2) {
        console.log(val1 + " : " + val2)
    })

    return (
        <div className="SpreadTest">
            <p>
                SetTest
            </p>
        </div>
    )
}

export default SetTest