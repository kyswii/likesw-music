-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 2017-05-04 17:31:58
-- 服务器版本： 5.7.18-0ubuntu0.17.04.1
-- PHP Version: 7.0.15-1ubuntu4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `likesw-music`
--

-- --------------------------------------------------------

--
-- 表的结构 `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8 NOT NULL,
  `region` varchar(255) CHARACTER SET utf8 NOT NULL,
  `collect_song` varchar(10000) CHARACTER SET utf8 NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `account`
--

INSERT INTO `account` (`id`, `name`, `password`, `tags`, `email`, `photo`, `region`, `collect_song`) VALUES
(18, 'kys', '3344', 'amazing', '3344@mail.com', '/public/images/accounts/3344@mail.com-Sat Feb 11 2017 18:21:41 GMT+0800 (CST).png', 'England', '[2,8,4,1,4,3,4,2,5,2]');

-- --------------------------------------------------------

--
-- 表的结构 `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sumCollect` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `albums`
--

INSERT INTO `albums` (`id`, `name`, `tags`, `image`, `sumCollect`) VALUES
(1, 'Back Again', 'Beautiful music', '/public/images/other/test-2.jpg', 5),
(2, 'Better Together', 'Beautiful music', '/public/images/other/test-1.jpg', 4),
(3, 'We Are Complicated (MASHUP)', 'Beautiful music', '/public/images/other/test-1.jpg', 3),
(4, 'Back Again', 'Beautiful music', '/public/images/other/test-2.jpg', 0);

-- --------------------------------------------------------

--
-- 表的结构 `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `sumCollect` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `artists`
--

INSERT INTO `artists` (`id`, `name`, `image`, `tags`, `sumCollect`) VALUES
(1, '7AND5', '/public/images/other/test-2.jpg', 'Beautiful music', 0),
(2, 'Keith Urban', '/public/images/other/test-1.jpg', 'Beautiful music', 5),
(3, 'Raheem D', '/public/images/other/test-1.jpg', 'Beautiful music', 2),
(4, 'Us The Duo', '/public/images/other/test-1.jpg', 'Good', 3),
(5, 'Angus Stone,Marion Mayer', '/public/images/other/test-2.jpg', 'Well', 1),
(6, 'HAZZY', '/public/images/other/test-1.jpg', 'smart', 4),
(7, 'Detektivbyrån', '/public/images/other/test-1.jpg', 'fun', 0);

-- --------------------------------------------------------

--
-- 表的结构 `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `belong` varchar(255) CHARACTER SET utf8 NOT NULL,
  `introduction` varchar(1000) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `images`
--

INSERT INTO `images` (`id`, `name`, `url`, `tags`, `belong`, `introduction`) VALUES
(1, 'do-1.jpg', '/public/images/home/do-1.jpg', 'do', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(2, 'do-2.jpg', '/public/images/home/do-2.jpg', 'do', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(3, 'do-3.jpg', '/public/images/home/do-3.jpg', 'do', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(4, 'or.jpg', '/public/images/home/or.jpg', 'or', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(5, '1486787512933.jpg', '/public/images/home/1486787512933.jpg', 'or', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(6, '1486787514096.jpg', '/public/images/home/1486787514096.jpg', 'or', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(7, '1486787516199.jpg', '/public/images/home/1486787516199.jpg', 'or', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(8, 'whatever-1.jpg', '/public/images/home/whatever-1.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(9, 'whatever-2.jpg', '/public/images/home/whatever-2.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(10, 'whatever-3.jpg', '/public/images/home/whatever-3.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(11, 'whatever-4.jpg', '/public/images/home/whatever-4.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(12, 'whatever-5.jpg', '/public/images/home/whatever-5.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(13, 'whatever-6.jpg', '/public/images/home/whatever-6.jpg', 'whatever', 'home', 'Country music -- Cordial and warm without losing the popular elements '),
(14, '1486796728745.jpg', '/public/images/other/1486796728745.jpg', 'whatever', 'other', 'Country music -- Cordial and warm without losing the popular elements '),
(16, 'taylor', '/public/images/other/1486799563550.jpg', 'beatiful', 'other', 'introduction');

-- --------------------------------------------------------

--
-- 表的结构 `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `song` varchar(255) CHARACTER SET utf8 NOT NULL,
  `artist` varchar(255) CHARACTER SET utf8 NOT NULL,
  `album` varchar(255) CHARACTER SET utf8 NOT NULL,
  `time` varchar(255) CHARACTER SET utf8 NOT NULL,
  `belong` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `songUrl` varchar(255) CHARACTER SET utf8 NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `music`
--

