const deleteCard = document.querySelectorAll(".trash");
const availableJobs = document.getElementById("available-jobs");
let currentAvailableJobs = Number(availableJobs.innerText);
const totalJobs = document.getElementById("total-jobs");
let currentTotalJobs = Number(totalJobs.innerText);
for(let card of deleteCard){
    card.addEventListener("click", function(){
        const jobCard = this.closest(".card");
        if(window.interview){
            const cardIndex = interview.indexOf(this.closest(".card"));
            interview.splice(cardIndex, 1);
            document.getElementById("total-interview").innerText = interview.length;
        }
        jobCard.remove();
        currentAvailableJobs--;
        currentTotalJobs--;
        availableJobs.innerText = currentAvailableJobs;
        totalJobs.innerText = currentTotalJobs;
        updateCounters();
        if(currentAvailableJobs == 0){
            const noJobsSection = document.getElementById("no-jobs");
            noJobsSection.classList.remove("hidden");
        }
    });
}