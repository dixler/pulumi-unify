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
const schema = require("../apis/elasticbeanstalk-2010-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.elasticbeanstalk.ApplicationVersion {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ElasticBeanstalk();
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
    invokeApplyEnvironmentManagedAction(partialParams) {
        this.boot();
        return this.client.applyEnvironmentManagedAction(this.ops["ApplyEnvironmentManagedAction"].apply(partialParams));
    }
    invokeCheckDNSAvailability(partialParams) {
        this.boot();
        return this.client.checkDNSAvailability(this.ops["CheckDNSAvailability"].apply(partialParams));
    }
    invokeComposeEnvironments(partialParams) {
        this.boot();
        return this.client.composeEnvironments(this.ops["ComposeEnvironments"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateApplicationVersion(partialParams) {
        this.boot();
        return this.client.createApplicationVersion(this.ops["CreateApplicationVersion"].apply(partialParams));
    }
    invokeCreateConfigurationTemplate(partialParams) {
        this.boot();
        return this.client.createConfigurationTemplate(this.ops["CreateConfigurationTemplate"].apply(partialParams));
    }
    invokeCreateEnvironment(partialParams) {
        this.boot();
        return this.client.createEnvironment(this.ops["CreateEnvironment"].apply(partialParams));
    }
    invokeCreatePlatformVersion(partialParams) {
        this.boot();
        return this.client.createPlatformVersion(this.ops["CreatePlatformVersion"].apply(partialParams));
    }
    invokeDeletePlatformVersion(partialParams) {
        this.boot();
        return this.client.deletePlatformVersion(this.ops["DeletePlatformVersion"].apply(partialParams));
    }
    invokeDescribeApplicationVersions(partialParams) {
        this.boot();
        return this.client.describeApplicationVersions(this.ops["DescribeApplicationVersions"].apply(partialParams));
    }
    invokeDescribeApplications(partialParams) {
        this.boot();
        return this.client.describeApplications(this.ops["DescribeApplications"].apply(partialParams));
    }
    invokeDescribeConfigurationOptions(partialParams) {
        this.boot();
        return this.client.describeConfigurationOptions(this.ops["DescribeConfigurationOptions"].apply(partialParams));
    }
    invokeDescribeConfigurationSettings(partialParams) {
        this.boot();
        return this.client.describeConfigurationSettings(this.ops["DescribeConfigurationSettings"].apply(partialParams));
    }
    invokeDescribeEnvironmentHealth(partialParams) {
        this.boot();
        return this.client.describeEnvironmentHealth(this.ops["DescribeEnvironmentHealth"].apply(partialParams));
    }
    invokeDescribeEnvironmentManagedActionHistory(partialParams) {
        this.boot();
        return this.client.describeEnvironmentManagedActionHistory(this.ops["DescribeEnvironmentManagedActionHistory"].apply(partialParams));
    }
    invokeDescribeEnvironmentManagedActions(partialParams) {
        this.boot();
        return this.client.describeEnvironmentManagedActions(this.ops["DescribeEnvironmentManagedActions"].apply(partialParams));
    }
    invokeDescribeEnvironmentResources(partialParams) {
        this.boot();
        return this.client.describeEnvironmentResources(this.ops["DescribeEnvironmentResources"].apply(partialParams));
    }
    invokeDescribeEnvironments(partialParams) {
        this.boot();
        return this.client.describeEnvironments(this.ops["DescribeEnvironments"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeInstancesHealth(partialParams) {
        this.boot();
        return this.client.describeInstancesHealth(this.ops["DescribeInstancesHealth"].apply(partialParams));
    }
    invokeDescribePlatformVersion(partialParams) {
        this.boot();
        return this.client.describePlatformVersion(this.ops["DescribePlatformVersion"].apply(partialParams));
    }
    invokeListPlatformBranches(partialParams) {
        this.boot();
        return this.client.listPlatformBranches(this.ops["ListPlatformBranches"].apply(partialParams));
    }
    invokeListPlatformVersions(partialParams) {
        this.boot();
        return this.client.listPlatformVersions(this.ops["ListPlatformVersions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRetrieveEnvironmentInfo(partialParams) {
        this.boot();
        return this.client.retrieveEnvironmentInfo(this.ops["RetrieveEnvironmentInfo"].apply(partialParams));
    }
    invokeTerminateEnvironment(partialParams) {
        this.boot();
        return this.client.terminateEnvironment(this.ops["TerminateEnvironment"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        this.boot();
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateApplicationResourceLifecycle(partialParams) {
        this.boot();
        return this.client.updateApplicationResourceLifecycle(this.ops["UpdateApplicationResourceLifecycle"].apply(partialParams));
    }
    invokeUpdateApplicationVersion(partialParams) {
        this.boot();
        return this.client.updateApplicationVersion(this.ops["UpdateApplicationVersion"].apply(partialParams));
    }
    invokeUpdateConfigurationTemplate(partialParams) {
        this.boot();
        return this.client.updateConfigurationTemplate(this.ops["UpdateConfigurationTemplate"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        this.boot();
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
    invokeValidateConfigurationSettings(partialParams) {
        this.boot();
        return this.client.validateConfigurationSettings(this.ops["ValidateConfigurationSettings"].apply(partialParams));
    }
}
exports.default = default_1;
