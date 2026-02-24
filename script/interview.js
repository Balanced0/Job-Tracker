window.interview = [];
window.currentWindow = "interview";
const interviewButtons = document.querySelectorAll(".interview-btn");
const totalInterview = document.getElementById("total-interview");
let currentTotalInterview = Number(totalInterview.innerText);
for(let button of interviewButtons){
    button.addEventListener("click", function(){
        const card = this.closest(".card");
        const rejectedIndex = rejected.indexOf(card);
        if(rejectedIndex !== -1){
            rejected.splice(rejectedIndex, 1);
            document.getElementById("total-rejected").innerText = rejected.length;
        }
        if(!interview.includes(card)){
            interview.push(card);
            totalInterview.innerText = interview.length;
        }
        if(window.currentWindow === "all"){
            card.classList.remove("hidden");
        } else if(window.currentWindow === "interview"){
            card.classList.remove("hidden");
        } else if(window.currentWindow === "rejected"){
            card.classList.add("hidden");
        }
        const status = card.querySelector(".status-badge");
        status.innerText = "INTERVIEW";
        status.className = "status-badge badge badge-soft badge-xl badge-outline badge-success";
        updateCounters();
    });
}
document.getElementById("interview-btn").addEventListener("click", function(){
    interviewBtnFocus("interview-btn");
    const totalJobs = document.getElementById("total-jobs").innerText;
    const availableJobsMain = document.getElementById("available-jobs-main");
    availableJobsMain.innerText = `${interview.length} of ${totalJobs} jobs`;
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
