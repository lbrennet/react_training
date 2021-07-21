import Personne from "./personne.js";

class Homme extends Personne{
  constructor(nom, prenom){
    super(nom, prenom);
    this.arme="Walter PPK";
  }
  log(){
    super.log();
    console.info("arme des agents");
  }
}

export default Homme
