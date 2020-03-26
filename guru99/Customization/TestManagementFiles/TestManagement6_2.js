(function(jQuery) { 
  jQuery(document).ready(function(){


var sFilterB = "";
jQuery('input.ebno').click(function () {
     
    jQuery('input.ebno[type=checkbox]').each(function () {
        sFilterB = sFilterB + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
var sFilterC = "";
jQuery('input.ebno1').click(function () {
    jQuery('input.ebno1:checked').not(this).removeAttr('checked');
     
    jQuery('input.ebno1[type=checkbox]').each(function () {
        sFilterC = sFilterC + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
var sFilterD = "";
jQuery('input.ebno2').click(function () {
    jQuery('input.ebno2:checked').not(this).removeAttr('checked');
     
    jQuery('input.ebno2[type=checkbox]').each(function () {
        sFilterD = sFilterD + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
var sFilterA = "";
jQuery('input.eb').click(function () {
    jQuery('input.eb:checked').not(this).removeAttr('checked');
     
    jQuery('input.eb[type=checkbox]').each(function () {
        sFilterA = sFilterA + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
var sFilterE = "";
jQuery('input.ebno3').click(function () {
    jQuery('input.ebno3:checked').not(this).removeAttr('checked');
     
    jQuery('input.ebno3[type=checkbox]').each(function () {
        sFilterE = sFilterE + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
var sFilterF = "";
jQuery('input.ebno4').click(function () {
    jQuery('input.ebno4:checked').not(this).removeAttr('checked');
     
    jQuery('input.ebno4[type=checkbox]').each(function () {
        sFilterF = sFilterF + (this.checked ? jQuery(this).val() : "");
        
    });
     
    
});
jQuery('#submit').click(function() {
    var b="";
    b=sFilterB+sFilterC+sFilterD+sFilterA+sFilterE+sFilterF;
    
    if(b=="")
    {
          alert("Please check atleast 1 option");
    }
    else
    {
        jQuery(".s2").show();
    }  
    
});
    
     });
  })(jQuery);
