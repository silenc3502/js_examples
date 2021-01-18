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

plus(100, 200).then(function (response) {
    console.log(response)
    return minus(100, 200)
}).then(function (response) {
    console.log(response)
    return multiply(100, 200)
}).then(function (response) {
    console.log(response)
    return divide(100, 200)
}).then(function(response) {
    console.log(response)
})



function PromiseParallelTest() {
    console.log("PromiseParallelTest")

    return (
        <div className="PromiseParallelTest">
            <p>
                PromiseParallelTest
            </p>
        </div>
    )
}

export default PromiseParallelTest