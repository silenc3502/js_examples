class IteratorManager {
    constructor() {
        this.itrData = []
    }
    add(data) {
        this.itrData.push(data)
    }
    [Symbol.iterator]() {
        return this.itrData.values()
    }
}

function IteratorTest() {
    console.log("IteratorTest")

    const iterData = ["one", "two", "three"]

    for(let entry of iterData) {
        console.log(entry)
    }

    let varData = ["four", "five", "six"]

    const itr = varData[Symbol.iterator]()

    console.log(itr.next())
    console.log(itr.next())
    console.log(itr.next())
    console.log(itr.next())

    let varItr = varData.values()

    console.log(varItr.next())
    console.log(varItr.next())
    console.log(varItr.next())
    console.log(varItr.next())

    let current = varItr.next()

    while(!current.done) {
        console.log(current.value)
        current = varItr.next()
    }

    let iteratorMgr = new IteratorManager()
    iteratorMgr.add("first")
    iteratorMgr.add("second")
    iteratorMgr.add("third")

    for(let entry of iteratorMgr) {
        console.log(entry)
    }

    return (
        <div className="SpreadTest">
            <p>
                IteratorTest
            </p>
        </div>
    )
}

export default IteratorTest