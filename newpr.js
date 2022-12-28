class Student{
    static numstud=0;
    constructor(na,ag,phno,mk){
    this.name=na;
    this.age=ag;
    this.phonenumber=phno;
    this.mark=mk;
    Student.numstud++;
    }
    
   result=function(){
        if(this.mark>40){
            let resul =(ag) => {
                if(ag>11){
                    return true;
                }
                else{
                    return false;
                }
            }
            resul(this.age);
            if(true){
                console.log(`${this.name}`);
            }
            
        }else{
            console.log('not eligible');
        }
    }
    numstudent=function(){
        console.log(Student.numstud);
    }
}

const stud1=new Student('abc',11,949553,90);
stud1.result();
const stud2=new Student('cde',12,846167,40);
stud2.result();
const stud3=new Student('efg',13,434667,70);
stud3.result();
const stud4=new Student('hij',14,568532,30);
stud4.result();
const stud5=new Student('klm',15,357889,80);
stud5.result();
stud5.numstudent();
