import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { ChartComponent } from './chart.component';

@NgModule({
    imports: [CommonModule, Ng2Charts
    
    ],
    declarations: [ChartComponent]
})
export class ChartModule {}
