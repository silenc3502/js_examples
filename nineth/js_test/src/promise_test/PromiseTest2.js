const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("World");
    }, 1000)
})

function PromiseTest2() {
    console.log("PromiseTest2")

    promise.then(function (response) {
        console.log(response)
    })

    console.log("Excute PromiseTest2!")

    return (
        <div className="PromiseTest2">
            <p>
                PromiseTest2
            </p>
        </div>
    )
}

export default PromiseTest2