/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-06-07 10:12:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(16) NOT NULL,
  `author_src` varchar(64) NOT NULL,
  `title` varchar(32) NOT NULL,
  `post_time` int(11) NOT NULL,
  `content` text NOT NULL,
  `summary` varchar(64) NOT NULL,
  `n_like` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('1', 'yochy', 'images/new.jpg', '养了猫才知道原来铲屎官可以这么逗逼！', '1496644479', '我是05年开始养猫，当时不会照顾猫，遇到问题就百度，好歹现在也懂一些，谈不上专业。我也不希望专业，我觉得那样对猫不是特别好。我个人觉得，养猫不应该专业。专业只会娇惯了猫咪，会适得其反。\r\n\r\n下面介绍一下小米进家6年的经验：\r\n\r\n\r\n食物——上班之前抓一把妙多乐猫粮（算算吃了6年的妙多乐。开始还能吃上进口的，现在都是国产的，质量很差，最近得了毛囊炎，正准备换天然无谷）在他的碗里（2块钱买的），足够一天的量，下班一把猫粮，够一晚上的。有时会买黑缸给他，但次数有限，怕惯坏了。\r\n\r\n\r\n饮料——就是自来水，从不给矿泉水和其他饮料。开始是一个塑料小碗，后来换了大的，但猫粮掉色，有时看见碗里会有浅浅的黄色，后来干脆就让他在卫生间的大桶里喝水了，每次把水接满，他抬着头就能喝，直到现在。\r\n\r\n\r\n体重——小米头几年长得比较快，最近一两年没发现长膘。由于白天看不见他，也不知道他在家里是不是一溜烟的跑来跑去，休息的时候看见他他在房间里跑一两个来回，6年的大猫，现在15斤左右。至于运动，人都不爱动弹。\r\n\r\n\r\n家庭卫生——这个很关键！家里的卫生直接影响猫的健康，如耳螨、跳蚤、癣等。小米刚进家的时候一周洗一次（遵循网络上专业养猫方法），慢慢的感觉没必要，后来便是不定时的洗澡。我家里的卫生做得较好，又因小米足不出户，2013年小米整年没洗澡，这么长时间我想一般家长挺不住。而且小米是白猫，一年下来毛也没怎么变色。\r\n\r\n\r\n疫苗——刚进家的时候打了一次猫三联，因为足不出户，之后也没去打，6年了现在很健康。\r\n\r\n\r\n\r\n\r\n玩具——各种、任何东西！只要能勾起他“扑”的欲望的东西，都玩过。没给他买过专业玩具。猫爬架登的散架了，拆掉后保留了几根柱子，现帮于各种地点，用于杠爪子。\r\n\r\n\r\n休息——主要在沙发，其他地点如床、电脑桌、窗台等等能让他昏昏欲睡的地方。\r\n\r\n\r\n疾病——眼疾，刚进家的时候上火了，左眼比右眼小，流泪，滴了诺氟沙星好了。\r\n             尾巴上头皮屑一样的东西，没用过什么药水，剃过三次毛，现在好了。\r\n             消炎用过阿莫西林，什么事忘了，印象中没吃过几次，碾碎冲水喂食。\r\n\r\n\r\n洗澡——味道很小的浴液（最好没有香味的），猫专用的。\r\n\r\n\r\n怀孕与猫——我们第一个孩子很不幸的流了，但我们没把原因赖在小米的身上，流产跟他没半点关系，也没有进行隔离。后来我们跟网友探讨这个问题得出结论主要是因为现在食物中化学东西太多导致。2011年我们第一个女宝宝降临人间，2013年我们的第二个男宝宝降临人间，都很健康。\r\n\r\n\r\n抓伤咬伤挠伤——我的手、小臂、小腿就是小米的猫爪板，因为是家养的，更因足不出户，所以抓伤、挠伤、咬伤从来没有进行过消毒。\r\n\r\n绝育——给猫咪做绝育有两个前提，一、如果你是一个负责任的，脾气温顺的，即使猫咪有了很多仔仔也不嫌不弃的，也可以不做绝育，但是请先想清楚后果，如果不能照顾怎么办。二、如果你是一个工作比较忙，不能很好照顾猫咪，甚至可能因为猫咪多了仔仔而耽误工作，那么就在猫咪很小的时候就做了绝育，不论男猫女猫，为了他（她）也为了你。\r\n下面是小米的几张图片：\r\n\r\n\r\n\r\n\r\n', '小虎是一只中华田园猫，主人小哥在它一个月大小的时候把它带回家，', '16');
