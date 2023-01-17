import { TransactionInstruction } from '@solana/web3.js';
import { StringPublicKey } from '../../utils';
export declare function emptyPaymentAccount(acceptPayment: StringPublicKey, destination: StringPublicKey, auctionManager: StringPublicKey, metadata: StringPublicKey, masterEdition: StringPublicKey | undefined, safetyDepositBox: StringPublicKey, vault: StringPublicKey, auction: StringPublicKey, payer: StringPublicKey, recipient: StringPublicKey, winningConfigIndex: number | null, winningConfigItemIndex: number | null, creatorIndex: number | null, instructions: TransactionInstruction[]): Promise<void>;
//# sourceMappingURL=emptyPaymentAccount.d.ts.map