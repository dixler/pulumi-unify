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
class default_1 extends aws.ec2.Instance {
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
    invokeAllocateHosts(partialParams) {
        this.boot();
        return this.client.allocateHosts(this.ops["AllocateHosts"].apply(partialParams));
    }
    invokeAssociateClientVpnTargetNetwork(partialParams) {
        this.boot();
        return this.client.associateClientVpnTargetNetwork(this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssociateIamInstanceProfile(partialParams) {
        this.boot();
        return this.client.associateIamInstanceProfile(this.ops["AssociateIamInstanceProfile"].apply(partialParams));
    }
    invokeAssociateSubnetCidrBlock(partialParams) {
        this.boot();
        return this.client.associateSubnetCidrBlock(this.ops["AssociateSubnetCidrBlock"].apply(partialParams));
    }
    invokeCreateCapacityReservation(partialParams) {
        this.boot();
        return this.client.createCapacityReservation(this.ops["CreateCapacityReservation"].apply(partialParams));
    }
    invokeCreateDefaultSubnet(partialParams) {
        this.boot();
        return this.client.createDefaultSubnet(this.ops["CreateDefaultSubnet"].apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        this.boot();
        return this.client.createKeyPair(this.ops["CreateKeyPair"].apply(partialParams));
    }
    invokeCreateNatGateway(partialParams) {
        this.boot();
        return this.client.createNatGateway(this.ops["CreateNatGateway"].apply(partialParams));
    }
    invokeCreateNetworkInterface(partialParams) {
        this.boot();
        return this.client.createNetworkInterface(this.ops["CreateNetworkInterface"].apply(partialParams));
    }
    invokeCreateSubnetCidrReservation(partialParams) {
        this.boot();
        return this.client.createSubnetCidrReservation(this.ops["CreateSubnetCidrReservation"].apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        this.boot();
        return this.client.createVolume(this.ops["CreateVolume"].apply(partialParams));
    }
    invokeGetSubnetCidrReservations(partialParams) {
        this.boot();
        return this.client.getSubnetCidrReservations(this.ops["GetSubnetCidrReservations"].apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        this.boot();
        return this.client.importKeyPair(this.ops["ImportKeyPair"].apply(partialParams));
    }
    invokeImportVolume(partialParams) {
        this.boot();
        return this.client.importVolume(this.ops["ImportVolume"].apply(partialParams));
    }
    invokeModifyVpcTenancy(partialParams) {
        this.boot();
        return this.client.modifyVpcTenancy(this.ops["ModifyVpcTenancy"].apply(partialParams));
    }
    invokeMoveAddressToVpc(partialParams) {
        this.boot();
        return this.client.moveAddressToVpc(this.ops["MoveAddressToVpc"].apply(partialParams));
    }
    invokeReplaceIamInstanceProfileAssociation(partialParams) {
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams));
    }
    invokeRestoreAddressToClassic(partialParams) {
        this.boot();
        return this.client.restoreAddressToClassic(this.ops["RestoreAddressToClassic"].apply(partialParams));
    }
}
exports.default = default_1;
