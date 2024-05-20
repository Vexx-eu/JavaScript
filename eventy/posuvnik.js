window.addEventListener("scroll", function(){

  let a =  document.documentElement.scrollTop;  // pocet pixelu ktere scrollnu 
  let b = document.documentElement.scrollHeight - document.documentElement.clientHeight; //
  let scrolled = (a / b) * 100 + "%"; 
  document.querySelector("header div>div").style.width = scrolled;

  console.log(scrolled)
})