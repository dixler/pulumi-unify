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
class default_1 extends aws.signer.SigningProfile {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Signer();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/signer-2017-08-25.normal.json"), this.client);
    }
    invokeAddProfilePermission(partialParams) {
        return this.client.addProfilePermission(this.ops["AddProfilePermission"].apply(partialParams));
    }
    invokeCancelSigningProfile(partialParams) {
        return this.client.cancelSigningProfile(this.ops["CancelSigningProfile"].apply(partialParams));
    }
    invokeDescribeSigningJob(partialParams) {
        return this.client.describeSigningJob(this.ops["DescribeSigningJob"].apply(partialParams));
    }
    invokeGetSigningPlatform(partialParams) {
        return this.client.getSigningPlatform(this.ops["GetSigningPlatform"].apply(partialParams));
    }
    invokeGetSigningProfile(partialParams) {
        return this.client.getSigningProfile(this.ops["GetSigningProfile"].apply(partialParams));
    }
    invokeListProfilePermissions(partialParams) {
        return this.client.listProfilePermissions(this.ops["ListProfilePermissions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutSigningProfile(partialParams) {
        return this.client.putSigningProfile(this.ops["PutSigningProfile"].apply(partialParams));
    }
    invokeRemoveProfilePermission(partialParams) {
        return this.client.removeProfilePermission(this.ops["RemoveProfilePermission"].apply(partialParams));
    }
    invokeRevokeSignature(partialParams) {
        return this.client.revokeSignature(this.ops["RevokeSignature"].apply(partialParams));
    }
    invokeRevokeSigningProfile(partialParams) {
        return this.client.revokeSigningProfile(this.ops["RevokeSigningProfile"].apply(partialParams));
    }
    invokeStartSigningJob(partialParams) {
        return this.client.startSigningJob(this.ops["StartSigningJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
