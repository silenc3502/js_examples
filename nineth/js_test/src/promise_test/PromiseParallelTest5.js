function plus(num1, num2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var result = num1 + num2
            console.log(num1 + " + " + num2 + " = ")
            resolve(result)
        },2000)
    })
}

function minus(num1, num2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            var result = num1 - num2;
            console.log(num1 + " - " + num2 + " = ")
            resolve(result)
        }, 1500)
    })
}

function multiply(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var result = num1 * num2
            console.log(num1 + " * " + num2 + " = ")
            resolve(result)
        }, 1000)
    })
}

function divide(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var result = num1 / num2
            console.log(num1 + " / " + num2 + " = ")
            resolve(result)
        }, 1000)
    })
}

async function asyncProcess() {
    const p1 = plus(100, 200)
    const p2 = minus(100, 200)
    const p3 = multiply(100, 200)
    const p4 = divide(100, 200)

    const res1 = await p1
    const res2 = await p2
    const res3 = await p3
    const res4 = await p4

    console.log(res1)
    console.log(res2)
    console.log(res3)
    console.log(res4)
}

asyncProcess()

function PromiseParallelTest5() {
    console.log("PromiseParallelTest5")

    return (
        <div className="PromiseParallelTest5">
            <p>
                PromiseParallelTest5
            </p>
        </div>
    )
}

export default PromiseParallelTest5