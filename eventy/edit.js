let a = document.querySelector("h1");
    a.addEventListener('dblclick', function() {
    let pole = a.innerText;
  
    let inp = document.createElement('input');
    inp.type = 'text';
    inp.value = a.innerText;
    a.replaceWith(inp)
    

    
  
    inp.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        a.innerText = inp.value;
        inp.blur()
      }
    });
  
    inp.addEventListener ("blur", (event) =>{
      inp.replaceWith(a);
    })

  });