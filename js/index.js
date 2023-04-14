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

const emailC = document.getElementById("emailC")
const telefonoC = document.getElementById("telefonoC")
const fullNameC = document.getElementById("fullNameC")
const ConsultaC = document.getElementById("ConsultaC")


const form1 = document.getElementById("frmReclamo1")
const form2 = document.getElementById("frmReclamo2")
const form3 = document.getElementById("frmConsulta")

const btnFormRec = document.getElementsByClassName("btnFormRec")
const btnConsulta = document.getElementsByClassName("btnConsulta")

for (let i = 0; i < btnFormRec.length; i++) {
    btnFormRec[i].addEventListener("click", gestionFormRec)
}

btnConsulta[0].addEventListener("click",enviaConsulta );  

function gestionFormRec(e) {
    e.preventDefault();
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

function enviaConsulta(e){ 
    e.preventDefault();
    console.log(`
    Nombre: ${fullNameC.value}
    Teléfono: ${telefonoC.value}
    Email: ${emailC.value}
    Consulta: ${ConsultaC.value}`);

    form3.reset();
  
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

