import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Product } from '../unit-master/untiMaster-model';

interface IBOEDate {
  id: number;
  boe: string;
  boeDate: Date;
  qty: number;
  brand: string;
  wareHouse: string;
  inventoryStatus: string;
}

interface Ibranch {
  name: string;
}

@Component({
  selector: 'app-inventory-status-master',
  templateUrl: './inventory-status-master.component.html',
  styleUrls: ['./inventory-status-master.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class InventoryStatusMasterComponent {
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
    },
    {
      id: 2,
      boe: "BOE002",
      boeDate: new Date("2023-11-13"),
      qty: 15,
      brand: "Brand2",
      wareHouse: "WarehouseB",
      inventoryStatus: "OUTOFSTOCK",
    },
    {
      id: 3,
      boe: "BOE003",
      boeDate: new Date("2023-11-14"),
      qty: 20,
      brand: "Brand3",
      wareHouse: "WarehouseC",
      inventoryStatus: "INSTOCK",
    },
    {
      id: 4,
      boe: "BOE004",
      boeDate: new Date("2023-11-15"),
      qty: 25,
      brand: "Brand4",
      wareHouse: "WarehouseD",
      inventoryStatus: "LOWSTOCK",
    },
    {
      id: 5,
      boe: "BOE005",
      boeDate: new Date("2023-11-16"),
      qty: 30,
      brand: "Brand5",
      wareHouse: "WarehouseE",
      inventoryStatus: "INSTOCK",
    },
    {
      id: 6,
      boe: "BOE006",
      boeDate: new Date("2023-11-17"),
      qty: 35,
      brand: "Brand6",
      wareHouse: "WarehouseF",
      inventoryStatus: "OUTOFSTOCK",
    },
  ];



  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
    ];

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
