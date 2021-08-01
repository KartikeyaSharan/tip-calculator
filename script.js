let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => 
{
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    //validate
    if(totalBill === '' || tipPercent === '' || split === '' || Number(totalBill)< 0 || Number(split) < 0)
    {
        alert('Please Enter Proper Values');
        return;
    }

    //calculate
    let total = (totalBill * tipPercent) / split ;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
})