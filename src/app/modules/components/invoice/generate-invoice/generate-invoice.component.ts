import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface Column {
  field: string;
  header: string;
}

interface IDeliveryInvoice {
  id: string,
  HSNCode: string,
  QTY: number,
  Weight: number,
  Value: number,
}

class DeliveryChellan {
  iecNumber !: number;
  boeNumber !: number;
  boeDate !: Date;
  importerName !: string;
  supplierName !: string;
  vehicleNumber !: string;
  goodsDesc !: string;
  deliveryItem !: IDeliveryInvoice[]
}

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent {

  products!: IDeliveryInvoice[];

  cols!: Column[];

  devliveryInvoiceForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.devliveryInvoiceForm = this.formBuilder.group({
      iecNumber: new FormControl(123),
      boeNumber: new FormControl(564),
      boeDate: new FormControl<string>(new Date().toLocaleDateString()),
      importerName: new FormControl("XZY Traders"),
      supplierName: new FormControl("ABC Global"),
      vehicleNumber: new FormControl("KL09445"),
      goodsDesc: new FormControl("Electronical Items"),
    })


    this.products = [{
      id: '01',
      HSNCode: '12345',
      QTY: 100,
      Weight: 150.5,
      Value: 5000.0,
    },]


    this.cols = [
      { field: 'HSNCode', header: 'HSN Code' },
      { field: 'QTY', header: 'QTY' },
      { field: 'Weight', header: 'Weight' },
      { field: 'Value', header: 'Value' }
    ];

  }

  generatePDF(action: string) {
    let docDefinition = {
      header: 'Invoice Details',
      content: [{
        text: 'JETZ GLOBAL LOGISTICS',
        fontSize: 22,
        color: '#047886',
        alignment: 'center',
      },
      {
        text: 'DELIVERY CHELLAN',
        fontSize: 14,
        bold: true,
        color: 'skyblue',
        alignment: 'center',
        decoration: 'underline',
      },
      {
        text: 'Delivery Details',
        style: 'sectionHeader'
      },

      {
        columns: [
          [
            {
              text: `IEC : ${this.f['iecNumber'].value}`,
              bold: true
            },
            {
              text: `BOE : ${this.f['boeNumber'].value}`,
              bold: true
            },
            {
              text: `BOE Date : ${this.f['boeDate'].value}`,
              bold: true
            },
            {
              text: `Importer Name : ${this.f['importerName'].value}`,
              bold: true
            }, {
              text: `Supplier Name : ${this.f['supplierName'].value}`,
              bold: true
            }, {
              text: `Vehicle Number : ${this.f['vehicleNumber'].value}`,
              bold: true
            }, {
              text: `Goods Description : ${this.f['goodsDesc'].value}`,
              bold: true
            },
          ],
          [
            {
              text: `Date: ${new Date().toLocaleDateString()}`,
              alignment: 'right'
            }
          ],
        ]
      },
      {
        text: 'Order Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['HSN CODE', 'QTY', 'WEIGHT', 'VALUE'],
            ...this.products.map(p => ([p.HSNCode, p.QTY, p.Weight, (p.Value)])),
            [{ text: 'Total Amount', colSpan: 3 }, {}, {}, this.products.reduce((sum, p) => sum + (p.QTY * p.Value), 0).toFixed(2)]
          ]
        }
      },
      {
        text: 'Additional Details',
        style: 'sectionHeader'
      },
      {
        text: "Product Delivered",
        margin: [0, 0, 0, 15]
      },
      {
        columns: [
          [{ qr: `${this.f['iecNumber'].value}`, fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    }

    if (action === 'download') {
      pdfMake.createPdf(docDefinition as any).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition as any).print();
    } else {
      pdfMake.createPdf(docDefinition as any).open();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.devliveryInvoiceForm.controls;
  }

}
