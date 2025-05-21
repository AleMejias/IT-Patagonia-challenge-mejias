import { TestBed } from "@angular/core/testing";
import { provideHttpClientTesting , HttpTestingController } from '@angular/common/http/testing';
import { TransactionsService } from "../../../../src/app/services/transactions.service";
import { HttpParams, provideHttpClient } from "@angular/common/http";


describe('TransactionsService' , () => {

    let transactionsService: TransactionsService;
    let httpClient: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });

        transactionsService = TestBed.inject( TransactionsService );
        httpClient = TestBed.inject( HttpTestingController );
    }); 


    it( 'Should get an specificItem' , () => {


        // given
        const specificItem = {
            "cardNumber": "3819867179786102",
            "cardHolder": "John Doe",
            "cardExpiry": "12/26"
        }
        const params = new HttpParams().set('q','remera');

        transactionsService
        .getTransactions(params)
        .subscribe({
          next: (response) => {
            expect( response ).toContainEqual( specificItem );
          }
        });

        // when

        const req = httpClient.expectOne('http://localhost:8080/transactions');

        
        
        // then
        
        
        expect( req.request.method ).toBe('GET');

    });


});