const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("World")
    }, 1000)
})

function PromiseTest6() {
    console.log("PromiseTest6")

    promise.
    then(function (response) {
        console.log(response)
    }).
    then(function (response) {
            console.log(response)
    })

    console.log("Excute PromiseTest6!")

    return (
        <div className="PromiseTest6">
            <p>
                PromiseTest6
            </p>
        </div>
    )
}

export default PromiseTest6