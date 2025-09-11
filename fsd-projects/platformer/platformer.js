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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(0, 610, 100, 130,"black")
createPlatform(350, 550, 100, 190, "black")
createPlatform(700, 120, 380, 20, "black")
createPlatform(700, 480, 400, 150, "black")
createPlatform(360, 610, 100, 130, "black")
createPlatform(1100, 550, 100, 80, "black")
createPlatform(1150, 610, 100, 20, "black")
createPlatform(1300, 380, 100, 360, "black")
createPlatform(100, 120, 300, 10, "black")
createPlatform(100, 0, 10, 120, "black")
createPlatform(450, 170, 100, 10, "black")
createPlatform(1080, 270, 90, 10, "black", 1080, 1150, .5)
createPlatform(700, 480, 30, 260, "black")
createPlatform(650, 250, 400, 10, "black")
createPlatform(700, 250, 380, 80, "black")
createPlatform(1050, 120, 30, 230, "black")
createPlatform(300, 40, 5, 80, "black", 40, 300, .05)
createPlatform(740, 730, 50, 10, "black")
createPlatform(840, 730, 50, 10, "black")
createPlatform(1000, 730, 50, 10, "black")
createPlatform(1100, 730, 50, 10, "black")
createPlatform(900, 730, 50, 10, "black")
createPlatform(1200, 730, 100, 10, "black")
createPlatform(150, 50, 5, 70, "white")
createPlatform(155, 50, 50, 30, "maroon")
createPlatform(1150, 160, 100, 10, "black")



    // TODO 3 - Create Collectables

createCollectable("coin", 220, 400, .3, 1)
createCollectable("coin", 750, 670, .3, 1)
createCollectable("coin", 990, 190, .3, 1)

    
    // TODO 4 - Create Cannons

createCannon("top", 700, 600 )
createCannon("left", 690, 200)
createCannon("right", 130, 900)
createCannon("left", 450, 1000)
createCannon("left", 500, 1000)
createCannon("left", 550, 1000)
createCannon("left", 300, 1300)
createCannon("left", 131, 1500)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
