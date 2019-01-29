import {Entity} from './Entity'

/**
 * An object with standardized names would allow for the use of several IDs to define the contact - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.
 */
export interface Contact extends Entity {
    id: {
        email: string
        twitter?: string
        phone?: string
        [x:string]: string
    }
}
