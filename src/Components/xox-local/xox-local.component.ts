import { Component, OnInit } from '@angular/core';
import { TestgameService } from '../../Services/testgame.service';
@Component({
  selector: 'app-xox-local',
  templateUrl: './xox-local.component.html',
  styleUrls: ['./xox-local.component.scss']
})
export class XoxLocalComponent implements OnInit {
  constructor(private tg: TestgameService) { }

  public eventValues: Array<string> = [];
  public isWinner: boolean;
  public winnerName: string;
  public counter = 0;
  public valueBTN: string;
  public move = false;
  public prev = null;
  public buttons = {
    zero: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false
  };
  public playGame = false;
  public user = '';
  public user2 = '';
  public turn = '';
  public loading = false;
  initialValues() {
    for (let i = 0; i < 9; i++) {
      this.eventValues[i] = ' ';
    }
    this.counter = 0;
    // tslint:disable-next-line: forin
    for (const button in this.buttons) {
      this.buttons[button] = false;
    }
  }
  ngOnInit() {
    this.initialValues();
  }
  play(user) {
    this.loading = true;
    this.tg.getData().subscribe(data => {
      if (data && (data['user1'] === user.value || data['user2'] === user.value)) {
        this.loading = false;
        this.playGame = true;
        if (user.value === data['user1']) {
          this.user = user.value;
          this.user2 = data['user2']
        } else {
          this.user = user.value;
          this.user2 = data['user1']
        }
        this.eventValues = data['eventValues'];
        this.counter = data['counter'];
        this.turn = data['turn'];
      } else {
        this.loading = false;
        alert('May be wrong KEY or check your Internet connection');
      }
    });
  }
  changeEleValuesOld(btnValue) {
    this.tg.getData().subscribe(data => {
      if (data) {
        this.eventValues = data['eventValues']
        if (this.checkWinner(this.eventValues)) {
          setTimeout(() => {
            alert(`Hurray !! ${this.turn} Won !!`);
            console.log('Winner');
            this.reset();
          }, 300);
        }
      }
    });
    // tslint:disable-next-line: radix
    if (this.user === this.turn) {
      const id = parseInt(btnValue);
      this.valueBTN = this.counter % 2 === 0 ? 'X' : 'O';
      if (this.counter < 6) {
        if (this.counter < 4 && this.eventValues[id] === ' ') {
          this.eventValues[id] = this.valueBTN;
          this.counter++;
          this.tg.setData(this.user2, this.eventValues, this.counter);
        } else if (this.counter > 3) {
          {
            if (this.eventValues[id] === ' ') {
              this.eventValues[id] = this.valueBTN;
              this.counter++;
              this.tg.setData(this.user2, this.eventValues, this.counter);
              if (this.checkWinner(this.eventValues)) {
                setTimeout(() => {
                  alert(`Hurray !! ${this.turn} Won !!`);
                  this.reset();
                }, 300);
              }
            }
          }
        }
      } else if (this.counter > 5) {
        if (this.eventValues[id] !== ' ') {
          this.move = true;
          this.prev = id;
        }
        if (this.move) {
          switch (id) {
            case 0: {
              if (this.prev === 1 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 3 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 1: {
              if (this.prev === 0 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 4 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 2 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 2: {
              if (this.prev === 1 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 5 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 3: {
              if (this.prev === 0 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 4 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 6 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 4: {
              if (this.prev === 1 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 3 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 5 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 7 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 5: {
              if (this.prev === 2 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 4 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 8 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 6: {
              if (this.prev === 3 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 7 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 7: {
              if (this.prev === 6 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 4 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 8 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;
            case 8: {
              if (this.prev === 7 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              } else if (this.prev === 5 && this.eventValues[id] === ' ') {
                this.eventValues[id] = this.eventValues[this.prev];
                this.eventValues[this.prev] = ' ';
                this.counter++;
                this.tg.setData(this.user2, this.eventValues, this.counter);
              }
            } break;

          }
          if (this.checkWinner(this.eventValues)) {
            setTimeout(() => {
              alert(`Hurray !! ${this.turn} Won !!`);
              console.log('Winner');
              this.reset();
            }, 300);
          }
        }
      }
    }
  }
  reset() {
    this.initialValues();
    this.tg.setData(this.turn, this.eventValues, this.counter);
  }
  public checkWinner(event) {
    if (event[0] === 'X' && event[1] === 'X' && event[2] === 'X') {
      this.buttons.zero = true;
      this.buttons.one = true;
      this.buttons.two = true;
      return true;
    } else if (event[3] === 'X' && event[4] === 'X' && event[5] === 'X') {
      this.buttons.three = true;
      this.buttons.four = true;
      this.buttons.five = true;
      return true;
    } else if (event[6] === 'X' && event[7] === 'X' && event[8] === 'X') {
      this.buttons.six = true;
      this.buttons.seven = true;
      this.buttons.eight = true;
      return true;
    } else if (event[0] === 'X' && event[3] === 'X' && event[6] === 'X') {
      this.buttons.zero = true;
      this.buttons.three = true;
      this.buttons.six = true;
      return true;
    } else if (event[1] === 'X' && event[4] === 'X' && event[7] === 'X') {
      this.buttons.four = true;
      this.buttons.one = true;
      this.buttons.seven = true;
      return true;
    } else if (event[2] === 'X' && event[5] === 'X' && event[8] === 'X') {
      this.buttons.two = true;
      this.buttons.five = true;
      this.buttons.eight = true;
      return true;
    } else if (event[0] === 'X' && event[4] === 'X' && event[8] === 'X') {
      this.buttons.zero = true;
      this.buttons.four = true;
      this.buttons.eight = true;
      return true;
    } else if (event[2] === 'X' && event[4] === 'X' && event[6] === 'X') {
      this.buttons.four = true;
      this.buttons.six = true;
      this.buttons.two = true;
      return true;
    } else if (event[0] === 'O' && event[1] === 'O' && event[2] === 'O') {
      this.buttons.zero = true;
      this.buttons.one = true;
      this.buttons.two = true;
      return true;
    } else if (event[3] === 'O' && event[4] === 'O' && event[5] === 'O') {
      this.buttons.three = true;
      this.buttons.four = true;
      this.buttons.five = true;
      return true;
    } else if (event[6] === 'O' && event[7] === 'O' && event[8] === 'O') {
      this.buttons.six = true;
      this.buttons.seven = true;
      this.buttons.eight = true;
      return true;
    } else if (event[0] === 'O' && event[3] === 'O' && event[6] === 'O') {
      this.buttons.zero = true;
      this.buttons.three = true;
      this.buttons.six = true;
      return true;
    } else if (event[1] === 'O' && event[4] === 'O' && event[7] === 'O') {
      this.buttons.four = true;
      this.buttons.one = true;
      this.buttons.seven = true;
      return true;
    } else if (event[2] === 'O' && event[5] === 'O' && event[8] === 'O') {
      this.buttons.two = true;
      this.buttons.five = true;
      this.buttons.eight = true;
      return true;
    } else if (event[0] === 'O' && event[4] === 'O' && event[8] === 'O') {
      this.buttons.zero = true;
      this.buttons.four = true;
      this.buttons.eight = true;
      return true;
    } else if (event[2] === 'O' && event[4] === 'O' && event[6] === 'O') {
      this.buttons.two = true;
      this.buttons.four = true;
      this.buttons.six = true;
      return true;
    }
  }

}
