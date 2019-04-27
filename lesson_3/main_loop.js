let money = promptNumber("Ваш бюджет на месяц?", "Ошибка. Ввите свой месячный бюджет!");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

function promptNumber(message, errorMessage) {
    let text = '',
        number = 0 ;
    while (number<= 0) {
        text = prompt(message, '');

        if (isNaN(text) == false && text != ''){
            number = parseInt(text); 
        }
        message = errorMessage;
    }
    return number; 
}

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:[],
    optionalExpenses: {},
    moneyPerDay: 0,
    income: [],
    savings: true
};

function chooseExpenses(){ 
    let questionSpending = promptNumber("Введите обязательную статью расходов в этом месяце", "Ошибка. обязательную статью расходов !"),
        questionCost = promptNumber("Во сколько обойдется?", "Ошибка.Во сколько обойдется? ");
    return{
        questionSpending: questionSpending,
        questionCost: questionCost
    };
}

let result1 = chooseExpenses();
appData.expenses.push(result1);

let result2 = chooseExpenses();
appData.expenses.push(result2);


appData.moneyPerDay = detectDayBudget();

function detectDayBudget () {
   return appData.budget/30;
}

function chooseOptExpenses() {
    let optionalExpenses = {},
        text,
        number = 1;
    while (number<=3){
       text = promptNumber("Статья не обязательных расходов", "Ошибка. Ввите cтатью не обязательных расходов!");
       optionalExpenses[number]= text;
       number++;
    }
    return optionalExpenses;
}
let expenses = chooseOptExpenses();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень дохода");
    }else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень дахода");
    }else{
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = promptNumber("Какова сумма накоплений?"),
            percent = promptNumber("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц: " + appData.monthIncome);
    }
}
checkSavings();


