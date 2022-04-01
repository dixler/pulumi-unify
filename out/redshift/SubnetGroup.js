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
const schema = require("../apis/redshift-2012-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.redshift.SubnetGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Redshift();
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
    invokeCreateClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.createClusterParameterGroup(this.ops["CreateClusterParameterGroup"].apply(partialParams));
    }
    invokeCreateClusterSecurityGroup(partialParams) {
        this.boot();
        return this.client.createClusterSecurityGroup(this.ops["CreateClusterSecurityGroup"].apply(partialParams));
    }
    invokeCreateClusterSubnetGroup(partialParams) {
        this.boot();
        return this.client.createClusterSubnetGroup(this.ops["CreateClusterSubnetGroup"].apply(partialParams));
    }
    invokeCreateEndpointAccess(partialParams) {
        this.boot();
        return this.client.createEndpointAccess(this.ops["CreateEndpointAccess"].apply(partialParams));
    }
    invokeCreateHsmConfiguration(partialParams) {
        this.boot();
        return this.client.createHsmConfiguration(this.ops["CreateHsmConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
