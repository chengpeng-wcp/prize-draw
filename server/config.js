/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 12,
    text: "总裁特别赞助奖",
    title: "",
    img: "../img/secrit7.jpg"
  },
  {
    type: 2,
    count: 8,
    text: "龙行大运奖",
    title: "",
    img: "../img/secrit2.jpg"
  },
  {
    type: 3,
    count: 10,
    text: "大展龙图奖",
    title: "",
    img: "../img/secrit3.jpg"
  },
  {
    type: 4,
    count: 15,
    text: "万事兴龙奖",
    title: "",
    img: "../img/secrit4.jpg"
  },
  {
    type: 5,
    count: 20,
    text: "龙马精神奖",
    title: "",
    img: "../img/secrit5.jpg"
  },
  {
    type: 6,
    count: 25,
    text: "其乐龙龙奖",
    title: "",
    img: "../img/secrit6.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 3, 4, 5, 5, 5, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "SIGN";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
