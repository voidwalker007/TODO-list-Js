function addTask() {
    //take input from user
    let inputval=document.getElementById("task_input").value;
    //store that task to array in localstorage
    localStorage.setItem("data","[]");
    

    //converting the data from string to object 
    let oldData=JSON.parse(localStorage.getItem("data"));


        //push new task into array
        oldData.push(inputval);
        
    //save that array to local storage
    localStorage.setItem("data",JSON.stringify(oldData));
    
    //empty input box
    inputval="";

    //update input task on list
    updateData();

}
function updateData(){
    //get refrence of ul element
    let listbody=document.getElementById("list-item");

    //get data that is going to be updated on html

 let oldData=JSON.parse(localStorage.getItem("data"));
    //generate dynamic data or html on webpage
    let length=oldData.length;
    console.log(length)
    let html="";
    for(i=0;i<length;i++){
        html +=`<li class="list-group-item list-group-item-primary">${oldData[i]}<span class="btn btn-danger float-end btn-sm">Remove</span></li>`;
       
    }
    listbody.innerHTML=html;
    console.log(listbody.innerHTML);
}