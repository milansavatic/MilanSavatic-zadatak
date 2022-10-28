//Dropdown our diwisions
const ClickDropdown1=()=>{
  let openlist1=document.querySelector('.navigation-dropdown1');
  let btnp1=document.querySelector('.pd1');
  if(btnp1.innerText==='^'){
    openlist1.style.display='flex';
    btnp1.innerText='v';
  }
  
    else{

    openlist1.style.display='none';
    btnp1.innerHTML='^';
  }
}

//Dropdown our investitors
const ClickDropdown2=()=>{
  let openlist2=document.querySelector('.navigation-dropdown2');
  let btnp2=document.querySelector('.pd2');
  if(btnp2.innerText==='^'){
    openlist2.style.display='flex';
    btnp2.innerText='v';
  }
  
    else{

    openlist2.style.display='none';
    btnp2.innerHTML='^';
  }
}

//Open hamburger

  let openTabletList=document.querySelector('.tabletdropdown');
  let btnHamburger=document.querySelector('.hamburger');
  const clickHamburger=()=>{
    openTabletList.style.display='block';
  }
  btnHamburger.addEventListener('click' ,clickHamburger);


  //Close hamburger

let btnCloseTabletMode=document.querySelector('.closetabletmode');
const clickCloseTablet=()=>{
  openTabletList.style.display='none'
}
btnCloseTabletMode.addEventListener('click', clickCloseTablet);

//Dropdown our diwisions Tablet
const ClickDropdownTablet1=()=>{
  let list1=document.querySelectorAll('.ourdivision1');
  let btnTablet1=document.querySelector('.par1');
  if(btnTablet1.innerText==='^'){
    list1.forEach((item)=>{
      item.style.display='block';
    })
    btnTablet1.innerText='v';
  }
  else{

      list1.forEach((item)=>{
        item.style.display='none';
      })
    btnTablet1.innerHTML='^';
  }
}

//Dropdown our diwisions Tablet
const ClickDropdownTablet2=()=>{
  let list2=document.querySelectorAll('.ourdivision2');
  let btnTablet2=document.querySelector('.par2');
  if(btnTablet2.innerText==='^'){
    list2.forEach((item)=>{
      item.style.display='block';
    })
    btnTablet2.innerText='v';
  }
  else{

      list2.forEach((item)=>{
        item.style.display='none';
      })
    btnTablet2.innerHTML='^';
  }
}


//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("peoplesay-right");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//Close Open btn +
const openClose=()=>{
  let opentext=document.querySelector('.textwater');
  let btn=document.querySelector('.click')

  if(btn.innerText==='+'){
    opentext.style.display='block';
    btn.innerText='-';
  }
  else{
    opentext.style.display='none';
    btn.innerText='+';
  }

}

