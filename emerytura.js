// do przycisku 'pokaż wyniki' dodajemy obsługę kliknięcia

document.querySelector('#result').addEventListener('click', count_pension)

let totalcash;
let percent;
let total_months_of_using_money
let pension

function count_pension()
{
    let age = document.querySelector('#age').value;
    let pension_age = document.querySelector('#pension_age').value;
    let agelife = document.querySelector('#agelife').value;
    let monthlycash = document.querySelector('#monthlycash').value;
    percent = document.querySelector('#percent').value;
    total_months_of_using_money = (agelife-pension_age)*12;

    let investing_time_months = (pension_age-age)*12;
    
    // if (percent != '0')
    investing_money(percent, monthlycash, investing_time_months)
    
    pension = totalcash/total_months_of_using_money;

    investing_in_retirement()

    pension = pension.toFixed(2)
    totalcash = totalcash.toFixed(2)

    let statement = '<div>Zgromadzisz środki w wysokości: '+totalcash+ 'zł</div>'
    statement += '<div>Twoja emerytura wyniesie: '+pension+ 'zł</div>'
    // console.log(statement)
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

function investing_in_retirement()
{
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    let selectedanswer
    for (const radioButton of radioButtons)
    {
        if (radioButton.checked)
        {
            selectedanswer = radioButton.value;
        }
    } 

    if (selectedanswer == '0');
    else {
    let first_month_interest = totalcash*percent/100/12

    console.log(first_month_interest)
    
    first_month_capital_pension = totalcash/((Math.pow((1+(percent/100/12)),total_months_of_using_money)-1)/(percent/100/12))

    // console.log(first_month_capital_pension)

    pension = first_month_capital_pension+first_month_interest


}

    

}


