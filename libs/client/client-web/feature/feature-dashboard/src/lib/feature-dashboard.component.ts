import { Component, OnInit } from '@angular/core';
import { AppService } from '@exe/client/shared/data-access';

@Component({
  selector: 'exe-feature-dashboard',
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent implements OnInit {

  constructor(private api: AppService) {}

  ngOnInit(): void {
    this.api.userControllerGetUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
