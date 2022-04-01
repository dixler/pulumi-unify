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
class default_1 extends aws.ec2.VpnConnectionRoute {
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
    invokeCreateClientVpnRoute(partialParams) {
        this.boot();
        return this.client.createClientVpnRoute(this.ops["CreateClientVpnRoute"].apply(partialParams));
    }
    invokeCreateLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.createLocalGatewayRoute(this.ops["CreateLocalGatewayRoute"].apply(partialParams));
    }
    invokeCreateTrafficMirrorFilterRule(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeCreateTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRoute(this.ops["CreateTransitGatewayRoute"].apply(partialParams));
    }
    invokeDeleteClientVpnRoute(partialParams) {
        this.boot();
        return this.client.deleteClientVpnRoute(this.ops["DeleteClientVpnRoute"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteLocalGatewayRoute(this.ops["DeleteLocalGatewayRoute"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayRoute(this.ops["DeleteTransitGatewayRoute"].apply(partialParams));
    }
    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams) {
        this.boot();
        return this.client.getVpnConnectionDeviceSampleConfiguration(this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams));
    }
    invokeModifyVpnConnection(partialParams) {
        this.boot();
        return this.client.modifyVpnConnection(this.ops["ModifyVpnConnection"].apply(partialParams));
    }
    invokeModifyVpnConnectionOptions(partialParams) {
        this.boot();
        return this.client.modifyVpnConnectionOptions(this.ops["ModifyVpnConnectionOptions"].apply(partialParams));
    }
    invokeModifyVpnTunnelCertificate(partialParams) {
        this.boot();
        return this.client.modifyVpnTunnelCertificate(this.ops["ModifyVpnTunnelCertificate"].apply(partialParams));
    }
    invokeModifyVpnTunnelOptions(partialParams) {
        this.boot();
        return this.client.modifyVpnTunnelOptions(this.ops["ModifyVpnTunnelOptions"].apply(partialParams));
    }
    invokeReplaceTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.replaceTransitGatewayRoute(this.ops["ReplaceTransitGatewayRoute"].apply(partialParams));
    }
}
exports.default = default_1;
