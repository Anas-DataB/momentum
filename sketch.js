const r = require("raylib");
const g = require("./geometry");

const WIDTH = 800;
const HEIGHT = 600;
const FPS = 60;

let bob = g.createBob(0, 0, 30);

let pivot = g.createPivot(
    300,
    200,
    200,
    g.toRadians(-90),
    0
);


function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.InitWindow(
        WIDTH,
        HEIGHT,
        "Momentum"
    );

    r.SetTargetFPS(FPS);
}


function update() {
    g.updatePivot(pivot);
    g.updateBob(bob, pivot);
}


function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);

    // Pivot
    r.DrawCircle(
        pivot.x,
        pivot.y,
        8,
        r.BLACK
    );

    // String
    r.DrawLineEx(
        {
            x: pivot.x,
            y: pivot.y
        },
        {
            x: bob.x,
            y: bob.y
        },
        20,
        r.BLACK,
    );

    // Bob
    r.DrawCircle(
        bob.x,
        bob.y,
        bob.r,
        r.BLUE
    );

    r.EndDrawing();
}


function teardown() {
    r.CloseWindow();
}


module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};