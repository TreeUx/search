/*校验时间 End*/
var timeStart, timeEnd, time;//申明全局变量
var radius = 300  //水纹圆半径(300米)
var circles1; //探测出入口的水波圆
var bl_drag = false; //拖拽地图控制开关
function getTimeNow() {//获取此刻时间
    var now = new Date();
    return now.getTime();
}