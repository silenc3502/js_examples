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
        </div>
    );
}

export default DataType;
