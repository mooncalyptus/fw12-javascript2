//nomor 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone:"1-770-736-8031 x564442",
    website: "hildegard.org"
};

let spread = {...data};
console.log(spread);
spread.name = "Rania Zahara", spread.email = "raniazahara331@gmail.com", spread.hobby = "Reading";
console.log(spread);

//nomor 4b
let { address: {street, city}} = spread;
console.log(city, street);