// FEATURE DETECTION
(function (window, document, $, Modernizr, undefined) {
	
    'use strict';
 // JS detection 1
 	var root = document.documentElement;

    var testProperty = function(property)
    {
        if(property in root.style)
        {
	        root.classList.add('test1-' + property.toLowerCase());
	        return true;
	        
        }
        root.classList.add('test1-no-' + property.toLowerCase());
        return false;
    };
    
    testProperty('backgroundImage');
    
	
	//JS detection 2
	var dummy = document.createElement('p');
	dummy.style.backgroundImage = "linear-gradient(red, tan)";
	
	if (dummy.style.backgroundImage)
	{
		root.classList.add('js2-lineargradients');
	}
	else
	{
		root.classList.add('js2-no-lineargradients');
	}

	
	// JS detection 3
	function testValue(id, value, property) 
	{ 
		var dummy = document.createElement('p'); 
		dummy.style[property] = value;
		
		if (dummy.style[property]) 
		{ 
			root.classList.add(id); 
			return true;
		}
		root.classList.add('no-' + id);
		return false; 
	}

	testValue('js3-textShadow', 'textShadow', '0 0 0.3em gray');


	
	 // Modernizr detection
	 if (Modernizr.textshadow) {
	    console.log('textshadow working');
	    
	    
	  } else {
	    console.log('textshow NOT working');
	    
	    
	  }
	  
}(window, document, window.jQuery, window.Modernizr, this));
