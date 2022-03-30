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
class default_1 extends aws.lightsail.InstancePublicPorts {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Lightsail();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/lightsail-2016-11-28.normal.json"), this.client);
    }
    invokeAllocateStaticIp(partialParams) {
        return this.client.allocateStaticIp(this.ops["AllocateStaticIp"].apply(partialParams));
    }
    invokeAttachCertificateToDistribution(partialParams) {
        return this.client.attachCertificateToDistribution(this.ops["AttachCertificateToDistribution"].apply(partialParams));
    }
    invokeAttachDisk(partialParams) {
        return this.client.attachDisk(this.ops["AttachDisk"].apply(partialParams));
    }
    invokeAttachInstancesToLoadBalancer(partialParams) {
        return this.client.attachInstancesToLoadBalancer(this.ops["AttachInstancesToLoadBalancer"].apply(partialParams));
    }
    invokeAttachLoadBalancerTlsCertificate(partialParams) {
        return this.client.attachLoadBalancerTlsCertificate(this.ops["AttachLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeAttachStaticIp(partialParams) {
        return this.client.attachStaticIp(this.ops["AttachStaticIp"].apply(partialParams));
    }
    invokeCloseInstancePublicPorts(partialParams) {
        return this.client.closeInstancePublicPorts(this.ops["CloseInstancePublicPorts"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        return this.client.createBucket(this.ops["CreateBucket"].apply(partialParams));
    }
    invokeCreateBucketAccessKey(partialParams) {
        return this.client.createBucketAccessKey(this.ops["CreateBucketAccessKey"].apply(partialParams));
    }
    invokeCreateCertificate(partialParams) {
        return this.client.createCertificate(this.ops["CreateCertificate"].apply(partialParams));
    }
    invokeCreateCloudFormationStack(partialParams) {
        return this.client.createCloudFormationStack(this.ops["CreateCloudFormationStack"].apply(partialParams));
    }
    invokeCreateContactMethod(partialParams) {
        return this.client.createContactMethod(this.ops["CreateContactMethod"].apply(partialParams));
    }
    invokeCreateContainerService(partialParams) {
        return this.client.createContainerService(this.ops["CreateContainerService"].apply(partialParams));
    }
    invokeCreateContainerServiceDeployment(partialParams) {
        return this.client.createContainerServiceDeployment(this.ops["CreateContainerServiceDeployment"].apply(partialParams));
    }
    invokeCreateDisk(partialParams) {
        return this.client.createDisk(this.ops["CreateDisk"].apply(partialParams));
    }
    invokeCreateDiskFromSnapshot(partialParams) {
        return this.client.createDiskFromSnapshot(this.ops["CreateDiskFromSnapshot"].apply(partialParams));
    }
    invokeCreateDiskSnapshot(partialParams) {
        return this.client.createDiskSnapshot(this.ops["CreateDiskSnapshot"].apply(partialParams));
    }
    invokeCreateDistribution(partialParams) {
        return this.client.createDistribution(this.ops["CreateDistribution"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateDomainEntry(partialParams) {
        return this.client.createDomainEntry(this.ops["CreateDomainEntry"].apply(partialParams));
    }
    invokeCreateInstanceSnapshot(partialParams) {
        return this.client.createInstanceSnapshot(this.ops["CreateInstanceSnapshot"].apply(partialParams));
    }
    invokeCreateInstances(partialParams) {
        return this.client.createInstances(this.ops["CreateInstances"].apply(partialParams));
    }
    invokeCreateInstancesFromSnapshot(partialParams) {
        return this.client.createInstancesFromSnapshot(this.ops["CreateInstancesFromSnapshot"].apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        return this.client.createKeyPair(this.ops["CreateKeyPair"].apply(partialParams));
    }
    invokeCreateLoadBalancer(partialParams) {
        return this.client.createLoadBalancer(this.ops["CreateLoadBalancer"].apply(partialParams));
    }
    invokeCreateLoadBalancerTlsCertificate(partialParams) {
        return this.client.createLoadBalancerTlsCertificate(this.ops["CreateLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeCreateRelationalDatabase(partialParams) {
        return this.client.createRelationalDatabase(this.ops["CreateRelationalDatabase"].apply(partialParams));
    }
    invokeCreateRelationalDatabaseFromSnapshot(partialParams) {
        return this.client.createRelationalDatabaseFromSnapshot(this.ops["CreateRelationalDatabaseFromSnapshot"].apply(partialParams));
    }
    invokeCreateRelationalDatabaseSnapshot(partialParams) {
        return this.client.createRelationalDatabaseSnapshot(this.ops["CreateRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeDeleteAlarm(partialParams) {
        return this.client.deleteAlarm(this.ops["DeleteAlarm"].apply(partialParams));
    }
    invokeDeleteAutoSnapshot(partialParams) {
        return this.client.deleteAutoSnapshot(this.ops["DeleteAutoSnapshot"].apply(partialParams));
    }
    invokeDeleteBucket(partialParams) {
        return this.client.deleteBucket(this.ops["DeleteBucket"].apply(partialParams));
    }
    invokeDeleteBucketAccessKey(partialParams) {
        return this.client.deleteBucketAccessKey(this.ops["DeleteBucketAccessKey"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDeleteContactMethod(partialParams) {
        return this.client.deleteContactMethod(this.ops["DeleteContactMethod"].apply(partialParams));
    }
    invokeDeleteContainerImage(partialParams) {
        return this.client.deleteContainerImage(this.ops["DeleteContainerImage"].apply(partialParams));
    }
    invokeDeleteContainerService(partialParams) {
        return this.client.deleteContainerService(this.ops["DeleteContainerService"].apply(partialParams));
    }
    invokeDeleteDisk(partialParams) {
        return this.client.deleteDisk(this.ops["DeleteDisk"].apply(partialParams));
    }
    invokeDeleteDiskSnapshot(partialParams) {
        return this.client.deleteDiskSnapshot(this.ops["DeleteDiskSnapshot"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteDomainEntry(partialParams) {
        return this.client.deleteDomainEntry(this.ops["DeleteDomainEntry"].apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        return this.client.deleteInstance(this.ops["DeleteInstance"].apply(partialParams));
    }
    invokeDeleteInstanceSnapshot(partialParams) {
        return this.client.deleteInstanceSnapshot(this.ops["DeleteInstanceSnapshot"].apply(partialParams));
    }
    invokeDeleteKeyPair(partialParams) {
        return this.client.deleteKeyPair(this.ops["DeleteKeyPair"].apply(partialParams));
    }
    invokeDeleteKnownHostKeys(partialParams) {
        return this.client.deleteKnownHostKeys(this.ops["DeleteKnownHostKeys"].apply(partialParams));
    }
    invokeDeleteLoadBalancer(partialParams) {
        return this.client.deleteLoadBalancer(this.ops["DeleteLoadBalancer"].apply(partialParams));
    }
    invokeDeleteLoadBalancerTlsCertificate(partialParams) {
        return this.client.deleteLoadBalancerTlsCertificate(this.ops["DeleteLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeDeleteRelationalDatabase(partialParams) {
        return this.client.deleteRelationalDatabase(this.ops["DeleteRelationalDatabase"].apply(partialParams));
    }
    invokeDeleteRelationalDatabaseSnapshot(partialParams) {
        return this.client.deleteRelationalDatabaseSnapshot(this.ops["DeleteRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeDetachCertificateFromDistribution(partialParams) {
        return this.client.detachCertificateFromDistribution(this.ops["DetachCertificateFromDistribution"].apply(partialParams));
    }
    invokeDetachDisk(partialParams) {
        return this.client.detachDisk(this.ops["DetachDisk"].apply(partialParams));
    }
    invokeDetachInstancesFromLoadBalancer(partialParams) {
        return this.client.detachInstancesFromLoadBalancer(this.ops["DetachInstancesFromLoadBalancer"].apply(partialParams));
    }
    invokeDetachStaticIp(partialParams) {
        return this.client.detachStaticIp(this.ops["DetachStaticIp"].apply(partialParams));
    }
    invokeDisableAddOn(partialParams) {
        return this.client.disableAddOn(this.ops["DisableAddOn"].apply(partialParams));
    }
    invokeEnableAddOn(partialParams) {
        return this.client.enableAddOn(this.ops["EnableAddOn"].apply(partialParams));
    }
    invokeExportSnapshot(partialParams) {
        return this.client.exportSnapshot(this.ops["ExportSnapshot"].apply(partialParams));
    }
    invokeGetAutoSnapshots(partialParams) {
        return this.client.getAutoSnapshots(this.ops["GetAutoSnapshots"].apply(partialParams));
    }
    invokeGetBucketAccessKeys(partialParams) {
        return this.client.getBucketAccessKeys(this.ops["GetBucketAccessKeys"].apply(partialParams));
    }
    invokeGetBucketMetricData(partialParams) {
        return this.client.getBucketMetricData(this.ops["GetBucketMetricData"].apply(partialParams));
    }
    invokeGetContainerImages(partialParams) {
        return this.client.getContainerImages(this.ops["GetContainerImages"].apply(partialParams));
    }
    invokeGetContainerLog(partialParams) {
        return this.client.getContainerLog(this.ops["GetContainerLog"].apply(partialParams));
    }
    invokeGetContainerServiceDeployments(partialParams) {
        return this.client.getContainerServiceDeployments(this.ops["GetContainerServiceDeployments"].apply(partialParams));
    }
    invokeGetContainerServiceMetricData(partialParams) {
        return this.client.getContainerServiceMetricData(this.ops["GetContainerServiceMetricData"].apply(partialParams));
    }
    invokeGetDisk(partialParams) {
        return this.client.getDisk(this.ops["GetDisk"].apply(partialParams));
    }
    invokeGetDiskSnapshot(partialParams) {
        return this.client.getDiskSnapshot(this.ops["GetDiskSnapshot"].apply(partialParams));
    }
    invokeGetDistributionMetricData(partialParams) {
        return this.client.getDistributionMetricData(this.ops["GetDistributionMetricData"].apply(partialParams));
    }
    invokeGetDomain(partialParams) {
        return this.client.getDomain(this.ops["GetDomain"].apply(partialParams));
    }
    invokeGetInstance(partialParams) {
        return this.client.getInstance(this.ops["GetInstance"].apply(partialParams));
    }
    invokeGetInstanceAccessDetails(partialParams) {
        return this.client.getInstanceAccessDetails(this.ops["GetInstanceAccessDetails"].apply(partialParams));
    }
    invokeGetInstanceMetricData(partialParams) {
        return this.client.getInstanceMetricData(this.ops["GetInstanceMetricData"].apply(partialParams));
    }
    invokeGetInstancePortStates(partialParams) {
        return this.client.getInstancePortStates(this.ops["GetInstancePortStates"].apply(partialParams));
    }
    invokeGetInstanceSnapshot(partialParams) {
        return this.client.getInstanceSnapshot(this.ops["GetInstanceSnapshot"].apply(partialParams));
    }
    invokeGetInstanceState(partialParams) {
        return this.client.getInstanceState(this.ops["GetInstanceState"].apply(partialParams));
    }
    invokeGetKeyPair(partialParams) {
        return this.client.getKeyPair(this.ops["GetKeyPair"].apply(partialParams));
    }
    invokeGetLoadBalancer(partialParams) {
        return this.client.getLoadBalancer(this.ops["GetLoadBalancer"].apply(partialParams));
    }
    invokeGetLoadBalancerMetricData(partialParams) {
        return this.client.getLoadBalancerMetricData(this.ops["GetLoadBalancerMetricData"].apply(partialParams));
    }
    invokeGetLoadBalancerTlsCertificates(partialParams) {
        return this.client.getLoadBalancerTlsCertificates(this.ops["GetLoadBalancerTlsCertificates"].apply(partialParams));
    }
    invokeGetOperation(partialParams) {
        return this.client.getOperation(this.ops["GetOperation"].apply(partialParams));
    }
    invokeGetOperationsForResource(partialParams) {
        return this.client.getOperationsForResource(this.ops["GetOperationsForResource"].apply(partialParams));
    }
    invokeGetRelationalDatabase(partialParams) {
        return this.client.getRelationalDatabase(this.ops["GetRelationalDatabase"].apply(partialParams));
    }
    invokeGetRelationalDatabaseEvents(partialParams) {
        return this.client.getRelationalDatabaseEvents(this.ops["GetRelationalDatabaseEvents"].apply(partialParams));
    }
    invokeGetRelationalDatabaseLogEvents(partialParams) {
        return this.client.getRelationalDatabaseLogEvents(this.ops["GetRelationalDatabaseLogEvents"].apply(partialParams));
    }
    invokeGetRelationalDatabaseLogStreams(partialParams) {
        return this.client.getRelationalDatabaseLogStreams(this.ops["GetRelationalDatabaseLogStreams"].apply(partialParams));
    }
    invokeGetRelationalDatabaseMasterUserPassword(partialParams) {
        return this.client.getRelationalDatabaseMasterUserPassword(this.ops["GetRelationalDatabaseMasterUserPassword"].apply(partialParams));
    }
    invokeGetRelationalDatabaseMetricData(partialParams) {
        return this.client.getRelationalDatabaseMetricData(this.ops["GetRelationalDatabaseMetricData"].apply(partialParams));
    }
    invokeGetRelationalDatabaseParameters(partialParams) {
        return this.client.getRelationalDatabaseParameters(this.ops["GetRelationalDatabaseParameters"].apply(partialParams));
    }
    invokeGetRelationalDatabaseSnapshot(partialParams) {
        return this.client.getRelationalDatabaseSnapshot(this.ops["GetRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeGetStaticIp(partialParams) {
        return this.client.getStaticIp(this.ops["GetStaticIp"].apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        return this.client.importKeyPair(this.ops["ImportKeyPair"].apply(partialParams));
    }
    invokeOpenInstancePublicPorts(partialParams) {
        return this.client.openInstancePublicPorts(this.ops["OpenInstancePublicPorts"].apply(partialParams));
    }
    invokePutAlarm(partialParams) {
        return this.client.putAlarm(this.ops["PutAlarm"].apply(partialParams));
    }
    invokePutInstancePublicPorts(partialParams) {
        return this.client.putInstancePublicPorts(this.ops["PutInstancePublicPorts"].apply(partialParams));
    }
    invokeRebootInstance(partialParams) {
        return this.client.rebootInstance(this.ops["RebootInstance"].apply(partialParams));
    }
    invokeRebootRelationalDatabase(partialParams) {
        return this.client.rebootRelationalDatabase(this.ops["RebootRelationalDatabase"].apply(partialParams));
    }
    invokeRegisterContainerImage(partialParams) {
        return this.client.registerContainerImage(this.ops["RegisterContainerImage"].apply(partialParams));
    }
    invokeReleaseStaticIp(partialParams) {
        return this.client.releaseStaticIp(this.ops["ReleaseStaticIp"].apply(partialParams));
    }
    invokeSendContactMethodVerification(partialParams) {
        return this.client.sendContactMethodVerification(this.ops["SendContactMethodVerification"].apply(partialParams));
    }
    invokeSetIpAddressType(partialParams) {
        return this.client.setIpAddressType(this.ops["SetIpAddressType"].apply(partialParams));
    }
    invokeSetResourceAccessForBucket(partialParams) {
        return this.client.setResourceAccessForBucket(this.ops["SetResourceAccessForBucket"].apply(partialParams));
    }
    invokeStartInstance(partialParams) {
        return this.client.startInstance(this.ops["StartInstance"].apply(partialParams));
    }
    invokeStartRelationalDatabase(partialParams) {
        return this.client.startRelationalDatabase(this.ops["StartRelationalDatabase"].apply(partialParams));
    }
    invokeStopInstance(partialParams) {
        return this.client.stopInstance(this.ops["StopInstance"].apply(partialParams));
    }
    invokeStopRelationalDatabase(partialParams) {
        return this.client.stopRelationalDatabase(this.ops["StopRelationalDatabase"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestAlarm(partialParams) {
        return this.client.testAlarm(this.ops["TestAlarm"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateBucket(partialParams) {
        return this.client.updateBucket(this.ops["UpdateBucket"].apply(partialParams));
    }
    invokeUpdateBucketBundle(partialParams) {
        return this.client.updateBucketBundle(this.ops["UpdateBucketBundle"].apply(partialParams));
    }
    invokeUpdateContainerService(partialParams) {
        return this.client.updateContainerService(this.ops["UpdateContainerService"].apply(partialParams));
    }
    invokeUpdateDistribution(partialParams) {
        return this.client.updateDistribution(this.ops["UpdateDistribution"].apply(partialParams));
    }
    invokeUpdateDomainEntry(partialParams) {
        return this.client.updateDomainEntry(this.ops["UpdateDomainEntry"].apply(partialParams));
    }
    invokeUpdateLoadBalancerAttribute(partialParams) {
        return this.client.updateLoadBalancerAttribute(this.ops["UpdateLoadBalancerAttribute"].apply(partialParams));
    }
    invokeUpdateRelationalDatabase(partialParams) {
        return this.client.updateRelationalDatabase(this.ops["UpdateRelationalDatabase"].apply(partialParams));
    }
    invokeUpdateRelationalDatabaseParameters(partialParams) {
        return this.client.updateRelationalDatabaseParameters(this.ops["UpdateRelationalDatabaseParameters"].apply(partialParams));
    }
}
exports.default = default_1;
