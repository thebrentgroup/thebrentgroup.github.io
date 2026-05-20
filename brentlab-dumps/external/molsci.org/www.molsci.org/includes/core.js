var debug = false;


function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

/*
var preloadFlag = false;
function preloadImages() {

	if (document.images) {
		for ( var count = 0;
		      count < document.images.length;
			  count++ )
		{
			// for each non-null image, see if it is a rollover image (starts with 'r_')
			if ( document.images[count] != null 
				&& ( document.images[count].name.substr(0,2) == "r_"
				     || document.images[count].name.substr(0,8) == "rollover" ) )
			{
				normal = document.images[count].src;
				over = normal.substr( 0, normal.length - 4 ) + "_over" + normal.substr( normal.length - 4, 4 );
				temp = newImage( over );	
			}
			
		}
		//b_searchgo_over = newImage("images/b_searchgo_over.gif");
		preloadFlag = true;
	}
}
*/

function submitAction( form, action )
{
	if ( debug )
	{
		alert( "Got form = " + form.name + " and action = " + action );
		alert( "submitButtonName.name currently = " + form.submitButtonName.name );
	}

	form.submitButtonName.name = action;

	if ( debug )
	{
		alert( "submitButtonName.name now = " + form.submitButtonName.name );
		showElements( form );
	}
	
	return void( form.submit() );	
}

function showElements( form )
{
	var alertMessage = "Elements in form " + form.name + " are:\n";
	var oneLine = "";

	for ( elementCount = 0;
	      elementCount < form.elements.length;
		  elementCount++ )
	{
		alertMessage += "  element[" + elementCount + "].name = " + form.elements[elementCount].name + "\n";	
	}
	
	alert( alertMessage );
}
