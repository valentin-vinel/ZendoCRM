import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Contact extends Model {}

Contact.init(
    {
        statut: {
            type: DataTypes.ENUM('prospect', 'client'),
            allowNull: false,
        },
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
        },
        phone: {
            type: DataTypes.TEXT,
        },
        company: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        tableName: "contact",
    },
);