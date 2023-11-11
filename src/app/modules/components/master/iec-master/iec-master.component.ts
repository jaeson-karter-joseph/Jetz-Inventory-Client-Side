import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-iec-master',
  templateUrl: './iec-master.component.html',
  styleUrls: ['./iec-master.component.scss']
})
export class IecMasterComponent implements OnInit {
  values: string[] | undefined;
  loading: boolean = false;

  iecForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.values = ["123", "6hwer"]
    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl(null),
      importerName: new FormControl(null),
      gstNumber: new FormControl(null),
      panNumber: new FormControl(null),
      importerEmailId: new FormControl(null),
      phoneNumber: new FormControl(null),
      HOAddress: new FormControl(null),
      branches: this.formBuilder.array([
        this.formBuilder.group({
          branchName : []
        })
      ])
    })
  }

  get branches(): FormArray {
    return this.iecForm.get("branches") as FormArray
  }

  newBranch() {
    this.branches.push(
      this.formBuilder.group({
        branchName: ['']
      })
    )
  }


  removeBranch(branchIndex: number) {
    this.branches.removeAt(branchIndex);
  }



  load() {
    this.loading = true;

    console.log(this.iecForm.value);

    setTimeout(() => {
      this.loading = false
    }, 2000);


  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }
}
