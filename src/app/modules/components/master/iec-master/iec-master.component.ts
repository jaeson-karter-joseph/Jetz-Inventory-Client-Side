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
  isIECFound: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl(null, [Validators.required]),
      importerName: new FormControl(null),
      gstNumber: new FormControl(null),
      panNumber: new FormControl(null),
      importerEmailId: new FormControl(null),
      phoneNumber: new FormControl(null),
      HOAddress: new FormControl(null),
      branches: this.formBuilder.array([
        this.formBuilder.group({
          branchName: []
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

  resetForm(): void {
    this.iecForm.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return this.iecForm.controls[controlName].hasError(errorName) && this.iecForm.controls[controlName].dirty ;
  }

  searchIEC(){
    this.isIECFound = true;
  }
}
