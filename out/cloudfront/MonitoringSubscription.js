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
const schema = require("../apis/cloudfront-2020-05-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudfront.MonitoringSubscription {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CloudFront();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
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
    invokeCreateInvalidation2020_05_31(partialParams) {
        this.boot();
        return this.client.createInvalidation2020_05_31(this.ops["CreateInvalidation2020_05_31"].apply(partialParams));
    }
    invokeCreateMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.createMonitoringSubscription2020_05_31(this.ops["CreateMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeDeleteMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.deleteMonitoringSubscription2020_05_31(this.ops["DeleteMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeGetInvalidation2020_05_31(partialParams) {
        this.boot();
        return this.client.getInvalidation2020_05_31(this.ops["GetInvalidation2020_05_31"].apply(partialParams));
    }
    invokeGetMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.getMonitoringSubscription2020_05_31(this.ops["GetMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeListConflictingAliases2020_05_31(partialParams) {
        this.boot();
        return this.client.listConflictingAliases2020_05_31(this.ops["ListConflictingAliases2020_05_31"].apply(partialParams));
    }
    invokeListInvalidations2020_05_31(partialParams) {
        this.boot();
        return this.client.listInvalidations2020_05_31(this.ops["ListInvalidations2020_05_31"].apply(partialParams));
    }
}
exports.default = default_1;
