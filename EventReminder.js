function isSameDay(date1, date2){
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};


const events = [
    {name: 'Project Submit', date: new Date('2025-10-11')},
    {name: 'Web Meeting', date: new Date('2025-10-12')},
    {name: 'Client Talk ', date: new Date('2025-10-13')}
]


