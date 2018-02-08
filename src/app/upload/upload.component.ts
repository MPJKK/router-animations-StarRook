import { Component, OnInit } from '@angular/core';
import {Media} from '../models/media';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  media = new Media('');
  formData = new FormData();

  constructor(private mediaService: MediaService, private router: Router) { }

  setFile(evt) {
    console.log(evt.target.files['0']);
    const file: File = evt.target.files['0'];
    this.formData.append('file', file);
  }

  ngOnInit() {
  }

  upload() {
    this.formData.append('title', this.media.title);
    if (this.media.description != null) {
      this.formData.append('description', this.media.description);
    }

    this.mediaService.uploadData(localStorage.getItem('token'), this.formData).subscribe(response => {
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

}
