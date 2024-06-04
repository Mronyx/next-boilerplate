export interface IAddress {
    walletType: string
    ordinalsAddress: string
    ordinalsPubkey: string
    paymentAddress: string
    paymentPubkey: string
    walletName: string
    _id: string
}

export interface IProfile {
    id: string
    address: IAddress[],
    avatar: string,
    points: number,
    username: string,
    _id: string,
}

export interface ITransaction {
    _id: string,
    profileId: string,
    isDraft: boolean,
    status: boolean,
    feeRate: number,
    amountToTransfer: number,
    destinationAddress: string,
    inscriptionId: string,
    paymentAddress: string,
    txId: string,
    type: string
}

export interface ITx {
    _id: string,
    profileId: IAddress[],
    paymentAddress: string,
    destinationAddress: number,
    type: string,
    amountToTransfer: string,
    inscriptionId: IAddress[],
    isDraft: string,
    status: number,
    feeRate: string,
    txId: string,
}

export interface IStatus {
    block_hash: string,
    block_height: number,
    block_time: number,
    confirmed: boolean
}

export interface IPrevout {
    scriptpubkey: string,
    scriptpubkey_asm: string,
    scriptpubkey_type: string,
    scriptpubkey_address: string,
    value: number
}

export interface IVin {
    is_coinbase: boolean,
    prevout: IPrevout,
    scriptsig: "",
    scriptsig_asm: "",
    sequence: number,
    txid: string,
    vout: number
}

export interface IVout {
    scriptpubkey: string,
    scriptpubkey_address: string,
    scriptpubkey_asm: string,
    scriptpubkey_type: string,
    value: number
}

export interface ITxDetails {
    fee: number,
    locktime: number,
    sigops: number,
    size: number,
    status: IStatus,
    txid: string,
    version: number,
    vin: IVin[],
    vout: IPrevout[],
    weight: number,
}

export interface ITxFeature {
    segwit: boolean,
    taproot: boolean,
    rbf: boolean,
    firstSeen: number,
    fee: number,
    feeRate: number,
    btcPricePayload: number,
    txDetails: ITxDetails
}

export interface IRbfTx {
    txid: string,
    fee: number,
    vsize: number,
    value: number,
    rate: number,
    time: number,
    rbf: boolean,
    fullRbf: boolean,
    mined: boolean
}

export interface IRbf {
    tx: IRbfTx,
    time: number
}

export interface IStatus {
    confirmed: boolean,
    block_height: number,
    block_hash: string,
    block_time: number
}

export interface ITxForRBF {
    fee: number,
    locktime: number,
    sigops: number,
    size: number,
    status: IStatus
    txid: string,
    version: number
    vin: IVin,
    vout: IVout
    weight: number
}

export interface IFeeRate {
    fastestFee: number,
    halfHourFee: number,
    hourFee: number
    economyFee: number,
    minimumFee: number
}

export interface IWallet {
    ordinalsAddress: string,
    ordinalsPubkey: string,
    paymentAddress: string,
    paymentPubkey: string,
    walletName: string,
    walletType: string
    _id: string
}