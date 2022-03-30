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
class default_1 extends aws.appstream.Stack {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AppStream();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/appstream-2016-12-01.normal.json"), this.client);
    }
    invokeAssociateApplicationFleet(partialParams) {
        return this.client.associateApplicationFleet(this.ops["AssociateApplicationFleet"].apply(partialParams));
    }
    invokeAssociateApplicationToEntitlement(partialParams) {
        return this.client.associateApplicationToEntitlement(this.ops["AssociateApplicationToEntitlement"].apply(partialParams));
    }
    invokeAssociateFleet(partialParams) {
        return this.client.associateFleet(this.ops["AssociateFleet"].apply(partialParams));
    }
    invokeBatchAssociateUserStack(partialParams) {
        return this.client.batchAssociateUserStack(this.ops["BatchAssociateUserStack"].apply(partialParams));
    }
    invokeBatchDisassociateUserStack(partialParams) {
        return this.client.batchDisassociateUserStack(this.ops["BatchDisassociateUserStack"].apply(partialParams));
    }
    invokeCopyImage(partialParams) {
        return this.client.copyImage(this.ops["CopyImage"].apply(partialParams));
    }
    invokeCreateAppBlock(partialParams) {
        return this.client.createAppBlock(this.ops["CreateAppBlock"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateDirectoryConfig(partialParams) {
        return this.client.createDirectoryConfig(this.ops["CreateDirectoryConfig"].apply(partialParams));
    }
    invokeCreateEntitlement(partialParams) {
        return this.client.createEntitlement(this.ops["CreateEntitlement"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateImageBuilder(partialParams) {
        return this.client.createImageBuilder(this.ops["CreateImageBuilder"].apply(partialParams));
    }
    invokeCreateImageBuilderStreamingURL(partialParams) {
        return this.client.createImageBuilderStreamingURL(this.ops["CreateImageBuilderStreamingURL"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeCreateStreamingURL(partialParams) {
        return this.client.createStreamingURL(this.ops["CreateStreamingURL"].apply(partialParams));
    }
    invokeCreateUpdatedImage(partialParams) {
        return this.client.createUpdatedImage(this.ops["CreateUpdatedImage"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDeleteAppBlock(partialParams) {
        return this.client.deleteAppBlock(this.ops["DeleteAppBlock"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteDirectoryConfig(partialParams) {
        return this.client.deleteDirectoryConfig(this.ops["DeleteDirectoryConfig"].apply(partialParams));
    }
    invokeDeleteEntitlement(partialParams) {
        return this.client.deleteEntitlement(this.ops["DeleteEntitlement"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageBuilder(partialParams) {
        return this.client.deleteImageBuilder(this.ops["DeleteImageBuilder"].apply(partialParams));
    }
    invokeDeleteImagePermissions(partialParams) {
        return this.client.deleteImagePermissions(this.ops["DeleteImagePermissions"].apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        return this.client.deleteStack(this.ops["DeleteStack"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDescribeEntitlements(partialParams) {
        return this.client.describeEntitlements(this.ops["DescribeEntitlements"].apply(partialParams));
    }
    invokeDescribeImagePermissions(partialParams) {
        return this.client.describeImagePermissions(this.ops["DescribeImagePermissions"].apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        return this.client.describeSessions(this.ops["DescribeSessions"].apply(partialParams));
    }
    invokeDescribeUsers(partialParams) {
        return this.client.describeUsers(this.ops["DescribeUsers"].apply(partialParams));
    }
    invokeDisableUser(partialParams) {
        return this.client.disableUser(this.ops["DisableUser"].apply(partialParams));
    }
    invokeDisassociateApplicationFleet(partialParams) {
        return this.client.disassociateApplicationFleet(this.ops["DisassociateApplicationFleet"].apply(partialParams));
    }
    invokeDisassociateApplicationFromEntitlement(partialParams) {
        return this.client.disassociateApplicationFromEntitlement(this.ops["DisassociateApplicationFromEntitlement"].apply(partialParams));
    }
    invokeDisassociateFleet(partialParams) {
        return this.client.disassociateFleet(this.ops["DisassociateFleet"].apply(partialParams));
    }
    invokeEnableUser(partialParams) {
        return this.client.enableUser(this.ops["EnableUser"].apply(partialParams));
    }
    invokeExpireSession(partialParams) {
        return this.client.expireSession(this.ops["ExpireSession"].apply(partialParams));
    }
    invokeListAssociatedFleets(partialParams) {
        return this.client.listAssociatedFleets(this.ops["ListAssociatedFleets"].apply(partialParams));
    }
    invokeListAssociatedStacks(partialParams) {
        return this.client.listAssociatedStacks(this.ops["ListAssociatedStacks"].apply(partialParams));
    }
    invokeListEntitledApplications(partialParams) {
        return this.client.listEntitledApplications(this.ops["ListEntitledApplications"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartFleet(partialParams) {
        return this.client.startFleet(this.ops["StartFleet"].apply(partialParams));
    }
    invokeStartImageBuilder(partialParams) {
        return this.client.startImageBuilder(this.ops["StartImageBuilder"].apply(partialParams));
    }
    invokeStopFleet(partialParams) {
        return this.client.stopFleet(this.ops["StopFleet"].apply(partialParams));
    }
    invokeStopImageBuilder(partialParams) {
        return this.client.stopImageBuilder(this.ops["StopImageBuilder"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateDirectoryConfig(partialParams) {
        return this.client.updateDirectoryConfig(this.ops["UpdateDirectoryConfig"].apply(partialParams));
    }
    invokeUpdateEntitlement(partialParams) {
        return this.client.updateEntitlement(this.ops["UpdateEntitlement"].apply(partialParams));
    }
    invokeUpdateImagePermissions(partialParams) {
        return this.client.updateImagePermissions(this.ops["UpdateImagePermissions"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
}
exports.default = default_1;
