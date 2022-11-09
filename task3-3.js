function searchNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if(dataArray.length <= 5){
        console.log("Array harus lebih dari 5")
    } else{
        const value = dataArray.filter(elemen => elemen > nilaiAwal && elemen < nilaiAkhir);
        console.log(nilaiAwal,nilaiAkhir,value.sort((a, b) => a - b));
    }
}
searchNilai(5,20,[2,25,4,14,17,30,8]);
