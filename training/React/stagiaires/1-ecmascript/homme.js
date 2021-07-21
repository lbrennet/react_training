import Personne from "./personne.js";// à vous

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
// à vous

export default Homme
