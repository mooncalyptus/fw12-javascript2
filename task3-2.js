function data(kriteria,count,cb){
    const name = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirde','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
    count = 0;
    const result = name.filter(elemen => elemen.toLowerCase().includes(kriteria)).slice(0,count-1);
    cb(result);
}
function callback(print){
    console.log(print);
}

data('an',3,callback)