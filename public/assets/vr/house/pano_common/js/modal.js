// JavaScript Document

var app = {};

app.openModal = function openModal(modal){
    document.getElementById(modal).classList.add("current");
    document.querySelectorAll("#" + modal + " .modal_contents").forEach(function(target){
        target.classList.add("current");
    })
};

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".modal_close").forEach(function(target){
       target.addEventListener("click",closeModal); 
    });
    
    function closeModal(){
        document.querySelectorAll(".modal_group.current").forEach(function(target){
            target.classList.remove("current");
        });
    }
});