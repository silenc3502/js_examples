const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("JavaScript")
    }, 1000)
})

promise.
then(function (response) {
    console.log(response)

    throw new Error("Error!")
}, 1000)
.then(null, function (error) {
    console.log(error)
})

function PromiseTest8() {
    console.log("PromiseTest8")

    console.log("Excute PromiseTest8!")

    return (
        <div className="PromiseTest8">
            <p>
                PromiseTest8
            </p>
        </div>
    )
}

export default PromiseTest8