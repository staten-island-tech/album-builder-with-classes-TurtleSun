class Album {
    constructor(title, artist, url){
        this.title = title; 
        this.artist = artist; 
        this.url = url; 
    }
}

class UI{
    //method to show new album
    addAlbumnToList(album){
        let html = `<div class="display-album flex-row">
        <div class="display-title">
            %title%
        </div>
        <div class="display-artist">
            %artist%
        </div>
        <div class="display-cover">
            <img src="%url%" alt="">
        </div>
        <div class="remove-album">
            Remove Album X
        </div>`;
        let newHtml = html.replace("%title%", album.title);
        newHtml = newhtml.replace("%artist%", album.artist);
        newHtml = newhtml.replace("%url%", album.url);
        document.querySelector("display").insertAdjacentHTML("beforeend", newHtml);
    }
    
    //method to clear out input fields
        clearFields(){
            document.getElementById("title").value = "";
            document.getElementById("artist").value = "";
            document.getElementById("url").value = "";
        }
    //delete target album method
        deleteAlbum(target){
            if (target.className === "remove-album") {
                target.parentElement.remove();
            }
        }
}

//event listener for submit

document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();//this is needed in quiz too
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const url = document.getElementById("url").value;
    //instantiate new album with values
    const album = new Album(title, artist, url);
    const ui = new UI();
    ui.addAlbumnToList(album);
    ui.clearFields();
})

document.querySelector(".display").addEventListener("click", function(e)) {
    const ui = new UI ();
    ui.deleteAlbum(e.target);
    ui.clearFields();
    e.preventDefault();
}