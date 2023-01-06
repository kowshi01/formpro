var b=0;
const post=[
    {title : 'Post1'},
    {title : 'Post2'},
    {title : 'Post3'}
];
const newPost=[
    {title : 'Post5'},
    {title : 'Post6'},
    {title : 'Post7'}
]
function getPost(){
    setTimeout(() => {
    let output='';
    for(let i=0;i<post.length;i++){
        output+=`<li>${post[i].title}</li>`;
        updateLastUserActivityTime(new Date().getTime());
    }
    
    document.body.innerHTML=output;
    }, 1000);
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
function updateLastUserActivityTime(a){
    new Promise((resolve)=>{
        setTimeout(() => {
            if(a>0){
                b=a;
                resolve();
            }
            console.log(b);
        }, 1000);
});
}
function delPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(post.length>0){
                resolve(post.pop());
            }else{
                
                    setTimeout(() => {
                        let output='';
                        for(let i=0;i<newPost.length;i++){
                            output+=`<li>${newPost[i].title}</li>`;
                            updateLastUserActivityTime(new Date().getTime());
                        }
                        
                        document.body.innerHTML=output;
                        }, 1000);
                
            }
        },1000);
    });
}
create4thPost({title :'post4'})
.then(()=>{
    getPost()
    delPost().then(()=>{
        getPost()
        delPost().then(()=>{
            getPost()
            delPost().then(()=>{
                getPost()
                updateLastUserActivityTime()
                delPost().then(()=>{
                    getPost()
                    delPost().catch(err=>console.log(err));
                })
            })
        })
    })
})