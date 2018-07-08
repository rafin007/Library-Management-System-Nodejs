-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2018 at 07:22 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `genre` varchar(300) NOT NULL,
  `title` varchar(300) NOT NULL,
  `author` varchar(300) NOT NULL,
  `publisher` varchar(300) NOT NULL,
  `edition` int(100) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `pages` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `user_id`, `genre`, `title`, `author`, `publisher`, `edition`, `isbn`, `pages`) VALUES
(1, 0, 'Horror', 'Zombie Day', 'Kazi Nazrul Islam', 'Nazrul Publications', 3, 'jfklsgsdlg5qw7q87w', 800),
(3, 0, 'Adventure', 'A Song of Ice & Fire', 'George R. R. Martin', 'Game of Thrones', 8, 'has23dadh123427', 1200),
(4, 2, 'Adventure', 'Harry Potter & The Half Blood Prince', 'J.K Rowling', 'Rowling''s Publications', 1, '31ghf1jk24kjb3l4l1gjh', 667),
(5, 2, 'Adventure', 'Harry Potter & The Deadly Hallows', 'J.K Rowling', 'Rowling''s Publications', 2, 'agsh32gqkj12bkl134', 798);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(100) NOT NULL,
  `name` varchar(300) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `password` varchar(300) NOT NULL,
  `address` varchar(300) NOT NULL,
  `gender` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `phone`, `email`, `is_admin`, `password`, `address`, `gender`) VALUES
(1, 'Abrar', '01711568524', 'a.zshahriar@gmail.com', 1, '1234', 'Banani', 'Male'),
(2, 'Arefin', '01764431859', 'arefin@gmail.com', 0, '12345', 'Mirpur', 'Male'),
(4, 'Rafin', '01924184941', 'rafin.ryan.07@outlook.com', 0, 'horse', 'Mirpur 13, Dhaka', 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
