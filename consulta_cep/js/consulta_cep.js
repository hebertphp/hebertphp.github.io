const cep=document.querySelector("#cep");
const saida=document.querySelector("#saida");
const btn=document.querySelector("#btn");
const limp=document.querySelector("#limp");

limp.addEventListener('click',()=>{
    saida.innerHTML="";
    cep.focus();
})

let mostra=(dados)=>{
    let msg="";
    for(i in dados){
       msg+=`${i}: <b>${dados[i]}</b><br>`;     
    }
    saida.innerHTML=msg;
}

btn.addEventListener("click",()=>{
    let busca=cep.value.replace("-","");

    if(busca===""){
        saida.innerHTML="Digite o CEP";
        cep.focus();
        return false;
    }
    fetch(`https://viacep.com.br/ws/${busca}/json/`)
    .then(response=>{response.json()
        .then(data=>mostra(data)) })
    .catch(e=>saida.innerHTML="Erro!!"+e.message)
    cep.value="";
    cep.focus();
})