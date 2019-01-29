import { Entity } from './Entity';
import { Order } from './Order';

/**
 * Response to the Order object request
 */
export interface OrderResponse extends Order {
    responder: Entity
    receiveFixedLevel: number
    notional: number
    startDate: Date
    endDate: Date
    rollConvention: string
}