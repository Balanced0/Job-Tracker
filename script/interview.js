const interview = [];
const interviewButtons = document.querySelectorAll(".interview-btn");
const totalInterview = document.getElementById("total-interview");
let currentTotalInterview = Number(totalInterview.innerText);
for(let button of interviewButtons){
    button.addEventListener("click", function(){
        interview.push(this.closest(".card"));
        currentTotalInterview++;
        totalInterview.innerText = currentTotalInterview;
    });
}
document.getElementById("interview-btn").addEventListener("click", function(){
    interviewBtnFocus("interview-btn");
    const jobCards = document.getElementById("jobCardContainer");
    jobCards.classList.add("hidden");
    if(interview.length === 0){
        const noJobsSection = document.getElementById("no-jobs");
        noJobsSection.classList.remove("hidden");
    }
    else{
        const availableJobs = document.getElementById("available-jobs-main");
        availableJobs.innerText = `${currentTotalInterview} of ${currentTotalJobs} jobs`;
    }
});
