
export default function define(runtime, observer) {
    const main = runtime.module();
  
    main.variable(observer("chart")).define("chart", ["DOM","width","n","v","m"], function*(DOM,width,n,v,m)
  {
    //const height = 600;
    const height = window.innerHeight;
    const context = DOM.context2d(width, height);
    context.lineJoin = "round";
    context.lineCap = "round";
  
    const tadpoles = new Array(n).fill().map(() => ({
      vx: (Math.random() - 0.5) * v,
      vy: (Math.random() - 0.5) * v,
      px: new Array(m).fill(Math.random() * width),
      py: new Array(m).fill(Math.random() * height),
      count: 0
    }));
  
    while (true) {
      context.clearRect(0, 0, width, height);
  
      for (const t of tadpoles) {
        let dx = t.vx;
        let dy = t.vy;
        let x = t.px[0] += dx;
        let y = t.py[0] += dy;
        let speed = Math.sqrt(dx * dx + dy * dy);
        const count = speed * 7;
        const k1 = -5 - speed / 3;
  
        // Bounce off the walls.
        if (x < 0 || x > width) t.vx *= -1;
        if (y < 0 || y > height) t.vy *= -1;
  
        // Swim!
        for (var j = 1; j < m; ++j) {
          const vx = x - t.px[j];
          const vy = y - t.py[j];
          const k2 = Math.sin(((t.count += count) + j * 3) / 300) / speed;
          t.px[j] = (x += dx / speed * k1) - dy * k2;
          t.py[j] = (y += dy / speed * k1) + dx * k2;
          speed = Math.sqrt((dx = vx) * dx + (dy = vy) * dy);
        }
  
        // Head
        context.save();
        context.translate(t.px[0], t.py[0]);
        context.rotate(Math.atan2(t.vy, t.vx));
        context.beginPath();
        context.ellipse(0, 0, 6.5, 4, 0, 0, 2 * Math.PI);
        context.fillStyle = "white";
        context.fill();
        context.restore();
  
        // Body
        context.beginPath();
        context.strokeStyle = "white";
        context.moveTo(t.px[0], t.py[0]);
        for (let i = 1; i < 3; ++i) context.lineTo(t.px[i], t.py[i]);
        context.lineWidth = 3;
        context.stroke();
  
        // Tail
        context.beginPath();
        context.moveTo(t.px[0], t.py[0]);
        for (let i = 1; i < m; ++i) context.lineTo(t.px[i], t.py[i]);
        context.lineWidth = 1;
        context.stroke();
      }
  
      yield context.canvas;
    }
  });
  
  main.variable(observer("n")).define("n", function(){return(
  100
  )});
  main.variable(observer("m")).define("m", function(){return(
  12
  )});
  main.variable(observer("v")).define("v", function(){return(
  2
  )});
  
  return main;
  }
  