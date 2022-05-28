import "regenerator-runtime";
import "../style/style.css";
import "../script/component/app-bar.js";
import main from "../script/view/main.js";
import $ from "jquery";
import moment from "moment";
import _ from 'lodash';
 
const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
updateTime();

document.addEventListener("DOMContentLoaded", main);
console.log(_.join(['App', 'module', 'loaded!'], ' '));