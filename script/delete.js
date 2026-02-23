const deleteCard = document.querySelectorAll(".trash");
const availableJobs = document.getElementById("available-jobs");
let currentAvailableJobs = Number(availableJobs.innerText);
const totalJobs = document.getElementById("total-jobs");
let currentTotalJobs = Number(totalJobs.innerText);
for(let card of deleteCard){
    card.addEventListener("click", function(){
        this.closest(".card").remove();
        currentAvailableJobs--;
        availableJobs.innerText = currentAvailableJobs;
        currentTotalJobs--;
        totalJobs.innerText = currentTotalJobs;
        if(currentAvailableJobs == 0){
            const noJobsSection = document.getElementById("no-jobs");
            noJobsSection.classList.remove("hidden");
        }
    });
}