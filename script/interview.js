window.interview = [];
const interviewButtons = document.querySelectorAll(".interview-btn");
const totalInterview = document.getElementById("total-interview");
let currentTotalInterview = Number(totalInterview.innerText);
for(let button of interviewButtons){
    button.addEventListener("click", function(){
        const card = this.closest(".card");
        const status = card.querySelector("span");
        status.outerHTML = `<div class="badge badge-soft badge-xl badge-outline badge-success">Interview</div>`;
        if(!interview.includes(card)){
            currentTotalInterview++;
            totalInterview.innerText = currentTotalInterview;
            interview.push(card);
        }
    });
}
document.getElementById("interview-btn").addEventListener("click", function(){
    interviewBtnFocus("interview-btn");
    const jobCardContainer = document.getElementById("jobCardContainer");
    const jobCards = jobCardContainer.querySelectorAll(".card");
    for(let card of jobCards){
        card.classList.add("hidden");
    }
    if(interview.length === 0){
        const noJobsSection = document.getElementById("no-jobs");
        noJobsSection.classList.remove("hidden");
    }
    else{
        const noJobsSection = document.getElementById("no-jobs");
        noJobsSection.classList.add("hidden");
        const totalJobs = document.getElementById("total-jobs").innerText;
        const availableJobs = document.getElementById("available-jobs-main");
        availableJobs.innerText = `${interview.length} of ${totalJobs} jobs`;
        for(let i = 0; i < interview.length; i++){
            interview[i].classList.remove("hidden");
        }
    }
});
