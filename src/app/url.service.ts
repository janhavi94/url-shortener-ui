import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { UrlModel } from './url.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService implements OnInit {
  urlsChanged = new Subject<UrlModel[]>();
  private url: UrlModel[] = [];

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getUrlList();
  }

  shortenUrl(originalUrl: { originalUrl: string }) {
    const urlPost: UrlModel = new UrlModel(0, originalUrl.originalUrl, '', 0);
    this.http.post(environment.apiUrl + 'shorten/', urlPost).subscribe(
      response => {
        this.getUrlList();
        this.toastr.success('Url Shortened');
      }, err => {
        this.toastr.error(err.error.message);
      }
    );
  }

  getUrlList() {
    this.http.get<{ urlsList: UrlModel[] }>(environment.apiUrl + 'urls/').subscribe(
      response => {
        this.url = response.urlsList;
        this.urlsChanged.next(this.url.slice());
      },
      err=>{
        console.log(err.error.message);
        
      }
    );
  }
}
