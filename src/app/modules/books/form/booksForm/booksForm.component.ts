import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { BooksService } from '../../service/Books.service';

@Component({
  selector: 'app-booksForm',
  templateUrl: './booksForm.component.html',
  styleUrls: ['./booksForm.component.scss']
})
export class BooksFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private booksService: BooksService,
    private location: Location
  ) {
    // this.form
  }

  ngOnInit() {
  }

  onSubmit() {
    this.booksService.save(this.form.value).subscribe({
      next: (data) => this.onSuccess(),
      error: () => {
        this.onError();
      }
    });

  }

  private onSuccess() {
    console.log('Sucesso');
    this.onCancel();
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    console.log("Error");
  }

}
