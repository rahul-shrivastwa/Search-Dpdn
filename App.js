let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                "Hungary", "Iceland", "Bharat", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];



let container = document.querySelector('.container');
let selectBtn = container.querySelector('.select-option');
let dropDownList = container.querySelector('.list-search-container');
let searchInput = container.querySelector("#search");
let lists = dropDownList.querySelector('.list');

selectBtn.addEventListener('click',()=>{
    container.classList.toggle('active');
});

function addCountry(selectedCountry){
    lists.innerHTML = "";
    countries.forEach((country) => {
        let isSelected = selectedCountry == country ?"selected":"";
        let listItem = '<li class="'+ isSelected +'">' + country + '</li>'; 
        lists.insertAdjacentHTML('beforeend', listItem);
    })
    addClickEventToLi();
}

addCountry();

function addClickEventToLi(){
    lists.querySelectorAll('li').forEach((listItem) => {
        listItem.addEventListener('click',() => {
            updateSelectCountry(listItem);
        });
    });
}

function updateSelectCountry(listItem){
    searchInput.value = "";
    selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove('active');
    addCountry(selectedCountry);
}

searchInput.addEventListener('keyup',()=>{
    let serachInVal = searchInput.value.toLowerCase();
    let filterCountries = countries.filter((country)=>{
        return country.toLocaleLowerCase().startsWith(serachInVal);
    }).map((country)=>{
        return '<li>' + country + '</li>';
    }).join("");
    lists.innerHTML = filterCountries;
    addClickEventToLi();
})