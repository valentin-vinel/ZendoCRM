import { AppUser } from "./app-user.js";
import { Contact } from "./contact.js";
import { Interaction } from "./interaction.js";
import { Task } from "./task.js";
import { Opportunity } from "./opportunity.js";
import { sequelize } from "../../config/sequelize-client.js";

// 1 app user → N contacts
AppUser.hasMany(Contact, {
    foreignKey: {
        name: "id_app_user",
        allowNull: false,
    },
    as: "contacts"
});
Contact.belongsTo(AppUser, {
    foreignKey: {
        name: "id_app_user",
        allowNull: false,
    },
    as: "appUser",
});

// 1 contact → N interactions
Contact.hasMany(Interaction, {
    foreignKey: {
        name: "id_contact",
        allowNull: false,
    },
    as: "interactions"
});
Interaction.belongsTo(Contact, {
    foreignKey: {
        name: "id_contact",
        allowNull: false,
    },
    as: "contact",
});

// 1 contact → N opportunités
Contact.hasMany(Opportunity, {
    foreignKey: {
        name: "id_contact",
        allowNull: false,
    },
    as: "opportunities"
});
Opportunity.belongsTo(Contact, {
    foreignKey: {
        name: "id_contact",
        allowNull: false,
    },
    as: "contact",
});

// 1 contact → N tâches
Contact.hasMany(Task, {
    foreignKey: {
        name: "id_contact"
    },
    as: "tasks"
});
Task.belongsTo(Contact, {
    foreignKey: {
        name: "id_contact"
    },
    as: "contact",
});

export { AppUser, Contact, Interaction, Opportunity, Task, sequelize }