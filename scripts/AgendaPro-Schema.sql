USE agendapro;

DROP TABLE IF EXISTS turno;
DROP TABLE IF EXISTS horario_profesional;
DROP TABLE IF EXISTS profesional;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS profesion;
DROP TABLE IF EXISTS usuario;

CREATE TABLE usuario (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    login         VARCHAR(100)  NOT NULL UNIQUE,
    password_hash CHAR(60)      NOT NULL,
    tipo_usuario  ENUM('cliente','profesional') NOT NULL,
    status        BOOLEAN DEFAULT TRUE  -- true=activo, false=inactivo
);

CREATE TABLE profesion (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(120) NOT NULL
);

CREATE TABLE cliente (
    id_usuario INT PRIMARY KEY,
    nombre     VARCHAR(80) NOT NULL,
    apellido   VARCHAR(80) NOT NULL,
    email      VARCHAR(120) NOT NULL UNIQUE,
    celular    VARCHAR(25),
    ciudad     VARCHAR(100),
    imagen     VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE profesional (
    id_usuario      INT PRIMARY KEY,
    nombre          VARCHAR(80) NOT NULL,
    apellido        VARCHAR(80) NOT NULL,
    descripcion     TEXT,
    ciudad          VARCHAR(100),
    direccion       VARCHAR(150),
    celular         VARCHAR(25),
    email           VARCHAR(120) NOT NULL UNIQUE,
    id_profesion    INT,
    imagen          VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    FOREIGN KEY (id_profesion) REFERENCES profesion(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE horario_profesional (
    id_profesional INT NOT NULL,
    dia            TINYINT UNSIGNED NOT NULL,
    horario        TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (id_profesional, dia, horario),
    FOREIGN KEY (id_profesional) REFERENCES profesional(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE turno (
    id_turno       INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente     INT NOT NULL,
    id_profesional INT NOT NULL,
    fecha          DATE NOT NULL,
    hora           TINYINT UNSIGNED NOT NULL,
    lugar          VARCHAR(150),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_usuario)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    FOREIGN KEY (id_profesional) REFERENCES profesional(id_usuario)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    UNIQUE (id_profesional, fecha, hora)
);
