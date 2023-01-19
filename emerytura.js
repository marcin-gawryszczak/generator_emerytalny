// do przycisku 'pokaż wyniki' dodajemy obsługę kliknięcia

document.querySelector('#result').addEventListener('click', count_pension)



let totalcash;

function count_pension()
{
    let age = document.querySelector('#age').value;
    let pension_age = document.querySelector('#pension_age').value;
    let agelife = document.querySelector('#agelife').value;
    let monthlycash = document.querySelector('#monthlycash').value;
    let percent = document.querySelector('#percent').value;
    let total_months_of_using_money = (agelife-pension_age)*12;

    let investing_time_months = (pension_age-age)*12;
    investing_money(percent, monthlycash, investing_time_months)

    

    let pension = totalcash/total_months_of_using_money;

    pension = pension.toFixed(2)

    let statement = '<div>Twoja emerytura wyniesie: '+pension+ 'zł</div>'
    console.log(statement)
    document.querySelector('#pension').innerHTML = statement

}

function investing_money(profit,cash,time)
{
    // console.log(investing_time_months)
    let total_investing_money = 0;
    for (time; time>0;time--)
    {
        let monthlyprofitcash = cash* Math.pow((1+profit/100/12),time)
        total_investing_money = total_investing_money +monthlyprofitcash
        // console.log(total_investing_money)
    }

    totalcash = total_investing_money
    
}