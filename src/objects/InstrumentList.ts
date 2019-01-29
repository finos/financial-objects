import {Context} from './context'
import {Instrument} from './instrument'

/**
 * A standardized format for a lists of Instruments.
 */
export interface InstrumentList extends Context {
    instruments: Instrument[]
}