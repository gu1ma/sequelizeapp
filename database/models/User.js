module.exports = (sequelize, DataTypes) => {

    const UserModel = sequelize.define("User", {
        //colunas
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaulValue: false
        },
        birthDate: {
            type: DataTypes.DATE
        }
    }, 
    {
        //nome da tabela 
        tableName: 'user',
        timestamps: false
    })

    return UserModel;
}