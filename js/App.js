function App() {

    function initCanvas() {
        let mainCanvasEl = document.getElementById('bezier');
        let mainCanvas = new BezierDrawer(mainCanvasEl);
    }

    this.init = function() {
        document.addEventListener('DOMContentLoaded', initCanvas.bind(this) );
    }

}


const app = new App();
app.init();