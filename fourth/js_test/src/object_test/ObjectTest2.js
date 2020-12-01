function ObjectTest2() {
    let obj = {
        _name: "test",

        get name() {
            console.log("call getter")
            return this._name
        },
        set name(value) {
            console.log("call setter")
            this._name = value
        }
    }

    console.log(obj.name)
    console.log(obj._name)
    
    obj.name = "gogogo"
    console.log(obj.name)

    return (
        <div className="ObjectTest2">
            <p>
                ObjectTest2
            </p>
        </div>
    )
}

export default ObjectTest2