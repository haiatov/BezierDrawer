function App() {

    let mainCanvas;

    function initCanvas() {
        let mainCanvasEl = document.getElementById('bezier');
        mainCanvas = new BezierDrawer(mainCanvasEl);
    } 

    function initEvents(){
        document.getElementById('reset-button').addEventListener('click', () => {
            mainCanvas.clear();
        });
    }
    
    function init() {
        document.addEventListener('DOMContentLoaded', () => {
            initCanvas.call(this);
            initEvents.call(this);
        });
    }

    this.init = init;

}


const app = new App ();
app.init();