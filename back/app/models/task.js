import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Task extends Model {}

Task.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('tache', 'rdv'),
        },
        due_date: {
            type: DataTypes.DATE,
        },
        day_reminder: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        statut: {
            type: DataTypes.ENUM('a_faire', 'fait'),
            defaultValue: 'a_faire',
        }
    },
    {
        sequelize,
        tableName: "task",
    },
);