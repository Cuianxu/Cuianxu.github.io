// 代码块收缩

$(function () {
  // ... existing code ...
  setTimeout(function () {
    var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

    $('.code-area').prepend($code_expand);
    // 确保可能遗留的 inline display 被清除
    $('.code-area pre').css('display', '');

    $('.code-expand').on('click', function () {
      var $area = $(this).parent();
      if ($area.hasClass('code-closed')) {
        // 展开：仅移除类名，交给 CSS 做过渡动画
        $area.removeClass('code-closed');
      } else {
        // 收起：仅添加类名
        $area.addClass('code-closed');
      }
    });
  }, 500); // 延迟500毫秒执行，确保其他脚本已完成DOM操作
  // ... existing code ...
});