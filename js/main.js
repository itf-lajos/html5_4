// Canvas kitöltése.
function fillCanvas() {
    var canvas = document.querySelector( "#myCanvas" );
    //console.log( canvas);
    var context = canvas.getContext( "2d" );
    context.fillStyle = "#ff0000";
    context.fillRect( 10, 10, 180, 80 );
}

// Kitöltés indítása
//fillCanvas();

// Kép betöltése
function fillImg() {
    var canvas = document.querySelector( "#myCanvas" );
    var context = canvas.getContext( "2d" );
    
    // Vonal rajzolása.
    context.moveTo( 100, 100 );
    context.lineTo( 300, 100 );
    context.stroke();
    
    // Kör rajzolása.
    context.beginPath();
    context.arc( 200, 50, 40, 0, 2*Math.PI );
    context.stroke();
    
    // Kép kiválasztása.
    var img = document.querySelector( "#myImg" );
    context.drawImage( img, 0, 0 );
}
fillImg();

// Kép húzása és dobása.

// Alapértelmezett esemény megállapítása.
function allowDrop( ev ) {
//    console.log( ev.target );
//    ev.target.style.border = "dashed 5px #e0e0e0";
    ev.preventDefault();        
}

// Amikor az elemről lehúzzák a másik elemet.
function dropLeaved( ev ) {
//    ev.target.style.border = "solid 1px #e0e0e0";
    ev.preventDefault();        
}

// Elem húzásának megkezdése (melyik elemet kezdtük húzni).
function drag( ev ) {
    ev.dataTransfer.setData( "id", ev.target.id );
}

// Ledobják az elemet.
function drop( ev ) {
    ev.preventDefault();
    
    // Esemény célpontja.
    var div = ev.target;
    
    // Elem hozzáadása
    var id = ev.dataTransfer.getData( "id" );
    var sdiv = document.querySelector("#"+id).parentNode;
    div.appendChild( document.querySelector("#"+id) );
    // Ár kalkulálása.
    calcPrice( div );
    calcPrice( sdiv );
    
}

function calcPrice( div ) {
    // Div elemei.
    var order = div.querySelectorAll( "[data-ar]" );
    
    // Végigmegyünk a rendelés elemein.
    var price = 0;
    Array.prototype.forEach.call( order, function(item) {
        var ar = item.getAttribute( "data-ar" );
        price += parseInt( ar, 10);
//        console.log( ar );
    } );
//   console.log( price );
    div.querySelector( ".price-div" ).innerHTML = price + " Ft";
}
    