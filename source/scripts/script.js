function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', './build/imagens/bebê-m.png')
            } else if (idade < 12) {
                img.setAttribute('src', './build/imagens/criança-m.png')
            } else if (idade < 22) {
                img.setAttribute('src', './build/imagens/jovem-m.png')
            } else if (idade < 40){
                img.setAttribute('src', './build/imagens/adulto-m.png')
            } else if (idade < 63) {
                img.setAttribute('src', './build/imagens/coroa-m.png')
            } else {
                img.setAttribute('src', './build/imagens/velho-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', './build/imagens/bebê-f.png')
            } else if (idade < 12) {
                img.setAttribute('src', './build/imagens/criança-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', './build/imagens/jovem-f.png')
            } else if (idade < 40){
                img.setAttribute('src', './build/imagens/adulto-f.png')
            } else if (idade < 63) {
                img.setAttribute('src', './build/imagens/coroa-f.png')
            } else{
                img.setAttribute('src', './build/imagens/velho-f.png')
            }
        } else {
            gênero = 'Não-Binário'
            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', './build/imagens/bebê-f.png')
            } else if (idade < 12) {
                img.setAttribute('src', './build/imagens/criança-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', './build/imagens/jovem-f.png')
            } else if (idade < 40){
                img.setAttribute('src', './build/imagens/adulto-f.png')
            } else if (idade < 63) {
                img.setAttribute('src', './build/imagens/coroa-f.png')
            } else{
                img.setAttribute('src', './build/imagens/velho-f.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}