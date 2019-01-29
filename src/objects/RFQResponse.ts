import { OrderResponse } from './OrderResponse';

/**
 * Response to the RFQ object request
 */
export interface RFQResponse extends OrderResponse {
    payFixedLevel: number
}