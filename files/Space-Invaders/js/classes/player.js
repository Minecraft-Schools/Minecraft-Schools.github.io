class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.rotation = 0;

    this.opacity = 1;

    const image = new Image();
    image.src = "./img/spaceship.png";

    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale; // player width
      this.height = image.height * scale; // player height
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };

    this.particles = [];
    this.frames = 0;
  }

  draw() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );
    ctx.rotate(this.rotation);

    ctx.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    );

    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    ctx.restore();
  }

  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.x;
    }

    if (this.opacity !== 1) return;

    this.frames++;
    if (this.frames % 2 === 0 && this.position) {
      this.particles.push(
        new Particle({
          position: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height,
          },
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: 1.5,
          },
          radius: Math.random() * 2,
          color: "white",
          fades: true,
        })
      );
    }
  }
}
