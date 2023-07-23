
//show search bar when btn clicked
function showSearch(){
    const btn=document.getElementById('bn');
    btn.style.display='none';
    document.querySelector('.search').style.display='block';
    document.querySelector('.prof-details').style.display='none';
}
function prevPos(){
    const btn=document.getElementById('bn');
    const width = window.innerWidth;
    //for mobile view
    if(width<=900){
        btn.style.display='block';
        document.querySelector('.search').style.display='none';
        document.querySelector('.prof-details').style.display='block';
    }
}

// display content by screen size
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const dis=document.getElementById('prf');
    const btn=document.getElementById('bn');
    if(width>=900){
        document.querySelector('.prof-details').style.display='block';
        document.querySelector('.search').style.display='block';
        btn.style.display='none';
    }else{
        btn.style.display='block';
        document.querySelector('.search').style.display='none';
        dis.style.display='block';
    }
});
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if(width<=700){
        document.querySelector('.left-sec').style.display='none';
    }else{
        document.querySelector('.left-sec').style.display='block';
    }
});
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if(width<=1200){
        document.querySelector('.right-sec').style.display='none';
    }else{
        document.querySelector('.right-sec').style.display='block';
    }
});

document.getElementById("toggleButton").addEventListener("click", function() {
    var profDetails = document.querySelector("#show-prof");
    if (profDetails.style.display === "none") {
        profDetails.style.display = "block";
    } else {
        profDetails.style.display = "none";
    }
});