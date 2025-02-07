import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { BookServices } from '../../core/services/book_services';

@Component({
  
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  
})
export class AddBookComponent  {

  formSubmitted:boolean = false;
  uploadedImage:any;

  addBookForm:FormGroup = new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(5)]),
    price:new FormControl("",[Validators.required]),
    category:new FormControl("",[Validators.required]),
    author:new FormControl("",[Validators.required,Validators.minLength(3)]),
    numOfPages:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required]),
    image:new FormControl("",[Validators.required])
  });

  constructor(private bookService:BookServices) { }

  ngOnInit(): void { }

  get title(){ return this.addBookForm.get("title"); }
  get description(){ return this.addBookForm.get("description"); }
  get price(){ return this.addBookForm.get("price"); }
  get category(){ return this.addBookForm.get("category"); }
  get author() { return this.addBookForm.get("author"); }
  get numOfPages(){ return this.addBookForm.get("numOfPages"); }
  get quantity(){ return this.addBookForm.get("quantity"); }
  get image(){ return this.addBookForm.get("image"); }

  addImage(event:any){
    this.uploadedImage = event.target.files[0];
  }

  addBook(){
    this.formSubmitted = true;
    if(this.addBookForm.valid){
      const formData = new FormData();
      formData.append('bookImg',this.uploadedImage);
      formData.append('data',JSON.stringify({
        'title': this.title?.value,
        'description': this.description?.value,
        'price': this.price?.value,
        'category': this.category?.value,
        'author': this.author?.value,
        'numOfPages': this.numOfPages?.value,
        'quantity': this.quantity?.value,
      }));

      this.bookService.addBook(formData)

    }
  }

}
