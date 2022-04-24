

var nextAllowed=true;
var id_nr;

function go(x, rot) {
	if (nextAllowed==true) {
		id_nr=x;
		nextAllowed=false;
		if (rot=="X") {
			rotateXDIV('container'+id_nr,'content'+id_nr);
			//setTimeout(draw(id_nr),1000);
		} else if (rot=="Y") {
			rotateYDIV('container'+id_nr,'content'+id_nr);
			//setTimeout(draw(id_nr),1300);
		}
	}
	
    
}

function draw() {
    var pool = document.getElementById('input'+id_nr).innerText.split(',');
    var randNum = Math.floor(Math.random() * pool.length);
	document.getElementById('content'+id_nr).innerHTML = pool[randNum];
}


	
//// ROTATION
var x,y,n=0,ny=0,rotXINT,rotYINT;

function rotateXDIV(toRot, toNot) {
	y=document.getElementById(toRot)
	x=document.getElementById(toNot)
	clearInterval(rotXINT)
	rotXINT=setInterval("startXRotate()",10)
}

function startXRotate() {
	ny=ny+1
	y.style.transform="rotateX(" + ny + "deg)"
	y.style.webkitTransform="rotateX(" + ny + "deg)"
	y.style.OTransform="rotateX(" + ny + "deg)"
	y.style.MozTransform="rotateX(" + ny + "deg)"
	/*rotate text so it is not mirrored*/
	x.style.transform="rotateX(" + ny + "deg)"
	x.style.webkitTransform="rotateX(" + ny + "deg)"
	x.style.OTransform="rotateX(" + ny + "deg)"
	x.style.MozTransform="rotateX(" + ny + "deg)"
	
	if (ny==90 || ny==270) {
		draw();
	}

	if (ny==180 || ny>=360) {
		clearInterval(rotXINT)
		if (ny>=360){ny=0;}
		nextAllowed=true;
	}
}


function rotateYDIV(toRot, toNot) {
	y=document.getElementById(toRot)
	x=document.getElementById(toNot)
	clearInterval(rotYINT)
	rotYINT=setInterval("startYRotate()",20)
}

function startYRotate() {
	ny=ny+1
	y.style.transform="rotateY(" + ny + "deg)"
	y.style.webkitTransform="rotateY(" + ny + "deg)"
	y.style.OTransform="rotateY(" + ny + "deg)"
	y.style.MozTransform="rotateY(" + ny + "deg)"
	/*rotate text so it is not mirrored*/
	x.style.transform="rotateY(" + ny + "deg)"
	x.style.webkitTransform="rotateY(" + ny + "deg)"
	x.style.OTransform="rotateY(" + ny + "deg)"
	x.style.MozTransform="rotateY(" + ny + "deg)"
	
	if (ny==90 || ny==270) {
		draw();
	}

	if (ny==180 || ny>=360) {
		clearInterval(rotYINT)
		if (ny>=360){ny=0}
		nextAllowed=true;
	}
}

////for mobile soft keyboard
window.addEventListener('native.keyboardshow',function(e) {
	setTimeout(function() {
		document.activeElement.scrollIntoViewIfNeeded();
	}, 100);
});