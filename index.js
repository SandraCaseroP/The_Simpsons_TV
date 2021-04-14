function turnoff(){
    var tvOn = document.getElementById("tvOn");
    var wire = document.getElementById("wire");
    

    if (tvOn.style.display == "block"){
        tvOn.style.display = "none";
        document.getElementById("wire").className = "wireOn";
        document.getElementById("plug").className = "plug";

        document.getElementById("video").play();
        document.getElementById("video").currentTime = 2;
    }else{
        tvOn.style.display = "block";
        document.getElementById("wire").className = "wireOff";
        document.getElementById("plug").className = "plugOff";

        document.getElementById("video").pause();
        document.getElementById("video").currentTime = 0;
    }
}

function playVideo(){
    document.getElementById("video").play();
}

function pauseVideo(){
    document.getElementById("video").pause();
}