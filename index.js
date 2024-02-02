Array.prototype.custommap=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        
            res.push(cb(this[i],i,this))
       
    }
    return res
}

console.log([1,2,3,4,5].custommap((item)=>item%2==0))
Array.prototype.myfilter=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){

            res.push(this[i])
        }
       
    }
    return res
}

console.log([1,2,3,4,5].myfilter((item)=>item%2==0))

Array.prototype.myreduce=function (cb,initial){
    let acc=initial==undefined?undefined:initial
   
    for(let i=0;i<this.length;i++){
        if(acc!=undefined){
            acc=cb(acc,this[i],i,this)
        }else{
            acc=this[i]
        }
    }
    return acc
    
}

let arr=[1,2,3,4,5]

let res=arr.myreduce((acc,curr,i)=>{
    acc[i]=curr
    return acc
},{})
console.log(res)