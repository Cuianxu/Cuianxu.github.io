// 代码块功能依赖

$(function () {
    // ... existing code ...
    $('pre').each(function () {
        // 只包裹不在 .code-area 内部的 pre，避免重复嵌套
        if (!$(this).parent().hasClass('code-area')) {
            $(this).wrap('<div class="code-area" style="position: relative"></div>');
        }
    });

    // 若页面存在异步渲染（如 PJAX、懒加载），延迟再次确保包裹
    setTimeout(function () {
        $('pre').each(function () {
            if (!$(this).parent().hasClass('code-area')) {
                $(this).wrap('<div class="code-area" style="position: relative"></div>');
            }
        });
    }, 300);
    // ... existing code ...
});