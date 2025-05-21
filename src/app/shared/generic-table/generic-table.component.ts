import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Transactions } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-generic-table',
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent {

  data = input.required<Transactions[]>();
  displayedColumns = input.required<string[]>();
}
