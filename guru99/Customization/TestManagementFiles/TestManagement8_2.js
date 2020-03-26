(function(jQuery) {  
   jQuery(document).ready(function(){
    jQuery(".eb").change(function(){
          if(jQuery(".eb").click("checked")) {
              jQuery(this).parent().find('.ebdiv1').toggle();	
	      }
	      
          if(!jQuery('input:checkbox[name=eb]').is(':checked'))
	      {
  
              jQuery(this).parent().parent().find('.s1').hide();
              jQuery(this).parent().parent().find('.s2').hide();
              jQuery('input:checkbox[name=ebno1]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
 
              
          } else {
             jQuery(this).parent().next().show();
              jQuery(this).parent().parent().find('.s1').hide();
              jQuery(this).parent().parent().find('.s2').show();
              
             jQuery('input:checkbox[name=ebno]').attr('checked',false);
  	           jQuery('input:checkbox[name=ebno1]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
          }
    });
    jQuery(".ebno").change(function(){
          if(jQuery(".ebno").click("checked")) {
              jQuery(this).parent().find('.ebdiv1').toggle();	
	      }
	      
          if(!jQuery('input:checkbox[name=ebno]').is(':checked'))
	      {
             jQuery(this).parent().parent().find('.s1').hide();
              jQuery(this).parent().parent().find('.s2').hide();
             
              jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno1]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
               
          } else {
           
               jQuery(this).parent().parent().find('.s1').hide();
                 jQuery(this).parent().parent().find('.s2').show();
               
              jQuery(this).parent().parent().find('.ebdivnext1').hide();
  	           jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno1]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
             
               
          }
    });
       
        jQuery(".ebno1").change(function(){
	      
          if(!jQuery('input:checkbox[name=ebno1]').is(':checked'))
	      {
      
      
             
              jQuery(this).parent().parent().find('.s2').hide();
             
              jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
          } else {
           
               jQuery(this).parent().parent().find('.s1').hide();
              jQuery(this).parent().parent().find('.s2').show();
  	           jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno]').attr('checked',false);
              jQuery('input:checkbox[name=ebno2]').attr('checked',false);
             
          }
    });
       
    jQuery(".ebno2").change(function(){
          if(jQuery(".ebno2").click("checked")) {
              jQuery(this).parent().find('.ebdiv1').toggle();	
	      }
	      
          if(!jQuery('input:checkbox[name=ebno2]').is(':checked'))
	      {
             jQuery(this).parent().parent().find('.s1').hide();
              jQuery(this).parent().parent().find('.s2').hide();
             
              jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno]').attr('checked',false);
              jQuery('input:checkbox[name=ebno1]').attr('checked',false);
               
          } else {
           
               jQuery(this).parent().parent().find('.s1').show();
                 jQuery(this).parent().parent().find('.s2').hide();
               
              jQuery(this).parent().parent().find('.ebdivnext1').hide();
  	           jQuery('input:checkbox[name=eb]').attr('checked',false);
              jQuery('input:checkbox[name=ebno]').attr('checked',false);
              jQuery('input:checkbox[name=ebno1]').attr('checked',false);
             
               
          }
    });
       
       

});
})(jQuery);
