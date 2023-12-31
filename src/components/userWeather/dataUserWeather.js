import {  DataTypes  } from "sequelize";
export const dataUserWeather = {
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
            }, 
            humidity:{
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            precipitationProbability:{
                type: DataTypes.FLOAT,
                allowNull: false
            },
            rainIntensity: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            temperature: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            temperatureApparent: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            uvHealthConcern: {
                type: DataTypes.INTEGER,
                allowNull: false
            } ,
            visibility: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            weatherCode: {
                type: DataTypes.INTEGER,
                allowNull: false
            } ,
            status:{
                    type: DataTypes.BOOLEAN,
                    defaultvalue: true
                }
    

};
