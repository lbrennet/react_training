import Personne from "./personne.js";
// creer un alias depuis l'import par default
import {Metier} from "./personne.js";
// exporter la class de personne
import Homme_alias from "./homme.js";

const module='./chef.js'

// import asynchrone, une fois importé on lance de l'affichage
import(module).then((module) => {
  console.log(module);
  module.presentation();
  module.nomination();
  module.default();
});

var personne = new Personne ("Bond", "James");
personne.log();
var metier = new Metier ("secret", "007");
metier.log();
var personne2 = new Homme_alias("Trevelyan","Alec");
personne2.log();
