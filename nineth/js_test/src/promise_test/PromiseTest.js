function PromiseTest() {
    console.log("PromiseTest")

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("Hello")
            resolve();
        }, 2000)
    })

    promise.then(function () {
        console.log("World")
    })

    console.log("Excute PromiseTest!")

    return (
        <div className="PromiseTest">
            <p>
                PromiseTest
            </p>
        </div>
    )
}

export default PromiseTest