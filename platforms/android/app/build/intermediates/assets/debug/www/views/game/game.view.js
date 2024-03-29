'use strict';

angular.module('flipIt.views.game', ['flipIt.components.game'])
.component('gameView', {
  bindings: {
  	user: '<'
  },
  templateUrl: 'views/game/game.view.html',
  controller: GameViewController
})

GameViewController.$inject = [];

function GameViewController() {
	var ctrl = this;

	ctrl.$onInit = function () {
		console.log(ctrl.user);
	}
};