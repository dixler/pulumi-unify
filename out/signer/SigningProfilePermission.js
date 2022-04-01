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
const schema = require("../apis/signer-2017-08-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.signer.SigningProfilePermission {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Signer();
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
    invokeAddProfilePermission(partialParams) {
        this.boot();
        return this.client.addProfilePermission(this.ops["AddProfilePermission"].apply(partialParams));
    }
    invokeDescribeSigningJob(partialParams) {
        this.boot();
        return this.client.describeSigningJob(this.ops["DescribeSigningJob"].apply(partialParams));
    }
    invokeGetSigningPlatform(partialParams) {
        this.boot();
        return this.client.getSigningPlatform(this.ops["GetSigningPlatform"].apply(partialParams));
    }
    invokeGetSigningProfile(partialParams) {
        this.boot();
        return this.client.getSigningProfile(this.ops["GetSigningProfile"].apply(partialParams));
    }
    invokeListProfilePermissions(partialParams) {
        this.boot();
        return this.client.listProfilePermissions(this.ops["ListProfilePermissions"].apply(partialParams));
    }
    invokeListSigningJobs(partialParams) {
        this.boot();
        return this.client.listSigningJobs(this.ops["ListSigningJobs"].apply(partialParams));
    }
    invokeListSigningPlatforms(partialParams) {
        this.boot();
        return this.client.listSigningPlatforms(this.ops["ListSigningPlatforms"].apply(partialParams));
    }
    invokeListSigningProfiles(partialParams) {
        this.boot();
        return this.client.listSigningProfiles(this.ops["ListSigningProfiles"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutSigningProfile(partialParams) {
        this.boot();
        return this.client.putSigningProfile(this.ops["PutSigningProfile"].apply(partialParams));
    }
    invokeRemoveProfilePermission(partialParams) {
        this.boot();
        return this.client.removeProfilePermission(this.ops["RemoveProfilePermission"].apply(partialParams));
    }
    invokeStartSigningJob(partialParams) {
        this.boot();
        return this.client.startSigningJob(this.ops["StartSigningJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
