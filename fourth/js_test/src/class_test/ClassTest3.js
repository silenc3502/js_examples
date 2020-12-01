function ClassTest3() {
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

        static getStaticTest(isTest, number) {
            if(isTest) {
                return 333
            } else {
                return parseInt(3.3 * number, 10)
            }
        }
    }

    console.log("ClassTest3")

    let obj = new Obj()

    console.log(obj.name)
    console.log(obj.major)
    console.log(obj.getName())
    console.log(obj.getMajor())

    obj.display()

    console.log(Obj.getStaticTest(true))
    console.log(Obj.getStaticTest(false, 100))

    return (
        <div className="ClassTest3">
            <p>
                ClassTest3
            </p>
        </div>
    )
}

export default ClassTest3