const Myform=document.getElementById('form');
Myform.addEventListener('submit',onsubmit)

function onsubmit(e){
    e.preventDefault();
    const amount=document.getElementById('Eamount').value;
    const des=document.getElementById('des').value;
    const cat=document.getElementById('category').value;
    let obj={
        Eamount : amount,
        Edes : des,
        Ecat : cat
    }
   localStorage.setItem(obj.Edes,JSON.stringify(obj));   
   var objde=JSON.parse(localStorage.getItem(obj.Edes));
   newuser(objde);
  }
  function newuser(nuser){
       let parentNode=document.getElementById('output');
       let childHTML=`<h4 id='heading'> ${nuser.Eamount} - ${nuser.Edes} - ${nuser.Ecat}<button onclick=edituser('${nuser.Eamount},${nuser.Edes},${nuser.Ecat}')>Edit</button>
           <button onclick=deluser('${nuser.Edes}')>Delete</button></h4>`;
       parentNode.innerHTML=parentNode.innerHTML+childHTML;
    }
    function edituser(amount,des,cat){
      amount=document.getElementById('Eamount').value;
      des=document.getElementById('des').value;
      cat=document.getElementById('category').value;
      deluser(des);
   }  
   function deluser(des) {
      localStorage.removeItem(des);
      removeFromScreen(des);
   }  
  function removeFromScreen(des){
      const parentNodee=document.getElementById('output');
      const childNodee=document.getElementById('heading');
      if(childNodee){
      parentNodee.removeChild(childNodee); 
      }
   }