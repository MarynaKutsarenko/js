' use strict ';

let money =  prompt (" Ваш бюджет на месяц? " , "" ) ;

let time = prompt(" Введите дату в формате YYYY - MM- DD ", "" );

let questionSpending = prompt( "Введите обязательную статью расходов" , "" ) ;

let questionCost = prompt( "Во сколько обойдется?" , "" );

let appData = {
    budget: money,         
    timeDate: time,        
    expenses:  {
        answ1 : questionSpending,
        answ2 : questionCost
    }   
} ;  
 
console.log(appData);
alert(money/30);




