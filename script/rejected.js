window.rejected = [];
const rejectedButtons = document.querySelectorAll(".rejected-btn");
const totalRejected = document.getElementById("total-rejected");
let currentTotalRejected = Number(totalRejected.innerText);
for(let button of rejectedButtons){
    button.addEventListener("click", function(){
        const card = this.closest(".card");
        const interviewIndex = interview.indexOf(card);
        if(interviewIndex !== -1){
            interview.splice(interviewIndex, 1);
            document.getElementById("total-interview").innerText = interview.length;
        }
        if(!rejected.includes(card)){
            rejected.push(card);
            totalRejected.innerText = rejected.length;
        }
        const status = card.querySelector("span");
        status.outerHTML = `<div class="badge badge-soft badge-xl badge-outline badge-error">Rejected</div>`;
        updateCounter();
    });
}
document.getElementById("rejected-btn").addEventListener("click", function(){
    rejectedBtnFocus("rejected-btn");
    window.currentWindow = "rejected";
    const totalJobs = document.getElementById("total-jobs").innerText;
    const availableJobsMain = document.getElementById("available-jobs-main");
    availableJobsMain.innerText = `${rejected.length} of ${totalJobs} jobs`;
    const jobCardContainer = document.getElementById("jobCardContainer");
    const jobCards = jobCardContainer.querySelectorAll(".card");
    for(let card of jobCards){
        card.classList.add("hidden");
    }
    if(rejected.length === 0){
        const noJobsSection = document.getElementById("no-jobs");
        noJobsSection.classList.remove("hidden");
    }
    else{
        const noJobsSection = document.getElementById("no-jobs");
        noJobsSection.classList.add("hidden");
        const totalJobs = document.getElementById("total-jobs").innerText;
        const availableJobs = document.getElementById("available-jobs-main");
        availableJobs.innerText = `${rejected.length} of ${totalJobs} jobs`;
        for(let i = 0; i < rejected.length; i++){
            rejected[i].classList.remove("hidden");
        }
    }
});