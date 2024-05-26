const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must enter something!");
    }
    if(inputBox.value.length>20){
        alert("enter a smaller task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //adding icon within span tag
        let span = document.createElement("span");
        span.innerHTML="\u00d7";  //cross icon
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}

//js for click function

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove(); //li will be removed so task is deleted
        saveData();
    }
}, false);

//storing data

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display data whenever we open the website again
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();