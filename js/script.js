/* localStorage.setItem("data","[]"); it will set array to empty*/
function Reset(){
   
    var ans=confirm("Are you sure to clear data");
    console.log(ans);
    if(ans==true)
    {
        localStorage.setItem("data","[]");
        
    }
    
}

updateData();
function addTask() {
    //take input from user
    let inputval=document.getElementById("task_input").value;
    //store that task to array in localstorage
    /* localStorage.setItem("data","[]"); on everycall it will set array empty hence only one item will display so use it outside of the fxn */ 
    

    //converting the data from string to object 
    let oldData=JSON.parse(localStorage.getItem("data"));


        //push new task into array
        oldData.push(inputval);
        console.log(oldData)
        
    //save that array to local storage
    let newdata=localStorage.setItem("data",JSON.stringify(oldData));
    
    //empty input box
    inputval="";console.log(inputval)

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
    for(var i=length-1;i>=0;i--){
        console.log(oldData[i])
        html=html+`<li class="list-group-item list-group-item-primary">${i+1} &nbsp;${oldData[i]}<span class="btn btn-danger float-end btn-sm">Remove</span></li>`;
       
    }
    listbody.innerHTML=html;
    console.log(listbody.innerHTML);
}