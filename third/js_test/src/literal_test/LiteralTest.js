function LiteralTest() {
    let str1 = '3 * 1 = 3';

    console.log(str1)

    let firstNum = 3
    let secondNum = 1

    let str2 = `${firstNum} * ${secondNum} = 3`

    console.log(str2)

    return (
        <div className="CoincidenceTest">
            <p>
                LiteralTest
            </p>
        </div>
    )
}

export default LiteralTest