(function(jQuery) { 
  jQuery(document).ready(function(){

jQuery("#products li").draggable({
    appendTo: "body",
    helper: "clone"
});

attachPostToBank(1);
attachPostToBank(2);
attachPostToBank(3);
attachPostToBank(4);
attachPostToBank(5);
attachPostToBank(6);
attachPostToBank(7);
attachPostToBank(8);
attachPostToBank(9);
attachPostToBank(10);
attachPostToBank(11);
attachPostToBank(12);
attachPostToBank(13);
attachPostToBank(14);
attachPostToBank(15);
attachPostToBank(16);
attachPostToBank(17);
selectanother(1);
selectanother(2);
selectanother(3);
selectanother(4);
selectanother(5);

function test(event, ui)
{
    var self = jQuery(this);
        self.find(".placeholder").remove();
        var productid = ui.draggable.attr("data-id");
        if (self.find("[data-id=" + productid + "]").length) return;
        jQuery("<li></li>", {
            "text": ui.draggable.text(),
            "data-id": productid
        }).appendTo(this);
            // jQuery("#equal").hide();
        
        // To remove item from other shopping chart do this
        var cartid = self.closest('.shoppingCart').attr('id');
       // jQuery(".shoppingCart:not(#"+cartid+") [data-id="+productid+"]").remove();
        var isAllFilled = checkCompletionStatus(getParent(this));
       
        if(isAllFilled)
        {
            var result=getParent(this)+"_result";
            jQuery("."+result).show();
             jQuery("."+result+" a").html("Perfect Blocks");
        }
}

function attachPostToBank(i){
    var bankable = "field"+i;
    console.log("#"+bankable);
    jQuery("."+bankable).droppable({
        activeClass: "content-active",
        hoverClass: "content-hover",
        accept : ".block"+i,
        drop: function(event, ui) {
             test.call(this,event, ui);
        }
    }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
            jQuery(this).removeClass("content-active");
        }
    });
}

function selectanother(j){
    var sel="sel"+j;
    console.log("#"+sel);
    jQuery("."+sel).draggable({
   revert: true,
  start: function( event, ui ) {
       var s="Please select another block";
       jQuery(".e1"+j).show();
      jQuery(".e1"+j).html(s);
      setTimeout(function(){jQuery(".e1"+j).hide();},1200);
       }
});
}

function getParent(draggedElem)
{
	var tableId=jQuery(draggedElem).parents("table").attr("id");
    //alert(tableId);
	console.log(tableId);
	return tableId;
}
function checkCompletionStatus(tableId){
	
	  var isAllFilled = true;
      jQuery("#"+tableId+" .shoppingCart").each(function(){
            if(jQuery(this).find('ol .placeholder').length > 0)
            {
                isAllFilled = false;
                return
            }
      });
      return isAllFilled
}   
 });
  })(jQuery);	