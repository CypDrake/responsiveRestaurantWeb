const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click",toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    };
});

window.addEventListener("scroll",function(){
    if(this.pageYOffset>60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-contentactive").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
})
document.querySelectorAll(".menu-item-title img").forEach(image => {

    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");

    }
});
const closePopup = document.querySelector(".popup-image span");

closePopup.onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
};