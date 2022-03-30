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
class default_1 extends aws.ram.PrincipalAssociation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.RAM();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ram-2018-01-04.normal.json"), this.client);
    }
    invokeAcceptResourceShareInvitation(partialParams) {
        return this.client.acceptResourceShareInvitation(this.ops["AcceptResourceShareInvitation"].apply(partialParams));
    }
    invokeAssociateResourceShare(partialParams) {
        return this.client.associateResourceShare(this.ops["AssociateResourceShare"].apply(partialParams));
    }
    invokeAssociateResourceSharePermission(partialParams) {
        return this.client.associateResourceSharePermission(this.ops["AssociateResourceSharePermission"].apply(partialParams));
    }
    invokeCreateResourceShare(partialParams) {
        return this.client.createResourceShare(this.ops["CreateResourceShare"].apply(partialParams));
    }
    invokeDeleteResourceShare(partialParams) {
        return this.client.deleteResourceShare(this.ops["DeleteResourceShare"].apply(partialParams));
    }
    invokeDisassociateResourceShare(partialParams) {
        return this.client.disassociateResourceShare(this.ops["DisassociateResourceShare"].apply(partialParams));
    }
    invokeDisassociateResourceSharePermission(partialParams) {
        return this.client.disassociateResourceSharePermission(this.ops["DisassociateResourceSharePermission"].apply(partialParams));
    }
    invokeGetPermission(partialParams) {
        return this.client.getPermission(this.ops["GetPermission"].apply(partialParams));
    }
    invokeGetResourcePolicies(partialParams) {
        return this.client.getResourcePolicies(this.ops["GetResourcePolicies"].apply(partialParams));
    }
    invokeGetResourceShareAssociations(partialParams) {
        return this.client.getResourceShareAssociations(this.ops["GetResourceShareAssociations"].apply(partialParams));
    }
    invokeGetResourceShares(partialParams) {
        return this.client.getResourceShares(this.ops["GetResourceShares"].apply(partialParams));
    }
    invokeListPendingInvitationResources(partialParams) {
        return this.client.listPendingInvitationResources(this.ops["ListPendingInvitationResources"].apply(partialParams));
    }
    invokeListPermissionVersions(partialParams) {
        return this.client.listPermissionVersions(this.ops["ListPermissionVersions"].apply(partialParams));
    }
    invokeListPrincipals(partialParams) {
        return this.client.listPrincipals(this.ops["ListPrincipals"].apply(partialParams));
    }
    invokeListResourceSharePermissions(partialParams) {
        return this.client.listResourceSharePermissions(this.ops["ListResourceSharePermissions"].apply(partialParams));
    }
    invokeListResources(partialParams) {
        return this.client.listResources(this.ops["ListResources"].apply(partialParams));
    }
    invokePromoteResourceShareCreatedFromPolicy(partialParams) {
        return this.client.promoteResourceShareCreatedFromPolicy(this.ops["PromoteResourceShareCreatedFromPolicy"].apply(partialParams));
    }
    invokeRejectResourceShareInvitation(partialParams) {
        return this.client.rejectResourceShareInvitation(this.ops["RejectResourceShareInvitation"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateResourceShare(partialParams) {
        return this.client.updateResourceShare(this.ops["UpdateResourceShare"].apply(partialParams));
    }
}
exports.default = default_1;
