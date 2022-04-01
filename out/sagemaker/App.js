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
const schema = require("../apis/sagemaker-2017-07-24.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.sagemaker.App {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SageMaker();
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
    invokeCreateApp(partialParams) {
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreatePresignedDomainUrl(partialParams) {
        this.boot();
        return this.client.createPresignedDomainUrl(this.ops["CreatePresignedDomainUrl"].apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        this.boot();
        return this.client.createUserProfile(this.ops["CreateUserProfile"].apply(partialParams));
    }
    invokeDescribeApp(partialParams) {
        this.boot();
        return this.client.describeApp(this.ops["DescribeApp"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeUserProfile(partialParams) {
        this.boot();
        return this.client.describeUserProfile(this.ops["DescribeUserProfile"].apply(partialParams));
    }
    invokeUpdateDomain(partialParams) {
        this.boot();
        return this.client.updateDomain(this.ops["UpdateDomain"].apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        this.boot();
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].apply(partialParams));
    }
}
exports.default = default_1;
