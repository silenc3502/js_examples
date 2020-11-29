function TrueFalseDeterminant() {
    let emptyObj = {}

    let add = function(a, b) {
        return a + b
    }

    function Coffee() {
        this.name = "Americano"
        this.price = 3000
    }

    Coffee.prototype.getName = function() {
        return this.name
    }

    let coffee = new Coffee();

    console.log("variableName : emptyObj")
    console.log(emptyObj)

    if(emptyObj) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : add")
    console.log(add)

    if(add) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : Coffee")
    console.log(Coffee)

    if(Coffee) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee")
    console.log(coffee)

    if(coffee) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.name")
    console.log(coffee.name)

    if(coffee.name) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.price")
    console.log(coffee.price)

    if(coffee.price) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.getName")
    console.log(coffee.getName)
    console.log(coffee.getName())

    if(coffee.getName) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.toString")
    console.log(coffee.toString)
    console.log(coffee.toString())

    if(coffee.toString) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.name2")
    console.log(coffee.name2)

    if(coffee.name2) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("variableName : coffee.getName2")
    console.log(coffee.getName2)

    if(coffee.getName2) {
        console.log("true")
    } else {
        console.log("false")
    }

    console.log("name" in coffee)
    console.log("price" in coffee)
    console.log("getName" in coffee)
    console.log("name2" in coffee)

    console.log(coffee.hasOwnProperty("price"))
    console.log(coffee.hasOwnProperty("getName"))
    console.log("toString" in coffee)
    console.log(coffee.hasOwnProperty("toString"))

    return (
        <div className="TrueFalseDeterminant">
            <p>
                TrueFalseDeterminant
            </p>
        </div>
    )
}

export default TrueFalseDeterminant