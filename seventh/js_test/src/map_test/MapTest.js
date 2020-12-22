function MapTest() {
    console.log("MapTest")

    let map = new Map()

    console.log(map)
    console.log("map1")

    let map2 = new Map([["Apple", "green"], ["Banana", "yellow"]])

    console.log(map2)
    console.log("Size of Map = " + map2.size)

    map2.set("Test1", "blue")
    map2.set("Test2", "purple")

    console.log(map2)
    console.log(map2.get("Test1"))
    console.log(map2.get("Banana"))
    console.log(map2.has("Test2"))
    console.log(map2.has("Apple"))

    map2.delete("Apple")
    console.log(map2)

    map2.clear()
    console.log(map2)

    console.log("map2")

    let map3 = new Map([["Apple", "red"], ["Banana", "yellow"]])

    var keyIter = map3.keys()

    for(var key of keyIter) {
        console.log(key)
    }

    var valueIter = map3.values()

    for(var value of valueIter) {
        console.log(value)
    }

    var entryIter = map3.entries()

    for(var entry of entryIter) {
        console.log(entry)
    }

    map3.forEach(function(value, key) {
        console.log(key + " : " + value)
    })

    console.log("map3")

    return (
        <div className="SpreadTest">
            <p>
                MapTest
            </p>
        </div>
    )
}

export default MapTest