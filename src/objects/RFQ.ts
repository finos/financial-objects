import { Order, OrderResponse } from './Order';

/**
 * The RFQ object will be an extension of the trade object by identifying the additional attributes over and above the trade object to determine the status of RFQ - inquiry, response, state change data fields.
 */
export interface RFQ extends Order {}

export interface RFQResponse extends OrderResponse {
    payFixedLevel: number
}