function siguiente(){
  window.location = "abecedario22.html";
  
} 
function testN(){
  window.location = "abecedarioev";    
} 
function regresar(){
  window.location = "menu1.html";
  
} 
/////
function bien(){
  Swal.fire({
        
    color: '#716add',
    imageUrl:'img/bien3.gif',
    
    background: '#fff url(/images/trees.png) ' ,
    backdrop: `
      rgba(0,0,123,0.4)
      
    `,
    html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>'+'<button class="btn btn-success" onclick="regresar()">Menu</button>'
    ,
    showCloseButton: true,
    confirmButtonText:'<p onclick="siguiente()">Siguiente</p>',
    showCancelButton:true,      
    cancelButtonColor:' rgb(2, 170, 192) ',
    cancelButtonText:'<p onclick="testN()">Hacer Test</p>'
});

} 
function bien2(){
  Swal.fire({
    imageUrl:'img/bien2.gif',
      
      color: '#716add',
      background: '#fff url(/images/trees.png)' ,
      backdrop: `
        rgba(0,0,123,0.4)
        `,
      html:'<audio id="intro" src="sonidos/victoria2.mp3" autoplay></audio>'+'<button class="btn btn-success" onclick="regresar()">Menu</button>'
      ,
      showCloseButton: true,
      confirmButtonText:'<p onclick="siguiente()">Siguiente</p>',
      showCancelButton:true,      
      cancelButtonColor:' rgb(2, 170, 192) ',
      cancelButtonText:'<p onclick="testN()">Hacer Test</p>'
  });
    
} 

 // $("#bien1").click( function(){ 

 // });
  ///////
  function mal1(){
    Swal.fire({
      imageUrl:'img/error4.gif',
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        html:'<audio id="intro" src="sonidos/error.mp3" autoplay></audio>'+'<button class="btn btn-success" onclick="regresar()">Abandonar</button>'
    });
    
  } 
  /////
  function mal2(){
    Swal.fire({
      imageUrl:'img/error.gif',     
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        html:'<audio id="intro" src="sonidos/derrota4.mp3" autoplay></audio>'+'<button class="btn btn-success" onclick="regresar()">Abandonar</button>'
    });
    
  } 
  /////
  function mal3(){
    Swal.fire({
      imageUrl:'img/error3.gif',
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        
        html:'<audio id="intro" src="sonidos/derrota2.mp3" autoplay></audio>'+'<button class="btn btn-success" onclick="regresar()">Abandonar</button>'
    });
  
    
  } 
  

