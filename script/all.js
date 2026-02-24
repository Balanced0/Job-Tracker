document.getElementById("all-btn").addEventListener("click", function(){
    allBtnFocus("all-btn");
    window.currentWindow = "all";
    const jobCardContainer = document.getElementById("jobCardContainer");
    const jobCards = jobCardContainer.querySelectorAll(".card");
    for(let card of jobCards){
        card.classList.remove("hidden");
    }
    const availableJobsMain = document.getElementById("available-jobs-main");
    const totalJobs = document.getElementById("total-jobs").innerText;
    availableJobsMain.innerText = `${totalJobs} jobs`;
    const noJobsSection = document.getElementById("no-jobs");
    noJobsSection.classList.add("hidden");
});