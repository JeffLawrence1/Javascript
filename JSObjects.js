function challenge1(dict) {
    for (let kid in dict) {
        console.log(students[kid]);
    }
}
let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];
challenge1(students);

function challenge2(dict) {
    for (let emp in dict) {
        console.log(emp);
        for (let i = 0; i < dict[emp].length; i++) {
            let y = i + 1;
            let firstName = dict[emp][i].first_name;
            let lastName = dict[emp][i].last_name;
            let nameLength = firstName.length + lastName.length;
            console.log(`${y} - ${lastName}, - ${firstName} - ${nameLength}`);
        }
    }
}
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};
challenge2(users);