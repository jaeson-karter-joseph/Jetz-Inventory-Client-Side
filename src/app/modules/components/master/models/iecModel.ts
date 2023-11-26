export interface IecBranch {
    id?: number;
    branchCode: string;
    branchName: string;
    branchAddress: string;
    active: boolean;
}

export interface IecMaster {
    id?: number;
    iecNumber: string;
    importerName: string;
    gstNumber: string;
    panNumber: string;
    email: string;
    phone: string;
    headOfficeAddress: string;
    active: boolean;
    iecmasters: IecBranch[];
}

