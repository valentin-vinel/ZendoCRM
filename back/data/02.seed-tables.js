import {AppUser, Contact, Interaction, Opportunity, sequelize, Task} from "../app/models/associations.js";
import bcrypt from "bcrypt";

console.log("🌱 Seeding des tables");

// Création des users
console.log("🚧 Ajout données app_user");
const appUsers = [
    { firstname: 'Valentin', lastname: 'Vinel', email: "valentinvnl84@gmail.com", password: "password123" },
    { firstname: 'Nelv', lastname: 'Nelv', email: "nelv@gmail.com", password: "password123" }
];

// let adminUser = null;

for (const appUser of appUsers) {
  try {
    const password_hash = await bcrypt.hash(appUser.password, 10);
    await AppUser.create({
      firstname: appUser.firstname,
      lastname: appUser.lastname,
      email: appUser.email,
      password: password_hash
    })

    // Si c'est l'admin, on le garde pour plus tard
    // if (appUser.email === "admin@marvelapp.io") {
    //   adminUser = createdUser;
    // }
  } catch (error) {
    console.log("Error with appuser:", appUser.firstname);
		console.error(error);
  }
}

// Création des contacts
console.log("🚧 Ajout données contact");
const contacts = [
    { 
        statut: "prospect",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.io",
        phone: "0123456789",
        company: "JD Corporation",
        id_app_user: 1
    },
    { 
        statut: "prospect",
        firstname: "Will",
        lastname: "Iam",
        email: "will.iam@example.io",
        phone: "9876543210",
        company: "WI Corporation",
        id_app_user: 1
    }
];

for (const contact of contacts) {
    try {
      await Contact.create({
        statut: contact.statut,
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        id_app_user: contact.id_app_user
      })
    } catch (error) {
      console.log("Error with contact:", contact.lastname);
      console.error(error);
    }
}

// Création des interactions
console.log("🚧 Ajout données interaction");
const interactions = [
    { 
        type: "appel",
        note: "John est intéressé, il est disponible pour un rdv",
        id_contact: 1
    },
    { 
        type: "rdv",
        date_interaction: "2025-10-15",
        id_contact: 1
    },
];

for (const interaction of interactions) {
    try {
      await Interaction.create({
        type: interaction.type,
        note: interaction.note,
        date_interaction: interaction.date_interaction,
        id_contact: interaction.id_contact
      })
    } catch (error) {
      console.log("Error with interaction:", interaction.note);
      console.error(error);
    }
}

// Création des opportunities
console.log("🚧 Ajout données opportunity");
const opportunities = [
    { 
        statut: "gagne",
        estimated_value: 999,
        closing_date: "2025-09-12",
        id_contact: 1
    },
    { 
        statut: "en_discussion",
        estimated_value: 1450,
        id_contact: 1
    },
];

for (const opportunity of opportunities) {
    try {
      await Opportunity.create({
        statut: opportunity.statut,
        estimated_value: opportunity.estimated_value,
        closing_date: opportunity.closing_date,
        id_contact: opportunity.id_contact
      })
    } catch (error) {
      console.log("Error with opportunity value:", opportunity.estimated_value);
      console.error(error);
    }
}

// Création des tasks
console.log("🚧 Ajout données task");
const tasks = [
    { 
        title: "Rappeler John Doe",
        type: "tache",
        due_date: "2025-09-15",
        statut: "a_faire",
        id_contact: 1
    },
    { 
        title: "Commando phoning",
        type: "tache",
        due_date: "2025-09-16",
        statut: "a_faire"
    }
];

for (const task of tasks) {
    try {
      await Task.create({
        title: task.title,
        type: task.type,
        due_date: task.due_date,
        statut: task.statut,
        id_contact: task.id_contact
      })
    } catch (error) {
      console.log("Error with task:", task.title);
      console.error(error);
    }
}

console.log("✅ Données inserées");
sequelize.close();