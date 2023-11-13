import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface IPort {
  name: string;
  code: string;
}

@Component({
  selector: 'app-importer-details-master',
  templateUrl: './importer-details-master.component.html',
  styleUrls: ['./importer-details-master.component.scss']
})
export class ImporterDetailsMasterComponent implements OnInit {
  isBoeFound = true;
  importerDetailsForm !: FormGroup;

  ports: IPort[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  selectedPortOfLoading !: IPort;
  selecetdPortOfDischarge !: IPort;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.importerDetailsForm = this.formBuilder.group({
      boeNumber: new FormControl<number | null>(null),
      boeDate: new FormControl<Date | null>(new Date()),
      dateOfArrival: new FormControl<Date | null>(new Date()),
      iecNumber: new FormControl<string | null>(null),
      importerName: new FormControl<string | null>(null),
      HSNCode: new FormControl<string | null>(null),
      productQty: new FormControl<number | null>(null),
      productWeight: new FormControl<number | null>(null),
      assessableValue: new FormControl<number | null>(null),
      vesselVoyage: new FormControl<string | null>(null),
      portOfLoading: new FormControl<IPort | null>(null),
      portOfDischarge: new FormControl<IPort | null>(null),
      supplierName: new FormControl<string | null>(null),
      supplierAddress: new FormControl<string | null>(null),
      origin: new FormControl<string | null>(null),
      goodDescription: new FormControl<string | null>(null),
      productBrand: new FormControl<string | null>(null),
      productModel: new FormControl<string | null>(null),
      containerNumber: new FormControl<string | null>(null),
      dateOfDestuffing: new FormControl<Date | null>(new Date()),
      blNumber: new FormControl<string | null>(null),
      blDate: new FormControl<Date | null>(new Date()),
      invoiceNumber: new FormControl<string | null>(null),
      invoiceDate: new FormControl<Date | null>(new Date()),
      insuranceValidity: new FormControl<Date | null>(new Date()),
      wareHouses: this.formBuilder.array([
        this.formBuilder.group({
          wareHouseName: []
        })
      ])

    })
  }

  searchBOE() {
    this.isBoeFound = !this.isBoeFound;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.importerDetailsForm.controls;
  }

  onSubmitForm() {
    console.dir(this.importerDetailsForm.value);
  }

  onReset() {
    this.importerDetailsForm.reset();
  }

  get wareHouses(): FormArray {
    return this.importerDetailsForm.get("wareHouses") as FormArray
  }

  newWareHouse() {
    this.wareHouses.push(
      this.formBuilder.group({
        wareHouseName: ['']
      })
    )
  }


  removeWareHouse(branchIndex: number) {
    this.wareHouses.removeAt(branchIndex);
  }


}
