const deleteCard = document.querySelectorAll(".trash");
for(let card of deleteCard){
    card.addEventListener("click", function(){
        this.closest(".card").remove();
    });
}