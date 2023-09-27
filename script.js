let follower = document.getElementById("follower");
let follower2 = document.getElementById("follower2");
let refer = document.getElementById("refer");

let navImg = document.getElementById("nav-img");
let navLink = document.querySelectorAll(".nav-link");

let aboutBtn = document.getElementById("about");
let workBtn = document.getElementById("work");
let contactBtn = document.getElementById("contact");
let titleBtn = document.getElementById("title");

let pageOne = document.querySelectorAll(".page-1");
let pageTwo = document.querySelectorAll(".page-2");
let pageThree = document.querySelectorAll(".page-3");
let pageFour = document.querySelectorAll(".page-4");

let project = document.querySelectorAll('.project');
let nextBtn = document.querySelector('#next');
let previousBtn = document.querySelector('#previous');

let currentProject = 0;


 // v temporary to fix a bug
  for (let i = 0, max = pageOne.length; i < max; i++) {
    pageOne[i].style.display = "block";
  }

 // ^ temp

  function clearProjects(){
    for (let i = 0, max = project.length; i < max; i++) {
      project[i].style.display = "none";
     }
  }

  function clearPage(){
    if (pageOne[0].style.display === "block"){
    for (let i = 0, max = pageOne.length; i < max; i++) {
      pageOne[i].style.display = "none";
     }}
     if (pageTwo[0].style.display === "block"){
     for (let i = 0, max = pageTwo.length; i < max; i++) {
      pageTwo[i].style.display = "none";
     }}
     if (pageThree[0].style.display === "block"){
     for (let i = 0, max = pageThree.length; i < max; i++) {
      pageThree[i].style.display = "none";
     }}
     if (pageFour[0].style.display === "block"){
     for (let i = 0, max = pageFour.length; i < max; i++) {
      pageFour[i].style.display = "none";
     }}
  }
  
  window.addEventListener("resize", ()=>{
    if (navLink[0].style.display === "none"){
      if (window.innerWidth > 520){
        for (let i = 0, max = navLink.length; i < max; i++) {
          navLink[i].style.display = "block";
         }}
    }
  });

  nextBtn.addEventListener('click', ()=>{
    currentProject++;
    if (currentProject > (project.length - 1))
    currentProject = 0;
    clearProjects();
    project[currentProject].style.display = 'block';
  });

  previousBtn.addEventListener('click', ()=>{
    currentProject--;
    if (currentProject < 0)
    currentProject = project.length - 1;
    clearProjects();
    project[currentProject].style.display = 'block';
  });

  navImg.addEventListener('click', ()=>{
    if (navLink[0].style.display === "block"){
      for (let i = 0, max = navLink.length; i < max; i++) {
        navLink[i].style.display = "none";
       }} else {
      for (let i = 0, max = navLink.length; i < max; i++) {
        navLink[i].style.display = "block";
       }} 
  });

  function clearColor(){
    aboutBtn.style.color = "var(--about-clr)";
    workBtn.style.color = "var(--work-clr)";
    contactBtn.style.color = "var(--contact-clr)";
  };

  titleBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "var(--title-clr)";
    clearColor();
    clearPage();
   for (let i = 0, max = pageOne.length; i < max; i++) {
    pageOne[i].style.display = "block";
   }
  });

  aboutBtn.addEventListener("click", ()=>{
   document.body.style.backgroundColor = "var(--about-clr)";
   clearColor();
   aboutBtn.style.color = "var(--title-clr)";
   clearPage();
   for (let i = 0, max = pageTwo.length; i < max; i++) {
    pageTwo[i].style.display = "block";
   }
 });

 workBtn.addEventListener("click", ()=>{
  document.body.style.backgroundColor = "var(--work-clr)";
  clearColor();
  workBtn.style.color = "var(--title-clr)";
  clearPage();
   for (let i = 0, max = pageThree.length; i < max; i++) {
    pageThree[i].style.display = "block";
   }
});

contactBtn.addEventListener("click", ()=>{
  document.body.style.backgroundColor = "var(--contact-clr)";
  clearColor();
  contactBtn.style.color = "var(--title-clr)";
  clearPage();
   for (let i = 0, max = pageFour.length; i < max; i++) {
    pageFour[i].style.display = "block";
   }
});

//Detect touchscreen
  function isTouchDevice() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }

//Follow function    
  function move(e) {
    try {
      var x = isTouchDevice() ? e.touches[0].pageX -20 : e.pageX;
      var y = isTouchDevice() ? e.touches[0].pageY -20 : e.pageY;
    } catch (e) {}
    follower.style.left = x -16 + "px";
    follower.style.top = y -16 + "px";
    follower2.style.left = x -16 + "px";
    follower2.style.top = y -16 + "px";
  };

  function move2(e) {
    var x = e.pageX;
    var y = e.pageY;
    follower.style.left = x -16 + "px";
    follower.style.top = y -16 + "px";
    follower2.style.left = x -16 + "px";
    follower2.style.top = y -16 + "px";
  };

//Follow action
  document.addEventListener("mousemove", (e) => {
    move(e);
  });

  document.addEventListener("scrollend", (e) => {
    (e) => {
      var x = e.pageX;
      var y = e.pageY;
      follower.style.left = x -16 + "px";
      follower.style.top = y -16 + "px";
      follower2.style.left = x -16 + "px";
      follower2.style.top = y -16 + "px";
    };
  });

  document.addEventListener("touchmove", (e) => {
    move(e);
  });

//Hide/Display cursor on touchscreen
  document.addEventListener("touchend", (e) => {
    follower.style.left = refer.offsetLeft + "px";
    follower.style.top = refer.offsetTop + "px";
    follower2.style.left = refer.offsetLeft + "px";
    follower2.style.top = refer.offsetTop + "px";
    follower.style.display = "none";
    follower2.style.display = "none";
  });

  document.addEventListener("touchstart", (e) => {
    follower.style.display = "block";
    follower2.style.display = "block";
  });


