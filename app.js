let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn= document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector(".msg")


let turnO=true;
let count = 0;// for draw

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetgame=()=>{
  turnO=true;
  enabledbtn();
  msgcontainer.classList.add("hide");
  count=0;

  

}


const enabledbtn=()=>{
  for(let box of boxes){
  
  box.disabled=false;
  box.innerText="";
  
  }
 }

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
     box.style.color = "#3F7D58";
      turnO = false
      
    } else {
      //playerX
      box.innerText = "X";
        box.style.color = "#102d24"
      turnO = true;
       
    }

    count ++;

    box.disabled=true;

    let iswinner=checkwinner();

    if(count===9&&!iswinner){
      draw();
    }

    
})



let draw = ()=>{
  msg.innerText="Game-Draw";
  msgcontainer.classList.remove("hide");
  disabledbtn();
}

});
 



 const disabledbtn=()=>{
  for(let box of boxes){
    
  box.disabled=true;
  }
 }



 const showwinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  disabledbtn();

 }





const checkwinner = ()=>{
    for(let pattern of winpattern){
        
    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val != ""&& pos2val != "" && pos3val!=""){
      if(pos1val==pos2val&&pos2val==pos3val){
        
        showwinner(pos1val);
        
        
      } }
    }

}



newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
