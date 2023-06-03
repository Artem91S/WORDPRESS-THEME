/////css
const input = document.getElementById("input");
input.addEventListener("click", color);
let count=1;
function color(e){
let click = e.target.dataset.input;
if(click ==="1"){
    ++count;
}
function takeTheme(themeName){
    let themeUrl =`css/style-${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href',themeUrl)
}
if(count % 2 === 0){
    takeTheme("black")
}
else{
    takeTheme("light")
}
}
// ////block Our Services
let selectButton =document.querySelector('.click-on-btn--color');
const buttonDiscription = Array.from(document.querySelector(".main__our-services__information").children);
let btnClick = document.querySelector(".main__our-services__list");
btnClick.addEventListener("click", e=>{
let targetClick =e.target;
let nameOfBtnClick =e.target.dataset.name;
buttonDiscription.forEach(discription =>{
    if(discription.getAttribute('show-info') === nameOfBtnClick ){
        discription.classList.add("click-on-btn");
    }
    else{
        discription.classList.remove("click-on-btn");
    }
})
activeColor(targetClick);
})

function activeColor(clickname) {
 
    if(selectButton){
        
        selectButton.classList.remove("click-on-btn--color")  
    }

    selectButton = clickname;
    selectButton.classList.add("click-on-btn--color")  

}

///////Our Amazing Work
const block =document.querySelector('.main__our-work__posters-block')
const buttonLoadImg = document.querySelector(".load-img");
const namesOurWorkButtons = Array.from(document.querySelector('.main__our-work__btn__list').children);

const arr =[
    {url:"./image/StepProjectHam/graphicDesign/graphic-design1.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/landingPage/landing-page1.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/webDesign/web-design1.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/wordPress/wordpress1.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design2.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/landingPage/landing-page2.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/webDesign/web-design2.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/wordPress/wordpress2.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design3.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design4.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/landingPage/landing-page3.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/landingPage/landing-page4.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/landingPage/landing-page5.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/webDesign/web-design3.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/webDesign/web-design4.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/wordPress/wordpress3.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/wordPress/wordpress4.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design5.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design6.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design7.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/landingPage/landing-page6.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/landingPage/landing-page7.jpg",
    cattegory:"landing-page",
    "showphoto":"landing-page",
    name:"LandingPage"},
    {url:"./image/StepProjectHam/webDesign/web-design5.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/webDesign/web-design6.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/webDesign/web-design7.jpg",
    cattegory:"web-design",
    "showphoto":"web-design",
    name:"Webdesign"},
    {url:"./image/StepProjectHam/wordPress/wordpress5.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/wordPress/wordpress6.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/wordPress/wordpress7.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design8.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design9.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design10.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/wordPress/wordpress8.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/wordPress/wordpress9.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design11.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},
    {url:"./image/StepProjectHam/wordPress/wordpress10.jpg",
    cattegory:"wordpress",
    "showphoto":"wordpress",
    name:"Wordpress"},
    {url:"./image/StepProjectHam/graphicDesign/graphic-design12.jpg",
    cattegory:"graphic-design",
    "showphoto":"graphic-design",
    name:"GraphicDesig"},

];
let html ="";
function add(){
arr.forEach(key=>{
    html+=
    `<li show-photo=${key.showphoto} class="${key.cattegory} hover-element hidden-photo">
    <div class="create-design">
        <div class="create-design__container">
        <svg class="create-design__container__svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#FFFF"/>
        </svg>
        <span class="create-design__container__square"><span>
        </span></span>
        </div>
        <div>
        <h4 class="create-design__title">creative design</h4>
        <p class="create-design__description">${key.name}</p>
        </div>
    </div>
    <img class="create-design__img" src=${key.url} alt=${key.name}
    </li>
    `
})
return block.insertAdjacentHTML("beforeend",html)}
add()
///button on click
let counter =12;
buttonLoadImg.addEventListener("click", e => {
    counter+=12; 
    buttonLoadImg.style.display ="none";
    showPhoto("all");
}) 

/////появление фото
function showPhoto(event) {
    const ourWorkClick = typeof event == "string"?event:event.currentTarget.dataset.item;
    if(ourWorkClick == "all" && counter < 24){
        buttonLoadImg.style.display ="flex";
    }
    else{
        buttonLoadImg.style.display ="none";
    }
    namesOurWorkButtons.forEach(btnColor =>{
        btnColor.classList.remove("btn-photo-color");
        if(btnColor.getAttribute("data-item") === ourWorkClick){
            btnColor.classList.add("btn-photo-color");
        }
    }
    )
const addElement =document.querySelectorAll("[show-photo]");
addElement.forEach((elem, index)=>{
    if(ourWorkClick === elem.getAttribute("show-photo")){
        elem.classList.add("active-photo")
        elem.classList.remove("hidden-photo")
    }
    else if(ourWorkClick === "all" && counter > index){
    elem.classList.add("active-photo")
    }
    else{
    elem.classList.add("hidden-photo")
    elem.classList.remove("active-photo")
    }
    })
    }
showPhoto("all")
namesOurWorkButtons.forEach(btn =>{
    btn.addEventListener("click",showPhoto);
    })
//// slider
const slider = document.querySelector(".main__say-about-us__slider-links__links-employees"); 
const icons = Array.from(slider.children);
const btnLeft = document.querySelector(".main__say-about-us__slider-links__left-arrow");
const btnRight = document.querySelector(".main__say-about-us__slider-links__right-arrow");
let blocks = Array.from(document.querySelectorAll("[data-index]"));
icons.forEach(function(icon, index){
    icon.dataset.index = index;
    icons[0].setAttribute('data-active', '');
    icon.addEventListener("click", function(){
        showNextIcon("left");
    })
});
btnLeft.onclick =function(){showNextIcon("left");}
btnRight.onclick =function(){showNextIcon("right");}
function showNextIcon(direction) {
const iconNow =slider.querySelector("[data-active]");
const iconNowIndex =+iconNow.dataset.index;
iconNow.classList.remove("block");
iconNow.removeAttribute('data-active');
let iconNextIndex;
if(direction === "left"){
        iconNextIndex = iconNowIndex + 1 === icons.length ? 0:iconNowIndex + 1;
}
else if(direction === "right"){
            iconNextIndex = iconNowIndex  === 0 ? icons.length - 1:iconNowIndex - 1; 
}
let nextIcon = slider.querySelector(`[data-index ="${iconNextIndex}"]`);
nextIcon.classList.add("block");
nextIcon.setAttribute("data-active"," ");
blocks.forEach(element =>{
element.getAttribute("data-index")
if( nextIcon.getAttribute("data-index") === element.getAttribute("data-index") ){
element.classList.add("block-workers")}
else{element.classList.remove("block-workers")}
});
}
