const inputValue = document.querySelector("#task-input");
const addBtn = document.querySelector(".btn");
const ulItem = document.querySelector("ul");


function addLists(){
    let deleteBtn = '';
    let span = '';
    let radio = '';

    if ( inputValue.value === ''){
        alert("Please enter a task");
    }
    else{
    let li = document.createElement('li');
    span = document.createElement('span');
    deleteBtn = document.createElement('button');
    radio = document.createElement('input');
    radio.type = 'checkbox';
    radio.class = 'radio';
    radio.borderRadius = '50%';
    radio.id = "isChecked";

    span.innerHTML = inputValue.value;
    li.style.fontSize = '20px';

    deleteBtn.style.background = 'url("img/delete.png")';
    deleteBtn.style.backgrounndSize = 'cover';
    deleteBtn.style.backgroundRepeat = 'no-repeat';
    deleteBtn.style.border = 'none';
    deleteBtn.style.width = "40px";
    deleteBtn.style.height = "40px";
    deleteBtn.id = 'delete';
    
    ulItem.appendChild(li);
    li.appendChild(radio);
    li.appendChild(span);    
    li.appendChild(deleteBtn);
    
    inputValue.value = '';
    }
    
    function deleteContent(){
        const liD = deleteBtn.parentNode;
        const ull = liD.parentNode;
        ull.removeChild(liD);
    }

    deleteBtn.addEventListener('click', ()=>{
        deleteContent();
    }
)

    function taskDone(){
     if(radio.checked === true){
        const isChecked = radio.parentNode;
        isChecked.span.style.textDecoration = "line-through";
     }
     else{
        const isChecked = radio.parentNode;
        isChecked.span.style.textDecoration = "none";
     }
     radio.addEventListener('click', () =>{
        taskDone();
    })
    }

    
}
 
addBtn.addEventListener("click", () =>{
    addLists();
})

inputValue.addEventListener('keyup', (event) =>{
    if(event.which === 13){
        addLists();
    }
}
)