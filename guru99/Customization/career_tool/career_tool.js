/*--------------------------  Career Suggestion Tool ---------------------------
*Step:-1 make field hidden and set the condition to show the particular field
*step-2  as per the selection of fields condition will check and display the result on click of submit button
*/


var jQuery = jQuery.noConflict();

jQuery(document).ready(function(){ 

/*step-1 starts
*this hides the field*/

 jQuery("#domain").hide();
  jQuery("#label2").hide();
  jQuery("#education").hide();
  jQuery("#label3").hide();
  jQuery("#spe").hide();
  jQuery("#label4").hide();
  jQuery("#result").hide();

/* on the change event of work experience particular field will show*/

jQuery('#exp').on('change',function(){

	/*if work experience is greter than 1 than*/

        if( jQuery(this).val()>=1){
        jQuery("#domain").slideDown();
		 jQuery("#label2").slideDown();
        }
		else{ jQuery("#domain").hide()
		 jQuery("#label2").hide();}

/*step-1:if work experience is less than one*/

         if( jQuery(this).val()<1){
        jQuery("#education").show()
		 jQuery("#label3").show();
		  jQuery("#spe").show();
		   jQuery("#label4").show();
        }
		else{
		 jQuery("#education").hide()
		 jQuery("#label3").hide();
		  jQuery("#spe").hide();
		   jQuery("#label4").hide();
		  if( jQuery(this).val()=='select'){
        jQuery("#education").hide()
		 jQuery("#label3").hide();
		  jQuery("#spe").hide();
		   jQuery("#label4").hide();
		    jQuery("#domain").hide()
		 jQuery("#label2").hide();
        }
		}
		
    });

	
 jQuery("#domain").hide();
/*step-1 ends*/
    jQuery("#button").click(function(){
    	/* Step-2 start 
    	* this will empty the <p> tag so data will be refreshed*/
    jQuery('#test1').empty();
	/*make variables of the select field data*/
       var exp=jQuery('select[name=exp]').val();

		var domain=jQuery('select[name=domain]').val();
		var education=jQuery('select[name=education]').val();
		var spe=jQuery('select[name=spe]').val();
		var msg="We recommend the following module";
/*check condition if experience is greater than one than show domain*/
		if (exp>=1)
		{
						jQuery("#test1").append(msg);
/*this will show the result as per the user selection*/
						if(domain=='Finance/Insurance')
						{

						 jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-fico-training-tutorials.html"> FICO</a> (Finance and Controlling)');
						}
						
						if(domain=='Manufacturing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-mm-training-tutorials.html"> MM</a>(Materials Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP PP(Production Planning)');
						 jQuery("#test1").append('<br/><br/>SAP PM(Plant Maintenance)');
						}
						if(domain=='Sales/Marketing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						if(domain=='HR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						if(domain=='Information Technology')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-basis-training-tutorials.html"> Basis</a>');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/abap-tutorial.html"> ABAP</a>');
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						}
						if(domain=='Analytics')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI</a> (Business Intelligence)');
						}
						if(domain=='Advertising/Marketing/PR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(domain=='Customer Service')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(domain=='Market Research')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)');
						}
						
						if(domain=='Consulting')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						
						if(domain=='Logistics/Shipping/Warehousing ')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> SCM</a> (Supply Chain Management)');
						  
						}
						if(domain=='Project Management')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						 
						}
						if(domain=='Quality Control')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP QM (Quality Management)');
						 
						}
						if(domain=='Other')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)'); 
						}
		}
/*check condition if experience is less than one than show education and specialization*/
		else if(exp<1)
		{
	/*when user selects graduate  than this selection will diaplay*/
			if(education=='Graduate')
			{
						jQuery("#test1").append(msg);
						if(spe=='Finance/Insurance')
						{
						 jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-fico-training-tutorials.html"> FICO </a>(Finance and Controlling)');
						}
						
						if(spe=='Manufacturing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-mm-training-tutorials.html"> MM</a>(Materials Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP PP(Production Planning)');
						 jQuery("#test1").append('<br/><br/>SAP PM(Plant Maintenance)');
						}
						if(spe=='Sales/Marketing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						if(spe=='HR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						if(spe=='Information Technology')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-basis-training-tutorials.html"> Basis</a>');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/abap-tutorial.html"> ABAP</a>');
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						}
						if(spe=='Analytics')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI (Business Intelligence)</a>');
						}
						if(spe=='Advertising/Marketing/PR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Customer Service')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Market Research')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI</a>(Business Intelligence)');
						}
						
						if(spe=='Consulting')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						
						if(spe=='Logistics/Shipping/Warehousing ')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> SCM </a>(Supply Chain Management)');
						  
						}
						if(spe=='Project Management')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						 
						}
						if(spe=='Quality Control')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP QM (Quality Management)');
						 
						}
						if(spe=='Other')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)'); 
						}
								
			}
