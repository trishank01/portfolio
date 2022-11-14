import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";


const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "yellow",
  radius: () => Math.random() * 1.5 + 1.2,
  mass: () => 40,
  friction: () => 0.25,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 20);
};

export default function App() {

  return (
    <ParticleImage
      src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"}
      width={Number(500)}
      height={Number(400)}
      scale={0.85}
      entropy={20}
      maxParticles={4000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#022A30"
    />
  );
}