const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        reject("Error!")
    }, 1000)
})

function PromiseTest3() {
    console.log("PromiseTest3")

    promise.then(function (response) {
        console.log("Success")
    }).catch(function (error) {
        console.log(error)
    })

    console.log("Excute PromiseTest3!")

    return (
        <div className="PromiseTest3">
            <p>
                PromiseTest3
            </p>
        </div>
    )
}

export default PromiseTest3