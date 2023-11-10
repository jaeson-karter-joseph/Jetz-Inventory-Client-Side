import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-iec-master',
  templateUrl: './iec-master.component.html',
  styleUrls: ['./iec-master.component.scss']
})
export class IecMasterComponent implements OnInit {
  values: string[] | undefined;
  loading: boolean = false;

  formGroup !: FormGroup ;

  ngOnInit() {
    this.values = ["123","6hwer"]
    this.formGroup = new FormGroup({
      values: new FormControl<string[] | null>(null)
    });
  }

  load() {
    this.loading = true;

    console.log(this.values)

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
