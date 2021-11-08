let mySong, amplitude;

function preload(){
    mySong = loadSound("assets/massiveAttackAngel.mp3");
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    mySong.play();

    amplitude = new p5.Amplitude();
}

function draw() {

    let level = amplitude.getLevel();
    let col = map(level, 0, 1, 0, 2000);
    console.log(col);

    background(col);

    

    fill(col, 200, 50);
    ellipse(width/2, height/2, col);

    fill(230, col, 50);
    ellipse(width/2, height/2, col);

  
}