//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------


const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const StudentsFind = (kim,students) => {
    let counter = 0
    for(i in students ){
        if(kim == students[i]){
            counter ++
        }
    }
    if(counter == 0){
        return `${kim} studenst ta yok`
    }else{
        return `${kim} students dizisinde ${counter} kere var`
    }

}

const kim = prompt("ogrenci adi griniz?").toLowerCase()
console.log(StudentsFind(kim,students));