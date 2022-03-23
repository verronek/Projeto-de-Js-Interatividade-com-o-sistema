function carregar (){

var msg = window.document.getElementById("msg")
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora < 12){
    img.src = 'amanhecer.png'
    document.body.style.background = '#e2cd9f'
    //Bom dia
    } else if (hora >= 12 && hora <= 18){
        img.src = 'entardecer.png'
        document.body.style.background = '#f6ae40'
        //Boa tarde
    } else {
    img.src = 'noite.png'
    document.body.style.background = '#010f3c'
    //Boa noite
    }
}

