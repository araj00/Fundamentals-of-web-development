const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const formatItems = document.querySelectorAll('.deadline-format h4');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

let tempDate = new Date();
let tempyear = tempDate.getFullYear();
let tempmonth = tempDate.getMonth();
let tempdate = tempDate.getDate();

const futureDate = new Date(tempyear,tempmonth,tempdate+11,8,30);

giveAway.textContent = `giveaway ends on ${days[futureDate.getDay()]}, ${futureDate.getDate()} ${Months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}am`


function gettime(){
    let today = new Date();
    const day = 24*60*60*1000;
    const hr = 60 * 60 * 1000;
    const min = 60 * 1000;
    let remainingTime = futureDate - today;
    const days = Math.floor(remainingTime / day);
    const hours = Math.floor((remainingTime%day) / hr);
    const mins = Math.floor((remainingTime%hr) / min);
    const sec = Math.floor((remainingTime%min) / 1000);

    const values = [days,hours,mins,sec];

    function format(value){
       if(value < 10){
        return `0${value}`;
       }
       return value;
    }
    formatItems.forEach(function(item,index){
        item.textContent = format(values[index]);
    })

    if(remainingTime < 0){
       clearInterval(countdown);
       deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }

}
let countdown = setInterval(gettime,1000);
gettime();