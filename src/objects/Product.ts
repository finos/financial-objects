import {Context} from './Context'
import { ProductType } from './ProductType';

export interface Product extends Context {
	product: ProductType
}