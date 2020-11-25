function SymbolTest() {
    const LINE = Symbol()
    const RECTANGLE = Symbol()

    if(LINE === RECTANGLE) {
        console.log("LINE === RECTANGLE")
    } else {
        console.log("LINE !== RECTANGLE")
    }

    const CIRCLE1 = Symbol("circle")
    const CIRCLE2 = Symbol("circle")

    if(CIRCLE1 === CIRCLE2) {
        console.log("CIRCLE1 === CIRCLE2")
    } else {
        console.log("CIRCLE1 !== CIRCLE2")
    }

    const LINE2 = Symbol("LINE2")

    console.log(LINE2.toString())
    console.log(CIRCLE1.toString())

    return (
        <div className="LetVariable">
            <p>
                Symbol() {LINE}<br/>
                Symbol() {RECTANGLE}<br/>
                CIRCLE1 {CIRCLE1}<br/>
                CIRCLE2 {CIRCLE2}<br/>
            </p>
        </div>
    );
}

export default SymbolTest;
