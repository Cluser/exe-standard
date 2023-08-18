import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '@exe/data-access'

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'exe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client-web';

  constructor(private api: AppService) {}

  ngOnInit(): void {
    this.api.userControllerGetUsers().subscribe((users) => {
      console.log(users);
    })
  }
}
