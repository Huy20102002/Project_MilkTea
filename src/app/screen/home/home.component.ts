import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    { path: 'https://intphcm.com/data/upload/poster-tra-sua-dac-sac.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },

  ]
  constructor() { }
  ngOnInit(): void {
  }

}
