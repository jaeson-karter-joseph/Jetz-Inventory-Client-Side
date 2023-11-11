import { Component, OnInit } from '@angular/core';

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
  isBoeFound = false
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

  ngOnInit() {
  }

  searchBOE() {
    this.isBoeFound = !this.isBoeFound;
  }

}
