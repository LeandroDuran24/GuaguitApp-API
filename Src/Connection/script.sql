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

CREATE TABLE Reservaciones(

    idReservacion INT IDENTITY(1,1) PRIMARY KEY,
    idUsuario INT  FOREIGN KEY REFERENCES Usuarios(idUsario),
    idTurno INT FOREIGN KEY REFERENCES Turnos(idTurno),
    estado VARCHAR(50)
    

);

CREATE TABLE Turnos(

    idTurno INT IDENTITY(1,1) PRIMARY KEY,
    idRuta INT FOREIGN KEY REFERENCES Rutas(idRuta),
    idParada INT FOREIGN KEY REFERENCES Paradas(idParada),
    idChofer INT FOREIGN KEY REFERENCES Chofer(idChofer),
    fechaHoraSalida DATETIME,
    fechaHoraLlegada DATETIME

);

CREATE TABLE Paradas(

    idParada INT IDENTITY(1,1) PRIMARY KEY,
    idRuta INT FOREIGN KEY REFERENCES Rutas(idRuta),
    idManager INT FOREIGN KEY REFERENCES Chofer(idChofer),
    nombre VARCHAR(30),
    latitud VARCHAR(50),
    longitud VARCHAR(50)

);

CREATE TABLE Inconvenientes(
    idInconveniente INT IDENTITY(1,1) PRIMARY KEY,
    idChofer INT FOREIGN KEY REFERENCES Chofer(idChofer),
    idRuta INT FOREIGN KEY REFERENCES Rutas(idRuta),
    titulo VARCHAR(50),
    descripcion VARCHAR(200),
    rescate VARCHAR(10),
    latitud VARCHAR(50),
    longitud VARCHAR(50)


);

CREATE TABLE Rutas(

    idRuta INT IDENTITY(1,1) PRIMARY KEY,
    idSindicato INT FOREIGN KEY REFERENCES Sindicatos(idSindicato),
    idPresidente INT FOREIGN KEY REFERENCES Chofer(idChofer),
    nombre VARCHAR(75),
    descripcion VARCHAR(100),
    paradaA VARCHAR(50),
    paradaB VARCHAR(50),
    pasaje INT,
    foto TEXT,
    horaInicialLabores TIME,
    horaFinLabores TIME,
    aceptaReservaciones VARCHAR(10)



);

CREATE TABLE Cobros(
    idCobro INT IDENTITY(1,1) PRIMARY KEY,
    idRuta INT FOREIGN KEY REFERENCES Rutas(idRuta),
    idManager INT FOREIGN KEY REFERENCES Chofer(idChofer),
    idChofer INT FOREIGN KEY REFERENCES Chofer(idChofer),
    monto INT,
    estado varchar(10),
    fecha DATETIME
);