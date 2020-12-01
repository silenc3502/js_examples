function ClassTest4() {
    class Obj {
        constructor(name) {
            this._name = name
            Obj.number++
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

        static getStaticNumber() {
            return Obj.number
        }
    }

    Obj.number = 0

    console.log("ClassTest4")

    let obj = new Obj("test1")

    obj.display()
    console.log(Obj.getStaticNumber())

    let obj2 = new Obj("test2")

    obj2.display()
    console.log(Obj.getStaticNumber())

    return (
        <div className="ClassTest4">
            <p>
                ClassTest4
            </p>
        </div>
    )
}

export default ClassTest4