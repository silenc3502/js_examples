function ClassTest6() {
    class Obj {
        constructor() {
            this._name = "test6"
        }

        getName() {
            return this._name
        }
        setName(name) {
            this._name = name
        }
        display() {
            console.log(this._name)
        }
        toString() {
            throw new Error('You have to implement the method')
        }
    }

    console.log("ClassTest6")

    let obj = new Obj("test overload")

    obj.display()

    class ExtendObj extends Obj {
        constructor() {
            super()
        }
        toString() {
            return "overloading!"
        }
    }

    let extObj = new ExtendObj()

    extObj.setName("Extend Test")
    extObj.display()

    console.log(extObj.toString())

    return (
        <div className="ClassTest6">
            <p>
                ClassTest6
            </p>
        </div>
    )
}

export default ClassTest6