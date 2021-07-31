var students = [
    {
        id: 1,
        year: 2000, 
        name: 'Bekzod',
        surname: 'Abdulkhaev',
    }, 
    {
        id: 2,
        year : 1999,
        name: 'Samandar',
        surname: 'Olimjonov',
    },    
    {
        id: 3,
        year : 1999,
        name: 'abdulla',
        surname: 'Olimjonov',
    },
    {
        id: 4,
        year : 1996,
        name: 'Vohidjon',
        surname: 'To`lqinov',
    },
    {
        id: 5,
        year : 1998,
        name: 'Sardor',
        surname: 'Akramov',
    },
]    


// sortedY = students.sort((a,b)=>a.year-b.year);


sortedY = students.sort((a,b)=>a.name.localeCompare(b.name))

console.log(sortedY);