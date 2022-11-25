function repasarN(){
    window.location = "numeros1.html";    
} 
function testN(){
    window.location = "numerosev.html";    
} 
function numerosM(){
    Swal.fire({
          
      color: '#716add',
      imageUrl:'img/numeros.gif',
      showCloseButton: true,
      background: '#fff url(/images/trees.png) ' ,
      backdrop: `
        rgba(0,0,123,0.4)
        
      `,
      html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>',
      confirmButtonText:'<p onclick="repasarN()">Repasar</p>',
      showCancelButton:true,      
      cancelButtonColor:' rgb(2, 170, 192) ',
      cancelButtonText:'<p onclick="testN()">Test</p>'
     // template: '#numerosM'
  });
  
  } 
  
  ////
function repasarF(){
    window.location = "figuras1.html";    
} 
function testF(){
    window.location = "figurasev.html";    
}
  function figurasM(){
    Swal.fire({
      imageUrl:'img/figuras.gif',
      showCloseButton: true,
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          `,
        html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>',
        confirmButtonText:'<p onclick="repasarF()">Repasar</p>',
        showCancelButton:true,
      
      cancelButtonColor:' rgb(2, 170, 192) ',
        cancelButtonText:'<p onclick="testF()">Test</p>'
    });
      
  } 
    ////
    function repasarA(){
        window.location = "abecedario1.html";    
    } 
    function testA(){
        window.location = "abecedarioev.html";    
    }
    function abecedarioM(){
        Swal.fire({
          imageUrl:'img/abc.gif',
          showCloseButton: true,
            color: '#716add',
            background: '#fff url(/images/trees.png)' ,
            backdrop: `
              rgba(0,0,123,0.4)
              `,
            html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>',
            confirmButtonText:'<p onclick="repasarA()">Repasar</p>',
            showCancelButton:true,
      
      cancelButtonColor:' rgb(2, 170, 192) ',
        cancelButtonText:'<p onclick="testA()">Test</p>'
        });
          
      } 
        ////
        function repasarC(){
            window.location = "colores1.html";    
        } 
        function testC(){
            window.location = "coloresev.html";    
        }
  function coloresM(){
    Swal.fire({
      imageUrl:'img/seres.gif',
      showCloseButton: true,
        color: '#716add',
        background: '#fff url(/images/trees.png)' ,
        backdrop: `
          rgba(0,0,123,0.4)
          `,
        html:'<audio id="intro" src="sonidos/asierto.mp3" autoplay></audio>',
        confirmButtonText:'<p onclick="repasarC()">Repasar</p>',
        showCancelButton:true,
      
      cancelButtonColor:' rgb(2, 170, 192) ',
        cancelButtonText:'<p onclick="testC()">Test</p>'
    });
      
  } 
  /////
  