/*const wifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});
const getPopcorn=wifeBringingTickets.then((t)=>{
    console.log('wife : I have tickets');
    console.log('husband : we should go in');
    console.log('wife : no i am hungery');
    return new Promise((resolve,reject)=>resolve(`${t} and popcorn`));
});
const getButter=getPopcorn.then((t)=>{
    console.log('husband : your popcorn');
    console.log('husband : we can go now');
    console.log('wife : I need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
const getColdDrinks=getButter.then((t)=>{
    console.log('husband : your butter');
    console.log('wife : i need cold drinks');
    console.log('husband : Lets go');
    return new Promise((resolve,reject)=>resolve(`${t} and cold drinks`));
});
getColdDrinks.then((t)=>console.log(t));*/
//async await
/*const preMovie = async()=>{
    const wifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve(`butter`));
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));
    let ticket=await wifeBringingTickets;
    console.log('wife : I have tickets');
    console.log('husband : we should go in');
    console.log('wife : no i am hungery');
    let popcorn= await getPopcorn;
    console.log(`husband : your ${popcorn}`);
    console.log('husband : we can go now');
    console.log('wife : I need butter on my popcorn');
    let butter=await getButter;
    console.log(`husband : your ${butter}`);
    let colddrinks=await getColdDrinks;
    console.log('wife : i need cold drinks');
    console.log(`husband : your ${colddrinks}`);
    console.log('husband : Lets go');
    return ticket;
}
preMovie().then((t)=>console.log(`${t}`));*/
/*const preMovie = async()=>{
    const wifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve(`butter`));
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));
    let ticket=await wifeBringingTickets;
    let [popcorn,butter,colddrinks]=await Promise.all([getPopcorn,getButter,getColdDrinks]);
    console.log(`${popcorn},${butter},${colddrinks}`);
    return ticket;
}
preMovie().then((t)=>console.log(`Person show ${t}`));*/

/*var b=0;
const post=[
    {title : 'Post1'},
    {title : 'Post2'},
    {title : 'Post3'}
];
function getPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let output='';
            for(let i=0;i<post.length;i++){
                output+=`<li>${post[i].title}</li>`;
            }
            resolve(console.log('success'));
            document.body.innerHTML=output;
            }, 1000);
    });
}
function create4thPost(posts){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            post.push(posts);
            //updateLastUserActivityTime(new Date().getTime());
            const error=false;
            if(!error){
                resolve();
            }else{
                reject("error");
            }
        }, 1000);
    });
}
function delPost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            while(post.length>0){
                resolve(post.pop());
            }
            if(post.length<0){
                reject("Array is empty now");
            }
    },1000);
});
}

async function main() {
    await create4thPost({ title: "Post 4"});
    await getPost();
    await delPost();
    await getPost();
  }
  main();*/
  
