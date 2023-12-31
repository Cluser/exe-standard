import { Component, Input } from '@angular/core';

@Component({
  selector: 'exe-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
    @Input() isLoading: boolean | null = true;
}

