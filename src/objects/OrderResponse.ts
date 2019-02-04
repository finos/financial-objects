import { Entity } from "./Entity";
import { Order } from "./Order";

/**
 * Response to the Order object request
 */
export interface OrderResponse extends Order {
  // Responder Unique ID: [Entity B]
  // Receive Fixed Level: [x.xx]%
}
