import { Component, OnDestroy, OnInit } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UrlModel } from '../url.model';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-shorturl-list',
  templateUrl: './shorturl-list.component.html',
  styleUrls: ['./shorturl-list.component.css']
})
export class ShorturlListComponent implements OnInit, OnDestroy {
  urls: UrlModel[] = [];
  private urlChangSub: Subscription = new Subscription;
  faRedo = faRedo;
  constructor(private urlService: UrlService, private toastr: ToastrService) { }
  ngOnInit(): void {

    this.getUrlList();
    this.urlService.urlsChanged.subscribe(
      (data: UrlModel[]) => {
        this.urls = data;
        this.toastr.success('list updated');

      },
      err => {
        this.toastr.error('error fetching list');
      }
    );
  }

  getUrlList() {
    this.urlService.getUrlList();
  }

  ngOnDestroy(): void {
    this.urlChangSub.unsubscribe();
  }

}
