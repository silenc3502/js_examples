const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        reject("Error!")
    }, 1000)
})

function PromiseTest4() {
    console.log("PromiseTest4")

    promise.then(function (response) {
        console.log("Success")
    }).catch(function (error) {
        console.log(error)
    }).finally(() => {
        console.log("finally")
    })

    console.log("Excute PromiseTest4!")

    return (
        <div className="PromiseTest4">
            <p>
                PromiseTest4
            </p>
        </div>
    )
}

export default PromiseTest4