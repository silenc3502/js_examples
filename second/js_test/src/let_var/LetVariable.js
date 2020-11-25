function LetVariable() {
    let num = 77

    console.log("num = " + num)
    console.log("let은 호이스팅 되지 않으며 let 위에서 해당 변수를 사용할 수 없다.")

    const testNum = 33

    console.log("testNum = " + testNum)
    console.log("const는 반드시 선언과 함께 초기화를 해야 한다.")

    return (
        <div className="LetVariable">
            <p>
                let {num}<br/>
                const {testNum}
            </p>
        </div>
    );
}

export default LetVariable;
