function clickHere() {
    let a = Number(document.getElementById("myNumber").value);
    let paragrapf = document.getElementById("resultNumber");
    paragrapf.textContent = a;

    function evenNumber() {
        if (a % 2 === 0) {
            paragrapf.textContent = `Число  ${a} - чётное `
        } else {
            paragrapf.textContent = `Число  ${a} - не чётное `
        }
    }

    function primeNumber() {
        let number = a;
        let result = " / простое";
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = " / составное";
                break;
            }
        }
        resultNumberPrime.textContent = result
    }

    evenNumber()
    primeNumber()
}