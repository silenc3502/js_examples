function ArraySort() {
    console.log("ArraySort")

    var arr = [1, 3, 8, 10, 7, 11, 19, 77, 33]
    console.log("Before Sort = " + arr)
    arr.sort()
    console.log("After Sort = " + arr)

    arr.reverse()
    console.log("After Reverse = " + arr)

    arr.sort(function(a, b) { return a - b })
    console.log("After Number Sort = " + arr)
    console.log("Find Max = " + arr[arr.length - 1])
    console.log("Find Min = " + arr[0])

    arr.sort(function(a, b) { return b - a })
    console.log("Descending = " + arr)

    function findArrMax(arr) {
        return Math.max.apply(null, arr)
    }

    function findArrMin(arr) {
        return Math.min.apply(null, arr)
    }

    arr = [1, 3, 8, 10, 7, 11, 19, 77, 33]
    console.log("Before findArrMax() = " + arr)
    console.log("findArrMax() = " + findArrMax(arr))
    console.log("findArrMin() = " + findArrMin(arr))

    function myFindArrMax(arr) {
        let len = arr.length
        let max = -Infinity

        while(len--) {
            if(arr[len] > max) {
                max = arr[len]
            }
        }

        return max
    }

    function myFindArrMin(arr) {
        let len = arr.length
        let min = Infinity

        while(len--) {
            if(arr[len] < min) {
                min = arr[len]
            }
        }

        return min
    }

    console.log("myFindArrMax() = " + myFindArrMax(arr))
    console.log("myFindArrMin() = " + myFindArrMin(arr))

    var persons1 = [
        {name: "Julian", age: 23},
        {name: "Allen", age: 25},
        {name: "Tomas", age: 23},
        {name: "Monica", age: 21}
    ]

    var persons2 = [
        {name: "Julian", age: 23},
        {name: "Allen", age: 25},
        {name: "Tomas", age: 23},
        {name: "Monica", age: 21}
    ]

    var persons3 = [
        {name: "Julian", age: 23},
        {name: "Allen", age: 25},
        {name: "Tomas", age: 23},
        {name: "Monica", age: 21}
    ]

    console.log(persons1)
    persons2.sort(function(a, b){ return a.age - b.age })
    console.log(persons2)

    persons3.sort(function(a, b) {
        var x = a.name.toLowerCase()
        var y = b.name.toLowerCase()

        if(x < y) { return -1 }
        if(x > y) { return 1 }

        return 0
    })

    console.log(persons3)

    return (
        <div className="SpreadTest">
            <p>
                ArraySort
            </p>
        </div>
    )
}

export default ArraySort