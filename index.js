function functionScroll() {
    window.scroll({
        top: 600,
        // left: 100,
        behavior: "smooth",
      });
}

function github() {
    // alert("Encaminhando para o github!");
    var resultado = confirm("Deseja continuar?");
    if (resultado == true) {
        alert("Encaminhando para o github!")
        document.getElementsByClassName("github");
    } else {
        
    }
    
}