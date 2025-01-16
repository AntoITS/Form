

async function efftuaGet(url) {
  const response = await fetch(url,{mode:"no-cors"});
  console.log(response)
}

function conferma(){

  const nome = document.getElementById("nomee").value;
  const cognome = document.getElementById("cognomee").value;

  var url = "https://webhook.site/28d2e19a-3cd5-40e0-9d3e-cf7a73b02774";

  var fullUrl = url+"?nome="+nome+"&cognome="+cognome;

  efftuaGet(fullUrl);
}

