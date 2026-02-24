function interviewBtnFocus(id){
    const btn = document.getElementById(id);
    btn.classList.add("btn-info", "text-white");
    btn.classList.remove("text-gray-500", "bg-white");
    const btnAll = document.getElementById("all-btn");
    btnAll.classList.remove("btn-info", "text-white");
    btnAll.classList.add("text-gray-500", "bg-white");
    const btnRejected = document.getElementById("rejected-btn");
    btnRejected.classList.remove("btn-info", "text-white");
    btnRejected.classList.add("text-gray-500", "bg-white");
}

function rejectedBtnFocus(id){
    const btn = document.getElementById(id);
    btn.classList.add("btn-info", "text-white");
    btn.classList.remove("text-gray-500", "bg-white");
    const btnAll = document.getElementById("all-btn");
    btnAll.classList.remove("btn-info", "text-white");
    btnAll.classList.add("text-gray-500", "bg-white");
    const btnInterview = document.getElementById("interview-btn");
    btnInterview.classList.remove("btn-info", "text-white");
    btnInterview.classList.add("text-gray-500", "bg-white");
}

function allBtnFocus(id){
    const btn = document.getElementById(id);
    btn.classList.add("btn-info", "text-white");
    btn.classList.remove("text-gray-500", "bg-white");
    const btnAll = document.getElementById("interview-btn");
    btnAll.classList.remove("btn-info", "text-white");
    btnAll.classList.add("text-gray-500", "bg-white");
    const btnRejected = document.getElementById("rejected-btn");
    btnRejected.classList.remove("btn-info", "text-white");
    btnRejected.classList.add("text-gray-500", "bg-white");
}

window.currentWindow = "all";
function updateCounters() {
    const totalJobs = Number(document.getElementById("total-jobs").innerText);
    const availableJobsMain = document.getElementById("available-jobs-main");
    const noJobsSection = document.getElementById("no-jobs");
    if (window.currentWindow === "all") {
        availableJobsMain.innerText = `${totalJobs} jobs`;
        if (totalJobs === 0) {
            noJobsSection.classList.remove("hidden");
        } else {
            noJobsSection.classList.add("hidden");
        }
    }
    else if (window.currentWindow === "interview") {
        availableJobsMain.innerText = `${interview.length} of ${totalJobs} jobs`;
        if (interview.length === 0) {
            noJobsSection.classList.remove("hidden");
        } else {
            noJobsSection.classList.add("hidden");
        }
    }
    else if (window.currentWindow === "rejected") {
        availableJobsMain.innerText = `${rejected.length} of ${totalJobs} jobs`;
        if (rejected.length === 0) {
            noJobsSection.classList.remove("hidden");
        } else {
            noJobsSection.classList.add("hidden");
        }
    }
}