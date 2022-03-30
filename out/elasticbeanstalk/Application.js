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
class default_1 extends aws.elasticbeanstalk.Application {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ElasticBeanstalk();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/elasticbeanstalk-2010-12-01.normal.json"), this.client);
    }
    invokeApplyEnvironmentManagedAction(partialParams) {
        return this.client.applyEnvironmentManagedAction(this.ops["ApplyEnvironmentManagedAction"].apply(partialParams));
    }
    invokeAssociateEnvironmentOperationsRole(partialParams) {
        return this.client.associateEnvironmentOperationsRole(this.ops["AssociateEnvironmentOperationsRole"].apply(partialParams));
    }
    invokeCheckDNSAvailability(partialParams) {
        return this.client.checkDNSAvailability(this.ops["CheckDNSAvailability"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateApplicationVersion(partialParams) {
        return this.client.createApplicationVersion(this.ops["CreateApplicationVersion"].apply(partialParams));
    }
    invokeCreateConfigurationTemplate(partialParams) {
        return this.client.createConfigurationTemplate(this.ops["CreateConfigurationTemplate"].apply(partialParams));
    }
    invokeCreateEnvironment(partialParams) {
        return this.client.createEnvironment(this.ops["CreateEnvironment"].apply(partialParams));
    }
    invokeCreatePlatformVersion(partialParams) {
        return this.client.createPlatformVersion(this.ops["CreatePlatformVersion"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteApplicationVersion(partialParams) {
        return this.client.deleteApplicationVersion(this.ops["DeleteApplicationVersion"].apply(partialParams));
    }
    invokeDeleteConfigurationTemplate(partialParams) {
        return this.client.deleteConfigurationTemplate(this.ops["DeleteConfigurationTemplate"].apply(partialParams));
    }
    invokeDeleteEnvironmentConfiguration(partialParams) {
        return this.client.deleteEnvironmentConfiguration(this.ops["DeleteEnvironmentConfiguration"].apply(partialParams));
    }
    invokeDescribeConfigurationSettings(partialParams) {
        return this.client.describeConfigurationSettings(this.ops["DescribeConfigurationSettings"].apply(partialParams));
    }
    invokeDisassociateEnvironmentOperationsRole(partialParams) {
        return this.client.disassociateEnvironmentOperationsRole(this.ops["DisassociateEnvironmentOperationsRole"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRequestEnvironmentInfo(partialParams) {
        return this.client.requestEnvironmentInfo(this.ops["RequestEnvironmentInfo"].apply(partialParams));
    }
    invokeRetrieveEnvironmentInfo(partialParams) {
        return this.client.retrieveEnvironmentInfo(this.ops["RetrieveEnvironmentInfo"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateApplicationResourceLifecycle(partialParams) {
        return this.client.updateApplicationResourceLifecycle(this.ops["UpdateApplicationResourceLifecycle"].apply(partialParams));
    }
    invokeUpdateApplicationVersion(partialParams) {
        return this.client.updateApplicationVersion(this.ops["UpdateApplicationVersion"].apply(partialParams));
    }
    invokeUpdateConfigurationTemplate(partialParams) {
        return this.client.updateConfigurationTemplate(this.ops["UpdateConfigurationTemplate"].apply(partialParams));
    }
    invokeUpdateTagsForResource(partialParams) {
        return this.client.updateTagsForResource(this.ops["UpdateTagsForResource"].apply(partialParams));
    }
    invokeValidateConfigurationSettings(partialParams) {
        return this.client.validateConfigurationSettings(this.ops["ValidateConfigurationSettings"].apply(partialParams));
    }
}
exports.default = default_1;
