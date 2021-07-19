class Personne{
   constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  log() {
      console.info(` Nom : ${this.nom}, Prénom : ${this.prenom}`);
    }
}

class Metier{
  constructor(niveau, accredit){
    this.niveau = niveau;
    this.accredit = accredit;
  }
  log() {
      console.info(` Visibilité : ${this.niveau}, accreditation : ${this.accredit}`);
    }
  }
export default  Personne;
export { Metier };
