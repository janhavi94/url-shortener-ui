import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url-entry',
  templateUrl: './url-entry.component.html',
  styleUrls: ['./url-entry.component.css']
})
export class UrlEntryComponent implements OnInit {

  constructor(private urlService: UrlService,) { }

  ngOnInit(): void {
  }

  shorten(form: NgForm) {
    if (form.valid) {
      this.urlService.shortenUrl(form.value)
      form.resetForm();
    }

  }


}
