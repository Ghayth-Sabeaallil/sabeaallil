import { useEffect, useRef } from "react";

function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let mouseX: number;
    let mouseY: number;
    const patricArr: Particle[] = [];


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        let animationFrameId: number;

        const render = () => {
            console.log(patricArr)
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                handleParticle();
                animationFrameId = requestAnimationFrame(render);
            }
        };

        render();
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    window.addEventListener("resize", function () {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            mouseX = event.clientX;
            mouseY = event.clientY;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                for (let i = 0; i < 3; i++) {
                    patricArr.push(new Particle(ctx));
                }
            }
        }
    };

    function handleParticle() {
        for (let i = 0; i < patricArr.length; i++) {
            patricArr[i].update();
            patricArr[i].draw();
            if (patricArr[i].y <= -patricArr[i].w || patricArr[i].x <= -patricArr[i].w || patricArr[i].y >= window.innerHeight + patricArr[i].w) {
                patricArr.splice(i, 1);
                i--;
            }
        }
    }


    class Particle {
        x: number;
        y: number;
        w: number;
        speedY: number;
        speedX: number;
        ctx: CanvasRenderingContext2D;
        constructor(ctx: CanvasRenderingContext2D) {
            this.x = mouseX;
            this.y = mouseY;
            this.w = Math.random() * (50 - 15 + 1) + 15;
            this.speedY = Math.random() * 3 - 1;
            this.speedX = Math.random() * 3 - 1;
            this.ctx = ctx;
        }
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
        }
        draw() {
            this.ctx.fillStyle = `rgb(119, 119, 119, 0.5)`;
            this.ctx.strokeStyle = "#777";
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.rect(this.x, this.y, this.w, this.w);
            this.ctx.stroke();
            this.ctx.fill();
            this.ctx.closePath();

        }
    }

    return (
        <>
            <canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                onClick={handleClick}> </canvas>
        </>
    );
}

export default Canvas;
