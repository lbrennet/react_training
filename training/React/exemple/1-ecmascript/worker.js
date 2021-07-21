setTimeout(function(){
//le setTimeout ne sert qu'� permettre
//de bien voir les premiers messages
  postMessage("Le jardinier est dans son potager"+
    " et est en train de faire pousser ses "+
    "premi&egrave;res plantes");
  var jardin = [0,0,0,0,0];
  var plantePrete = 0;
  var parcelle;
  while(true){

//boucle infinie, on arrose toujours les plantes
    for(parcelle = 0; parcelle < 5; parcelle++){
//on arrose un peu, et �a fait grandir la plante
      jardin[parcelle] += Math.random();
      if(jardin[parcelle] > 1_000_000){

//la plante est suffisamment grande et on la cueille
        jardin[parcelle] = 0;
        plantePrete++;
        postMessage(`Le jardinier a pu recolter
                ${plantePrete }  plantes`);
      }
    }//boucle de fin de la parcelle
  }//boucle infinie
},1000);
