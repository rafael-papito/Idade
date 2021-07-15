function idade(){
   var data = new Date()
   var ano  = data.getFullYear()
   var fano = document.getElementById('ano')
   var res  = document.getElementById('resultado')
   if(fano.value.length == 0 || Number(fano.value) > ano){
       alert('[ERROR] Verifique os dados e tente novamente!')
   }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.getElementById('img')
        if(sex [0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //crinça
                img.src='midia/crianca_mas.png'
            }else if(idade >= 10 && idade < 20){
                //jovem
                img.src='midia/jovem_mas.png'
            }else if(idade >= 20 && idade <= 50){
                //adulto
                img.src='midia/adulto_mas.png'
            }else {
                img.src='midia/idoso_mas.png'
            }
        }else if(sex[1].checked){
            genero = 'feminino'
            if(idade >= 0 && idade < 10){
                //criança
                img.src='midia/crianca_fem.png'
            }else if(idade >= 10 && idade < 20){
                //jovem
                img.src='midia/jovem_fem.png'
            }else if(idade >= 20 && idade < 50){
                //adulto
                img.src='midia/adulto_fem.png'
            }else{
                //idoso
                img.src='midia/idoso_fem.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}