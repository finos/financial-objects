/**
 * Several use cases and workflows rely on that all parties involved can understand what instrument is being referred to - be it a simple chat message "why is Apple up today?" where the receiver wants to look up details about the company mentioned or a complex financial object - involving several securities - that will be parsed by a system.
 * An object with standardized names would allow for the use of several IDs to define the instrument - including all well-known data-sets and open symbology reference data as well as custom inhouse IDs if needed.
 * The main idea is for each participant to send as many IDs as exist in the system and be able to receive/understand as many as possible. This will ensure compatibility with existing applications while at the same time allow for a potential "most-favored" ID to become a future standard.
 */
export interface Instrument {
  name?: string;
  id: {
    ticker?: string;
    ISIN?: string;
    CUSIP?: string;
    SEDOL?: string;
    RIC?: string;
    BBG?: string;
    PERMID?: string;
    FIGI?: string;
    "com.factset.symbology.entity"?: string;
    "com.factset.symbology.regionalticker"?: string;
  };
}
