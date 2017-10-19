import { App } from "./App";

var app:App = new App( 2500 );

app.$ajouter.click( function(){

    app.$form.fadeIn();

});

app.$form.submit( function(event){

    event.preventDefault();
    
    app.createSpent();

});