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
class default_1 extends aws.ram.ResourceShareAccepter {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.RAM();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAcceptResourceShareInvitation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptResourceShareInvitation(this.ops["AcceptResourceShareInvitation"].applicator.apply(partialParams));
    }
    invokeAssociateResourceShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateResourceShare(this.ops["AssociateResourceShare"].applicator.apply(partialParams));
    }
    invokeAssociateResourceSharePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateResourceSharePermission(this.ops["AssociateResourceSharePermission"].applicator.apply(partialParams));
    }
    invokeCreateResourceShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceShare(this.ops["CreateResourceShare"].applicator.apply(partialParams));
    }
    invokeDeleteResourceShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourceShare(this.ops["DeleteResourceShare"].applicator.apply(partialParams));
    }
    invokeDisassociateResourceShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateResourceShare(this.ops["DisassociateResourceShare"].applicator.apply(partialParams));
    }
    invokeDisassociateResourceSharePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateResourceSharePermission(this.ops["DisassociateResourceSharePermission"].applicator.apply(partialParams));
    }
    invokeGetPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermission(this.ops["GetPermission"].applicator.apply(partialParams));
    }
    invokeGetResourcePolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourcePolicies(this.ops["GetResourcePolicies"].applicator.apply(partialParams));
    }
    invokeGetResourceShareAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceShareAssociations(this.ops["GetResourceShareAssociations"].applicator.apply(partialParams));
    }
    invokeGetResourceShares(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceShares(this.ops["GetResourceShares"].applicator.apply(partialParams));
    }
    invokeListPendingInvitationResources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPendingInvitationResources(this.ops["ListPendingInvitationResources"].applicator.apply(partialParams));
    }
    invokeListPermissionVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPermissionVersions(this.ops["ListPermissionVersions"].applicator.apply(partialParams));
    }
    invokeListPrincipals(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipals(this.ops["ListPrincipals"].applicator.apply(partialParams));
    }
    invokeListResourceSharePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceSharePermissions(this.ops["ListResourceSharePermissions"].applicator.apply(partialParams));
    }
    invokeListResources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResources(this.ops["ListResources"].applicator.apply(partialParams));
    }
    invokePromoteResourceShareCreatedFromPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteResourceShareCreatedFromPolicy(this.ops["PromoteResourceShareCreatedFromPolicy"].applicator.apply(partialParams));
    }
    invokeRejectResourceShareInvitation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectResourceShareInvitation(this.ops["RejectResourceShareInvitation"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateResourceShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResourceShare(this.ops["UpdateResourceShare"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
