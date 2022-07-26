
async function getData(){
    let response = await fetch('./data.json');
    let tab = await response.json();
    let days=[];
    let amounts=[];
    tab.forEach(element => {
        let day = element.day;
        let amount = element.amount;
        days.push(day);
        amounts.push(amount);
    });
    return { days, amounts };
}

async function adding(){
    let data = await getData();
    let days = data.days;
    let amounts = data.amounts
    console.log(days);
    console.log(amounts);
    for(let i=0; i<days.length; i++){
        let dom = document.querySelector(`.e${i}`);
        let height = amounts[i]*2.2;
        console.log(height);
        dom.style.height = `${height}px`;
        
        document.querySelector(`.i${i}`).innerHTML = `$${amounts[i]}`
        
        let par = document.querySelector(`.d${i}`);
        par.innerHTML = days[i];
    }
}

adding();

function show(elem){
    elem.classList.remove("hidden");
    console.log('ejj');
}
function hide(elem){
    elem.classList.add("hidden");
    console.log('haa');
}

let array = document.querySelectorAll('.elem');

for(let i=0; i<array.length; i++){
    let info = array[i].querySelector('.info');
    let every = document.querySelectorAll('.info');
    array[i].addEventListener('mouseover', function() {
        every.forEach(hide);
        show(info);
    });
}

// let lol = document.querySelector('.e0');
// lol.addEventListener('mouseover', function() {
//     show(lol.querySelector('.i0'));
// });
