let money = promptNumber("Ваш бюджет на месяц?", "Ошибка. Ввидите свой месячный бюджет!");

let time = prompt("Введите дату в формате YYYY - MM- DD ", "");

function promptNumber(message, errorMessage) {
    let text = '',
        number = 0 ;
    while (number<= 0) {
        text = prompt(message, '');

    if (isNaN(text) == false && text != '' && text != null){
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
    savings: true,
    questions: function(){
        let questionSpending = promptNumber("Введите обязательную статью расходов в этом месяце", "Ошибка. обязательную статью расходов !"),
            questionCost = promptNumber("Во сколько обойдется?", "Ошибка.Во сколько обойдется? ");  
        return{
            questionSpending: questionSpending,
            questionCost: questionCost
        };
    },
    chooseExpenses: function() {
        let result1 = appData.questions();
            expenses.push(result1);

        let result2 = appData.questions();
            expenses.push(result2);
    },
    detectDayBudget: function(){
        return (appData.budget / 30).toFixed(); 
    },
    chooseOptExpenses: function(){
        let text,
            number = 1;
        while (number<=3){
            text = promptNumber("Статья не обязательных расходов", "Ошибка. Ввидите cтатью не обязательных расходов!");
            optionalExpenses[number]= text;
            number++;
        }
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень дохода");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень дохода");
        }else if(appData.moneyPerDay > 2000){
            console.log("Высокий уровень дахода");
        }else{
            console.log("Произошла ошибка");
        } 
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = promptNumber("Какова сумма накоплений?", "Ошибка. Ввидите сумму накоплений!"),
                percent = promptNumber("Под какой процент?", "Ошибка. Ввидите процент!");
                monthIncome = save/100/12*percent;
                alert("Доход в месяц: " + monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополниткльный доход? (Перечислите через запятую)', '');
            appData.income = items.split(',');
            appData.income.push(prompt('Может что то еще?'));
                appData.income.forEach(function(item,i){
                     alert("Способ дополнительного зароботка: " + (i+1) +')' + item);
                });

    }
};

for (let elements in appData){
    console.log("Наша программа включает в себя: " + elements);
}


