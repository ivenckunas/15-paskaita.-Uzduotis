"use strict"

function changeHeader(name){
    const tabs = document.querySelectorAll(".tab")
    for(var x of tabs){
        x.style.display = "none"
    }

    document.getElementById(name).style.display = "block";

    setTimeout(function(){
        const cont = document.getElementsByClassName("content")
        for (var x of cont){
            x.classList.add("tabAnimation")
        }

        document.getElementById(name).classList.remove("tabAnimation")

    }, 800);
}
changeHeader("pirmas")

