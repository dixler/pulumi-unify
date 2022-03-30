"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.qldb.Ledger {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.QLDB();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/qldb-2019-01-02.normal.json"), this.client);
    }
    invokeCancelJournalKinesisStream(partialParams) {
        return this.client.cancelJournalKinesisStream(this.ops["CancelJournalKinesisStream"].apply(partialParams));
    }
    invokeCreateLedger(partialParams) {
        return this.client.createLedger(this.ops["CreateLedger"].apply(partialParams));
    }
    invokeDeleteLedger(partialParams) {
        return this.client.deleteLedger(this.ops["DeleteLedger"].apply(partialParams));
    }
    invokeDescribeJournalKinesisStream(partialParams) {
        return this.client.describeJournalKinesisStream(this.ops["DescribeJournalKinesisStream"].apply(partialParams));
    }
    invokeDescribeJournalS3Export(partialParams) {
        return this.client.describeJournalS3Export(this.ops["DescribeJournalS3Export"].apply(partialParams));
    }
    invokeDescribeLedger(partialParams) {
        return this.client.describeLedger(this.ops["DescribeLedger"].apply(partialParams));
    }
    invokeExportJournalToS3(partialParams) {
        return this.client.exportJournalToS3(this.ops["ExportJournalToS3"].apply(partialParams));
    }
    invokeGetBlock(partialParams) {
        return this.client.getBlock(this.ops["GetBlock"].apply(partialParams));
    }
    invokeGetDigest(partialParams) {
        return this.client.getDigest(this.ops["GetDigest"].apply(partialParams));
    }
    invokeGetRevision(partialParams) {
        return this.client.getRevision(this.ops["GetRevision"].apply(partialParams));
    }
    invokeListJournalKinesisStreamsForLedger(partialParams) {
        return this.client.listJournalKinesisStreamsForLedger(this.ops["ListJournalKinesisStreamsForLedger"].apply(partialParams));
    }
    invokeListJournalS3ExportsForLedger(partialParams) {
        return this.client.listJournalS3ExportsForLedger(this.ops["ListJournalS3ExportsForLedger"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStreamJournalToKinesis(partialParams) {
        return this.client.streamJournalToKinesis(this.ops["StreamJournalToKinesis"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateLedger(partialParams) {
        return this.client.updateLedger(this.ops["UpdateLedger"].apply(partialParams));
    }
    invokeUpdateLedgerPermissionsMode(partialParams) {
        return this.client.updateLedgerPermissionsMode(this.ops["UpdateLedgerPermissionsMode"].apply(partialParams));
    }
}
exports.default = default_1;
