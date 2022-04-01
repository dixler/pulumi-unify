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
class default_1 extends aws.appstream.Fleet {
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
            console.log(this.capitalizedParams);
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
    invokeBatchAssociateUserStack(partialParams) {
        this.boot();
        return this.client.batchAssociateUserStack(this.ops["BatchAssociateUserStack"].apply(partialParams));
    }
    invokeBatchDisassociateUserStack(partialParams) {
        this.boot();
        return this.client.batchDisassociateUserStack(this.ops["BatchDisassociateUserStack"].apply(partialParams));
    }
    invokeCopyImage(partialParams) {
        this.boot();
        return this.client.copyImage(this.ops["CopyImage"].apply(partialParams));
    }
    invokeCreateAppBlock(partialParams) {
        this.boot();
        return this.client.createAppBlock(this.ops["CreateAppBlock"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateDirectoryConfig(partialParams) {
        this.boot();
        return this.client.createDirectoryConfig(this.ops["CreateDirectoryConfig"].apply(partialParams));
    }
    invokeCreateEntitlement(partialParams) {
        this.boot();
        return this.client.createEntitlement(this.ops["CreateEntitlement"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateImageBuilder(partialParams) {
        this.boot();
        return this.client.createImageBuilder(this.ops["CreateImageBuilder"].apply(partialParams));
    }
    invokeCreateImageBuilderStreamingURL(partialParams) {
        this.boot();
        return this.client.createImageBuilderStreamingURL(this.ops["CreateImageBuilderStreamingURL"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeCreateStreamingURL(partialParams) {
        this.boot();
        return this.client.createStreamingURL(this.ops["CreateStreamingURL"].apply(partialParams));
    }
    invokeCreateUpdatedImage(partialParams) {
        this.boot();
        return this.client.createUpdatedImage(this.ops["CreateUpdatedImage"].apply(partialParams));
    }
    invokeCreateUsageReportSubscription(partialParams) {
        this.boot();
        return this.client.createUsageReportSubscription(this.ops["CreateUsageReportSubscription"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDeleteAppBlock(partialParams) {
        this.boot();
        return this.client.deleteAppBlock(this.ops["DeleteAppBlock"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        this.boot();
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteDirectoryConfig(partialParams) {
        this.boot();
        return this.client.deleteDirectoryConfig(this.ops["DeleteDirectoryConfig"].apply(partialParams));
    }
    invokeDeleteEntitlement(partialParams) {
        this.boot();
        return this.client.deleteEntitlement(this.ops["DeleteEntitlement"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        this.boot();
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDeleteImage(partialParams) {
        this.boot();
        return this.client.deleteImage(this.ops["DeleteImage"].apply(partialParams));
    }
    invokeDeleteImageBuilder(partialParams) {
        this.boot();
        return this.client.deleteImageBuilder(this.ops["DeleteImageBuilder"].apply(partialParams));
    }
    invokeDeleteImagePermissions(partialParams) {
        this.boot();
        return this.client.deleteImagePermissions(this.ops["DeleteImagePermissions"].apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        this.boot();
        return this.client.deleteStack(this.ops["DeleteStack"].apply(partialParams));
    }
    invokeDeleteUsageReportSubscription(partialParams) {
        this.boot();
        return this.client.deleteUsageReportSubscription(this.ops["DeleteUsageReportSubscription"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDescribeAppBlocks(partialParams) {
        this.boot();
        return this.client.describeAppBlocks(this.ops["DescribeAppBlocks"].apply(partialParams));
    }
    invokeDescribeApplicationFleetAssociations(partialParams) {
        this.boot();
        return this.client.describeApplicationFleetAssociations(this.ops["DescribeApplicationFleetAssociations"].apply(partialParams));
    }
    invokeDescribeApplications(partialParams) {
        this.boot();
        return this.client.describeApplications(this.ops["DescribeApplications"].apply(partialParams));
    }
    invokeDescribeDirectoryConfigs(partialParams) {
        this.boot();
        return this.client.describeDirectoryConfigs(this.ops["DescribeDirectoryConfigs"].apply(partialParams));
    }
    invokeDescribeEntitlements(partialParams) {
        this.boot();
        return this.client.describeEntitlements(this.ops["DescribeEntitlements"].apply(partialParams));
    }
    invokeDescribeFleets(partialParams) {
        this.boot();
        return this.client.describeFleets(this.ops["DescribeFleets"].apply(partialParams));
    }
    invokeDescribeImageBuilders(partialParams) {
        this.boot();
        return this.client.describeImageBuilders(this.ops["DescribeImageBuilders"].apply(partialParams));
    }
    invokeDescribeImagePermissions(partialParams) {
        this.boot();
        return this.client.describeImagePermissions(this.ops["DescribeImagePermissions"].apply(partialParams));
    }
    invokeDescribeImages(partialParams) {
        this.boot();
        return this.client.describeImages(this.ops["DescribeImages"].apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        this.boot();
        return this.client.describeSessions(this.ops["DescribeSessions"].apply(partialParams));
    }
    invokeDescribeStacks(partialParams) {
        this.boot();
        return this.client.describeStacks(this.ops["DescribeStacks"].apply(partialParams));
    }
    invokeDescribeUsageReportSubscriptions(partialParams) {
        this.boot();
        return this.client.describeUsageReportSubscriptions(this.ops["DescribeUsageReportSubscriptions"].apply(partialParams));
    }
    invokeDescribeUserStackAssociations(partialParams) {
        this.boot();
        return this.client.describeUserStackAssociations(this.ops["DescribeUserStackAssociations"].apply(partialParams));
    }
    invokeDescribeUsers(partialParams) {
        this.boot();
        return this.client.describeUsers(this.ops["DescribeUsers"].apply(partialParams));
    }
    invokeDisableUser(partialParams) {
        this.boot();
        return this.client.disableUser(this.ops["DisableUser"].apply(partialParams));
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
    invokeEnableUser(partialParams) {
        this.boot();
        return this.client.enableUser(this.ops["EnableUser"].apply(partialParams));
    }
    invokeExpireSession(partialParams) {
        this.boot();
        return this.client.expireSession(this.ops["ExpireSession"].apply(partialParams));
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
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartFleet(partialParams) {
        this.boot();
        return this.client.startFleet(this.ops["StartFleet"].apply(partialParams));
    }
    invokeStartImageBuilder(partialParams) {
        this.boot();
        return this.client.startImageBuilder(this.ops["StartImageBuilder"].apply(partialParams));
    }
    invokeStopFleet(partialParams) {
        this.boot();
        return this.client.stopFleet(this.ops["StopFleet"].apply(partialParams));
    }
    invokeStopImageBuilder(partialParams) {
        this.boot();
        return this.client.stopImageBuilder(this.ops["StopImageBuilder"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        this.boot();
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateDirectoryConfig(partialParams) {
        this.boot();
        return this.client.updateDirectoryConfig(this.ops["UpdateDirectoryConfig"].apply(partialParams));
    }
    invokeUpdateEntitlement(partialParams) {
        this.boot();
        return this.client.updateEntitlement(this.ops["UpdateEntitlement"].apply(partialParams));
    }
    invokeUpdateFleet(partialParams) {
        this.boot();
        return this.client.updateFleet(this.ops["UpdateFleet"].apply(partialParams));
    }
    invokeUpdateImagePermissions(partialParams) {
        this.boot();
        return this.client.updateImagePermissions(this.ops["UpdateImagePermissions"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
}
exports.default = default_1;
