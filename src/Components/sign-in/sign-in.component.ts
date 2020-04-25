import { Component, OnInit } from '@angular/core';
import { TestgameService } from '../../Services/testgame.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public user1: string;
  public user2: string;
  public key: string;
  public confirmKey: string;
  public OPT: string;

  constructor(private tg: TestgameService) { }

  ngOnInit() {
  }
  
}
