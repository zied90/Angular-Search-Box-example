import {Component, ElementRef} from '@angular/core';
import {VideoDetail} from './youtube/video-details.model';
import {YoutubeSearchService} from './services/youtube-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: VideoDetail[];
  loading: boolean;
  message = '';
  nbrevedeo = 10;

  constructor(private youtube: YoutubeSearchService) {
  }

  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }


}
