const calculate = (data) => {
    const { init_amount, annual, expected_return, duration } = data;
    if (init_amount < 0) {
        return 'Init cant be 0';
    }
    if (duration <= 0) {
        return 'Amount of years not valid';
    }
    if (expected_return <= 0) {
        return 'Expected return must be atleast 0';
    }
    let total = init_amount;
    let totContrib = 0;
    let totInterest = 0;
    const annualResult = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expected_return);
        totInterest = total - totContrib - init_amount;
        totContrib = totContrib + annual;
        total = total + annual;
        annualResult.push({
            year: `Year: ${i + 1}`,
            total,
            totInterest,
            totContrib,
        });
    }
    return annualResult;
};
const printResult = (results) => {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearResults of results) {
        console.log(yearResults.year);
        console.log('Total: ', yearResults.total);
        console.log('Total: contrib', yearResults.totContrib);
        console.log('Total: interest', yearResults.totInterest);
        console.log('-------------------------------------------------------');
    }
};
const investData = {
    init_amount: 5000,
    annual: 500,
    expected_return: 0.08,
    duration: 10,
};
const results = calculate(investData);
printResult(results);
export {};
//# sourceMappingURL=calculator.js.map