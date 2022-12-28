//Global scope, class, object, method, function, prototype.
//Global scope
/*this.b='sunflower'
console.log(b);
console.log(window.b)
this.a={
    flower : 'rose'
};
console.log(this.a.flower);*/
//object and method
/*let a={
    flower : 'lotus',
    b(){
        console.log(`Flower = ${this.flower}`);
    }
};
a.b();*/
//function
/*this.flower='sunflower'
const a=function(flower2){
    console.log(`Flower = ${this.flower} flower2 = ${flower2}`);
}
a.call(this,'lotus')*/
//prototype
/*const a=function(flower){
    this.flower1 = flower
};
a.prototype.b=function(flower2){
    console.log(`Flower = ${this.flower1} , flower2 = ${flower2}`);
}
const flowers=new a('Lotus');
flowers.b('rose')*/
//class
/*class Flower{
    constructor(flower){
        this.flower1 = flower
    }
    b(flower2){
        console.log(`Flower1 = ${this.flower1} , flower2 = ${flower2}`);
    }
}
const flowers=new Flower('Lotus');
flowers.b('rose')*/