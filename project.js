const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll (".card-body")[1]; //ikinci card-body seçildi.
const clear = document.getElementById("clear-films");
//uı objesini başlatma
const ui= new UI();
const storage = new Storage();
//tüm eventleri yükleme
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsfromStorage();
        ui.loadAllFilms(films);
    
    });
    secondCardBody.addEventListener ("click",deleteFilm );
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director= directorElement.value;
    const url= urlElement.value;
       if( title === "" ||  director === ""  || url === ""  ){
           ui.displayMessages("TÜM ALANLARI DOLDURUNUZ.", "danger");//HATA MESAJI
       }
       else {
           const newFilm= new Film(title,director,url);
           ui.addFilmtoUI(newFilm); //arayüze film ekleme
           storage.addFilmtoStorage (newFilm);//storagea film ekleme
           ui.displayMessages("Film başarıyla eklendi.","success")
       }

    ui.clearInputs(titleElement,urlElement,directorElement);
    

    e.preventDefault();
}
function deleteFilm (e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmfromUI(e.target);
        storage.deleteFilmfromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Seçilen film silindi.","success");
    }
}
function clearAllFilms(){
    if(confirm ("Emin misiniz?")){
        ui.clearAllFilmsfromUI();
        storage.clearAllFilmsfromStorage();
        ui.displayMessages("Tüm filmler başarıyla silindi.", "success");
    }
}