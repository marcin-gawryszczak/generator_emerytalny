
// do przycisku 'pokaż wyniki' dodajemy obsługę kliknięcia

document.querySelector('#result').addEventListener('click', count_pension)





function count_pension()
{
    let age = document.querySelector('#age').value;
    let pension_age = document.querySelector('#pension_age').value;
    let agelife = document.querySelector('#agelife').value;
    let monthlycash = document.querySelector('#monthlycash').value;
    let percent = document.querySelector('#percent').value;

    let investing_time = pension_age-age;
    let using_fund_time_months = (agelife-pension_age)*12;
    totalcash = 12*investing_time*monthlycash
    pension = totalcash/using_fund_time_months

    document.getElementById('pension').innerHTML = 'Twoja emerytura wyniesie: '+ pension+ ' zł'

}