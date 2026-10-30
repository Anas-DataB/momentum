function angularAcceleration(l, theta) {
    return -(9.8 / l) * Math.sin(theta);
}

function updateBob(b, pivot) {
    b.x = pivot.x + pivot.l * Math.sin(pivot.theta);
    b.y = pivot.y + pivot.l * Math.cos(pivot.theta);
}

function toRadians(degree) {
    return degree * Math.PI / 180;
}

function createBob(x, y, r) {
    return {
        x,
        y,
        r
    };
}

function createPivot(x, y, l, theta, angularVelocity = 0) {
    return {
        x,
        y,
        l,
        theta,
        angularVelocity,
        angularAcceleration: 0
    };
}

function updatePivot(p) {
    const dt = 1 / 60;
    const damping = 0.998;

    // Calculate acceleration from gravity
    p.angularAcceleration =
        angularAcceleration(p.l, p.theta);

    // Acceleration changes angular velocity
    p.angularVelocity +=
        p.angularAcceleration * dt * 20;

    // Remove a little energy every frame
    p.angularVelocity *= damping;
    // if (pivot.x == Math.floor(bob.x)) pivot.angularVelocity *= 0.9;


    // Angular velocity changes angle
    p.theta +=
        p.angularVelocity * dt;
}

module.exports = {
    angularAcceleration,
    updateBob,
    toRadians,
    createBob,
    createPivot,
    updatePivot,
};