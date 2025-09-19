function dosagemRemedio(tipoPaciente) {
    
    const ml = 400;
    const conversaoGotas = 400 / 15;
    let strTipoPaciente = "";

    switch (tipoPaciente) {
        case 1:
        strTipoPaciente = "Bebê";
        dosagem = 600;
        dose = dosagem / conversaoGotas;    
            break;

        case 2:
        strTipoPaciente = "Adolescente";
        dosagem = 1600;
        dose = dosagem / conversaoGotas;    
            break;

        case 3:
        strTipoPaciente = "Adulto";
        dosagem = 4600;
        dose = dosagem / conversaoGotas;    
            break;

        case 4:
        strTipoPaciente = "Idoso";
        dosagem = 2450;
        dose = dosagem / conversaoGotas;    
            break;     
            
        default:
        strTipoPaciente = "Tipo de paciente inválido";
        dosagem = 0;
        dose = 0; 
        
    }
   const saida = "Tipo de Paciente: " + strTipoPaciente;
   const saida2 = "Dosagem: " + dosagem;
   const saida3 = "Dose " + dose.toFixed(0) + " gotas";
   console.log(saida + "\n" + saida2 + "\n" + saida3);  
}
dosagemRemedio(4);