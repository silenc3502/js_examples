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
    const res1 = await Promise.race([
        plus(100, 200),
        minus(100, 200),
        multiply(100, 200),
        divide(100, 200)
    ])
    console.log(res1)
}

asyncProcess()

function PromiseParallelTest7() {
    console.log("PromiseParallelTest7")

    return (
        <div className="PromiseParallelTest3">
            <p>
                PromiseParallelTest7
            </p>
        </div>
    )
}

export default PromiseParallelTest7