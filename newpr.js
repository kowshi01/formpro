//call apply bind

/*let obj={
    fname : 'ABC',
    lname : 'DEF'
}
let func=function(met){
    console.log(`${met} - First Name = ${this.fname} and Last Name = ${this.lname}`);
}
func.call(obj, 'Call');
func.apply(obj, ['Apply']);
let bi=func.bind(obj, 'Bind');
bi();*/

/*let Student={
    age : 20
}
let func = function(){
    console.log(`Age = ${this.age}`);
}
let bi=func.bind(Student);
bi();*/

// currying
/*let Student= function(name,result){
    console.log(name,result)
}
let cur=Student.bind(this, 'ABC');
cur('P')*/

/*let Student1= function(name1){
    return function(result1){
        console.log(name1,result1);
    }
}
let cur=Student1('ABC');
cur('P')*/