-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: datadb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `threedimage`
--

DROP TABLE IF EXISTS `threedimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `threedimage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(500) DEFAULT NULL,
  `layoutimage` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threedimage`
--

LOCK TABLES `threedimage` WRITE;
/*!40000 ALTER TABLE `threedimage` DISABLE KEYS */;
INSERT INTO `threedimage` VALUES (1,'https://2.imimg.com/data2/VE/LK/MY-1775792/3-d-building-house-designing-500x500.jpg','https://i.pinimg.com/736x/ea/56/c9/ea56c9356fe6f801791471c1d71864db.jpg','Modern 3d Residential Building',' Modern 3D residential buildings harmonize sleek design with eco-friendly functionality, offering smart amenities and sustainable living spaces.','CHENNAI','compl','2024-01-10'),(2,'https://t4.ftcdn.net/jpg/01/88/09/67/360_F_188096730_3hHZnyYI7zH7ATN4QJdNoZgMJDRAdbGW.jpg','https://i.pinimg.com/736x/b3/16/08/b3160877837c2e5a31573e10b91fae56.jpg','Evergreen Towers','A luxurious residential complex with modern amenities, nestled in a serene environment, offering a blend of comfort and style. An innovative office tower designed for collaborative ','Bangalore','Completed','2024-01-02'),(3,'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/08/10/463359/174297/city_planning_office_building_fashion_design_125_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1888988.jpg','https://3.imimg.com/data3/SX/PS/MY-1599135/office-lay-outs-500x500.jpg','Summit Square Offices','A corporate complex offering flexible office spaces, meeting rooms, and a business center, strategically located for easy access and visibility.','CHENNAI','planned','2024-01-02');
/*!40000 ALTER TABLE `threedimage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-10 10:31:22
