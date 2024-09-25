
let toogle=()=>{
    let ul = document.querySelector('.ul1');
    ul.classList.toggle('ul2');
    
    if(ul.classList.contains("ul2")){
        let butt = document.querySelector(".buttondiv")
        butt.classList.add("crossStyle")
    }else{
        let butt = document.querySelector(".buttondiv")
        butt.classList.remove("crossStyle")
    }
}
