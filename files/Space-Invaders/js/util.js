function rectangularCollision({ rectangle1, rectangle2 }) {
  if (rectangle1.position && rectangle2.position) {
    return (
      rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
      rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
      rectangle1.position.x <= rectangle2.position.x + rectangle2.width
    );
  }
  return false;
}

function createParticles({ object, color }) {
  for (let i = 0; i < 15; i++) {
    particles.push(
      new Particle({
        position: {
          x: object.position.x + object.width / 2,
          y: object.position.y + object.height / 2,
        },
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        radius: Math.random() * 3,
        color: color || "#BAA0DE",
        fades: true,
      })
    );
  }
}
