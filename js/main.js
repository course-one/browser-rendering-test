// start timer
console.time('DOMContentLoaded');
console.time('window.onload');

// log DOMContentLoaded event
document.addEventListener( 'DOMContentLoaded', () => {
    console.log( 'DOMContentLoaded' );
    console.timeEnd('DOMContentLoaded');
} );

// log window.onload event
window.addEventListener( 'load', () => {
    console.log( 'window.onload' );
    console.timeEnd('window.onload');
} );