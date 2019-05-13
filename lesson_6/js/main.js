let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incoMeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    butAppr = document.getElementsByTagName("button")[0],
    butAppr2 = document.getElementsByTagName("button")[1],
    butCalc = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.getElementsByClassName('day-value')[0];

let money, time;

    startBtn.addEventListener('click', function () {
    let money;
        time = prompt("Введите дату в формате YYYY - MM- DD ", "");
        money = promptNumber("Ваш бюджет на месяц?", "Ошибка. Ввидите свой месячный бюджет!");
        appData.budget = money;
        appData.timeDate = time;
        budgetValue.textContent = money;
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });

    butAppr.addEventListener('click', function () {
        let sum = 0;

        for (let i = 0; i< expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

                    appData.expenses[a] = b;
                    sum += +b;
        }
        expensesValue.textContent = sum;
    });

    butAppr2.addEventListener('click', function () {
        for (let i = 0; i< optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalexpensesValue .textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    butCalc.addEventListener('click', function () {

        if (appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget / 30).toFixed(); 
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень дохода" ;
            }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                levelValue.textContent = "Средний уровень дохода";
            }else if(appData.moneyPerDay > 2000){
                levelValue.textContent = "Высокий уровень дахода";
            }else{
                levelValue.textContent = "Произошла ошибка";
            } 
        }else {
            daybudgetValue.textContent = "Произошла ошибка";
        }

    });

    chooseIncome.addEventListener('change', function () {
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incoMeValue.textContent = appData.income;

    });

    savings.addEventListener('click', function () {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

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
        moneyPerDay: [],
        income: [],
        savings: false,
    };
    