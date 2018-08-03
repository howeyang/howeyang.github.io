// Node Garden originally made by https://github.com/pakastin/nodegarden
// Forked and Added new functionality into Web Page!


// Thoughts -

// Create fade in at the top and fade out at the bottom

'use strict';

(function () {
  'use strict';

  // global

  var counterx = 0;
  var countery = 0;

  var rotatey = 0.5;
  var spin = true;

  var snowfall = false;

  function defined(a, b) {
    return a != null ? a : b;
  }

  function Node(garden) {
    this.garden = garden;
    this.reset();
    this.testalphax = 1;
    this.testalphay = 1;
  }

  Node.prototype.reset = function () {

    if (snowfall) {
      // Snow fall Pattern
      var max = 20;
      var min = -100;

      this.x = defined((Math.random() * (max - min) + min) * counterx * 100, counterx * this.garden.width);

      if (this.x <= 0) {
        countery = (Math.random() * (max - 0) + 0) * 100;
      }

      this.y = defined(countery, countery * this.garden.height);
      this.vx = defined( 5, Math.random() * 0.5 - 0.25);
      this.vy = defined(0.7 * rotatey , Math.random() * 0.5 - 0.25);
      this.m = defined(1, Math.random() * 3 + 0.5);

      counterx = counterx + 1;
      countery = countery + 1;

      if (counterx > 50) {
        counterx = 0;
        if (spin) {
          rotatey = rotatey + 1;

        } else if (!spin) {
          rotatey = rotatey - 1;
        }
      }
      if (countery > 30) {
        countery = 0;
      }
      if (rotatey >= 5) {
        spin = false;
      } else if (rotatey <= 0.5) {
        spin = true;
      };
    }
    //End Snow fall pattern

    //Begin Latice Pattern
    else {
      this.x = defined(counterx, counterx * this.garden.width);
      this.y = defined(countery, countery * this.garden.height);
      this.vx = defined(0, Math.random() * 3 + 0.5);
      this.vy = defined(0, Math.random() * 3 + 0.5);
      this.m = defined(1, Math.random() * 3 + 0.5);

      if (countery >= this.garden.height) {
        countery = 0;
        counterx = 0;

      } else if (counterx < this.garden.width) {
        counterx = counterx + 150;
      } else if (counterx >= this.garden.width) {
        countery = countery + 150;
        counterx = 0;
      }
      // thought on how to handle this... 
      // have it draw random shapes at will




    }
    //End Lattice Pattern

    //grid pattern?
    // I think just build a 5 X 5 grid and if the array is empty spawn a node in that array and check
    // when node deletes, uncheck
  };

  Node.prototype.addForce = function (force, direction) {
    this.vx += force * direction.x / this.m;
    this.vy += force * direction.y / this.m;
  };

  Node.prototype.distanceTo = function (node) {
    var x = node.x - this.x;
    var y = node.y - this.y;
    var total = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    return {
      x: x,
      y: y,
      total: total
    };
  };

  Node.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x > this.garden.width + 50 || this.x < -50 || this.y > this.garden.height + 50 || this.y < -50) {
      // if node over screen limits - reset to a init position
      this.reset();
    }
  };

  Node.prototype.squaredDistanceTo = function (node) {
    return (node.x - this.x) * (node.x - this.x) + (node.y - this.y) * (node.y - this.y);
  };

  Node.prototype.collideTo = function (node) {
    //node.vx = node.m * node.vx / (this.m + node.m) + this.m * this.vx / (this.m + node.m);
    //node.vy = node.m * node.vy / (this.m + node.m) + this.m * this.vy / (this.m + node.m);

   // this.reset();
  };

  Node.prototype.render = function () {
    this.garden.ctx.beginPath();
    this.garden.ctx.arc(this.x, this.y, this.getDiameter(), 0, 2 * Math.PI);

    var alphax = 1;
    var alphay = 1;

    // Border Fade detection I should make it additive to the alpha -- FIX
    if (this.x < 200) {
      //this.garden.ctx.fillStyle = "rgba(255, 255, 255, "+ this.x / 300 +")";
      alphax = this.x / 400;
    } 
    if (this.y < 200) {
      //this.garden.ctx.fillStyle = "rgba(255, 255, 255, "+ this.y / 300 +")";
      alphay = this.y / 400;
    } 
    if (this.x + 400 > window.innerWidth) {
      //this.garden.ctx.fillStyle = "rgba(255, 255, 255, "+ (this.x - window.innerWidth) / 200 +")";
      //this is wrong
      alphax = (window.innerWidth - this.x) / 400;
      if (alphax < 0) {
        alphax = 0;
      }
    }
     if ((this.y + 400) > window.innerHeight) {
      //this.garden.ctx.fillStyle = "rgba(255, 255, 255, "+ (this.y - window.innerHeight) / 200 +")";
      alphay = (window.innerHeight - this.y) / 400;
      if (alphay < 0) {
        alphay = 0;
      }
    }
    this.testalphax = alphax + 0.1;
    this.testalphay = alphay + 0.1;

    this.garden.ctx.fillStyle = "rgba(255, 255, 255, " + (alphax * alphay) + ")";

    this.garden.ctx.fill();

  };

  Node.prototype.getDiameter = function () {
    return this.m;
  };

  Node.prototype.getAlphaX = function () {
    return this.testalphax;
  };

  Node.prototype.getAlphaY = function () {
    return this.testalphay;
  };

  var pixelRatio$1 = window.devicePixelRatio;

  function NodeGarden(container) {

    this.nodes = [];
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    //console.log("Width" + this.canvas.width + "Height" + this.canvas.height);

    this.ctx = this.canvas.getContext('2d');
    this.started = false;
    this.nightmode = false;


    window.addEventListener('mouseover', function (e) {
      mouseNode.m = 3;
     // console.log(mouseNode.x + " : " + mouseNode.y);
    });

    window.addEventListener('mouseup', function (e) {
      // I should definitely make a Switch Case for more animations

      /*Do not disable for now 
      if (!snowfall) {
        snowfall = true;
      }else{
        //snowfall = false;
      }
      
      for (var i = 0; i < nodeGarden.nodes.length; i++) {
        nodeGarden.nodes[i].reset({
          x: e.pageX,
          y: e.pageY,
          vx: 0,
          vy: 0
        });
      }
      */
    });


    this.canvas.id = 'nodegarden';


    // Add mouse node
    var mouseNode = new Node(this);
    mouseNode.m = 0;

    mouseNode.update = function () {};
    mouseNode.reset = function () {};
    mouseNode.render = function () {};
    // Move coordinates to unreachable zone
    mouseNode.x = Number.MAX_SAFE_INTEGER;
    mouseNode.y = Number.MAX_SAFE_INTEGER;

    document.addEventListener('mousemove', function (e) {
      mouseNode.x = e.pageX;
      mouseNode.y = e.pageY;
    });

    document.documentElement.addEventListener('mouseleave', function (e) {
      mouseNode.x = Number.MAX_SAFE_INTEGER;
      mouseNode.y = Number.MAX_SAFE_INTEGER;
    });

    this.nodes.unshift(mouseNode);

    this.resize();
    this.container.appendChild(this.canvas);
  }

  NodeGarden.prototype.start = function () {
    if (!this.playing) {
      this.playing = true;
      this.render(true);
    }
  };

  NodeGarden.prototype.stop = function () {
    if (this.playing) {
      this.playing = false;
    }
  };


  NodeGarden.prototype.resize = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.area = this.width * this.height;

    // calculate nodes needed
    if (snowfall) {
      this.nodes.length = Math.sqrt(this.area) / 25 | 0;
    } else {
      this.nodes.length = Math.sqrt(this.area) / 12 | 0;
    }
    //

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;


    if (this.nightMode) {
      this.ctx.fillStyle = '#ffffff';
    } else {
      this.ctx.fillStyle = '#000000';
    }

    // create nodes
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i]) {
        continue;
      }
      this.nodes[i] = new Node(this);
    }
  };

  NodeGarden.prototype.toggleNightMode = function () {

    this.ctx.fillStyle = '#ffffff';
    document.body.classList.add('nightmode');
  };

  NodeGarden.prototype.render = function (start) {
    var _this = this;

    if (!this.playing) {
      return;
    }

    if (start) {
      requestAnimationFrame(function () {
        _this.render(true);
      });
    }

    // clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // update links
    var nodeA, nodeB;
    for (var i = 0; i < this.nodes.length - 1; i++) {
      nodeA = this.nodes[i];
      for (var j = i + 1; j < this.nodes.length; j++) {
        nodeB = this.nodes[j];
        var squaredDistance = nodeA.squaredDistanceTo(nodeB);

        // calculate gravity force
        if (snowfall) {
          var force = 3 * (nodeA.m * nodeB.m) / squaredDistance;
        } else {
          var force = 10 * (nodeA.m * nodeB.m) / squaredDistance;
        }

        var opacity = force * 100;

        if (opacity < 0.025) {
          continue;
        }

        if (squaredDistance <= (nodeA.m / 2 + nodeB.m / 2) * (nodeA.m / 2 + nodeB.m / 2)) {
          // collision: remove smaller or equal - never both of them
          if (nodeA.m <= nodeB.m) {
            //nodeA.collideTo(nodeB);
          } else {
            //nodeB.collideTo(nodeA);
          }
          continue;
        }

        var distance = nodeA.distanceTo(nodeB);

        // calculate gravity direction
        var direction = {
          x: distance.x / distance.total,
          y: distance.y / distance.total
        };

        // draw gravity lines
        this.ctx.beginPath();

        //Set opacity

        // MOST RECENT ONE this.ctx.strokeStyle = 'rgba(66,220,163,' + (opacity < 1 ? opacity : 1) + ')';
        if (!snowfall) {

          this.ctx.strokeStyle = 'rgba(66,220,163,' + (opacity < 1 ? opacity : 1) + ')';
        } else if (snowfall) {
          this.ctx.strokeStyle = 'rgba(66,220,163,' + ((nodeA.getAlphaX() * nodeA.getAlphaY()) * 0.5 * nodeB.getAlphaX() * nodeB.getAlphaY()) + ')';
        }

        this.ctx.moveTo(nodeA.x, nodeA.y);
        this.ctx.lineTo(nodeB.x, nodeB.y);
        this.ctx.stroke();

        // nodeA.addForce(force, direction);
        // nodeB.addForce(-force, direction);
      }
    }
    // render and update nodes
    for (i = 0; i < this.nodes.length; i++) {
      this.nodes[i].render();
      this.nodes[i].update();
      //this.ctx = this.canvas.getContext('2d');
      //this.ctx.font = "20px Georgia";
      //this.ctx.fillText("Middle Of Canvas", (this.canvas.width / 2), (this.canvas.height/ 2) - 50);
    }
  };

  var pixelRatio = window.devicePixelRatio;
  var $container = document.getElementById('container');
  var $moon = document.getElementsByClassName('moon')[0];

  var nodeGarden = new NodeGarden($container);


  // start simulation
  nodeGarden.start();

  // trigger nightMode automatically
  var date = new Date();

  var resetNode = 0;



/* dont reset for now
  $container.addEventListener('click', function (e) {

  
    resetNode++;
    if (resetNode > nodeGarden.nodes.length - 1) {
      resetNode = 1;
    }
    nodeGarden.nodes[resetNode].reset({
      x: e.pageX,
      y: e.pageY,
      vx: 0,
      vy: 0
    });

  });
*/
  function startsnowfall(){
    snowfall = true;
    
      for (var i = 0; i < nodeGarden.nodes.length; i++) {

        nodeGarden.nodes[i].reset({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0
        });
      }
  }

  setTimeout(startsnowfall, 2000);



  window.addEventListener('resize', function () {
    nodeGarden.resize();
  });
})();