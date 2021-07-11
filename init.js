alert('Для запуска генерации нажмите кнопку "Генерация');
const generation = document.querySelector('.generation');
const clear = document.querySelector('.clear');

//генерируем
generation.addEventListener('click', () => {
    randoms();
});

//удалить содердимое
clear.addEventListener('click', () => {
    clears();
});


function randoms() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthYearOutput').innerText = initPerson.mounths;
    document.getElementById('birthDayYearOutput').innerText = initPerson.BirthdayDays;
    document.getElementById('birthDayYearsOutput').innerText = initPerson.years;
};

function clears() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('patronymicOutput').innerText = "";
    document.getElementById('workOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('birthDayYearOutput').innerText = "";
    document.getElementById('birthDayYearsOutput').innerText = "";
};




/* window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('workOutput').innerText = initPerson.work;
    document.getElementById('birthYearOutput').innerText = initPerson.mounths;
    document.getElementById('birthDayYearOutput').innerText = initPerson.BirthdayDays;
    document.getElementById('birthDayYearsOutput').innerText = initPerson.years;
    
}; */

