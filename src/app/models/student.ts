import { Role } from "../core/models/role";
import { User } from "../core/models/user";

export class Student implements User {
    login: string;
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
    apropos: string;
    universiteId: 0;
    universite: {};
    departementId: 0;
    departement: {};
    bourseId: 0;
    bourse: {};
    experiences: [];
    competences: [];
    inscriptions: [];
    certifications: [];
    adresse: {
      adresse: string,
      codePostal: string,
      pays: string,
      ville: string,
      quartier: string,
      telephone: string,
      isPhoneVerified: true,
      email: string,
      isEmailVerified: true
    };

    constructor(students) {
      {
        this.photo = students.avatar || 'assets/images/user/user1.jpg';
        this.nom = students.name || '';
        this.email = students.email || '';
        this.sexe = students.sexe || '';
        this.phoneNumber = students.phoneNumber || '';
      }
    }
  id: number;
  img: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
