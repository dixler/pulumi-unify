"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/qldb-2019-01-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.qldb.Ledger {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.QLDB();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeCancelJournalKinesisStream(partialParams) {
        this.boot();
        return this.client.cancelJournalKinesisStream(this.ops["CancelJournalKinesisStream"].apply(partialParams));
    }
    invokeCreateLedger(partialParams) {
        this.boot();
        return this.client.createLedger(this.ops["CreateLedger"].apply(partialParams));
    }
    invokeDescribeJournalKinesisStream(partialParams) {
        this.boot();
        return this.client.describeJournalKinesisStream(this.ops["DescribeJournalKinesisStream"].apply(partialParams));
    }
    invokeDescribeJournalS3Export(partialParams) {
        this.boot();
        return this.client.describeJournalS3Export(this.ops["DescribeJournalS3Export"].apply(partialParams));
    }
    invokeDescribeLedger(partialParams) {
        this.boot();
        return this.client.describeLedger(this.ops["DescribeLedger"].apply(partialParams));
    }
    invokeExportJournalToS3(partialParams) {
        this.boot();
        return this.client.exportJournalToS3(this.ops["ExportJournalToS3"].apply(partialParams));
    }
    invokeGetBlock(partialParams) {
        this.boot();
        return this.client.getBlock(this.ops["GetBlock"].apply(partialParams));
    }
    invokeGetDigest(partialParams) {
        this.boot();
        return this.client.getDigest(this.ops["GetDigest"].apply(partialParams));
    }
    invokeGetRevision(partialParams) {
        this.boot();
        return this.client.getRevision(this.ops["GetRevision"].apply(partialParams));
    }
    invokeListJournalKinesisStreamsForLedger(partialParams) {
        this.boot();
        return this.client.listJournalKinesisStreamsForLedger(this.ops["ListJournalKinesisStreamsForLedger"].apply(partialParams));
    }
    invokeListJournalS3Exports(partialParams) {
        this.boot();
        return this.client.listJournalS3Exports(this.ops["ListJournalS3Exports"].apply(partialParams));
    }
    invokeListJournalS3ExportsForLedger(partialParams) {
        this.boot();
        return this.client.listJournalS3ExportsForLedger(this.ops["ListJournalS3ExportsForLedger"].apply(partialParams));
    }
    invokeListLedgers(partialParams) {
        this.boot();
        return this.client.listLedgers(this.ops["ListLedgers"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStreamJournalToKinesis(partialParams) {
        this.boot();
        return this.client.streamJournalToKinesis(this.ops["StreamJournalToKinesis"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateLedger(partialParams) {
        this.boot();
        return this.client.updateLedger(this.ops["UpdateLedger"].apply(partialParams));
    }
    invokeUpdateLedgerPermissionsMode(partialParams) {
        this.boot();
        return this.client.updateLedgerPermissionsMode(this.ops["UpdateLedgerPermissionsMode"].apply(partialParams));
    }
}
exports.default = default_1;