INSERT INTO `article_table` VALUES ('2', 'yochy', 'images/new.jpg', '汪星人旅行必备-日常篇', '1482402698', '要出去旅行了吗？却又在出发前与狗狗对视的那一刻心有不舍。如果把它送出去寄养，也许宝贝儿会因为想念而日渐消瘦，与其双方都如此痛苦，索性带它一起看世界。在出发前主人也要记得给狗狗收拾它的行囊哦！\r\n\r\n<a target=狗 出行必备 养护\" alt=\"狗 出行必备 养护\" width=\"570\" height=\"379\" border=\"0\" vspace=\"0\" style=\"width: 570px; height: 379px;\">\r\n\r\n　　日常必备\r\n\r\n　　1.食盆、狗粮、水\r\n\r\n　　出发前主人需要带上足够的狗粮，最好是装在密封效果好的盒子里，防止受潮、洒掉，也方便狗狗使用，收放自如。\r\n\r\n　　其次要带上饮用水，狗狗们到了不同的地方也会有水土不服的情况，很可能因为喝外地的水不适应而拉肚子，所以家长们可以带一些纯净水，以备不时之需。\r\n\r\n狗 晕车 养护\r\n\r\n　　2.晕车药、塑料袋\r\n\r\n　　很多狗狗一坐车就晕头转向，胃内翻腾，吐得极其痛苦。所以家长们带着狗狗出门前给它吃一点晕车药是很有必要的。带上塑料袋，一旦发现狗狗晕车呕吐，这可是行之有效的方法，你也省去了洗车的麻烦。\r\n\r\n狗 玩具 出行\r\n\r\n　　3.相机、玩具\r\n\r\n　　旅行怎么可以不带相机呢！无论是对人还是对狗，都将是一次美好的经历。带上相机，将开心的时刻记录下来，当作一份特殊的记忆留存。最好带上一把梳子，拍照之前再给狗狗简单打理一下，宝贝儿会更上镜哦！带上狗狗喜欢玩的玩具，会让拍照变的更加容易，狗狗也会开心多多。\r\n\r\n狗 急救 户外\r\n\r\n急救必备\r\n\r\n　　1.狗狗救生衣\r\n\r\n　　如果您想带着狗狗一起去享受海洋，请一定记得带狗狗救生衣哦！虽然狗狗天生是游泳高手，但长时间远离岸边带救生衣还是有必要的，这也是狗狗海边游泳必不可少的。\r\n\r\n户外 急救箱\r\n\r\n　　2.牵引带、急救箱\r\n\r\n　　主人在野外、陌生的环境，需要给狗狗带上牵引带。因为狗狗对这个地方还比较陌生，以防狗狗乱跑出现意外。带上急救箱绝对是正确的选择，备上常用药物、纱布等物品，如果在野外发生危险是必不可少的装备。\r\n\r\n这些还不是全部哦！下篇为大家介绍其他必需品！', '要出去旅行了吗？却又在出发前与狗狗对视的那一刻心有不舍。如果把它送出去寄养，也许宝贝儿会因为想念而日渐消瘦', '1');

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `sub_title` varchar(16) NOT NULL,
  `src` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', '西伯利亚雪橇犬', '二哈', 'images/1.jpg');
INSERT INTO `banner_table` VALUES ('2', '宾利犬', '呆萌', 'images/2.jpg');
INSERT INTO `banner_table` VALUES ('3', '田园猫', '傲娇', 'images/3.jpg');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `src` varchar(64) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
