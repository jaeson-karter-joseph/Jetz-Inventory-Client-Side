import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Product } from '../../unit-master/untiMaster-model';

interface IBOEDate {
  id: number;
  boe: string;
  boeDate: Date;
  blNumber: string;
  blDate: Date;
  qty: number;
  weight: number;
  brand: string;
  wareHouse: string;
  inventoryStatus: string;
}

interface Ibranch {
  name: string;
}

@Component({
  selector: 'app-boe-data',
  templateUrl: './boe-data.component.html',
  styleUrls: ['./boe-data.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class BoeDataComponent {
  productDialog: boolean = false;
  products!: Product[];
  product!: Product;
  selectedProducts!: Product[] | null;
  submitted: boolean = false;
  statuses!: any[];

  branches !: Ibranch[];

  branch !: Ibranch;
  boe !: IBOEDate
  boeData: IBOEDate[] = [
    {
      id: 1,
      boe: "BOE001",
      boeDate: new Date("2023-11-12"),
      qty: 10,
      brand: "Brand1",
      wareHouse: "WareHouseA",
      inventoryStatus: "INSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
    {
      id: 2,
      boe: "BOE002",
      boeDate: new Date("2023-11-13"),
      qty: 15,
      brand: "Brand2",
      wareHouse: "WarehouseB",
      inventoryStatus: "OUTOFSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
    {
      id: 3,
      boe: "BOE003",
      boeDate: new Date("2023-11-14"),
      qty: 20,
      brand: "Brand3",
      wareHouse: "WarehouseC",
      inventoryStatus: "INSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
    {
      id: 4,
      boe: "BOE004",
      boeDate: new Date("2023-11-15"),
      qty: 25,
      brand: "Brand4",
      wareHouse: "WarehouseD",
      inventoryStatus: "LOWSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
    {
      id: 5,
      boe: "BOE005",
      boeDate: new Date("2023-11-16"),
      qty: 30,
      brand: "Brand5",
      wareHouse: "WarehouseE",
      inventoryStatus: "INSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
    {
      id: 6,
      boe: "BOE006",
      boeDate: new Date("2023-11-17"),
      qty: 35,
      brand: "Brand6",
      wareHouse: "WarehouseF",
      inventoryStatus: "OUTOFSTOCK",
      blNumber : '66373',
      blDate : new Date("2023-11-12"),
      weight:23
    },
  ];



  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {


    this.branches = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  editProduct(product: IBOEDate) {
    console.log({ ...product });
    this.boe = { ...product };
    this.productDialog = true;
  }


  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }

  get calculateTotalQty() {
    let total = 0;
    for (let qty of this.boeData) {
      total += qty.qty;
    }
    return total
  }
}
