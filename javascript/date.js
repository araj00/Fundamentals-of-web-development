const months = ['january',
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
    'December'
]

const days = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const date = new Date();
const Month = date.getMonth();
console.log(Month);
console.log(months[Month]);

const day = date.getDay();
console.log(days[day]);

console.log(`${months[Month]},${date.getDate()}`);
console.log(date.getFullYear());
