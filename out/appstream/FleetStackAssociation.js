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
const schema = require("../apis/appstream-2016-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.appstream.FleetStackAssociation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppStream();
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
    invokeAssociateApplicationFleet(partialParams) {
        this.boot();
        return this.client.associateApplicationFleet(this.ops["AssociateApplicationFleet"].apply(partialParams));
    }
    invokeAssociateApplicationToEntitlement(partialParams) {
        this.boot();
        return this.client.associateApplicationToEntitlement(this.ops["AssociateApplicationToEntitlement"].apply(partialParams));
    }
    invokeAssociateFleet(partialParams) {
        this.boot();
        return this.client.associateFleet(this.ops["AssociateFleet"].apply(partialParams));
    }
    invokeCreateEntitlement(partialParams) {
        this.boot();
        return this.client.createEntitlement(this.ops["CreateEntitlement"].apply(partialParams));
    }
    invokeCreateStreamingURL(partialParams) {
        this.boot();
        return this.client.createStreamingURL(this.ops["CreateStreamingURL"].apply(partialParams));
    }
    invokeDeleteEntitlement(partialParams) {
        this.boot();
        return this.client.deleteEntitlement(this.ops["DeleteEntitlement"].apply(partialParams));
    }
    invokeDescribeEntitlements(partialParams) {
        this.boot();
        return this.client.describeEntitlements(this.ops["DescribeEntitlements"].apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        this.boot();
        return this.client.describeSessions(this.ops["DescribeSessions"].apply(partialParams));
    }
    invokeDisassociateApplicationFleet(partialParams) {
        this.boot();
        return this.client.disassociateApplicationFleet(this.ops["DisassociateApplicationFleet"].apply(partialParams));
    }
    invokeDisassociateApplicationFromEntitlement(partialParams) {
        this.boot();
        return this.client.disassociateApplicationFromEntitlement(this.ops["DisassociateApplicationFromEntitlement"].apply(partialParams));
    }
    invokeDisassociateFleet(partialParams) {
        this.boot();
        return this.client.disassociateFleet(this.ops["DisassociateFleet"].apply(partialParams));
    }
    invokeListAssociatedFleets(partialParams) {
        this.boot();
        return this.client.listAssociatedFleets(this.ops["ListAssociatedFleets"].apply(partialParams));
    }
    invokeListAssociatedStacks(partialParams) {
        this.boot();
        return this.client.listAssociatedStacks(this.ops["ListAssociatedStacks"].apply(partialParams));
    }
    invokeListEntitledApplications(partialParams) {
        this.boot();
        return this.client.listEntitledApplications(this.ops["ListEntitledApplications"].apply(partialParams));
    }
    invokeUpdateEntitlement(partialParams) {
        this.boot();
        return this.client.updateEntitlement(this.ops["UpdateEntitlement"].apply(partialParams));
    }
}
exports.default = default_1;
