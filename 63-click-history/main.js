$(function () {  
    var $btn = $('.main input');
    var n=0;
    setBtnTitle(0);

    $btn.click(function () {  
        /**
         * origin属性返回URL的协议，主机名和端口号。
         */
        var url = location.origin + location.pathname + '#/' + (++n);
        history.pushState(null, null, url);
        /**
         * 在不刷新浏览器的情况下，创建新的浏览记录并插入浏览记录队列中
         */
        setBtnTitle(n);
    })

    /**
     * 当活动历史记录条目更改时，将触发popstate事件。
     * 只有在做出浏览器动作时，才会触发该事件，
     * 如用户点击浏览器的回退按钮
     * （或者在Javascript代码中调用history.back()
     * 或者history.forward()方法）
     */
    $(window).on('popstate', function () {  
        console.log(location.href)
        n = (location.href).match(/(\d*)$/)[0];
        n = (n === '' ? 0 : n);
        setBtnTitle(n);
    })

    function setBtnTitle(n) {
        $btn.val('被按了 ' + n + ' 次');
    }
})