/*when post graduate is selected than this data will be displayes*/
			else if(education=='Post Graduate')
			{
						jQuery("#test1").append(msg);
						if(spe=='Finance/Insurance')
						{
						 jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-fico-training-tutorials.html"> FICO </a>(Finance and Controlling)');
						}
						
						if(spe=='Manufacturing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-mm-training-tutorials.html"> MM</a>(Materials Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP PP(Production Planning)');
						 jQuery("#test1").append('<br/><br/>SAP PM(Plant Maintenance)');
						}
						if(spe=='Sales/Marketing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						if(spe=='HR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						if(spe=='Information Technology')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-basis-training-tutorials.html"> Basis</a>');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/abap-tutorial.html"> ABAP</a>');
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						}
						if(spe=='Analytics')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI (Business Intelligence)</a>');
						}
						if(spe=='Advertising/Marketing/PR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Customer Service')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Market Research')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI</a>(Business Intelligence)');
						}
						
						if(spe=='Consulting')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						
						if(spe=='Logistics/Shipping/Warehousing ')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> SCM </a>(Supply Chain Management)');
						  
						}
						if(spe=='Project Management')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						 
						}
						if(spe=='Quality Control')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP QM (Quality Management)');
						 
						}
						if(spe=='Other')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)'); 
						}
			}
/*when phd is selected than this data will be displayed*/
			else if(education=='Phd')
			{
						jQuery("#test1").append(msg);
						if(spe=='Finance/Insurance')
						{
						 jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-fico-training-tutorials.html"> FICO </a>(Finance and Controlling)');
						}
						
						if(spe=='Manufacturing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-mm-training-tutorials.html"> MM</a>(Materials Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP PP(Production Planning)');
						 jQuery("#test1").append('<br/><br/>SAP PM(Plant Maintenance)');
						}
						if(spe=='Sales/Marketing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						if(spe=='HR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						if(spe=='Information Technology')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-basis-training-tutorials.html"> Basis</a>');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/abap-tutorial.html"> ABAP</a>');
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						}
						if(spe=='Analytics')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI (Business Intelligence)</a>');
						}
						if(spe=='Advertising/Marketing/PR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Customer Service')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Market Research')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI</a>(Business Intelligence)');
						}
						
						if(spe=='Consulting')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						
						if(spe=='Logistics/Shipping/Warehousing ')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> SCM </a>(Supply Chain Management)');
						  
						}
						if(spe=='Project Management')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						 
						}
						if(spe=='Quality Control')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP QM (Quality Management)');
						 
						}
						if(spe=='Other')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)'); 
						}
			}
/*when other is selected than this data will be displlayed*/
			else if(education=='Other')
			{
						jQuery("#test1").append(msg);
						if(spe=='Finance/Insurance')
						{
						 jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-fico-training-tutorials.html"> FICO </a>(Finance and Controlling)');
						}
						
						if(spe=='Manufacturing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-mm-training-tutorials.html"> MM</a>(Materials Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP PP(Production Planning)');
						 jQuery("#test1").append('<br/><br/>SAP PM(Plant Maintenance)');
						}
						if(spe=='Sales/Marketing')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						if(spe=='HR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						if(spe=='Information Technology')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-basis-training-tutorials.html"> Basis</a>');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/abap-tutorial.html"> ABAP</a>');
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						}
						if(spe=='Analytics')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI (Business Intelligence)</a>');
						}
						if(spe=='Advertising/Marketing/PR')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Customer Service')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						}
						
						if(spe=='Market Research')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI</a>(Business Intelligence)');
						}
						
						if(spe=='Consulting')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						}
						
						if(spe=='Logistics/Shipping/Warehousing ')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/free-sap-sd-training-course.html"> SD</a>(Sales and Distribution)');
						 jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> SCM </a>(Supply Chain Management)');
						  
						}
						if(spe=='Project Management')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP PS(Project System)');
						 
						}
						if(spe=='Quality Control')
						{
						jQuery("#result").show();
						 jQuery("#test1").append('<br/><br/>SAP QM (Quality Management)');
						 
						}
						if(spe=='Other')
						{
						jQuery("#result").show();
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-hcm.html"> HCM</a>(Human Capital Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-crm-training.html"> CRM</a>(Customer Relationship Management)');
						jQuery("#test1").append('<br/><br/>SAP<a href="https://www.guru99.com/sap-bi.html"> BI </a>(Business Intelligence)'); 
						}
				
			}
			
		}
		/* Step-2 End */
	ga('send', 'event', 'Tool', 'Submit', 'sapcareersuggestion');
    });
   
});