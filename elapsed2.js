/**
 * elapsed.js v2.0
 * dependencies: transition.js YLEP.js
 */

this.elapsed = window.Transitionable.branch(function (elapsedPrototype, parent, decorators) {
    'use strict';

    var Transitionable = decorators.Transitionable;
    var Chainable = decorators.Chainable;

    elapsedPrototype.constructor = function (n) {
        this.elapsed(n);
    };

    elapsedPrototype.elapsed = function () {
        this
        .transition()
        .duration(n)
        .transitionCommit();
    }
    .E(Transitionable)
    .E(Chainable);

    elapsedPrototype.then = function (callback) {
        this.callback(callback)
    }
    .E(Chainable);

    elapsedPrototype.cancel = function () {
        this.transitionCancel();
    }
    .E(Chainable);
});
