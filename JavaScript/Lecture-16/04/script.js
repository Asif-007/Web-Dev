const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const income = document.getElementById('income');
    const val = income.value;
    // console.log(val);

    const tax = document.getElementsByTagName('h2');

    if (val < 1200000)
        tax[0].textContent = `Total Tax: ${0}`

})