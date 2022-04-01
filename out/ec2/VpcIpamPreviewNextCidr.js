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
const schema = require("../apis/ec2-2016-11-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ec2.VpcIpamPreviewNextCidr {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.EC2();
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
    invokeAdvertiseByoipCidr(partialParams) {
        this.boot();
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].apply(partialParams));
    }
    invokeAllocateIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.allocateIpamPoolCidr(this.ops["AllocateIpamPoolCidr"].apply(partialParams));
    }
    invokeCreateSubnetCidrReservation(partialParams) {
        this.boot();
        return this.client.createSubnetCidrReservation(this.ops["CreateSubnetCidrReservation"].apply(partialParams));
    }
    invokeDeleteIpamPool(partialParams) {
        this.boot();
        return this.client.deleteIpamPool(this.ops["DeleteIpamPool"].apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        this.boot();
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].apply(partialParams));
    }
    invokeDeprovisionIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.deprovisionIpamPoolCidr(this.ops["DeprovisionIpamPoolCidr"].apply(partialParams));
    }
    invokeDeprovisionPublicIpv4PoolCidr(partialParams) {
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokeGetIpamAddressHistory(partialParams) {
        this.boot();
        return this.client.getIpamAddressHistory(this.ops["GetIpamAddressHistory"].apply(partialParams));
    }
    invokeGetIpamPoolAllocations(partialParams) {
        this.boot();
        return this.client.getIpamPoolAllocations(this.ops["GetIpamPoolAllocations"].apply(partialParams));
    }
    invokeGetIpamPoolCidrs(partialParams) {
        this.boot();
        return this.client.getIpamPoolCidrs(this.ops["GetIpamPoolCidrs"].apply(partialParams));
    }
    invokeModifyIpamPool(partialParams) {
        this.boot();
        return this.client.modifyIpamPool(this.ops["ModifyIpamPool"].apply(partialParams));
    }
    invokeMoveByoipCidrToIpam(partialParams) {
        this.boot();
        return this.client.moveByoipCidrToIpam(this.ops["MoveByoipCidrToIpam"].apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        this.boot();
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].apply(partialParams));
    }
    invokeProvisionIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.provisionIpamPoolCidr(this.ops["ProvisionIpamPoolCidr"].apply(partialParams));
    }
    invokeProvisionPublicIpv4PoolCidr(partialParams) {
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokeReleaseIpamPoolAllocation(partialParams) {
        this.boot();
        return this.client.releaseIpamPoolAllocation(this.ops["ReleaseIpamPoolAllocation"].apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        this.boot();
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].apply(partialParams));
    }
}
exports.default = default_1;
