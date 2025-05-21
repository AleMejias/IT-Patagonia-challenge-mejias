import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, output, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Transactions } from '../../models/transaction.model';

@Component({
  selector: 'app-filter-autocomplete',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-autocomplete.component.html',
  styleUrl: './filter-autocomplete.component.scss'
})
export class FilterAutocompleteComponent
implements OnInit {

  @Input() debouncetime: number = 0;
  @Output() autocompleteEvent = new EventEmitter<string>();

  options = input.required<Transactions[]>();
  optionSelectedEvent = output<Transactions>();

  autocompleteControl = new FormControl('');

  ngOnInit(): void {
    

    this.autocompleteControl.valueChanges
    .pipe(
      debounceTime(this.debouncetime),
      distinctUntilChanged()
    )
    .subscribe(( value ) => {

      if( value ){
        this.autocompleteEvent.emit( value );
      }

    });


  }



  onSelectedItem( item: Transactions ){
    this.optionSelectedEvent.emit( item );
  }
}
