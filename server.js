const express = require( 'express' );
const path = require( 'path' );

// create react app
const app = express();

// return file immediately
app.get( '/:file', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, req.params.file ) );
} );

// return a file with provided delay
app.get( '/:delay/:file', ( req, res ) => {
    setTimeout( () => {
        res.sendFile( path.resolve( __dirname, req.params.file ) );
    }, Number( req.params.delay ) );
} );

// serve express application
app.listen( 8088, () => console.log( 'http://localhost:8088/' ) );
