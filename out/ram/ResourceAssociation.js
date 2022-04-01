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
const schema = require("../apis/ram-2018-01-04.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ram.ResourceAssociation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.RAM();
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
    invokeAcceptResourceShareInvitation(partialParams) {
        this.boot();
        return this.client.acceptResourceShareInvitation(this.ops["AcceptResourceShareInvitation"].apply(partialParams));
    }
    invokeAssociateResourceShare(partialParams) {
        this.boot();
        return this.client.associateResourceShare(this.ops["AssociateResourceShare"].apply(partialParams));
    }
    invokeAssociateResourceSharePermission(partialParams) {
        this.boot();
        return this.client.associateResourceSharePermission(this.ops["AssociateResourceSharePermission"].apply(partialParams));
    }
    invokeCreateResourceShare(partialParams) {
        this.boot();
        return this.client.createResourceShare(this.ops["CreateResourceShare"].apply(partialParams));
    }
    invokeDeleteResourceShare(partialParams) {
        this.boot();
        return this.client.deleteResourceShare(this.ops["DeleteResourceShare"].apply(partialParams));
    }
    invokeDisassociateResourceShare(partialParams) {
        this.boot();
        return this.client.disassociateResourceShare(this.ops["DisassociateResourceShare"].apply(partialParams));
    }
    invokeDisassociateResourceSharePermission(partialParams) {
        this.boot();
        return this.client.disassociateResourceSharePermission(this.ops["DisassociateResourceSharePermission"].apply(partialParams));
    }
    invokeEnableSharingWithAwsOrganization(partialParams) {
        this.boot();
        return this.client.enableSharingWithAwsOrganization(this.ops["EnableSharingWithAwsOrganization"].apply(partialParams));
    }
    invokeGetPermission(partialParams) {
        this.boot();
        return this.client.getPermission(this.ops["GetPermission"].apply(partialParams));
    }
    invokeGetResourcePolicies(partialParams) {
        this.boot();
        return this.client.getResourcePolicies(this.ops["GetResourcePolicies"].apply(partialParams));
    }
    invokeGetResourceShareAssociations(partialParams) {
        this.boot();
        return this.client.getResourceShareAssociations(this.ops["GetResourceShareAssociations"].apply(partialParams));
    }
    invokeGetResourceShareInvitations(partialParams) {
        this.boot();
        return this.client.getResourceShareInvitations(this.ops["GetResourceShareInvitations"].apply(partialParams));
    }
    invokeGetResourceShares(partialParams) {
        this.boot();
        return this.client.getResourceShares(this.ops["GetResourceShares"].apply(partialParams));
    }
    invokeListPendingInvitationResources(partialParams) {
        this.boot();
        return this.client.listPendingInvitationResources(this.ops["ListPendingInvitationResources"].apply(partialParams));
    }
    invokeListPermissionVersions(partialParams) {
        this.boot();
        return this.client.listPermissionVersions(this.ops["ListPermissionVersions"].apply(partialParams));
    }
    invokeListPermissions(partialParams) {
        this.boot();
        return this.client.listPermissions(this.ops["ListPermissions"].apply(partialParams));
    }
    invokeListPrincipals(partialParams) {
        this.boot();
        return this.client.listPrincipals(this.ops["ListPrincipals"].apply(partialParams));
    }
    invokeListResourceSharePermissions(partialParams) {
        this.boot();
        return this.client.listResourceSharePermissions(this.ops["ListResourceSharePermissions"].apply(partialParams));
    }
    invokeListResourceTypes(partialParams) {
        this.boot();
        return this.client.listResourceTypes(this.ops["ListResourceTypes"].apply(partialParams));
    }
    invokeListResources(partialParams) {
        this.boot();
        return this.client.listResources(this.ops["ListResources"].apply(partialParams));
    }
    invokePromoteResourceShareCreatedFromPolicy(partialParams) {
        this.boot();
        return this.client.promoteResourceShareCreatedFromPolicy(this.ops["PromoteResourceShareCreatedFromPolicy"].apply(partialParams));
    }
    invokeRejectResourceShareInvitation(partialParams) {
        this.boot();
        return this.client.rejectResourceShareInvitation(this.ops["RejectResourceShareInvitation"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateResourceShare(partialParams) {
        this.boot();
        return this.client.updateResourceShare(this.ops["UpdateResourceShare"].apply(partialParams));
    }
}
exports.default = default_1;
