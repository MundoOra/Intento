function revisar() {
 
    var puntos = 100;
    var a = 0;
    var e = 0;
    var pregunta1 = document.uno.uno[0].checked;
    var pregunta2 = document.dos.dos[1].checked;
    var pregunta3 = document.tres.tres[0].checked;
    var pregunta4 = document.cuatro.cuatro[1].checked;
    var pregunta5 = document.cinco.cinco[2].checked;
    if(pregunta1==false){
    puntos=puntos-16;
    e++;
    }else{
    a++;
    }
    if(pregunta2==false){
    puntos=puntos-16;
    e++;
    }else{
    a++;
    }
    if(pregunta3==false){
    puntos=puntos-16;
    e++;
    }else{
    a++;
    }
    if(pregunta4==false){
    puntos=puntos-16;
    e++;
    }else{
    a++;
    }
    if(pregunta5==false){
    puntos=puntos-16;
    e++;
    }else{
    a++;
    }
    if(puntos==100){
    //window.alert("Exito");
    return bien();
    }else{
     //window.alert("Suerte la proxima");
     return mal();
    }
      
 }
 function siguiente(){
    window.location = "abecedarioev3.html";
    
  } 
 function regresar(){
     window.location = "menu1.html";
     
 } 

function bien(){
   
        Swal.fire({
            title: 'Buen trabajo!',       
            color: '#716add',
            imageUrl:'img/felicidadesev.gif',
            background: '#fff ' ,
            backdrop: `
              rgba(0,0,123,0.4)              
            `,
            html:'<audio id="intro" src="sonidos/victoria1.mp3" autoplay></audio>'
            ,
            showCloseButton: true,
            showConfirmButton:false,
            confirmButtonText:'<p onclick="siguiente()">Siguiente</p>',
            showCancelButton:true,      
            cancelButtonColor:' rgb(2, 170, 192) ',
            cancelButtonText:'<p onclick="regresar()">Menu</p>'
        });
     
} 
function mal(){
   
    Swal.fire({
        title: 'Ya casi!',       
        color: '#716add',
        imageUrl:'img/trsiteev.gif',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)          
        `,
        html:'<audio id="intro" src="sonidos/derrota2.mp3" autoplay></audio>'
        ,
        showCloseButton: true,
        confirmButtonText:'<p>Reintentar</p>',
        showCancelButton:true,      
        cancelButtonColor:' rgb(2, 170, 192) ',
        cancelButtonText:'<p onclick="regresar()">Abandonar</p>'
    });
 
}
function atras(){
    Swal.fire({
       
        title: '¿Salir?',
        imageUrl:'img/adios1.gif', 
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          
        `,
        confirmButtonText:'<p onclick="regresar()">Si</p>',
        showCloseButton: true,
        html:'<audio id="intro" src="sonidos/derrota4.mp3" autoplay></audio>'
    });
}
