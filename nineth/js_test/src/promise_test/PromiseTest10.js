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
})

function PromiseTest10() {
    console.log("PromiseTest10")

    return (
        <div className="PromiseTest10">
            <p>
                PromiseTest10
            </p>
        </div>
    )
}

export default PromiseTest10