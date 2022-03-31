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
const schema = require("../apis/lightsail-2016-11-28.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.lightsail.Instance {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Lightsail();
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
    invokeAllocateStaticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateStaticIp(this.ops["AllocateStaticIp"].applicator.apply(partialParams));
    }
    invokeAttachCertificateToDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachCertificateToDistribution(this.ops["AttachCertificateToDistribution"].applicator.apply(partialParams));
    }
    invokeAttachDisk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachDisk(this.ops["AttachDisk"].applicator.apply(partialParams));
    }
    invokeAttachInstancesToLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInstancesToLoadBalancer(this.ops["AttachInstancesToLoadBalancer"].applicator.apply(partialParams));
    }
    invokeAttachLoadBalancerTlsCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancerTlsCertificate(this.ops["AttachLoadBalancerTlsCertificate"].applicator.apply(partialParams));
    }
    invokeAttachStaticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachStaticIp(this.ops["AttachStaticIp"].applicator.apply(partialParams));
    }
    invokeCloseInstancePublicPorts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.closeInstancePublicPorts(this.ops["CloseInstancePublicPorts"].applicator.apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].applicator.apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(this.ops["CreateBucket"].applicator.apply(partialParams));
    }
    invokeCreateBucketAccessKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucketAccessKey(this.ops["CreateBucketAccessKey"].applicator.apply(partialParams));
    }
    invokeCreateCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCertificate(this.ops["CreateCertificate"].applicator.apply(partialParams));
    }
    invokeCreateCloudFormationStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCloudFormationStack(this.ops["CreateCloudFormationStack"].applicator.apply(partialParams));
    }
    invokeCreateContactMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactMethod(this.ops["CreateContactMethod"].applicator.apply(partialParams));
    }
    invokeCreateContainerService(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerService(this.ops["CreateContainerService"].applicator.apply(partialParams));
    }
    invokeCreateContainerServiceDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerServiceDeployment(this.ops["CreateContainerServiceDeployment"].applicator.apply(partialParams));
    }
    invokeCreateDisk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDisk(this.ops["CreateDisk"].applicator.apply(partialParams));
    }
    invokeCreateDiskFromSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDiskFromSnapshot(this.ops["CreateDiskFromSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateDiskSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDiskSnapshot(this.ops["CreateDiskSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistribution(this.ops["CreateDistribution"].applicator.apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].applicator.apply(partialParams));
    }
    invokeCreateDomainEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainEntry(this.ops["CreateDomainEntry"].applicator.apply(partialParams));
    }
    invokeCreateInstanceSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceSnapshot(this.ops["CreateInstanceSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstances(this.ops["CreateInstances"].applicator.apply(partialParams));
    }
    invokeCreateInstancesFromSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstancesFromSnapshot(this.ops["CreateInstancesFromSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyPair(this.ops["CreateKeyPair"].applicator.apply(partialParams));
    }
    invokeCreateLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoadBalancer(this.ops["CreateLoadBalancer"].applicator.apply(partialParams));
    }
    invokeCreateLoadBalancerTlsCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoadBalancerTlsCertificate(this.ops["CreateLoadBalancerTlsCertificate"].applicator.apply(partialParams));
    }
    invokeCreateRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabase(this.ops["CreateRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeCreateRelationalDatabaseFromSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabaseFromSnapshot(this.ops["CreateRelationalDatabaseFromSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateRelationalDatabaseSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabaseSnapshot(this.ops["CreateRelationalDatabaseSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteAlarm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlarm(this.ops["DeleteAlarm"].applicator.apply(partialParams));
    }
    invokeDeleteAutoSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutoSnapshot(this.ops["DeleteAutoSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(this.ops["DeleteBucket"].applicator.apply(partialParams));
    }
    invokeDeleteBucketAccessKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAccessKey(this.ops["DeleteBucketAccessKey"].applicator.apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteContactMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactMethod(this.ops["DeleteContactMethod"].applicator.apply(partialParams));
    }
    invokeDeleteContainerImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerImage(this.ops["DeleteContainerImage"].applicator.apply(partialParams));
    }
    invokeDeleteContainerService(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerService(this.ops["DeleteContainerService"].applicator.apply(partialParams));
    }
    invokeDeleteDisk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDisk(this.ops["DeleteDisk"].applicator.apply(partialParams));
    }
    invokeDeleteDiskSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDiskSnapshot(this.ops["DeleteDiskSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].applicator.apply(partialParams));
    }
    invokeDeleteDomainEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainEntry(this.ops["DeleteDomainEntry"].applicator.apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(this.ops["DeleteInstance"].applicator.apply(partialParams));
    }
    invokeDeleteInstanceSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceSnapshot(this.ops["DeleteInstanceSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeyPair(this.ops["DeleteKeyPair"].applicator.apply(partialParams));
    }
    invokeDeleteKnownHostKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKnownHostKeys(this.ops["DeleteKnownHostKeys"].applicator.apply(partialParams));
    }
    invokeDeleteLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoadBalancer(this.ops["DeleteLoadBalancer"].applicator.apply(partialParams));
    }
    invokeDeleteLoadBalancerTlsCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoadBalancerTlsCertificate(this.ops["DeleteLoadBalancerTlsCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRelationalDatabase(this.ops["DeleteRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeDeleteRelationalDatabaseSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRelationalDatabaseSnapshot(this.ops["DeleteRelationalDatabaseSnapshot"].applicator.apply(partialParams));
    }
    invokeDetachCertificateFromDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachCertificateFromDistribution(this.ops["DetachCertificateFromDistribution"].applicator.apply(partialParams));
    }
    invokeDetachDisk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachDisk(this.ops["DetachDisk"].applicator.apply(partialParams));
    }
    invokeDetachInstancesFromLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInstancesFromLoadBalancer(this.ops["DetachInstancesFromLoadBalancer"].applicator.apply(partialParams));
    }
    invokeDetachStaticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachStaticIp(this.ops["DetachStaticIp"].applicator.apply(partialParams));
    }
    invokeDisableAddOn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableAddOn(this.ops["DisableAddOn"].applicator.apply(partialParams));
    }
    invokeEnableAddOn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableAddOn(this.ops["EnableAddOn"].applicator.apply(partialParams));
    }
    invokeExportSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportSnapshot(this.ops["ExportSnapshot"].applicator.apply(partialParams));
    }
    invokeGetAutoSnapshots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAutoSnapshots(this.ops["GetAutoSnapshots"].applicator.apply(partialParams));
    }
    invokeGetBucketAccessKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccessKeys(this.ops["GetBucketAccessKeys"].applicator.apply(partialParams));
    }
    invokeGetBucketMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricData(this.ops["GetBucketMetricData"].applicator.apply(partialParams));
    }
    invokeGetContainerImages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerImages(this.ops["GetContainerImages"].applicator.apply(partialParams));
    }
    invokeGetContainerLog(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerLog(this.ops["GetContainerLog"].applicator.apply(partialParams));
    }
    invokeGetContainerServiceDeployments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerServiceDeployments(this.ops["GetContainerServiceDeployments"].applicator.apply(partialParams));
    }
    invokeGetContainerServiceMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerServiceMetricData(this.ops["GetContainerServiceMetricData"].applicator.apply(partialParams));
    }
    invokeGetDisk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDisk(this.ops["GetDisk"].applicator.apply(partialParams));
    }
    invokeGetDiskSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDiskSnapshot(this.ops["GetDiskSnapshot"].applicator.apply(partialParams));
    }
    invokeGetDistributionMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionMetricData(this.ops["GetDistributionMetricData"].applicator.apply(partialParams));
    }
    invokeGetDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomain(this.ops["GetDomain"].applicator.apply(partialParams));
    }
    invokeGetInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstance(this.ops["GetInstance"].applicator.apply(partialParams));
    }
    invokeGetInstanceAccessDetails(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceAccessDetails(this.ops["GetInstanceAccessDetails"].applicator.apply(partialParams));
    }
    invokeGetInstanceMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceMetricData(this.ops["GetInstanceMetricData"].applicator.apply(partialParams));
    }
    invokeGetInstancePortStates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstancePortStates(this.ops["GetInstancePortStates"].applicator.apply(partialParams));
    }
    invokeGetInstanceSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceSnapshot(this.ops["GetInstanceSnapshot"].applicator.apply(partialParams));
    }
    invokeGetInstanceState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceState(this.ops["GetInstanceState"].applicator.apply(partialParams));
    }
    invokeGetKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyPair(this.ops["GetKeyPair"].applicator.apply(partialParams));
    }
    invokeGetLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancer(this.ops["GetLoadBalancer"].applicator.apply(partialParams));
    }
    invokeGetLoadBalancerMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancerMetricData(this.ops["GetLoadBalancerMetricData"].applicator.apply(partialParams));
    }
    invokeGetLoadBalancerTlsCertificates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancerTlsCertificates(this.ops["GetLoadBalancerTlsCertificates"].applicator.apply(partialParams));
    }
    invokeGetOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOperation(this.ops["GetOperation"].applicator.apply(partialParams));
    }
    invokeGetOperationsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOperationsForResource(this.ops["GetOperationsForResource"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabase(this.ops["GetRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseEvents(this.ops["GetRelationalDatabaseEvents"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseLogEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseLogEvents(this.ops["GetRelationalDatabaseLogEvents"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseLogStreams(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseLogStreams(this.ops["GetRelationalDatabaseLogStreams"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseMasterUserPassword(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseMasterUserPassword(this.ops["GetRelationalDatabaseMasterUserPassword"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseMetricData(this.ops["GetRelationalDatabaseMetricData"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseParameters(this.ops["GetRelationalDatabaseParameters"].applicator.apply(partialParams));
    }
    invokeGetRelationalDatabaseSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseSnapshot(this.ops["GetRelationalDatabaseSnapshot"].applicator.apply(partialParams));
    }
    invokeGetStaticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStaticIp(this.ops["GetStaticIp"].applicator.apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyPair(this.ops["ImportKeyPair"].applicator.apply(partialParams));
    }
    invokeOpenInstancePublicPorts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.openInstancePublicPorts(this.ops["OpenInstancePublicPorts"].applicator.apply(partialParams));
    }
    invokePutAlarm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAlarm(this.ops["PutAlarm"].applicator.apply(partialParams));
    }
    invokePutInstancePublicPorts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putInstancePublicPorts(this.ops["PutInstancePublicPorts"].applicator.apply(partialParams));
    }
    invokeRebootInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstance(this.ops["RebootInstance"].applicator.apply(partialParams));
    }
    invokeRebootRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootRelationalDatabase(this.ops["RebootRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeRegisterContainerImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerContainerImage(this.ops["RegisterContainerImage"].applicator.apply(partialParams));
    }
    invokeReleaseStaticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseStaticIp(this.ops["ReleaseStaticIp"].applicator.apply(partialParams));
    }
    invokeSendContactMethodVerification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendContactMethodVerification(this.ops["SendContactMethodVerification"].applicator.apply(partialParams));
    }
    invokeSetIpAddressType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setIpAddressType(this.ops["SetIpAddressType"].applicator.apply(partialParams));
    }
    invokeSetResourceAccessForBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setResourceAccessForBucket(this.ops["SetResourceAccessForBucket"].applicator.apply(partialParams));
    }
    invokeStartInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstance(this.ops["StartInstance"].applicator.apply(partialParams));
    }
    invokeStartRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startRelationalDatabase(this.ops["StartRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeStopInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstance(this.ops["StopInstance"].applicator.apply(partialParams));
    }
    invokeStopRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRelationalDatabase(this.ops["StopRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTestAlarm(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testAlarm(this.ops["TestAlarm"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateBucket(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBucket(this.ops["UpdateBucket"].applicator.apply(partialParams));
    }
    invokeUpdateBucketBundle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBucketBundle(this.ops["UpdateBucketBundle"].applicator.apply(partialParams));
    }
    invokeUpdateContainerService(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContainerService(this.ops["UpdateContainerService"].applicator.apply(partialParams));
    }
    invokeUpdateDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistribution(this.ops["UpdateDistribution"].applicator.apply(partialParams));
    }
    invokeUpdateDomainEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainEntry(this.ops["UpdateDomainEntry"].applicator.apply(partialParams));
    }
    invokeUpdateLoadBalancerAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLoadBalancerAttribute(this.ops["UpdateLoadBalancerAttribute"].applicator.apply(partialParams));
    }
    invokeUpdateRelationalDatabase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRelationalDatabase(this.ops["UpdateRelationalDatabase"].applicator.apply(partialParams));
    }
    invokeUpdateRelationalDatabaseParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRelationalDatabaseParameters(this.ops["UpdateRelationalDatabaseParameters"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
