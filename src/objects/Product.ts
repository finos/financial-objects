import {Context} from './Context'

export enum ProductType {
    Irs,
    Equity
}

export interface Product extends Context {
	product: ProductType
}