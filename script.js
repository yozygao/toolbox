const date= new Date();

const renderCalendar = () =>{


    const monthDays = document.querySelector(".days")

    date.setDate(1);

    const lastDay = 
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    const prevLastDay = 
    new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const firstDayIndex = date.getDay();

    const lastDayIndex = 
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    let nextDays = 14 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    document.querySelector('.date h1').innerHTML = 
    months[date.getMonth()];

    document.querySelector('.date p').innerHTML = 
    new Date().toDateString();

    let days = "";
    let cnt = 0;
    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class = "prev-date">${prevLastDay - x + 1}</div>`;
        cnt++;
    }

    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days +=`<div class ="today">${i}</div>`;
        }else{
            days +=`<div>${i}</div>`;
        }
        cnt++;
    }

    monthDays.innerHTML = days;
    console.log(cnt);
    if(cnt > 35){
        nextDays -= 7;
    }
    for(let j = 1; j <= nextDays; j++){
        days += `<div class = "next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}

document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();