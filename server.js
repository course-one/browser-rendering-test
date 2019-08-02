const express = require( 'express' );
const path = require( 'path' );

// create react app
const app = express();

// return file immediately (parent directory)
app.get( '/:file', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, req.params.file ) );
} );

// return file immediately (nested directory)
app.get( '/:dir/:file', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, req.params.dir, req.params.file ) );
} );

// return a file with provided delay
app.get( '/:delay/:dir/:file', ( req, res ) => {
    setTimeout( () => {
        res.sendFile( path.resolve( __dirname, req.params.dir, req.params.file ) );
    }, Number( req.params.delay ) );
} );

// serve express application
app.listen( 8088, () => console.log( 'http://localhost:8088/index.html' ) );
