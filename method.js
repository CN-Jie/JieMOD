function openCityAndScroll(evt, cityName) {
	  openCity(evt, cityName); // 调用打开选项卡的函数
	  scrollToTab(cityName); // 滚动到选项卡位置
	}
	
	function scrollToTab(cityName) {
	  var tab = document.querySelector('.tab');
	  var targetTab = document.querySelector('#' + cityName);
	  tab.scrollLeft = targetTab.offsetLeft; // 将 div 滚动到目标选项卡的位置
	}
// 获取具有滚动条的元素
var definition = document.getElementById("definition");

// 添加滚动事件监听器
definition.addEventListener("wheel", function(event) {
  // 阻止默认滚动行为
  event.preventDefault();

  // 计算滚动距离
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

  // 在垂直方向上滚动
  definition.scrollTop += delta * 50; // 调整滚动速度

});