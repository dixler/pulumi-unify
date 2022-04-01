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
const schema = require("../apis/synthetics-2017-10-11.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.synthetics.Canary {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Synthetics();
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
    invokeCreateCanary(partialParams) {
        this.boot();
        return this.client.createCanary(this.ops["CreateCanary"].apply(partialParams));
    }
    invokeDeleteCanary(partialParams) {
        this.boot();
        return this.client.deleteCanary(this.ops["DeleteCanary"].apply(partialParams));
    }
    invokeDescribeCanaries(partialParams) {
        this.boot();
        return this.client.describeCanaries(this.ops["DescribeCanaries"].apply(partialParams));
    }
    invokeDescribeCanariesLastRun(partialParams) {
        this.boot();
        return this.client.describeCanariesLastRun(this.ops["DescribeCanariesLastRun"].apply(partialParams));
    }
    invokeDescribeRuntimeVersions(partialParams) {
        this.boot();
        return this.client.describeRuntimeVersions(this.ops["DescribeRuntimeVersions"].apply(partialParams));
    }
    invokeGetCanary(partialParams) {
        this.boot();
        return this.client.getCanary(this.ops["GetCanary"].apply(partialParams));
    }
    invokeGetCanaryRuns(partialParams) {
        this.boot();
        return this.client.getCanaryRuns(this.ops["GetCanaryRuns"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartCanary(partialParams) {
        this.boot();
        return this.client.startCanary(this.ops["StartCanary"].apply(partialParams));
    }
    invokeStopCanary(partialParams) {
        this.boot();
        return this.client.stopCanary(this.ops["StopCanary"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCanary(partialParams) {
        this.boot();
        return this.client.updateCanary(this.ops["UpdateCanary"].apply(partialParams));
    }
}
exports.default = default_1;
