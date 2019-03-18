$(() => {
    let tableSave;
    $(".available").on("click", reserveFunction);
    $(`#saveButton`).on("click", saveTable);
    $(`#x`).on("click", exit);
    
    

    function reserveFunction() {
        if ($(this).hasClass('reserved')) {
            return;
        }else{
        let tableNum = $(this).text();
        tableSave = $(this);
        console.log(tableSave);
        $(`#allTable`).css("display", "none");
        $("#form").css("display", "block");
        $(`#tableNumber`).text(tableNum);
        }
    }

    function saveTable(){
        tableSave.removeClass("available");
        tableSave.addClass("reserved");
        $(`#allTable`).css("display", "block");
        $("#form").css("display", "none");
        
        tableSave = 0;
    }

    function exit(){
        $(`#allTable`).css("display", "block");
        $("#form").css("display", "none");
    }
    


});