INSERT INTO `music` (`id`, `song`, `artist`, `album`, `time`, `belong`, `tags`, `songUrl`, `imageUrl`) VALUES
(6, 'Not That Simple', 'Mike Posner', 'Not That Simple', '4:00', 'home', 'hot-song', '/public/songs/home/Mike Posner - Not That Simple.mp3', '/public/images/home/Mike Posner - Not That Simple.jpg'),
(7, 'For Paolo', 'Woodpigeon', 'For Paolo', '4:00', 'home', 'hot-song', '/public/songs/home/Woodpigeon - For Paolo.mp3', '/public/images/home/Woodpigeon - For Paolo.jpg'),
(8, 'Sky and Sea', 'I Hate This Place', 'I Hate This Place', '4:00', 'home', 'hot-song', '/public/songs/home/I Hate This Place - Sky and Sea.mp3', '/public/images/home/I Hate This Place - Sky and Sea.jpg'),
(9, 'Crying in the Rain', 'Don Williams', 'Crying in the Rain', '4:00', 'home', 'top-song', '/public/songs/home/Don Williams - Crying in the Rain.mp3', '/public/images/home/Don Williams - Crying in the Rain.jpg'),
(10, 'Higher', 'Cajsa Siik', 'Higher', '4:00', 'home', 'top-song', '/public/songs/home/Cajsa Siik - Higher.mp3', '/public/images/home/Cajsa Siik - Higher.jpg'),
(11, 'Knockin\' On My Door', 'B.Reith', 'Knockin\' On My Door', '4:00', 'home', 'top-song', '/public/songs/home/B.Reith - Knockin\' On My Door.mp3', '/public/images/home/B.Reith - Knockin\' On My Door.jpg'),
(12, 'I Really Like You', 'Carly Rae Jepsen', 'I Really Like You', '4:00', 'home', 'top-song', '/public/songs/home/Carly Rae Jepsen - I Really Like You.mp3', '/public/images/home/Carly Rae Jepsen - I Really Like You.jpg'),
(13, 'You Smile', 'Eternity', 'You Smile', '4:00', 'home', 'top-album', '/public/songs/home/Eternity - You Smile.mp3', '/public/images/home/Eternity - You Smile.jpg'),
(14, 'Dear Summer (Make You Feel My Love)', 'Jay-Z,Kanye West', 'Dear Summer (Make You Feel My Love)', '4:00', 'home', 'top-album', '/public/songs/home/Jay-Z,Kanye West - Dear Summer (Make You Feel My Love).mp3', '/public/images/home/Jay-Z,Kanye West - Dear Summer (Make You Feel My Love).jpg'),
(15, 'Neopolitan Dreams (Niklas Ibach Remix)', 'DNiklas Ibach,Lisa Mitchell', 'Neopolitan Dreams (Niklas Ibach Remix)', '4:00', 'home', 'top-album', '/public/songs/home/Niklas Ibach,Lisa Mitchell - Neopolitan Dreams (Niklas Ibach Remix).mp3', '/public/images/home/Niklas Ibach,Lisa Mitchell - Neopolitan Dreams (Niklas Ibach Remix).jpg');

-- --------------------------------------------------------

--
-- 表的结构 `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `artist` varchar(255) CHARACTER SET utf8 NOT NULL,
  `album` varchar(255) CHARACTER SET utf8 NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tags` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `sumCollect` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `songs`
--

INSERT INTO `songs` (`id`, `name`, `artist`, `album`, `url`, `image`, `tags`, `sumCollect`) VALUES
(1, 'Remember', '7AND5', 'The Truth', '/public/songs/7AND5 - Remember.mp3', '/public/images/other/test-2.jpg', 'light/jazz/popular/british/rock', 0),
(2, 'Chupee', 'Cocoon', 'For Paolo', '/public/songs/Cocoon - Chupee.mp3', '/public/images/other/test-1.jpg', 'countryside/classical/jazz/british', 2),
(3, 'Sista Tryckaren', 'Detektivbyrån', 'Sista Tryckaren', '/public/songs/Detektivbyrån - Sista Tryckaren.mp3', '/public/images/other/test-1.jpg', 'light/electronic/popular/british/rock', 0),
(4, 'Making Memories Of Us', 'Keith Urban', 'Making Memories Of Us', '/public/songs/Keith Urban - Making Memories Of Us.mp3', '/public/images/other/test-2.jpg', 'countryside/jazz/classical', 0),
(5, 'A Little More', 'HAZZY', 'A Little More', '/public/songs/HAZZY - A Little More.mp3', '/public/images/other/test-1.jpg', 'light/rock/countryside', 1),
(6, 'We Are Complicated (MASHUP)', 'Raheem D', 'We Are Complicated (MASHUP)', '/public/songs/Raheem D - We Are Complicated (MASHUP).mp3', '/public/images/other/test-1.jpg', 'countryside/british/light', 0),
(7, 'Back Again', 'Taxiride', 'Back Again', '/public/songs/Taxiride - Back Again.mp3', '/public/images/other/test-2.jpg', 'countryside/british/classical/jazz', 0),
(8, 'Wooden Chair (feat. Marion Mayer) [Duo Version]', 'Angus Stone,Marion Mayer', 'Wooden Chair (feat. Marion Mayer) [Duo Version]', '/public/songs/Angus Stone,Marion Mayer - Wooden Chair (feat. Marion Mayer) [Duo Version].mp3', '/public/images/other/test-2.jpg', 'popular/jazz/rock/electronic/light', 0),
(9, 'Better Together', 'Us The Duo', 'Better Together', '/public/songs/Us The Duo - Better Together.mp3', '/public/images/other/test-1.jpg', 'popular/countryside/british/jazz', 0);

-- --------------------------------------------------------

--
-- 表的结构 `song_share`
--

CREATE TABLE `song_share` (
  `id` int(11) NOT NULL,
  `songID` int(11) NOT NULL,
  `accountID` int(11) NOT NULL,
  `comment` varchar(1000) CHARACTER SET utf8 NOT NULL,
  `time` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `song_share`
--

INSERT INTO `song_share` (`id`, `songID`, `accountID`, `comment`, `time`) VALUES
(1, 1, 2, 'comment', ''),
(2, 2, 18, 'comment', ''),
(3, 4, 18, 'comment', ''),
(4, 7, 18, 'comment', ''),
(5, 2, 18, 'comment', '2017-4-23'),
(6, 2, 18, 'comment', '2017-4-23'),
(7, 3, 18, 'comment', '2017-4-23'),
(8, 8, 18, 'comment', '2017-4-23'),
(9, 7, 18, 'comment', '2017-4-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `song_share`
--
ALTER TABLE `song_share`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 使用表AUTO_INCREMENT `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- 使用表AUTO_INCREMENT `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `song_share`
--
ALTER TABLE `song_share`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
