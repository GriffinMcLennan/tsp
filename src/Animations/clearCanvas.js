const clearCanvas = (canvasRef) => {
    const canvas = canvasRef;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export default clearCanvas;