export type Purpose = 'payment' | 'ordinals';

export type Account = {
    address: string;
    publicKey: string;
    purpose: Purpose;
};

export const WalletType = {
    Xverse: 'Xverse',
    Unisat: 'Unisat',
    Leather: 'Leather',
    Phatom: 'Phantom',
    MagicEden: 'MagicEden',
    OKX: 'OKX'
}