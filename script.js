const inputValue = document.querySelector("#task-input");
const addBtn = document.querySelector(".btn");
const ulItem = document.querySelector("ul");


function addLists(){
    let deleteBtn = '';
    var span = '';
    let radio = '';
    let li = '';

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
    // radio.id = "isChecked";
    radio.name = 'check';

    span.innerHTML = inputValue.value;
    span.id = "textToChange";
    span.style.textDecoration = "none";
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

radio.addEventListener('change', () => {
    if (radio.checked) {
        span.style.textDecoration = "line-through";
    } else {
        span.style.textDecoration = "none";
    }
});
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