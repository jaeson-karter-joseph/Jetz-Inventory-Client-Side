import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface IDropDown {
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

  ports: IDropDown[] = [
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

  supppliers: IDropDown[] = [
    { name: 'Supplier 1', code: 'S1' },
    { name: 'Supplier 2', code: 'S2' },
    { name: 'Supplier 3', code: 'S3' },
    { name: 'Supplier 4', code: 'S4' },
    { name: 'Supplier 5', code: 'S5' },
    { name: 'Supplier 6', code: 'S6' },
    { name: 'Supplier 7', code: 'S7' },
    { name: 'Supplier 8', code: 'S8' },
    { name: 'Supplier 9', code: 'S9' },
    { name: 'Supplier 10', code: 'S10' }
  ]

  wareHouseData: IDropDown[] = [
    { name: 'WareHouse 1', code: 'W1' },
    { name: 'WareHouse 2', code: 'W2' },
    { name: 'WareHouse 3', code: 'W3' },
    { name: 'WareHouse 4', code: 'W4' },
    { name: 'WareHouse 5', code: 'W5' },
    { name: 'WareHouse 6', code: 'W6' },
    { name: 'WareHouse 7', code: 'W7' },
    { name: 'WareHouse 8', code: 'W8' },
    { name: 'WareHouse 9', code: 'W9' },
    { name: 'WareHouse 10', code: 'W10' }
  ]

  productData: IDropDown[] = [
    { name: 'Product 1', code: 'P1' },
    { name: 'Product 2', code: 'P2' },
    { name: 'Product 3', code: 'P3' },
    { name: 'Product 4', code: 'P4' },
    { name: 'Product 5', code: 'P5' },
    { name: 'Product 6', code: 'P6' },
    { name: 'Product 7', code: 'P7' },
    { name: 'Product 8', code: 'P8' },
    { name: 'Product 9', code: 'P9' },
    { name: 'Product 10', code: 'P10' }
  ]

  selectedPortOfLoading !: IDropDown;
  selecetdPortOfDischarge !: IDropDown;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.importerDetailsForm = this.formBuilder.group({
      boeNumber: new FormControl<number | null>(null),
      boeDate: new FormControl<Date | null>(new Date()),
      dateOfArrival: new FormControl<Date | null>(new Date()),
      iecNumber: new FormControl<string | null>(null),
      importerName: new FormControl<string | null>(null),
      vesselVoyage: new FormControl<string | null>(null),
      portOfLoading: new FormControl<IDropDown | null>(null),
      portOfDischarge: new FormControl<IDropDown | null>(null),
      supplierName: new FormControl<IDropDown | null>(null),
      supplierAddress: new FormControl<string | null>(null),
      origin: new FormControl<string | null>(null),
      wareHouse: new FormControl<IDropDown | null>(null),


      containerNumber: new FormControl<string | null>(null),
      dateOfDestuffing: new FormControl<Date | null>(new Date()),
      blNumber: new FormControl<string | null>(null),
      blDate: new FormControl<Date | null>(new Date()),
      invoiceNumber: new FormControl<string | null>(null),
      invoiceDate: new FormControl<Date | null>(new Date()),
      insuranceValidity: new FormControl<Date | null>(new Date()),

      boeProductDetails: this.formBuilder.array([
        this.formBuilder.group({
          productHSNCode: new FormControl<string | null>(null),
          productName: new FormControl<IDropDown | null>(null),
          productBrand: new FormControl<string | null>(null),
          productModel: new FormControl<string | null>(null),
          productDescription: new FormControl<string | null>(null),
          productQty: new FormControl<number | null>(null),
          productWeight: new FormControl<number | null>(null),
          assessableValue: new FormControl<number | null>(null)
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

  get boeProductDetails(): FormArray {
    return this.importerDetailsForm.get("boeProductDetails") as FormArray;
  }

  newBoeProductDetails() {
    this.boeProductDetails.push(
      this.formBuilder.group({
        productHSNCode: new FormControl<string | null>(null),
        productName: new FormControl<IDropDown | null>(null),
        productBrand: new FormControl<string | null>(null),
        productModel: new FormControl<string | null>(null),
        productDescription: new FormControl<string | null>(null),
        productQty: new FormControl<number | null>(null),
        productWeight: new FormControl<number | null>(null),
        assessableValue: new FormControl<number | null>(null)
      })
    )
  }

  removeBoeProductDetails(branchIndex: number) {
    this.boeProductDetails.removeAt(branchIndex);
  }


}
