import { Instrument } from "./Instrument";
import { Product } from "./Product";

/**
 * Ability to define and pass through a structured object between buy-side, sell-side and financial eco-system partners.
 * This will allow a specific trade and instrument context E.g. Rates trade object to be passed in a use case workflow to satisfy a  pre-trade, trade, post trade workflow.
 * The goal is to enable and foster greater open collaboration between creators of Financial Objects and with the users of Financial Objects starting with trade objects.
 * Type of interaction, stage of trade-life-cycle, extensible objects that can be enriched (from core essential objects)
 * Example: IRS, USD, 10Y, LCH (Vanilla Swap), IRS, USD, 10y/5y, LCH (Vanilla Swap - 5y swap 10y fwd)
 */
export interface Trade {
  
  /**
   * Any interface that extends Product
   */
  product: Product;

  /**
   * Trade currency
   */
  CCY: string;

  /**
   * Combination of number and letter, ie 10Y (for 10 years), 3M (for 3 months), 2D (for 2 days)
   */
  maturity: string;

  /**
   * The clearing venue; null if not cleared
   */
  clear: string;

  /**
   * TODO - is this needed?
   */
  instrument: Instrument;
}
