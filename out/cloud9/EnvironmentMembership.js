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
const schema = require("../apis/cloud9-2017-09-23.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloud9.EnvironmentMembership {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Cloud9();
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
    invokeCreateEnvironmentEC2(partialParams) {
        this.boot();
        return this.client.createEnvironmentEC2(this.ops["CreateEnvironmentEC2"].apply(partialParams));
    }
    invokeCreateEnvironmentMembership(partialParams) {
        this.boot();
        return this.client.createEnvironmentMembership(this.ops["CreateEnvironmentMembership"].apply(partialParams));
    }
    invokeDeleteEnvironment(partialParams) {
        this.boot();
        return this.client.deleteEnvironment(this.ops["DeleteEnvironment"].apply(partialParams));
    }
    invokeDeleteEnvironmentMembership(partialParams) {
        this.boot();
        return this.client.deleteEnvironmentMembership(this.ops["DeleteEnvironmentMembership"].apply(partialParams));
    }
    invokeDescribeEnvironmentMemberships(partialParams) {
        this.boot();
        return this.client.describeEnvironmentMemberships(this.ops["DescribeEnvironmentMemberships"].apply(partialParams));
    }
    invokeDescribeEnvironmentStatus(partialParams) {
        this.boot();
        return this.client.describeEnvironmentStatus(this.ops["DescribeEnvironmentStatus"].apply(partialParams));
    }
    invokeDescribeEnvironments(partialParams) {
        this.boot();
        return this.client.describeEnvironments(this.ops["DescribeEnvironments"].apply(partialParams));
    }
    invokeListEnvironments(partialParams) {
        this.boot();
        return this.client.listEnvironments(this.ops["ListEnvironments"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        this.boot();
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
    invokeUpdateEnvironmentMembership(partialParams) {
        this.boot();
        return this.client.updateEnvironmentMembership(this.ops["UpdateEnvironmentMembership"].apply(partialParams));
    }
}
exports.default = default_1;
