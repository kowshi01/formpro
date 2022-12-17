
    let myobj={
        name1 : 'abc',
        emailid : 'abc@gmail.com'
     }
  
  let myobj_ser=JSON.stringify(myobj);
  localStorage.setItem("MyObj",myobj_ser);
  let myobj_deser=JSON.parse(localStorage.getItem("MyObj"));
  console.log(myobj_deser);
