import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { HTTP_HELPERS } from '../../helpers/http.helper';
import { Transactions } from '../../models/transaction.model';
import { GenericTableComponent } from '../../shared/generic-table/generic-table.component';
import { FilterAutocompleteComponent } from '../../shared/filter-autocomplete/filter-autocomplete.component';

@Component({
  selector: 'app-transactions',
  imports: [
    CommonModule,
    GenericTableComponent,
    FilterAutocompleteComponent
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent
implements OnInit {

  // SERVIVIOS
  private readonly transactionsService = inject( TransactionsService );

  // TABLE CONFIG
  data = signal<Transactions[]>([]);
  displayedColumns = signal<string[]>(['id','product','netAmount','paymentMethod','transactionDate']);

  // AUTOCOMPLETE FILTER
  autocompleteOptions = signal<Transactions[]>([]);

  ngOnInit(): void {


    this.getTransactions()    
    
  }
  
  
  getTransactions( target: {[key: string] : string | undefined | null | number | Date} = {} ){
  
    const params = HTTP_HELPERS.buildHttpParams(target);
    this.transactionsService.getTransactions(params)
    .subscribe({
      next: (response) => {
        this.data.set( response );
      },
      error: (error) => {
        console.log('TransactionsComponent getTransactions');
      }
    }); 
  }
  getAutocompleteTransactions( target: {[key: string] : string | undefined | null | number | Date} = {} ){
  
    const params = HTTP_HELPERS.buildHttpParams(target);
    this.transactionsService.getTransactions(params)
    .subscribe({
      next: (response) => {
        this.autocompleteOptions.set( response );
      },
      error: (error) => {
        console.log('TransactionsComponent getTransactions');
      }
    }); 
  }

  onHandleAutocompleteSearch( query: string ){

    const params = {
      q: query
    };

    this.getAutocompleteTransactions(params)


  }
  onHandleSelectedItem( item: Transactions ){

    const params = {
      q: item.product
    };

    this.autocompleteOptions.set([]);
    this.getTransactions(params)


  }

}
