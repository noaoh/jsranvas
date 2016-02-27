function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function degrees2radians(degree) {
    var radian = degree * .017;
    return radian;
}

function repeat(func, times) {
    for (var x = 0; x < times; x ++) {
        func();
    }
}

function rand_fillStyle(ctx, object) {
    var object = object || {};
    var red_range = object.red_range || getRandomInt(0, 255)
    var green_range = object.green_range || getRandomInt(0, 255)
    var blue_range = object.blue_range || getRandomInt(0, 255)
    var opacity_range = object.opacity_range || getRandomArbitrary(0,1)
    ctx.fillStyle = "rgba(" + red_range + "," + green_range + "," + blue_range + "," + opacity_range + ")";
}

function rand_strokeStyle(ctx, object) {
    var object = object || {};
    var red_range = object.red_range || getRandomInt(0, 255)
    var green_range = object.green_range || getRandomInt(0, 255)
    var blue_range = object.blue_range || getRandomInt(0, 255)
    var opacity_range = object.opacity_range || getRandomArbitrary(0,1)
    ctx.strokeStyle = "rgba(" + red_range + "," + green_range + "," + blue_range + "," + opacity_range + ")";
}

function draw_line(canvas, ctx, object) {
    var object = object || {};
    var x1 = object.x1 || 0
    var y1 = object.y1 || canvas.height
    var x2 = object.x2 || canvas.width
    var y2 = object.y2 || 0
    ctx.strokeStyle = ctx.strokeStyle || 'orange'
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function draw_rand_line(canvas, ctx, object) {
    var object = object || {};
    var x1 = object.x1 || getRandomInt(0, canvas.width);
    var y1 = object.y1 || getRandomInt(0, canvas.height);
    var x2 = object.x2 || getRandomInt(0, canvas.width);
    var y2 = object.y2 || getRandomInt(0, canvas.height);
    ctx.strokeStyle = ctx.strokeStyle || rand_strokeStyle(ctx);
    draw_line(canvas, ctx, {'x1': x1, 'y1': y1, 'x2': x2, 'y2': x2, 'stroke': ctx.strokeStyle})
}

function rand_quadraticCurve(canvas, ctx, object) {
    var object = object || {};
    var penx = object.penx || getRandomInt(0, canvas.width);
    var peny = object.peny || getRandomInt(0, canvas.height);
    var cp1x = object.cp1x || getRandomInt(0, canvas.width);
    var cp1y = object.cp1y || getRandomInt(0, canvas.height);
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    ctx.strokeStyle = ctx.strokeStyle || rand_strokeStyle(ctx)
    ctx.moveTo(penx, peny)
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
}

function rand_bezierCurve(canvas, ctx, object) {
    var object = object || {};
    var penx = object.penx || getRandomInt(0, canvas.width);
    var peny = object.peny || getRandomInt(0, canvas.height);
    var cp1x = object.cp1x || getRandomInt(0, canvas.width);
    var cp1y = object.cp1y || getRandomInt(0, canvas.height);
    var cp2x = object.cp2x || getRandomInt(0, canvas.width);
    var cp2y = object.cp2y || getRandomInt(0, canvas.height);
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    var stroke = ctx.strokeStyle || rand_strokeStyle(ctx);
    ctx.moveTo(penx, peny);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();
}

function rand_arc(canvas, ctx, object) {
    var object = object || {};
    var penx = object.penx || getRandomInt(0, canvas.width);
    var peny = object.peny || getRandomInt(0, canvas.height);
    var radius = object.radius || getRandomInt(0, canvas.width);
    var startAngle = object.startAngle || getRandomInt(0, 2 * Math.PI)
    var endAngle = object.endAngle || getRandomInt(0, 2 * Math.PI) 
    var anticlockwise = object.anticlockwise || true
    ctx.arc(penx, peny, radius, startAngle, endAngle, anticlockwise);
}

function strokeTriangle(canvas, ctx, object) {
    var object = object || {};
    var x1 = object.x1 || 0;
    var y1 = object.y1 || 0;
    var x2 = object.x2 || canvas.width;
    var y2 = object.y2 || 0;
    var x3 = object.x3 || Math.floor(canvas.width * .5);
    var y3 = object.y3 || Math.floor(canvas.height * .5);
    ctx.beginPath();
    ctx.strokeStyle = ctx.strokeStyle || "orange";
    ctx.fillStyle = "rgba(0, 0, 200, 0)"
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

function fillTriangle(canvas, ctx, object) {
    var object = object || {};
    var x1 = object.x1 || 0;
    var y1 = object.y1 || 0;
    var x2 = object.x2 || canvas.width;
    var y2 = object.y2 || 0;
    var x3 = object.x3 || Math.floor(canvas.width * .5);
    var y3 = object.y3 || Math.floor(canvas.height * .5);
    ctx.beginPath();
    ctx.strokeStyle = ctx.strokeStyle || "rgba(0, 0, 200, 0)";
    ctx.fillStyle = ctx.fillStyle || "orange" ;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.fill();
}

function rand_strokeTriangle(canvas, ctx, object){
    var object = object || {};
    var x1 = object.x1 || getRandomInt(0, canvas.width);
    var y1 = object.y1 || getRandomInt(0, canvas.height);
    var x2 = object.x2 || getRandomInt(0, canvas.width);
    var y2 = object.y2 || getRandomInt(0, canvas.height);
    var x3 = object.x3 || getRandomInt(0, canvas.width);
    var y3 = object.y3 || getRandomInt(0, canvas.height);
    ctx.strokeStyle = ctx.strokeStyle || rand_strokeStyle(ctx);
    strokeTriangle(canvas, ctx, {'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2, 'x3': x3, 'y3': y3, 'stroke': ctx.strokeStyle});
    }

function rand_fillTriangle(canvas, ctx, object) {
    var object = object || {};
    var x1 = object.x1 || getRandomInt(0, canvas.width);
    var y1 = object.y1 || getRandomInt(0, canvas.height);
    var x2 = object.x2 || getRandomInt(0, canvas.width);
    var y2 = object.y2 || getRandomInt(0, canvas.height);
    var x3 = object.x3 || getRandomInt(0, canvas.width);
    var y3 = object.y3 || getRandomInt(0, canvas.height);
    ctx.fillStyle = ctx.fillStyle || rand_fillStyle(ctx);
    fillTriangle(canvas, ctx, {'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2, 'x3': x3, 'y3': y3, 'fill': ctx.fillStyle});
}

function rand_strokeRect(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    var wide = object.wide || getRandomInt(0, canvas.width);
    var tall = object.tall || getRandomInt(0, canvas.height);
    ctx.strokeStyle = ctx.strokeStyle || rand_strokeStyle(ctx);
    ctx.strokeRect(x, y, wide, tall);
}

function rand_fillRect(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    var wide = object.wide || getRandomInt(0, canvas.width);
    var tall = object.tall || getRandomInt(0, canvas.height);
    ctx.strokeStyle = ctx.strokeStyle || "rgba(0, 0, 200, 0)";
    ctx.fillStyle = ctx.fillStyle || rand_fillStyle(ctx);
    ctx.fillRect(x, y, wide, tall);
}

function fillCircle(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || Math.floor(canvas.width * .5);
    var y = object.y || Math.floor(canvas.height * .5);
    var radius = object.radius || 10;
    ctx.fillStyle = ctx.fillStyle || "orange";
    ctx.strokeStyle = ctx.strokeStyle || "rgba(0, 0, 200, 0)";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
}

function strokeCircle(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || Math.floor(canvas.width * .5)
    var y = object.y || Math.floor(canvas.height * .5)
    var radius = object.radius || 10
    ctx.strokeStyle = ctx.strokeStyle || "orange"
    ctx.fillStyle = "rgba(0, 0, 200, 0)"
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.stroke();
}

function rand_strokeCircle(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    var radius = object.radius || getRandomInt(0, canvas.width);
    ctx.strokeStyle = ctx.strokeStyle || rand_strokeStyle(ctx);
    strokeCircle(canvas, ctx, {'x': x, 'y': y, 'radius': radius, 'stroke': ctx.strokeStyle});
}

function rand_fillCircle(canvas, ctx, object) {
    var object = object || {};
    var x = object.x || getRandomInt(0, canvas.width);
    var y = object.y || getRandomInt(0, canvas.height);
    var radius = object.radius || getRandomInt(0, canvas.width);
    ctx.fillStyle = ctx.fillStyle || rand_fillStyle(ctx);
    fillCircle(canvas, ctx, {'x': x, 'y': y, 'radius': radius, 'fill': ctx.fillStyle})
}
