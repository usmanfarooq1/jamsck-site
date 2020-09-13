const vibes =[
  '...and you are awesome !',
  '...have a wonderful day !',
  '...and you got this !',
  '...and so is this puppy !'
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

document.querySelector('.vibes').append(vibe);