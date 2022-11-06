function removeAll(){
    let box=document.getElementById("box"); 
    box.innerHTML=""; 
    let a=document.getElementById('item');
    a.value='';
}

function add(){
    document.getElementById('error').innerText=" ";
    let a=document.getElementById('item').value;
    console.log(a);
    
    if(a==''){
        document.getElementById('error').innerText="please enter value"
    }
    else{
        let box=document.getElementById("box");
        let li=document.createElement("li");
        li.innerText=a;
        // let btn=document.createElement("button");
        // btn.classList.add("add1");
        // btn.innerHTML=delete;
            let img = document.createElement('img');
            img.src = 'delete.jpg';
           img.classList.add("add1");

        let pos=box.firstElementChild;
        
        if(pos==null){
            box.appendChild(li);
            li.appendChild(img);
           
         
        }
       
 else{
         box.insertBefore(li,pos);
         li.appendChild(img);
         
        
        }
    
    img.addEventListener("click",() =>{
       box.removeChild(li)
    
      });
    }
   

}



