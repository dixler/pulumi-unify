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
class default_1 extends aws.cloud9.EnvironmentEC2 {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Cloud9();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloud9-2017-09-23.normal.json"), this.client);
    }
    invokeCreateEnvironmentEC2(partialParams) {
        return this.client.createEnvironmentEC2(this.ops["CreateEnvironmentEC2"].apply(partialParams));
    }
    invokeCreateEnvironmentMembership(partialParams) {
        return this.client.createEnvironmentMembership(this.ops["CreateEnvironmentMembership"].apply(partialParams));
    }
    invokeDeleteEnvironment(partialParams) {
        return this.client.deleteEnvironment(this.ops["DeleteEnvironment"].apply(partialParams));
    }
    invokeDeleteEnvironmentMembership(partialParams) {
        return this.client.deleteEnvironmentMembership(this.ops["DeleteEnvironmentMembership"].apply(partialParams));
    }
    invokeDescribeEnvironmentStatus(partialParams) {
        return this.client.describeEnvironmentStatus(this.ops["DescribeEnvironmentStatus"].apply(partialParams));
    }
    invokeDescribeEnvironments(partialParams) {
        return this.client.describeEnvironments(this.ops["DescribeEnvironments"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
    invokeUpdateEnvironmentMembership(partialParams) {
        return this.client.updateEnvironmentMembership(this.ops["UpdateEnvironmentMembership"].apply(partialParams));
    }
}
exports.default = default_1;
