' use strict ';

let maney =  prompt (" Ваш бюджет на месяц? " , "" ) ;

let time = prompt(" Введите дату в формате YYYY - MM- DD ", "" );

let questionSpending = prompt( "Введите обязательную статью расходов" , "" ) ;

let questionCost = prompt( "Во сколько обойдется?" , "" );



let appData = {
    budget: maney,         
    timeDate: time,        
    expenses:  {
        answ1 : questionSpending,
        answ2 : questionCost
    }   
} ;  
 
console.log(appData);
alert(maney/ 30 );




