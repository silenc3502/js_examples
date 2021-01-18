const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        reject("Error Occurance")
    }, 1000)
})

promise.
then(function (response) {
    console.log("Success")
})
.catch(function (error) {
    console.log(error)
})
.finally(() => {
    console.log("JavaScript")
})

function PromiseTest12() {
    console.log("PromiseTest12")

    return (
        <div className="PromiseTest12">
            <p>
                PromiseTest12
            </p>
        </div>
    )
}

export default PromiseTest12