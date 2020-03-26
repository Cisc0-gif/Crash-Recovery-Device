(function(jQuery) {  
   jQuery(document).ready(function(){
    jQuery(".ab").change(function(){
          if(jQuery(".ab").click("checked")) {
              jQuery(this).parent().find('.ebdiv1').toggle();	
	      }
	      
          if(!jQuery('input:checkbox[name=ab]').is(':checked'))
	      {
  
              jQuery(this).parent().parent().find('.s11').hide();
              jQuery(this).parent().parent().find('.s22').hide();
 
              
          } else {
             jQuery(this).parent().next().show();
              jQuery(this).parent().parent().find('.s11').hide();
              jQuery(this).parent().find('.s22').show();
              
             jQuery('input:checkbox[name=abno]').attr('checked',false);
  	           
              
          }
    });
    jQuery(".abno").change(function(){
          if(jQuery(".abno").click("checked")) {
              jQuery(this).parent().find('.ebdiv1').toggle();	
	      }
	      
          if(!jQuery('input:checkbox[name=abno]').is(':checked'))
	      {
             jQuery(this).parent().parent().find('.s11').hide();
              jQuery(this).parent().parent().find('.s22').hide();
             
              jQuery('input:checkbox[name=ab]').attr('checked',false);
              
               
          } else {
           
               jQuery(this).parent().parent().find('.s11').show();
                 jQuery(this).parent().parent().find('.s22').hide();
               
              
  	           jQuery('input:checkbox[name=ab]').attr('checked',false);
              
             
               
          }
    });
       
        
    

});
})(jQuery);
