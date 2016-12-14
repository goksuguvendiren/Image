var gl;

function start()
{
	var canvas = document.getElementById("glcanvas");

	// Initialize the GL context
  	gl = initWebGL(canvas);

  	// Only continue if WebGL is available and working
  	if (!gl) {
    	return;
  	}

  	gl.viewport(0, 0, canvas.width, canvas.height);
  	// Set clear color to black, fully opaque
  	gl.clearColor(0.0, 0.0, 0.0, 1.0);
  	// Enable depth testing
  	gl.enable(gl.DEPTH_TEST);
  	// Near things obscure far things
  	gl.depthFunc(gl.LEQUAL);
  	// Clear the color as well as the depth buffer.
  	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); 	

  	//drawScene();
}

function initWebGL(canvas)
{
	alert("initialize webGL");
	gl = null;

	// Try to grab the standard context. If it fails, fallback to experimental.
  	gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  	// If we don't have a GL context, give up now
  	if (!gl) {
  		alert("Unable to initialize WebGL. Your browser may not support it.");
  	}
  
 	return gl;
}
