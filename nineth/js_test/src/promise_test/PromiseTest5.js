const promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Hello")
        resolve("World")
    }, 1000)
})

function PromiseTest5() {
    console.log("PromiseTest5")

    promise.then(response => console.log(response))

    console.log("Excute PromiseTest5!")

    return (
        <div className="PromiseTest5">
            <p>
                PromiseTest5
            </p>
        </div>
    )
}

export default PromiseTest5