/* global $: true */
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $btn = $('#calculate'),
        $per = $('#perimeter'),
        $area = $('#area');
    function decimalSave(num, n){
        return Math.round(num*Math.pow(10, n))/Math.pow(10,n);
    }
    $btn.click(function(){
        // 验证不通过，什么都不做
        if(!validate('#width') || !validate('#height')) return;

        var w = Number($width.val());
        var h = Number($height.val());
        var p = 2*(w+h);
        var a = w*h;

        p = decimalSave(p, 4);
        a = decimalSave(a, 4);

        $per.val(p);
        $area.val(a);
    });

    // tab键的校验
    $width.focusout(function(){
        // if(!validate($width)) select this;
        if(!validate('#width')){
            $width.select();
        }
    });
    $height.focusout(function(){
        // if(!validate($width)) select this;
        if(!validate('#height')){
            $height.select();
        }
    });

    function validate(field){
        // get DOM error message
        var $data = $(field);
        var $msg = $(field + '-validation-message');

        // validate null
        if($data.val() === ''){
            if(field==='#width'){
                $msg.html('宽度不能为空！');
            }else{
                $msg.html('高度不能为空！');
            }
            // select:设置焦点
            $data.select(); 
            return false;
        }

        // validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }

        // validate > 0
        if(Number($data.val()) < 0){
            $msg.html('必须大于零！');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }
});
// http://regex101.com