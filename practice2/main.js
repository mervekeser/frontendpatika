const task = document.getElementById("task");
const list = document.getElementById("list");



function newElement(){
    
    if(task.value === ''){
        $('#liveToastt').toast({delay:3000});
        $('#liveToastt').toast("show");
    }
    else if(task.value === '  '){
        $('#liveToastt').toast({delay:3000});
        $('#liveToastt').toast("show");
    }
    else{
        $('#liveToast').toast({delay:4000});
        $('#liveToast').toast("show");
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    task.value="";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();