import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators, FormArray } from '@angular/forms';
import { IecService } from '../services/iec.service';
import { IecMaster } from '../models/iecModel';

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

  constructor(private formBuilder: FormBuilder, private iecService: IecService) { }

  ngOnInit() {

    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>("IEC1234", [Validators.required]),
      importerName: new FormControl<string | null>("JCJ"),
      gstNumber: new FormControl<string | null>("ABCD"),
      panNumber: new FormControl<string | null>("J4776Q"),
      importerEmailId: new FormControl<string | null>("jkjoseph2023@gmail.com"),
      phoneNumber: new FormControl<string | null>("09946655526"),
      HOAddress: new FormControl<string | null>("KERALA"),
      branches: this.formBuilder.array([
        this.formBuilder.group({
          branchCode: new FormControl<string | null>(null),
          branchName: new FormControl<string | null>("Culcutta"),
          branchAddress: new FormControl<string | null>(null),
          active: new FormControl<boolean | null>(null)
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
        branchCode: new FormControl<string | null>(null),
        branchName: new FormControl<string | null>(null),
        branchAddress: new FormControl<string | null>(null),
        active: new FormControl<boolean | null>(null)
      })
    )
  }


  removeBranch(branchIndex: number) {
    this.branches.removeAt(branchIndex);
  }



  load() {
    this.loading = true;

    const iecFormData: IecMaster = {
      iecNumber: this.iecForm.value.iceNumber,
      importerName: this.iecForm.value.importerName,
      gstNumber: this.iecForm.value.gstNumber,
      panNumber: this.iecForm.value.panNumber,
      email: this.iecForm.value.importerEmailId,
      phone: this.iecForm.value.phoneNumber,
      headOfficeAddress: this.iecForm.value.HOAddress,
      active: true,
      iecmasters: this.iecForm.value.branches
    }
    console.log(this.iecForm.value, iecFormData);

    this.iecService.newIecData(iecFormData).subscribe({
      next: (response) => {
        console.log(response);
        this.loading = false;
        this.resetForm();
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    })

  }

  resetForm(): void {
    this.iecForm.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return this.iecForm.controls[controlName].hasError(errorName) && this.iecForm.controls[controlName].dirty;
  }

  searchIEC() {
    this.isIECFound = true;
  }
}
