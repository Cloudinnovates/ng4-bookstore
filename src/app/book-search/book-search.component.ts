import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent implements OnInit {

  disabled: boolean = true;
  searchControl: FormControl;

  constructor(private router: Router, private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
   this.searchControl = new FormControl();

   this.searchControl.valueChanges.subscribe((value: string) => {
     this.searchChanged(value);
     this.changeDetectionRef.markForCheck();
   });
 }

  searchBooks(value: string){
    this.router.navigate(['/books'], {queryParams: {search: value }});
  }

  searchChanged(value: string){
  //update disabled property depends on value
  if (value){
    console.log(value);
    this.disabled = false;
  } else {
    this.disabled = true;
  }
}

}
