let type = "WebGL"
if (!PIXI.utils.isWebGLSupported())
{
  type = "canvas";
}
PIXI.utils.sayHello(type);

let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite,
  TextureCache = PIXI.utils.TextureCache,
  Rectangle = PIXI.Rectangle,
  renderer = requestAnimationFrame,
  stage = PIXI.stage;

let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0x061639,
  view: document.getElementById('miniMap'),
});
app.renderer.view.style.position = "relative";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(768, 768);
//document.body.appendChild(app.view);

loader
  .add(["./image/bigMap.png"])
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resources) {
  console.log("loading: " + resources.url);
  console.log("progress: " + loader.progress + "%");
}

function setup() {
  console.log("all files loaded");
  let texture = TextureCache["./image/bigMap.png"];
  let rectangle = new Rectangle(96, 64, 32, 32);
  texture.frame = rectangle;
  let rocket = new Sprite(texture);
  rocket.scale.x = 2;
  rocket.scale.y = 2;
  rocket.position.set(64, 64);
  rocket.anchor.set(0, 0);
  rocket.rotation = 0;
  app.stage.addChild(rocket);
  // let cat = new Sprite(resources.catImage.texture);
  // let dog = new Sprite(resources.dogImage.texture);
  // let monkey = new Sprite(resources.monkeyImage.texture);
  // let pig = new Sprite(resources.pigImage.texture);
  // cat.position.set(64, 64);
  // cat.width = 64;
  // cat.height = 64;
  // cat.anchor.set(0.5, 0.5);
  // cat.rotation = 0;
  // dog.position.set(640, 64);
  // dog.width = 64;
  // dog.height = 64;
  // dog.anchor.set(0.5, 0.5);
  // dog.rotation = 0;
  // monkey.position.set(64, 640);
  // monkey.width = 64;
  // monkey.height = 64;
  // monkey.anchor.set(0.5, 0.5);
  // monkey.rotation = 0;
  // pig.position.set(640, 640);
  // pig.width = 64;
  // pig.height = 64;
  // pig.anchor.set(0.5, 0.5);
  // pig.rotation = 0;
  // app.stage.addChild(cat, dog, monkey, pig);
}