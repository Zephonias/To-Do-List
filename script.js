const inputValue = document.querySelector("#task-input");
const addBtn = document.querySelector(".btn");
const ulItem = document.querySelector("ul");


function addLists(){
    let deleteBtn = '';
    var span = '';
    let radio = '';
    let li = '';
    let editBtn = '';

    if ( inputValue.value === ''){
        alert("Please enter a task");
    }
    else{
    let li = document.createElement('li');
    span = document.createElement('span');
    editBtn = document.createElement('button');
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
    li.style.maxWidth = '100%';
    
    editBtn.id = 'edit';
    editBtn.className = 'fa-solid fa-pen-to-square';
    editBtn.style.backgroundColor = '#fff';
    editBtn.style.ariaHidden = "false";
    // editBtn.Style.borderRadius = '10px';
    // editBtn.style.backgroundRepeat = 'no-repeat';
    // editBtn.style.border = 'none';
    editBtn.style.width = "40px";
    editBtn.style.height = "40px";
    editBtn.style.paddingTop = "5px";
    editBtn.style.paddingLeft = "5px";
    editBtn.style.border = "none";

    deleteBtn.className = 'fa-solid fa-trash';
    deleteBtn.style.backgroundColor = '#fff';
    // deleteBtn.Style.borderRadius = '10px';
    // deleteBtn.style.backgroundRepeat = 'no-repeat';
    // deleteBtn.style.border = 'none';
    deleteBtn.style.width = "40px";
    deleteBtn.style.height = "40px";
    deleteBtn.id = 'delete';
    deleteBtn.style.border = "none";
    
    
    ulItem.appendChild(li);
    li.appendChild(radio);
    li.appendChild(span);    
    li.appendChild(editBtn);
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

// function editContent(){
//     const liD = editBtn.previousElementSibling;
//     // const spanText =  liD.span;
//     inputValue.value = liD.innerHTML;
//     liD.innerHTML = inputValue.value;
// }
    editBtn.addEventListener('click', function (){
        // editContent();
        const spanText = this.previousElementSibling;
        const input = document.createElement('input');
            input.type = 'text';
            input.value = spanText.innerHTML;
            spanText.replaceWith(input);
            this.input = input;
            input.style.width = "100%";

            input.focus();

       input.addEventListener('blur', function() {
                spanText.innerHTML = input.value;
                input.replaceWith(spanText); // Replace input field with span again
            });
            input.addEventListener('keyup', function(event) {
                if (event.which === 13) { // Enter key
                    spanText.innerHTML = input.value; // Save the new value
                    input.replaceWith(spanText); // Replace input field with span again
                }
            });
        });

// // deleteBtn.addEventListener('click', ()=>{
// //     deleteContent();
// // }
// )


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