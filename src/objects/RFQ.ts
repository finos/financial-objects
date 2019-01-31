import { Order } from "./Order";

/**
 * The RFQ object will be an extension of the trade object by identifying the additional attributes over and above the trade object to determine the status of RFQ - inquiry, response, state change data fields.
 * Example: IRS, USD, 50m, 31/08/2018,31/08/2028, IMM, LCH, 2 way (Vanilla Swap), IRS, USD, 31/08/2018 10y/5y, IMM, LCH, 2 way (Vanilla Swap - 5y swap 10y fwd)
 */
export interface RFQ extends Order {}
