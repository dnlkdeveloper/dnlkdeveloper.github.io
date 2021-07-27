function forgatas() {
  var body = document.querySelector(".bodykozep");
  var dice = document.querySelector(".box");
  var values = [
    `rotateX(360deg) rotateY(-360deg) translate3d(0px,0px,0px)`, //1
    `rotateX(450deg) rotateY(436deg) translate3d(0px,0px,0px)`, //2
    `rotateX(-450deg) rotateY(-150deg) translate3d(0px,0px,0px)`, //3
    `rotateX(360deg) rotateY(-450deg) translate3d(0px,0px,0px)`, //4
    `rotateX(540deg) rotateY(630deg) translate3d(0px,0px,0px)`, //5
    `rotateX(-540deg) rotateY(720deg) translate3d(0px,0px,0px)` //6
  ];
  var len = values.length;
  var rotate = values[Math.floor(Math.random() * len)];
  dice.style.transform = rotate + `scale3d(1.2,1.2,1.2)`;
}