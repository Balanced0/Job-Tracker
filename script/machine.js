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