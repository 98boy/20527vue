import "./public/css/index.less";
import imgSrc from "./public/images/11.jpg";
let pp = document.createElement("p");
pp.innerText = "傻子";
document.getElementById("root").appendChild(pp);

let p = "test";
console.log(p);

// 创建图片
let imgNode = new Image();
imgNode.src = imgSrc;
document.getElementById("root").appendChild(imgNode);
