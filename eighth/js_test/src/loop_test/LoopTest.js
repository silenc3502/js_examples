function LoopTest() {
    console.log("LoopTest")

    let studentMap = new Map([["John", "Physics"], ["David", "Electronics"]])

    console.log(studentMap)

    for(let student of studentMap) {
        console.log(student)
    }

    let studentSet = new Set(["John", "David"])

    console.log(studentSet)

    for(let student of studentSet) {
        console.log(student)
    }

    return (
        <div className="SymbolTest">
            <p>
                LoopTest
            </p>
        </div>
    )
}

export default LoopTest