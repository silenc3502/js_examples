function DataType() {
    var length = 7
    var lastName = "Gogosing"
    var x = {firstName: "Rust", lastName: "Golang"}

    var test1 = 7 + "Test"
    var test2 = "7" + "test"
    var numTest = 3 + 7 + "Test"

    var strTest1 = "It's OK"
    var strTest2 = "I can 'use' this"
    var strTest3 = 'I can do "this" too'

    var floatNum1 = 33.0
    var intNum = 33
    var floatNum2 = 37.1
    var floatNum3 = 33.00

    var expNum1 = 123e5
    var expNum2 = 123e-5

    var num1 = 3, num2 = 3, num3 = 7
    var boolRes1 = (num1 === num2)
    var boolRes2 = (num1 === num3)

    var cars = ["BMW", "Volvo", "Audi"]

    var person = {name: "Sanghoon", major: "Electronics"}

    var undef

    for(var i = 0; i < 3; i++) {
        console.log("test i = " + i)
    }

    if (num1 !== 10) {
        console.log("num !== 10")
    } else {
        console.log("num === 10")
    }

    return (
        <div className="DataType">
            <p>
                {length}, {lastName}, {x.toString()}.
            </p>
            <p>
                {x.firstName}, {x.lastName}.
            </p>
            <p>
                {test1}, {test2}
            </p>
            <p>
                {numTest}
            </p>
            <p>
                {strTest1}<br/>
                {strTest2}<br/>
                {strTest3}<br/>
            </p>
            <p>
                {floatNum1}, {intNum}, {floatNum2}, {floatNum3}
            </p>
            <p>
                {expNum1}, {expNum2}
            </p>
            <p>
                {boolRes1.toString()}, {boolRes2.toString()}
            </p>
            <p>
                {cars[0]}, {cars[1]}, {cars[2]}
            </p>
            <p>
                {person.name}, {person.major}
            </p>
            <p>
                {typeof ""}, {typeof "test"}, {typeof 0}, {typeof 3.14}, 
                {typeof true}, {typeof undef}, {typeof undefined}, {typeof null}, <br/>
                {typeof {name: 'Test', major: 'EE'}}, {typeof [1, 2, 3, 4]}, 
                {typeof function test(){}}<br/>             
            </p>
        </div>
    );
}

export default DataType;
