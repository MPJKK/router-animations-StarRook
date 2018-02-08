import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import { ThumbnailPipe } from '../pipes/thumbnail.pipe';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(public mediaService: MediaService, public thumbnailPipe: ThumbnailPipe) { }

  ngOnInit() {
    this.mediaService.getNew().subscribe(data => {
      this.mediaArray = data;
    });
  }

}
