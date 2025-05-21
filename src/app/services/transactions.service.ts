import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transactions } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private readonly http = inject( HttpClient );
  private readonly apiUrl = 'http://localhost:8080/transactions';

  getTransactions( params: HttpParams ){
    return this.http.get<Transactions[]>(this.apiUrl,{params})
  }
}
