  const updatelsdata=()=>{
    const textareadata=document.querySelectorAll('textarea');
    const notes=[];
    textareadata.forEach((note)=>{
        return notes.push(note.value);
})
localStorage.setItem('notes',JSON.stringify(notes));
  }



const addbtn=document.querySelector('#add');
const addnewnote=(text='')=>{
    const note=document.createElement('div');
    note.classList.add('note');
    const htmldata=`
    <div class="note">

    <div class="operation">
    <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="del"><i class="fa-solid fa-delete-left"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea name="" id="" cols="30" rows="5" class=" ${text ? "hidden" : ""}"></textarea>
    </div>
    `;


    note.insertAdjacentHTML('afterbegin',htmldata);

    //GETTING THE REFERENCES
    const editbtn=note.querySelector('.edit');
    const delbtn=note.querySelector('.del');
    const maindiv=note.querySelector('.main');
    const textarea=note.querySelector('textarea');


    //deleting the note
    delbtn.addEventListener('click',()=>{
        note.remove();
        updatelsdata();
    })

    textarea.value=text;
    maindiv.innerHTML=text;

    editbtn.addEventListener('click',()=>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    textarea.addEventListener('change',()=>{
        const value=event.target.value;
        maindiv.innerHTML=value;
        updatelsdata();
    })

    
    document.body.appendChild(note);
}

    //getting data from local storage
    const notes=JSON.parse(localStorage.getItem('notes'));
    
    if(notes){
        notes.forEach((note)=>addnewnote(note))};


addbtn.addEventListener('click',()=>{
    addnewnote();
})