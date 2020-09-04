class PingController {
    enviarDado(event){

        event.preventDefault();

        const enviarPing = new XMLHttpRequest();    

        enviarPing.addEventListener( "load", function(event) {
            alert( event.target.responseText );
        } );
    
        // Define what happens in case of error
        enviarPing.addEventListener( "error", function( event ) {
            alert( 'Teu Ping não foi malandro!' );
        } );

        // Set up our request
        enviarPing.open( "GET", "http://api.metzsites.com/public/api/ping" );
    
        // The data sent is what the user provided in the form
        enviarPing.send();  
    }
}