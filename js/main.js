const progress=document.getElementById("bar");
console.log(progress);
const load=document.getElementById("loading");
console.log(load);

let barWidth=0;

const download=()=>{
    barWidth++;
    progress.style.width=`${barWidth}%`
    setTimeout(()=>{
        load.innerHTML=(barWidth===100)?  `${barWidth}% completed `:`${barWidth}% progress `

    },1000)
}

download()

setTimeout(()=>{

 let intId=   setInterval(()=>{
        if(barWidth===100){
            clearInterval(intId)
        }

        else{
            download()
        }

    },100)


},2000)