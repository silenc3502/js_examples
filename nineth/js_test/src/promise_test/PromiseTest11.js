const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("JavaScript")
    }, 1000)
})

promise.
then(function (response) {
    console.log(response)
    throw new Error("Error Occurance")
})
.catch(function (error) {
    console.log(error)
    return "Programming ~~!!~!"
})
.then(function (response) {
    console.log(response)
})

function PromiseTest11() {
    console.log("PromiseTest11")

    return (
        <div className="PromiseTest11">
            <p>
                PromiseTest11
            </p>
        </div>
    )
}

export default PromiseTest11