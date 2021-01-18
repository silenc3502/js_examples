const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        reject("Error Occurance!")
    }, 1000)
})

promise.
then(function (response) {
    console.log("Success")
})
.then(null, function (error) {
    console.log(error)
})

function PromiseTest9() {
    console.log("PromiseTest9")

    return (
        <div className="PromiseTest9">
            <p>
                PromiseTest9
            </p>
        </div>
    )
}

export default PromiseTest9