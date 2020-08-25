export const blackBug = Object.freeze({
  color: "rgba(0, 0, 0)",
  speed1: 0.15,
  speed2: 0.2,
  score: 5,
  probability: 0.3,
});

export const redBug = Object.freeze({
  color: "rgba(255, 0, 0)",
  speed1: 0.075,
  speed2: 0.1,
  score: 3,
  probability: 0.3,
});

export const orangeBug = Object.freeze({
  color: "rgba(255, 102, 0)",
  speed1: 0.06,
  speed2: 0.08,
  score: 1,
  probability: 0.4,
});

export type bugConfig = typeof orangeBug;
