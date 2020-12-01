function ClassTest5() {
    class Obj {
        constructor() {
            this._name = "test5"
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
    }

    console.log("ClassTest5")

    let obj = new Obj("test1")

    obj.display()

    class ExtendObj extends Obj {
        constructor() {
            super()
        }
    }

    let extObj = new ExtendObj()

    extObj.setName("Extend Test")
    extObj.display()

    return (
        <div className="ClassTest5">
            <p>
                ClassTest5
            </p>
        </div>
    )
}

export default ClassTest5