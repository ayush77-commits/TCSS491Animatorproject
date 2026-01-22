class IronMan {
    constructor() {
    };

    update() {
    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./ironman.png"), 0, 0);
    };
}
