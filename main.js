const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./ironman.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    ctx.drawImage(ASSET_MANAGER.getAsset("./ironman.png"), 0, 0);
	//gameEngine.addEntity(new IronMan());

	gameEngine.init(ctx);

	gameEngine.start();
});
