function ClassTest2() {
    class Obj {
        constructor() {
            this.name = "test"
            this.major = "electronics"
        }

        getName() {
            return this.name
        }
        getMajor() {
            return this.major
        }
        setName(name) {
            this.name = name
        }
        setMajor(major) {
            this.major = major
        }
        display() {
            console.log(this.name)
            console.log(this.major)
        }
    }

    console.log("ClassTest2")

    let obj = new Obj()

    console.log(obj.name)
    console.log(obj.major)
    console.log(obj.getName())
    console.log(obj.getMajor())

    obj.display()

    return (
        <div className="ClassTest2">
            <p>
                ClassTest2
            </p>
        </div>
    )
}

export default ClassTest2