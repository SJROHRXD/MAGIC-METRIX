import { DataTypes } from "sequelize";
import { hash } from "bcrypt";

export default (sequelize) => {
        const User = sequelize.define("User", {
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: String, allowNull: false },
    });

    // before new instance of User model created and saved, hash password
    // never store plain text passwords in database!
    User.beforeCreate (async (user) => {
        user.password = await hash(user.password, 10);
    });

    return User;
};