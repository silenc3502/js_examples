const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("JavaScript")
    }, 1000)
})

promise.
then(function (response) {
    console.log(response)

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Programming")
            resolve("~~!!~!")
        }, 1000)
    })
})
.then(function (response) {
    console.log(response)
})

function PromiseTest7() {
    console.log("PromiseTest7")

    console.log("Excute PromiseTest7!")

    return (
        <div className="PromiseTest7">
            <p>
                PromiseTest7
            </p>
        </div>
    )
}

export default PromiseTest7