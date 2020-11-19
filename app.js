var collection = document.querySelectorAll(".box");
 var turns=[];
 
 collection.forEach((item)=>{
   item.addEventListener("click",()=>{
   turns.push(item);
   if(turns.length===9){
     var boxes=document.querySelectorAll(".box");
     if(boxes[0].innerText===boxes[1].innerText){
       if(boxes[1].innerText===boxes[2].innerText){
          boxes[0].style.color="green";
          boxes[1].style.color="green";
          boxes[2].style.color="green";
          }}
       if(boxes[0].innerText===boxes[3].innerText){
            if(boxes[3].innerText===boxes[6].innerText){
            boxes[0].style.color="green";
            boxes[3].style.color="green";
            boxes[6].style.color="green";
          }}
       if(boxes[0].innerText===boxes[4].innerText){
           if(boxes[4].innerText===boxes[8].innerText){
           boxes[0].style.color="green";
           boxes[4].style.color="green";
           boxes[8].style.color="green";
           }
      }        
      if(boxes[3].innerText===boxes[4].innerText){
          if(boxes[4].innerText===boxes[5].innerText){
          boxes[3].style.color="green";
          boxes[4].style.color="green";
          boxes[5].style.color="green";
      }}
      if(boxes[6].innerText===boxes[7].innerText){
       if(boxes[7].innerText===boxes[8].innerText){
       boxes[6].style.color="green";
       boxes[7].style.color="green";
       boxes[8].style.color="green";
       }
      }
      if(boxes[1].innerText===boxes[4].innerText){
       if(boxes[4].innerText===boxes[7].innerText){
       boxes[1].style.color="green";
       boxes[4].style.color="green";
       boxes[7].style.color="green";
        }
       }
      if(boxes[2].innerText===boxes[5].innerText){
       if(boxes[5].innerText===boxes[8].innerText){
       boxes[2].style.color="green";
       boxes[5].style.color="green";
       boxes[8].style.color="green";
       }
     }
       if(boxes[2].innerText===boxes[4].innerText){
       if(boxes[4].innerText===boxes[6].innerText){
       boxes[2].style.color="green";
       boxes[4].style.color="green";
       boxes[6].style.color="green";
       }
     }  
   }
   else{
     if(turns.length%2==1){
      if(item.innerText=="")
      { 
       item.innerText="x";
       }
     }
     else{
      if(item.innerText==""){ 
      item.innerText="o";
      }
     }}
     })
     
    })



