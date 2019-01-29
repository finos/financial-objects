import {Context} from './context'

/**
 * An object with standardized names would allow for the use of several IDs to define the country - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.
 */
export interface Country extends Context {
    name: string
    id: {
        ISOALPHA2?: string
        ISOALPHA3?: string
    }
}