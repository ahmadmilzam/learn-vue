(() => {
  NodeList.prototype.forEach = Array.prototype.forEach;
  window.myAPP = new Vue({
    el: '#js-myApp',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      playerMaxDmg: 6,
      playerMinDmg: 2,
      monsterMaxDmg: 12,
      monsterMinDmg: 4,
      specialAttackAttempt: 2,
      healAttempt: 1,
      logs: [],
    },
    methods: {
      startGame() {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.specialAttackAttempt = 2;
        this.healAttempt = 1;
        const btnActions = this.$el.querySelectorAll('.js-action');
        btnActions.forEach((btn) => {
          console.log(btn);
          const disabled = btn.disabled;
          console.log('Disabled? ', disabled);

          if (disabled) {
            btn.disabled = false;
            console.log('Enabled!');
          }
        });
        this.logs = [];
        this.logs.unshift({
          type: 'start',
          text: 'New Game Started',
        });

        // for (let i = 0; i < btnActions.length; i += 1) {
        //   console.log(i);
        //   if (btnActions[i].disabled) {
        //     btnActions[i].disabled = false;
        //   }
        // }
      },
      onActionClick(evt) {
        if (evt.target !== evt.currentTarget) {
          evt.preventDefault();
          const action = evt.target.dataset.action;

          this[action](evt);
        }
        evt.stopPropagation();
      },
      attack() {
        const playerDmg = this.calculateDamage(this.playerMinDmg, this.playerMaxDmg);
        this.monsterHealth -= playerDmg;
        this.logs.unshift({
          type: 'player-attack',
          text: `You attack monster for ${playerDmg}hp!`,
        });
        if (this.checkWinner()) {
          return;
        }
        this.monsterAttack();
      },
      specialAttack(evt) {
        const target = evt.target;

        if (target.disabled || this.specialAttackAttempt <= 0) {
          this.logs.unshift({
            type: 'special-attack',
            text: 'Cannot use special attack',
          });
          return;
        }

        const playerDmg = this.calculateDamage(this.playerMinDmg + 10, this.playerMaxDmg + 30);

        this.monsterHealth -= playerDmg;
        this.specialAttackAttempt -= 1;

        this.logs.unshift({
          type: 'special-attack',
          text: `Special attack ${playerDmg}hp!, ${this.specialAttackAttempt} remaining`,
        });

        if (this.checkWinner()) {
          return;
        }

        if (this.specialAttackAttempt <= 0) {
          target.disabled = true;
        }

        this.monsterAttack();
      },
      monsterAttack() {
        const monsterDmg = this.calculateDamage(this.monsterMinDmg, this.monsterMaxDmg);
        this.playerHealth -= monsterDmg;
        this.logs.unshift({
          type: 'monster-attack',
          text: `Monster attack you for ${monsterDmg}hp!`,
        });
        this.checkWinner();
      },
      heal(evt) {
        const target = evt.target;
        if (target.disabled || this.healAttempt <= 0) {
          this.logs.unshift({
            type: 'heal',
            text: 'You can\'t heal anymore',
          });
          return;
        }

        if (this.playerHealth === 100) {
          this.logs.unshift({
            type: 'heal',
            text: 'You still have full health',
          });
          return;
        }

        this.playerHealth += this.playerHealth;

        if (this.playerHealth >= 50) {
          this.playerHealth = 100;
          this.logs.unshift({
            type: 'heal',
            text: 'You heal full health',
          });
        } else {
          this.playerHealth += this.playerHealth;
          this.logs.unshift({
            type: 'heal',
            text: `You heal ${this.playerHealth}`,
          });
        }

        this.healAttempt -= 1;

        if (this.healAttempt <= 0) {
          target.disabled = true;
        }
      },
      giveUp() {
        this.playerHealth = 0;
        this.gameIsRunning = false;

        this.logs.unshift({
          type: 'give-up',
          text: 'Sorry to see you gave up :\'(',
        });
      },
      calculateDamage(min, max) {
        return Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWinner() {
        if (this.monsterHealth <= 0) {
          if (confirm('You won! Start a new game?')) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        } else if (this.playerHealth <= 0) {
          if (confirm('You Lost :\'( Start a new game?')) {
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        }
        return false;
      },
    },
  });
})();
