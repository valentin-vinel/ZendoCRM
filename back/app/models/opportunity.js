import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Opportunity extends Model {}

Opportunity.init(
    {
        statut: {
            type: DataTypes.ENUM('prospecte', 'en_discussion', 'proposition_envoyee', 'gagne', 'perdu'),
            allowNull: false,
        },
        estimated_value: {
            type: DataTypes.BIGINT,
        },
        creation_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        closing_date: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        tableName: "opportunity",
    },
);