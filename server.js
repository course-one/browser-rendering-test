const express = require( 'express' );
const path = require( 'path' );

// create react app
const app = express();

// return `index.html` page
app.get( '/', ( _req, res ) => {
    res.sendFile( path.resolve( __dirname, 'index.html' ) );
} );

// return .css and .js file with a delay
app.get( '/:delay/:file', ( req, res ) => {
    setTimeout( () => {
        res.sendFile( path.resolve( __dirname, req.params.file ) );
    }, Number( req.params.delay ) );
} );

// serve express application
app.listen( 8088, () => console.log( 'http://localhost:8088/' ) );
