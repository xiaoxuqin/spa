/* global $: true */
$(function(){
    var $width = $('#width'),
        $heigth = $('#heigth'),
        $btn = $('#calculate'),
        $per = $('#perimeter'),
        $area = $('#area');

    $btn.click(function(){
        // 
        if(!validate($width) || !validate($heigth)) return;


        var w = Number($width.val());
        var h = Number($heigth.val());

        var rect = rectangle();
        $per.val(rect.perimeter(w,h));
        $area.val(rect.area(w,h));
    });

    function validate(filed){
        // get DOM error message

        // validate null

        // validate number

        // validate > 0

        // prompt error message
        // return false

        return true;
    }
});