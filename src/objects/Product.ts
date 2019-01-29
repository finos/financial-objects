import {Context} from './context'

export interface Product extends Context {
	product: Irs | Equity
}

export interface Irs {
	description: "Interest Rate Swap"
}

export interface Equity {
	description: "Equity"
}