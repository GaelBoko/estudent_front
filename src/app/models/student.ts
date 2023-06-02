export class Student {
    id: string;
    userName: string;
    email: string;
    emailConfirmed: true;
    phoneNumber: string;
    niu: string;
    nom: string;
    prenom: string;
    dateNaissance: null;
    sexe: 0;
    addresse: string;
    active: true;
    lieuNaiss: string;
    paysResidence: string;
    villeResidence: string;
    numPassport: string;
    dateDeliPassepo: string;
    dateExpPassepo: string;
    estBoursier: true;
    categorieBourse: string;
    situationMatri: string;
    photo: string;
    nomPrenomTuteur: string;
    telephoneTuteur: string;
    universiteEtudiantId: 0;
    universiteEtudiant: {};
    bourseId: 0;
    bourse: {};
    inscriptions: [];

    constructor(students) {
      {
        this.photo = students.avatar || 'assets/images/user/user1.jpg';
        this.nom = students.name || '';
        this.email = students.email || '';
        this.sexe = students.sexe || '';
        this.phoneNumber = students.phoneNumber || '';
      }
    }
  }
