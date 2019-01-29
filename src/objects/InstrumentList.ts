import {Context} from './Context'
import {Instrument} from './Instrument'

/**
 * A standardized format for a lists of Instruments.
 */
export interface InstrumentList extends Context {
    instruments: Instrument[]
}