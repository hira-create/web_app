$(".number1").on("click", function (e){
    // 多重クリック防止
    e.stopPropagation();
    // ID名を取得
    let file_name = $(this).attr("id")
    // APIをGET
    $.get("../get_bunber/2", function (data, status){
        
    }
    })

$(".number2").on("click", function (e){
    // 多重クリック防止
    e.stopPropagation();
    // ID名を取得
    let file_name = $(this).attr("id")
    // APIをGET
    })