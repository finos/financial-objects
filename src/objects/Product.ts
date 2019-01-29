import {Context} from './Context'

export interface Product extends Context {
	product: Irs | Equity
}

export interface Irs {
	description: "Interest Rate Swap"
}

export interface Equity {
	description: "Equity"
}