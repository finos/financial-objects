import {Context} from './Context'
import { Instrument } from './Instrument'
import { Product } from './Product';

/**
 * Ability to define and pass through a structured object between buy-side, sell-side and financial eco-system partners.
 * This will allow a specific trade and instrument context E.g. Rates trade object to be passed in a use case workflow to satisfy a  pre-trade, trade, post trade workflow.
 * The goal is to enable and foster greater open collaboration between creators of Financial Objects and with the users of Financial Objects starting with trade objects.
 * Type of interaction, stage of trade-life-cycle, extensible objects that can be enriched (from core essential objects)
 */
export interface Trade extends Context {
    product: Product
    CCY: string
    maturity: number
    clear: string
    // TODO - is this needed?
    instrument: Instrument
}