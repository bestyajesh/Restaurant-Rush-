//Creating the Variables and Game States
var bowlIMG, plate1IMG, plate2IMG, hotdogBunsIMG, burgerBunsIMG, sausagesIMG, meatpattieIMG, tomatoIMG, lettuceIMG, cheeseImg, plainNoodlesIMG, friesIMG;
var bowl, plate1, plate2, hotdogBuns, burgerBuns, sausages, meatpattie, tomato, lettuce, cheese, plainNoodles,fries;
var backgroundImg,b1;


var ingredientsGroup, foodGroup;

gameState = "waiting";

var stockBoard,cust,order;


  //Creating a Stock
  var stock = {
    hotdogBunsCount : 10,
    burgerBunsCount : 10,
    sausagesCount : 10,
    lettuceCount : 10,
    cheeseCount : 10,
    meatpattieCount : 10,
    tomatoCount : 10,
    noodlesCount : 10,
    friesCount : 10,
  
  };
  
  
   //Collecting Items to Cook
   var collectedItems = {
    hotdogBunsCount : 0,
    burgerBunsCount : 0,
    sausagesCount : 0,
    lettuceCount : 0,
    cheeseCount : 0,
    meatpattieCount : 0,
    tomatoCount : 0,
    noodlesCount : 0,
    friesCount : 0,
  
  };
  
  
  
  const friesItems = {
    hotdogBunsCount : 0,
    burgerBunsCount : 0,
    sausagesCount : 0,
    lettuceCount : 0,
    cheeseCount : 0,
    meatpattieCount : 0,
    tomatoCount : 0,
    noodlesCount : 0,
    friesCount : 1,
  
  };
  
  const hotDogItems ={
    hotdogBunsCount : 1,
    burgerBunsCount : 0,
    sausagesCount : 1,
    lettuceCount : 1,
    cheeseCount : 0,
    meatpattieCount : 0,
    tomatoCount : 1,
    noodlesCount : 0,
    friesCount : 0,
  
  };
  
  const noodlesItems ={
    hotdogBunsCount : 0,
    burgerBunsCount : 0,
    sausagesCount : 0,
    lettuceCount : 1,
    cheeseCount : 0,
    meatpattieCount : 0,
    tomatoCount : 1,
    noodlesCount : 1,
    friesCount : 0
  
  };
  
  const burgerItems = {
    hotdogBunsCount : 0,
    burgerBunsCount : 1,
    sausagesCount : 0,
    lettuceCount : 1,
    cheeseCount : 1,
    meatpattieCount : 1,
    tomatoCount : 1,
    noodlesCount : 0,
    friesCount : 0
   };


function preload(){
  //getScene();
  bgImg = loadImage("images/shop.jpg");

  //Ingredient Images
  bowlIMG = loadImage("images/bowl.png");
  plate1IMG = loadImage("images/plate.png");
  plate2IMG = loadImage("images/plate.png");
  hotdogBunsIMG = loadImage("images/hotdog_buns.png");
  burgerBunsIMG = loadImage("images/burger_buns.png");
  sausagesIMG = loadImage("images/sausages.png");
  meatpattieIMG = loadImage("images/meatpattie.png");
  tomatoIMG = loadImage("images/tomato.png");
  lettuceIMG = loadImage("images/lettuce.png");
  cheeseImg = loadImage("images/cheese.png");
  plainNoodlesIMG = loadImage("images/plain_noodles.png");
  friesIMG = loadImage("images/fries.png");
  
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  foodGroup = new Group();
  ingredientsGroup = new Group();
  

  //Creating the Sprites for Ingredients
  bowl = createSprite(width/2-700,height/2+300);
  bowl.addImage(bowlIMG);
  bowl.scale = 1.7;
  plate1 = createSprite(width/2+600,height/2+325);
  plate1.addImage(plate1IMG);
  plate1.scale = 1;
  plate2 = createSprite(width/2+300,height/2+385);
  plate2.addImage(plate2IMG);
  plate2.scale = 1.3;
  tomato = createSprite(width/2+400,height/2+380);
  tomato.addImage(tomatoIMG);
  tomato.scale = 0.8;
  sausages = createSprite(width/2+550,height/2+325);
  sausages.addImage(sausagesIMG);
  sausages.scale = 0.5;
  cheese = createSprite(width/2+230,height/2+380);
  cheese.addImage(cheeseImg);
  cheese.scale = 0.4;
  lettuce = createSprite(width/2+310,height/2+380);
  lettuce.addImage(lettuceIMG);
  lettuce.scale = 1;
  meatpattie = createSprite(width/2+650,height/2+328);
  meatpattie.addImage(meatpattieIMG);
  meatpattie.scale = 0.3;
  burgerBuns = createSprite(width/2-500,height/2+350);
  burgerBuns.addImage(burgerBunsIMG);
  burgerBuns.scale = 0.7;
  hotdogBuns = createSprite(width/2-700,height/2+400);
  hotdogBuns.addImage(hotdogBunsIMG);
  hotdogBuns.scale = 0.7;
  plainNoodles = createSprite(width/2-850,height/2+300);
  plainNoodles.addImage(plainNoodlesIMG);
  fries = createSprite(width/2-300,height/2+330);
  fries.addImage(friesIMG);

  
  //Adding the Ingredients into a Group
  ingredientsGroup.add(tomato);
  ingredientsGroup.add(sausages);
  ingredientsGroup.add(cheese);
  ingredientsGroup.add(lettuce);
  ingredientsGroup.add(meatpattie);
  ingredientsGroup.add(burgerBuns);
  ingredientsGroup.add(hotdogBuns);
  ingredientsGroup.add(bowl);
  ingredientsGroup.add(plainNoodles);
  
  
  cust = new Customer();
 
  backgroundImg = bgImg;

  var rand1 = Math.round(random(1,4));
  switch(rand1){
    case 1: order = "fries";break;
    case 2: order = "noodles";break;
    case 3: order = "burger";break;
    case 4: order = "hotdog";break;
    default : break;
  }

}


