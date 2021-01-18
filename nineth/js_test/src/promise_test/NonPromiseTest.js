function NonPromiseTest() {
    console.log("NonPromiseTest")

    function hello() {
        setTimeout(function() {
            console.log("Hello")
        }, 2000)
    }

    function world() {
        setTimeout(function() {
            console.log("World")
        }, 1000)
    }

    hello()
    world()

    function helloWorld() {
        setTimeout(function() {
            console.log("Hello")

            setTimeout(function() {
                console.log("World")
            }, 1000)
        }, 2000)
    }

    helloWorld()

    return (
        <div className="NonPromiseTest">
            <p>
                NonPromiseTest
            </p>
        </div>
    )
}

export default NonPromiseTest