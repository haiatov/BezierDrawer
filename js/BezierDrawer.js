function BezierDrawer(canvasEl) {

    let drawConfig = {
        circle: {
            lineWidth: 2,
            lineColor: '#000000',
            fillColor: '#FFFFFF',
            radius: 3
        }
    }

    const points = [];

    const ctx = canvasEl.getContext('2d');
    canvasEl.width = canvasEl.offsetWidth;
    canvasEl.height = canvasEl.offsetHeight;
    
    canvasEl.addEventListener('click', addPoint.bind(this));

    function addPoint(e) {
        const x = e.pageX - canvasEl.offsetLeft;
        const y = e.pageY - canvasEl.offsetTop;
        const point = new Point(x, y, drawConfig.circle.radius);
        points.push(point);
        drawPoint(point);
    }

    function drawPoint(point) {
        ctx.beginPath();
        ctx.lineWidth = drawConfig.circle.lineWidth;
        ctx.strokeStyle = drawConfig.circle.lineColor;
        ctx.fillStyle = drawConfig.circle.fillColor;
        ctx.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    } 

}