function draw() {
  background(backgroundImg);
  drawSprites();
  if(gameState === "waiting") {
    ingredientsGroup.setVisibleEach(true);

    cust.display();
 
   
    window.prompt("The order is  " + order);
   
    gameState = "choose"
    console.log("choose Items , and Press space when over");
    
  }
   
  else if(gameState === "choose"){ 
    
    chooseItems();
    if(keyDown("space"))gameState = "cooking";

  }

  else if(gameState === "cooking"){
    if(order === "fries")makeFries();
    else if (order === "hotdog")makeHotdog();
    else if (order === "noodles")makeNoodles();
    else if (order === "burger")makeBurger();
    //else console.log("ordered something wrong");
}
  
  displayStockBoard();

}



// the stock of the ingredients
function displayStockBoard(){

  stockBoard = createSprite(width -230,340,140,150);
  stockBoard.shapeColor = "white";
  textSize(12);
  text("Stock Report",width - 250,300)
  text("Hot Dogs Buns -" + stock.hotdogBunsCount, width-270,310);
  text("Burger Buns -" + stock.burgerBunsCount, width-270,320);
  text("Sausages -" + stock.sausagesCount, width-270,330);
  text("Lettuce -" + stock.lettuceCount, width-270,340);
  text("Cheese -" + stock.cheeseCount, width-270,350);
  text("Meat Pattie -" + stock.meatpattieCount, width-270,360);
  text("Tomato -" + stock.tomatoCount, width-270,370);
  text("Noodle -" + stock.noodlesCount, width-270,380);
  text("Fries -" + stock.friesCount, width-270,390);
}



function makeNoodles(){
    if(collectedItems === noodlesItems) {
        console.log("Delivered the order")}
    else console.log("The cooking Failed");

}

function makeHotdog(){
    if(collectedItems === hotDogItems) {
       console.log("Delivered the order")}
    else console.log("The cooking Failed");

}

function makeFries(){
     if(collectedItems === friesItems) {
        console.log("Delivered the order")}
     else console.log("The cooking Failed");
}

function makeBurger() {
      if(collectedItems === burgerItems) {
         console.log("Delivered the order")}
      else console.log("The cooking Failed");
}

function chooseItems(){

  if(mousePressedOver(tomato)||touches.length > 0) {
    if(stock.tomatoCount > 0){stock.tomatoCount -= 1;collectedItems.tomatoCount +=1}
    else console.log("not enough stock");
    touches=[];
  }

  if(mousePressedOver(sausages)||touches.length > 0) {
    if(stock.sausagesCount > 0){stock.sausagesCount -= 1;collectedItems.sausagesCount +=1}
    else console.log("not enough stock");
    touches=[];
  }

  if(mousePressedOver(cheese)||touches.length > 0) {
    if(stock.cheeseCount > 0){stock.cheeseCount -= 1;collectedItems.cheeseCount +=1}
    else console.log("not enough stock");
    touches = [];
  }

  if(mousePressedOver(lettuce)||touches.length > 0) {
    if(stock.lettuceCount > 0){stock.lettuceCount -= 1; collectedItems.lettuceCount +=1}
    else console.log("not enough stock");
    touches = [];
  }

  if(mousePressedOver(meatpattie)||touches.length > 0) {
    if(stock.meatpattieCount > 0){stock.meatpattieCount -= 1; collectedItems.meatpattieCount +=1;}
    else console.log("not enough stock");
    touches = [];
  }

  if(mousePressedOver(burgerBuns)||touches.length > 0) {
    if(stock.burgerBunsCount > 0){stock.burgerBunsCount -= 1; collectedItems.burgerBunsCount +=1}
    else console.log("not enough stock");
    touches = [];
  }

  if(mousePressedOver(hotdogBuns)||touches.length > 0) {
    if(stock.hotdogBunsCount > 0){stock.hotdogBunsCount -= 1; collectedItems.hotdogBunsCount +=1}
    else console.log("not enough stock");
    touches = [];
  }
  
  if(mousePressedOver(plainNoodles)||touches.length > 0) {
    if(stock.noodlesCount > 0){stock.noodlesCount -= 1; collectedItems.noodlesCount +=1}
    else console.log("not enough stock");
    touches = [];
  }

  if(mousePressedOver(fries)||touches.length > 0) {
    if(stock.friesCount > 0){stock.friesCount -= 1; collectedItems.friesCount +=1}
    else console.log("not enough stock");
    touches = [];
  }

 /* if(mousePressedOver(bowl)) {
    if(stock.bowlCount > 0){stock.bowlCount -= 1; }
    else console.log("not enough stock");
  }

  if(mousePressedOver(plainNoodles)) {
    if(stock.plainNoodlesCount > 0)stock.plainNoodlesCount -= 1;
    else console.log("not enough stock");
  }

 */ 

}