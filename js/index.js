/*procedimiento para gestionar el form

//1 indicar los elementos con id y/o clases, según corresponda
//2 capturar los elementos.
//3 escuchar los elementos claves (botones) y lanzar una función -> esta función va a escuchar el click y también averiguará en qué botón se produjo el evento.
*/
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const fullName = document.getElementById("fullName")
const ruta = document.getElementById("ruta")
const km = document.getElementById("km")
const extraInfo = document.getElementById("extraInfo")
const fotoReclamo = document.getElementById("fotoReclamo")
const check = document.getElementById("check").addEventListener("click",function(){
    btnFormRec[btnFormRec.length - 1].toggleAttribute("disabled");
});



const form1 = document.getElementById("frmReclamo1")
const form2 = document.getElementById("frmReclamo2")

const btnFormRec = document.getElementsByClassName("btnFormRec")
console.log(btnFormRec);

for (let i = 0; i < btnFormRec.length; i++) {
    btnFormRec[i].addEventListener("click", gestionFormRec)
}

function gestionFormRec(e) {

    switch (e.target.id) {
        case 'btnSiguienteF1':
            form1.classList.toggle("d-none");
            form2.classList.toggle("d-none");
            break;
        case 'btnPrevioF2':
            form1.classList.toggle("d-none");
            form2.classList.toggle("d-none");
            break;
        case 'btnEnviarF2':
            enviaReclamo();
            break;
        default:
            break;

    }

}

function enviaReclamo(){ 
    console.log(`
    Nombre: ${fullName.value}
    Teléfono: ${telefono.value}
    Email: ${email.value}
    ruta: ${ruta.value}
    Km: ${km.value}
    Foto del Incidente: ${fotoReclamo.value}
    Información extra: ${extraInfo.value}`);

    form1.reset();
    form2.reset();
    btnFormRec[btnFormRec.length - 1].toggleAttribute("disabled");
    form2.classList.add("d-none");
    form1.classList.remove("d-none");

    
}
//Nosotros

const teamMembers = document.querySelectorAll('.team-member');
for (let i = 0; i < teamMembers.length; i++) {
  teamMembers[i].addEventListener('mouseover', function() {
    this.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.6)';
  });
  teamMembers[i].addEventListener('mouseout', function() {
    this.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.2)';
  });
}

/*

 form1.classList.toggle("d-none")
    form2.classList.toggle("d-none")
btnSiguienteF1
btnPrevioF2
btnEnviarF2


btnFormRec

*/
/*
scenarios:
form1-> 
1) btn-siguiente: ocultar form1 y mostrar form2

form2 ->
1) btn-previo: ocultar form2 mostrar form1
2) btn-siguiente: ocultar form2 mostrar form3

form3 ->
1) btn-previo: ocultar form3 mostrar form2
2) btn-enviar: lanzar función de procesamiento del form (form*3)


función de proceso del formulario (formularios, ya sé)
capturamos los elementos del formulario (inputs, textarea) y accedemos a sus valores, para almacenarlos en variables... por ej

const email = document.getElementById("email").value
console.log(email) -> marcelobettini@bla.com


..por último, escondemos el form3 y volvemos a mostrar el form1 (previamente reseteado)
podríamos dar un feedback "su mensaje fue enviado y lo leerá el primo de Magoya"
*/

