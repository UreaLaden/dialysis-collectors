window.onload = ()=>{

    let navToggle = document.querySelector("#navi-toggle");
    navToggle.addEventListener("click",function(){

        let navBtn = document.querySelectorAll("#nav-item");
        navBtn.forEach(element =>{
            element.addEventListener("click",function()
            {
                navToggle.checked = false;
            })
        })
    })
};


