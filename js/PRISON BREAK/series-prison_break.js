fetch("https://apismg.000webhostapp.com/classes/dadosFilmes.php?pesquisa=Prison Break", {
    "method": "GET",
    redirect: 'follow'})
.then(response => response.text())
.then(result => resp = mostrarFilmes(result))
.catch(error => console.log('error', error));
function mostrarFilmes(d) {
    var resp = "";
    var resposta = JSON.parse(d);
    for(let x=0; x<resposta.length; x++) {
        resp+=`<div id=${resposta[x].id} class="filme">`
        resp += `<img src=${resposta[x].foto}>`;
        resp+="<div>"
        resp += "<p style='color:white'>"+resposta[x].nome+"</p>";
        resp += "<p style='color:white'>"+resposta[x].resumo+"</p>";
        resp+="</div>"
        resp+="</div>"
    }
    document.getElementById("Resumos").innerHTML = resp;
}