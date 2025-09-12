import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Interaction extends Model {}

Interaction.init(
    {
        type: {
            type: DataTypes.ENUM('appel', 'email', 'rdv'),
            allowNull: false,
        },
        note: {
            type: DataTypes.TEXT,
        },
        date_interaction: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        tableName: "interaction",
    },
);