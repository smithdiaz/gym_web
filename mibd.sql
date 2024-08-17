-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla gymhulk.asignaciones: ~1 rows (aproximadamente)
DELETE FROM `asignaciones`;
INSERT INTO `asignaciones` (`ID_Asignacion`, `ID_Miembro`, `ID_Entrenador`, `ID_Rutina`, `Fecha_De_Asignacion`) VALUES
	(2, 2, 2, 1, '2024-06-21');

-- Volcando datos para la tabla gymhulk.clases: ~1 rows (aproximadamente)
DELETE FROM `clases`;
INSERT INTO `clases` (`ID_Clases`, `Nombre_De_Clase`, `Descripcion`, `ID_Entrenador`, `Horario`) VALUES
	(3, 1, 'inicio', 2, '2024-06-21');

-- Volcando datos para la tabla gymhulk.cliente: ~1 rows (aproximadamente)
DELETE FROM `cliente`;
INSERT INTO `cliente` (`ID_Cliente`, `P_Nombre`, `S_Nombre`, `P_Apellido`, `S_Apellido`, `Direccion`, `Correo`, `Telefono`, `Edad`) VALUES
	(1, 'jose', 'jose', 'perz', 'zosa', 'jalapa', 'notengo', 52251251, 25);

-- Volcando datos para la tabla gymhulk.entrenadores: ~2 rows (aproximadamente)
DELETE FROM `entrenadores`;
INSERT INTO `entrenadores` (`ID_Entrenador`, `P_Nombre`, `S_Nombre`, `P_Apellido`, `S_Apellido`, `Correo`, `Telefono`, `Especializacion`) VALUES
	(2, 'yolber', 'smth', 'jarquin', 'diaz', 'kjn', '1323568', 'abdominales'),
	(3, 'ffff', 'hhhhh', 'pppp', 'gggg', 'llll', '12121212', 'pechada');

-- Volcando datos para la tabla gymhulk.inscripcion: ~0 rows (aproximadamente)
DELETE FROM `inscripcion`;
INSERT INTO `inscripcion` (`ID_Inscrpcion`, `ID_Membresia`, `ID_Cliente`, `Fecha_Inscripcion`, `Fecha_Vencimiento`) VALUES
	(2, NULL, 1, '2024-06-21', '2024-10-21');

-- Volcando datos para la tabla gymhulk.membresia: ~0 rows (aproximadamente)
DELETE FROM `membresia`;
INSERT INTO `membresia` (`ID_Membresia`, `Duracion_Meses`, `ID_Tipo_Pago`, `ID_Cliente`) VALUES
	(2, '1', 1, NULL);

-- Volcando datos para la tabla gymhulk.miembros: ~1 rows (aproximadamente)
DELETE FROM `miembros`;
INSERT INTO `miembros` (`ID_Miembro`, `ID_Rutina`, `ID_Cliente`, `ID_Entrenador`) VALUES
	(2, 1, 1, 2);

-- Volcando datos para la tabla gymhulk.pago: ~1 rows (aproximadamente)
DELETE FROM `pago`;
INSERT INTO `pago` (`ID_Pago`, `Tipo_Pago`, `ID_Cliente`) VALUES
	(1, 1, 1);

-- Volcando datos para la tabla gymhulk.rutina: ~1 rows (aproximadamente)
DELETE FROM `rutina`;
INSERT INTO `rutina` (`ID_Rutina`, `Tipo_Rutina`, `Descripcion`) VALUES
	(1, 'Abdominales', 'inicial');

-- Volcando datos para la tabla gymhulk.tipos_pago: ~4 rows (aproximadamente)
DELETE FROM `tipos_pago`;
INSERT INTO `tipos_pago` (`ID_Tipos_Pago`, `Tipo_Pago`, `Cantidad_Dias`) VALUES
	(1, '500', '30 dias'),
	(2, '260', '15 dias'),
	(3, '150', '7 dias'),
	(4, '40', '1 dia');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
