CREATE DATABASE GuaguitApp;

USE GuaguitApp;

CREATE TABLE Usuarios(

    idUsuario INT IDENTITY(1,1) PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(60),
    clave VARCHAR(25),
    img TEXT
);

CREATE TABLE Chofer(

    idChofer INT IDENTITY(1,1) PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    celular VARCHAR(12),
    telefono VARCHAR(12),
    img TEXT

);

CREATE TABLE Sindicatos(

    idSindicato INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(75),
    siglas VARCHAR(15),
    email VARCHAR(60),
    clave VARCHAR(25),
    img TEXT

);

CREATE TABLE Vehiculos(
    idVehiculo INT IDENTITY(1,1) PRIMARY KEY,
    marca VARCHAR(25),
    modelo VARCHAR(15),
    matricula VARCHAR(15),
    color VARCHAR(15),
    capacidad INT,
    ano INT,
    img TEXT
);

CREATE TABLE SuperIntendecia(

    idIntendencia INT IDENTITY(1,1) PRIMARY KEY,
    pais VARCHAR(50)
);