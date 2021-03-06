function Storage (){

}
Storage.prototype.addFilmtoStorage = function (newFilm){
     let films = this.getFilmsfromStorage();
     films.push(newFilm);
     localStorage.setItem("films",JSON.stringify(films));




}
Storage.prototype.getFilmsfromStorage = function () {
    let films;
    if(localStorage.getItem("films") === null ) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}
Storage.prototype.deleteFilmfromStorage = function (filmTitle) {
     let films = this.getFilmsfromStorage ();
     films.forEach( function(film,index){
        if(film.title === filmTitle) {
            films.splice(index,1);
        }
     });
     localStorage.setItem("films",JSON.stringify(films));
    
}
Storage.prototype.clearAllFilmsfromStorage = function (){
    localStorage.removeItem("films");
}