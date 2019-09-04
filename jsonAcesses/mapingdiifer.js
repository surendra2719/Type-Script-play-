const countries = [
    {"id": 1, "name": "Afghanistan"},
    {"id": 2, "name": "Albania"},
    {"id": 3, "name": "Algeria"},
    {"id": 4, "name": "American Samoa"}
];
const transformed = countries.map(({ id, name }) => ({ label: id, value: name }));
console.log(transformed);