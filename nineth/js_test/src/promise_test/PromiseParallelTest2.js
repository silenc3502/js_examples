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

Promise.all([
    plus(100, 200),
    minus(100, 200),
    multiply(100, 200),
    divide(100, 200)
]).then(function (response) {
    console.log(response)
})

function PromiseParallelTest2() {
    console.log("PromiseParallelTest2")

    return (
        <div className="PromiseParallelTest2">
            <p>
                PromiseParallelTest2
            </p>
        </div>
    )
}

export default PromiseParallelTest2