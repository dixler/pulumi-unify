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
const schema = require("../apis/ssm-2014-11-06.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ssm.PatchGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SSM();
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
    invokeDeletePatchBaseline(partialParams) {
        this.boot();
        return this.client.deletePatchBaseline(this.ops["DeletePatchBaseline"].apply(partialParams));
    }
    invokeDeregisterPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeDescribeEffectivePatchesForPatchBaseline(partialParams) {
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams));
    }
    invokeDescribeInstancePatchStatesForPatchGroup(partialParams) {
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams));
    }
    invokeDescribePatchGroupState(partialParams) {
        this.boot();
        return this.client.describePatchGroupState(this.ops["DescribePatchGroupState"].apply(partialParams));
    }
    invokeGetPatchBaseline(partialParams) {
        this.boot();
        return this.client.getPatchBaseline(this.ops["GetPatchBaseline"].apply(partialParams));
    }
    invokeGetPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeRegisterDefaultPatchBaseline(partialParams) {
        this.boot();
        return this.client.registerDefaultPatchBaseline(this.ops["RegisterDefaultPatchBaseline"].apply(partialParams));
    }
    invokeRegisterPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeUpdatePatchBaseline(partialParams) {
        this.boot();
        return this.client.updatePatchBaseline(this.ops["UpdatePatchBaseline"].apply(partialParams));
    }
}
exports.default = default_1;
