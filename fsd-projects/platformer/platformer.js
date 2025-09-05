$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(0, 610, 100, 130, "black")
createPlatform(350, 550, 100, 190, "black")
createPlatform(700, 120, 390, 20, "black")
createPlatform(700, 480, 400, 170, "black")
createPlatform(360, 610, 100, 130, "black")
createPlatform(1100, 550, 100, 100, "black")
createPlatform(1150, 610, 100, 40, "black")
createPlatform(1300, 380, 100, 360, "black")
createPlatform(100, 120, 300, 10, "black")
createPlatform(100, 0, 10, 120, "black")
createPlatform(450, 170, 100, 10, "black")
createPlatform(1090, 270, 90, 10, "black")
createPlatform(700, 480, 30, 260, "black")
createPlatform(650, 250, 400, 10, "black")
createPlatform(700, 250, 390, 100, "black")
createPlatform(1050, 120, 45, 230, "black")
createPlatform(210, 710, 50, 10, "black")
createPlatform(740, 730, 50, 10, "black")
createPlatform(840, 730, 50, 10, "black")
createPlatform(1000, 730, 50, 10, "black")
createPlatform(1100, 730, 50, 10, "black")
createPlatform(900, 730, 50, 10, "black")
createPlatform(1200, 730, 100, 10, "black")
    // TODO 3 - Create Collectables

createCollectable("max", 220, 650)
createCollectable("steve", 750, 700)
createCollectable("kennedi", 990, 200)

    
    // TODO 4 - Create Cannons

createCannon("top", 700, 500)
createCannon("left", 690, 0)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
