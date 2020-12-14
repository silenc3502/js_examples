function ArrowFunction() {
    console.log("ArrowFunction")

    const f = function() { return "33" }
    console.log(f())

    const arrowFunc = () => { return "77" }
    console.log(arrowFunc())

    const add100 = function(val) { return 100 + val }
    console.log(add100(3))

    const add100Arrow = (val) => { return 100 + val }
    console.log(add100Arrow(3))

    const addTwoParam = function(a, b) { return a + b }
    console.log(addTwoParam(3, 7))

    const addTwoParamArrow = (a, b) => { return a + b }
    console.log(addTwoParamArrow(3, 3))

    const calc = {
        firstNumber: 33,
        secondNumber: 777,

        print: function() {
            const add = () => {
                console.log(this)
                return this.firstNumber + this.secondNumber
            }

            console.log(this.firstNumber + " + " + this.secondNumber + " = " + add())
        },
    }

    calc.print()

    function add(first, second, ... args) {
        console.log(first, second, args)

        let sum = first + second

        for (let i = 0; i < args.length; i++) {
            sum += args[i]
        }

        return sum
    }

    let sum = add(1, 2, 3, 4, 5)

    console.log(sum)

    function defaultParam(first, second = 3) {
        return first + second
    }

    sum = defaultParam(1, 2)

    console.log(sum)

    sum = defaultParam(1)

    console.log(sum)

    return (
        <div className="SpreadTest">
            <p>
                ArrowFunction
            </p>
        </div>
    )
}

export default ArrowFunction