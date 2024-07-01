import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmpytPipe } from './dash-if-empyt.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmpytPipe
    ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmpytPipe
    ]
})
export class PipesModule { }