import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class AppUser extends Model {}

AppUser.init(
	{
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
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
	},
	{
		sequelize,
		tableName: "app_user",
	},
);