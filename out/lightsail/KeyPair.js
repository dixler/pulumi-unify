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
class default_1 extends aws.lightsail.KeyPair {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Lightsail();
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
    invokeAllocateStaticIp(partialParams) {
        this.boot();
        return this.client.allocateStaticIp(this.ops["AllocateStaticIp"].apply(partialParams));
    }
    invokeAttachCertificateToDistribution(partialParams) {
        this.boot();
        return this.client.attachCertificateToDistribution(this.ops["AttachCertificateToDistribution"].apply(partialParams));
    }
    invokeAttachDisk(partialParams) {
        this.boot();
        return this.client.attachDisk(this.ops["AttachDisk"].apply(partialParams));
    }
    invokeAttachInstancesToLoadBalancer(partialParams) {
        this.boot();
        return this.client.attachInstancesToLoadBalancer(this.ops["AttachInstancesToLoadBalancer"].apply(partialParams));
    }
    invokeAttachLoadBalancerTlsCertificate(partialParams) {
        this.boot();
        return this.client.attachLoadBalancerTlsCertificate(this.ops["AttachLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeAttachStaticIp(partialParams) {
        this.boot();
        return this.client.attachStaticIp(this.ops["AttachStaticIp"].apply(partialParams));
    }
    invokeCloseInstancePublicPorts(partialParams) {
        this.boot();
        return this.client.closeInstancePublicPorts(this.ops["CloseInstancePublicPorts"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateBucket(partialParams) {
        this.boot();
        return this.client.createBucket(this.ops["CreateBucket"].apply(partialParams));
    }
    invokeCreateBucketAccessKey(partialParams) {
        this.boot();
        return this.client.createBucketAccessKey(this.ops["CreateBucketAccessKey"].apply(partialParams));
    }
    invokeCreateCertificate(partialParams) {
        this.boot();
        return this.client.createCertificate(this.ops["CreateCertificate"].apply(partialParams));
    }
    invokeCreateCloudFormationStack(partialParams) {
        this.boot();
        return this.client.createCloudFormationStack(this.ops["CreateCloudFormationStack"].apply(partialParams));
    }
    invokeCreateContactMethod(partialParams) {
        this.boot();
        return this.client.createContactMethod(this.ops["CreateContactMethod"].apply(partialParams));
    }
    invokeCreateContainerService(partialParams) {
        this.boot();
        return this.client.createContainerService(this.ops["CreateContainerService"].apply(partialParams));
    }
    invokeCreateContainerServiceDeployment(partialParams) {
        this.boot();
        return this.client.createContainerServiceDeployment(this.ops["CreateContainerServiceDeployment"].apply(partialParams));
    }
    invokeCreateContainerServiceRegistryLogin(partialParams) {
        this.boot();
        return this.client.createContainerServiceRegistryLogin(this.ops["CreateContainerServiceRegistryLogin"].apply(partialParams));
    }
    invokeCreateDisk(partialParams) {
        this.boot();
        return this.client.createDisk(this.ops["CreateDisk"].apply(partialParams));
    }
    invokeCreateDiskFromSnapshot(partialParams) {
        this.boot();
        return this.client.createDiskFromSnapshot(this.ops["CreateDiskFromSnapshot"].apply(partialParams));
    }
    invokeCreateDiskSnapshot(partialParams) {
        this.boot();
        return this.client.createDiskSnapshot(this.ops["CreateDiskSnapshot"].apply(partialParams));
    }
    invokeCreateDistribution(partialParams) {
        this.boot();
        return this.client.createDistribution(this.ops["CreateDistribution"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateDomainEntry(partialParams) {
        this.boot();
        return this.client.createDomainEntry(this.ops["CreateDomainEntry"].apply(partialParams));
    }
    invokeCreateInstanceSnapshot(partialParams) {
        this.boot();
        return this.client.createInstanceSnapshot(this.ops["CreateInstanceSnapshot"].apply(partialParams));
    }
    invokeCreateInstances(partialParams) {
        this.boot();
        return this.client.createInstances(this.ops["CreateInstances"].apply(partialParams));
    }
    invokeCreateInstancesFromSnapshot(partialParams) {
        this.boot();
        return this.client.createInstancesFromSnapshot(this.ops["CreateInstancesFromSnapshot"].apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        this.boot();
        return this.client.createKeyPair(this.ops["CreateKeyPair"].apply(partialParams));
    }
    invokeCreateLoadBalancer(partialParams) {
        this.boot();
        return this.client.createLoadBalancer(this.ops["CreateLoadBalancer"].apply(partialParams));
    }
    invokeCreateLoadBalancerTlsCertificate(partialParams) {
        this.boot();
        return this.client.createLoadBalancerTlsCertificate(this.ops["CreateLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeCreateRelationalDatabase(partialParams) {
        this.boot();
        return this.client.createRelationalDatabase(this.ops["CreateRelationalDatabase"].apply(partialParams));
    }
    invokeCreateRelationalDatabaseFromSnapshot(partialParams) {
        this.boot();
        return this.client.createRelationalDatabaseFromSnapshot(this.ops["CreateRelationalDatabaseFromSnapshot"].apply(partialParams));
    }
    invokeCreateRelationalDatabaseSnapshot(partialParams) {
        this.boot();
        return this.client.createRelationalDatabaseSnapshot(this.ops["CreateRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeDeleteAlarm(partialParams) {
        this.boot();
        return this.client.deleteAlarm(this.ops["DeleteAlarm"].apply(partialParams));
    }
    invokeDeleteAutoSnapshot(partialParams) {
        this.boot();
        return this.client.deleteAutoSnapshot(this.ops["DeleteAutoSnapshot"].apply(partialParams));
    }
    invokeDeleteBucket(partialParams) {
        this.boot();
        return this.client.deleteBucket(this.ops["DeleteBucket"].apply(partialParams));
    }
    invokeDeleteBucketAccessKey(partialParams) {
        this.boot();
        return this.client.deleteBucketAccessKey(this.ops["DeleteBucketAccessKey"].apply(partialParams));
    }
    invokeDeleteCertificate(partialParams) {
        this.boot();
        return this.client.deleteCertificate(this.ops["DeleteCertificate"].apply(partialParams));
    }
    invokeDeleteContactMethod(partialParams) {
        this.boot();
        return this.client.deleteContactMethod(this.ops["DeleteContactMethod"].apply(partialParams));
    }
    invokeDeleteContainerImage(partialParams) {
        this.boot();
        return this.client.deleteContainerImage(this.ops["DeleteContainerImage"].apply(partialParams));
    }
    invokeDeleteContainerService(partialParams) {
        this.boot();
        return this.client.deleteContainerService(this.ops["DeleteContainerService"].apply(partialParams));
    }
    invokeDeleteDisk(partialParams) {
        this.boot();
        return this.client.deleteDisk(this.ops["DeleteDisk"].apply(partialParams));
    }
    invokeDeleteDiskSnapshot(partialParams) {
        this.boot();
        return this.client.deleteDiskSnapshot(this.ops["DeleteDiskSnapshot"].apply(partialParams));
    }
    invokeDeleteDistribution(partialParams) {
        this.boot();
        return this.client.deleteDistribution(this.ops["DeleteDistribution"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteDomainEntry(partialParams) {
        this.boot();
        return this.client.deleteDomainEntry(this.ops["DeleteDomainEntry"].apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        this.boot();
        return this.client.deleteInstance(this.ops["DeleteInstance"].apply(partialParams));
    }
    invokeDeleteInstanceSnapshot(partialParams) {
        this.boot();
        return this.client.deleteInstanceSnapshot(this.ops["DeleteInstanceSnapshot"].apply(partialParams));
    }
    invokeDeleteKeyPair(partialParams) {
        this.boot();
        return this.client.deleteKeyPair(this.ops["DeleteKeyPair"].apply(partialParams));
    }
    invokeDeleteKnownHostKeys(partialParams) {
        this.boot();
        return this.client.deleteKnownHostKeys(this.ops["DeleteKnownHostKeys"].apply(partialParams));
    }
    invokeDeleteLoadBalancer(partialParams) {
        this.boot();
        return this.client.deleteLoadBalancer(this.ops["DeleteLoadBalancer"].apply(partialParams));
    }
    invokeDeleteLoadBalancerTlsCertificate(partialParams) {
        this.boot();
        return this.client.deleteLoadBalancerTlsCertificate(this.ops["DeleteLoadBalancerTlsCertificate"].apply(partialParams));
    }
    invokeDeleteRelationalDatabase(partialParams) {
        this.boot();
        return this.client.deleteRelationalDatabase(this.ops["DeleteRelationalDatabase"].apply(partialParams));
    }
    invokeDeleteRelationalDatabaseSnapshot(partialParams) {
        this.boot();
        return this.client.deleteRelationalDatabaseSnapshot(this.ops["DeleteRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeDetachCertificateFromDistribution(partialParams) {
        this.boot();
        return this.client.detachCertificateFromDistribution(this.ops["DetachCertificateFromDistribution"].apply(partialParams));
    }
    invokeDetachDisk(partialParams) {
        this.boot();
        return this.client.detachDisk(this.ops["DetachDisk"].apply(partialParams));
    }
    invokeDetachInstancesFromLoadBalancer(partialParams) {
        this.boot();
        return this.client.detachInstancesFromLoadBalancer(this.ops["DetachInstancesFromLoadBalancer"].apply(partialParams));
    }
    invokeDetachStaticIp(partialParams) {
        this.boot();
        return this.client.detachStaticIp(this.ops["DetachStaticIp"].apply(partialParams));
    }
    invokeDisableAddOn(partialParams) {
        this.boot();
        return this.client.disableAddOn(this.ops["DisableAddOn"].apply(partialParams));
    }
    invokeDownloadDefaultKeyPair(partialParams) {
        this.boot();
        return this.client.downloadDefaultKeyPair(this.ops["DownloadDefaultKeyPair"].apply(partialParams));
    }
    invokeEnableAddOn(partialParams) {
        this.boot();
        return this.client.enableAddOn(this.ops["EnableAddOn"].apply(partialParams));
    }
    invokeExportSnapshot(partialParams) {
        this.boot();
        return this.client.exportSnapshot(this.ops["ExportSnapshot"].apply(partialParams));
    }
    invokeGetActiveNames(partialParams) {
        this.boot();
        return this.client.getActiveNames(this.ops["GetActiveNames"].apply(partialParams));
    }
    invokeGetAlarms(partialParams) {
        this.boot();
        return this.client.getAlarms(this.ops["GetAlarms"].apply(partialParams));
    }
    invokeGetAutoSnapshots(partialParams) {
        this.boot();
        return this.client.getAutoSnapshots(this.ops["GetAutoSnapshots"].apply(partialParams));
    }
    invokeGetBlueprints(partialParams) {
        this.boot();
        return this.client.getBlueprints(this.ops["GetBlueprints"].apply(partialParams));
    }
    invokeGetBucketAccessKeys(partialParams) {
        this.boot();
        return this.client.getBucketAccessKeys(this.ops["GetBucketAccessKeys"].apply(partialParams));
    }
    invokeGetBucketBundles(partialParams) {
        this.boot();
        return this.client.getBucketBundles(this.ops["GetBucketBundles"].apply(partialParams));
    }
    invokeGetBucketMetricData(partialParams) {
        this.boot();
        return this.client.getBucketMetricData(this.ops["GetBucketMetricData"].apply(partialParams));
    }
    invokeGetBuckets(partialParams) {
        this.boot();
        return this.client.getBuckets(this.ops["GetBuckets"].apply(partialParams));
    }
    invokeGetBundles(partialParams) {
        this.boot();
        return this.client.getBundles(this.ops["GetBundles"].apply(partialParams));
    }
    invokeGetCertificates(partialParams) {
        this.boot();
        return this.client.getCertificates(this.ops["GetCertificates"].apply(partialParams));
    }
    invokeGetCloudFormationStackRecords(partialParams) {
        this.boot();
        return this.client.getCloudFormationStackRecords(this.ops["GetCloudFormationStackRecords"].apply(partialParams));
    }
    invokeGetContactMethods(partialParams) {
        this.boot();
        return this.client.getContactMethods(this.ops["GetContactMethods"].apply(partialParams));
    }
    invokeGetContainerAPIMetadata(partialParams) {
        this.boot();
        return this.client.getContainerAPIMetadata(this.ops["GetContainerAPIMetadata"].apply(partialParams));
    }
    invokeGetContainerImages(partialParams) {
        this.boot();
        return this.client.getContainerImages(this.ops["GetContainerImages"].apply(partialParams));
    }
    invokeGetContainerLog(partialParams) {
        this.boot();
        return this.client.getContainerLog(this.ops["GetContainerLog"].apply(partialParams));
    }
    invokeGetContainerServiceDeployments(partialParams) {
        this.boot();
        return this.client.getContainerServiceDeployments(this.ops["GetContainerServiceDeployments"].apply(partialParams));
    }
    invokeGetContainerServiceMetricData(partialParams) {
        this.boot();
        return this.client.getContainerServiceMetricData(this.ops["GetContainerServiceMetricData"].apply(partialParams));
    }
    invokeGetContainerServicePowers(partialParams) {
        this.boot();
        return this.client.getContainerServicePowers(this.ops["GetContainerServicePowers"].apply(partialParams));
    }
    invokeGetContainerServices(partialParams) {
        this.boot();
        return this.client.getContainerServices(this.ops["GetContainerServices"].apply(partialParams));
    }
    invokeGetDisk(partialParams) {
        this.boot();
        return this.client.getDisk(this.ops["GetDisk"].apply(partialParams));
    }
    invokeGetDiskSnapshot(partialParams) {
        this.boot();
        return this.client.getDiskSnapshot(this.ops["GetDiskSnapshot"].apply(partialParams));
    }
    invokeGetDiskSnapshots(partialParams) {
        this.boot();
        return this.client.getDiskSnapshots(this.ops["GetDiskSnapshots"].apply(partialParams));
    }
    invokeGetDisks(partialParams) {
        this.boot();
        return this.client.getDisks(this.ops["GetDisks"].apply(partialParams));
    }
    invokeGetDistributionBundles(partialParams) {
        this.boot();
        return this.client.getDistributionBundles(this.ops["GetDistributionBundles"].apply(partialParams));
    }
    invokeGetDistributionLatestCacheReset(partialParams) {
        this.boot();
        return this.client.getDistributionLatestCacheReset(this.ops["GetDistributionLatestCacheReset"].apply(partialParams));
    }
    invokeGetDistributionMetricData(partialParams) {
        this.boot();
        return this.client.getDistributionMetricData(this.ops["GetDistributionMetricData"].apply(partialParams));
    }
    invokeGetDistributions(partialParams) {
        this.boot();
        return this.client.getDistributions(this.ops["GetDistributions"].apply(partialParams));
    }
    invokeGetDomain(partialParams) {
        this.boot();
        return this.client.getDomain(this.ops["GetDomain"].apply(partialParams));
    }
    invokeGetDomains(partialParams) {
        this.boot();
        return this.client.getDomains(this.ops["GetDomains"].apply(partialParams));
    }
    invokeGetExportSnapshotRecords(partialParams) {
        this.boot();
        return this.client.getExportSnapshotRecords(this.ops["GetExportSnapshotRecords"].apply(partialParams));
    }
    invokeGetInstance(partialParams) {
        this.boot();
        return this.client.getInstance(this.ops["GetInstance"].apply(partialParams));
    }
    invokeGetInstanceAccessDetails(partialParams) {
        this.boot();
        return this.client.getInstanceAccessDetails(this.ops["GetInstanceAccessDetails"].apply(partialParams));
    }
    invokeGetInstanceMetricData(partialParams) {
        this.boot();
        return this.client.getInstanceMetricData(this.ops["GetInstanceMetricData"].apply(partialParams));
    }
    invokeGetInstancePortStates(partialParams) {
        this.boot();
        return this.client.getInstancePortStates(this.ops["GetInstancePortStates"].apply(partialParams));
    }
    invokeGetInstanceSnapshot(partialParams) {
        this.boot();
        return this.client.getInstanceSnapshot(this.ops["GetInstanceSnapshot"].apply(partialParams));
    }
    invokeGetInstanceSnapshots(partialParams) {
        this.boot();
        return this.client.getInstanceSnapshots(this.ops["GetInstanceSnapshots"].apply(partialParams));
    }
    invokeGetInstanceState(partialParams) {
        this.boot();
        return this.client.getInstanceState(this.ops["GetInstanceState"].apply(partialParams));
    }
    invokeGetInstances(partialParams) {
        this.boot();
        return this.client.getInstances(this.ops["GetInstances"].apply(partialParams));
    }
    invokeGetKeyPair(partialParams) {
        this.boot();
        return this.client.getKeyPair(this.ops["GetKeyPair"].apply(partialParams));
    }
    invokeGetKeyPairs(partialParams) {
        this.boot();
        return this.client.getKeyPairs(this.ops["GetKeyPairs"].apply(partialParams));
    }
    invokeGetLoadBalancer(partialParams) {
        this.boot();
        return this.client.getLoadBalancer(this.ops["GetLoadBalancer"].apply(partialParams));
    }
    invokeGetLoadBalancerMetricData(partialParams) {
        this.boot();
        return this.client.getLoadBalancerMetricData(this.ops["GetLoadBalancerMetricData"].apply(partialParams));
    }
    invokeGetLoadBalancerTlsCertificates(partialParams) {
        this.boot();
        return this.client.getLoadBalancerTlsCertificates(this.ops["GetLoadBalancerTlsCertificates"].apply(partialParams));
    }
    invokeGetLoadBalancers(partialParams) {
        this.boot();
        return this.client.getLoadBalancers(this.ops["GetLoadBalancers"].apply(partialParams));
    }
    invokeGetOperation(partialParams) {
        this.boot();
        return this.client.getOperation(this.ops["GetOperation"].apply(partialParams));
    }
    invokeGetOperations(partialParams) {
        this.boot();
        return this.client.getOperations(this.ops["GetOperations"].apply(partialParams));
    }
    invokeGetOperationsForResource(partialParams) {
        this.boot();
        return this.client.getOperationsForResource(this.ops["GetOperationsForResource"].apply(partialParams));
    }
    invokeGetRegions(partialParams) {
        this.boot();
        return this.client.getRegions(this.ops["GetRegions"].apply(partialParams));
    }
    invokeGetRelationalDatabase(partialParams) {
        this.boot();
        return this.client.getRelationalDatabase(this.ops["GetRelationalDatabase"].apply(partialParams));
    }
    invokeGetRelationalDatabaseBlueprints(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseBlueprints(this.ops["GetRelationalDatabaseBlueprints"].apply(partialParams));
    }
    invokeGetRelationalDatabaseBundles(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseBundles(this.ops["GetRelationalDatabaseBundles"].apply(partialParams));
    }
    invokeGetRelationalDatabaseEvents(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseEvents(this.ops["GetRelationalDatabaseEvents"].apply(partialParams));
    }
    invokeGetRelationalDatabaseLogEvents(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseLogEvents(this.ops["GetRelationalDatabaseLogEvents"].apply(partialParams));
    }
    invokeGetRelationalDatabaseLogStreams(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseLogStreams(this.ops["GetRelationalDatabaseLogStreams"].apply(partialParams));
    }
    invokeGetRelationalDatabaseMasterUserPassword(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseMasterUserPassword(this.ops["GetRelationalDatabaseMasterUserPassword"].apply(partialParams));
    }
    invokeGetRelationalDatabaseMetricData(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseMetricData(this.ops["GetRelationalDatabaseMetricData"].apply(partialParams));
    }
    invokeGetRelationalDatabaseParameters(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseParameters(this.ops["GetRelationalDatabaseParameters"].apply(partialParams));
    }
    invokeGetRelationalDatabaseSnapshot(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseSnapshot(this.ops["GetRelationalDatabaseSnapshot"].apply(partialParams));
    }
    invokeGetRelationalDatabaseSnapshots(partialParams) {
        this.boot();
        return this.client.getRelationalDatabaseSnapshots(this.ops["GetRelationalDatabaseSnapshots"].apply(partialParams));
    }
    invokeGetRelationalDatabases(partialParams) {
        this.boot();
        return this.client.getRelationalDatabases(this.ops["GetRelationalDatabases"].apply(partialParams));
    }
    invokeGetStaticIp(partialParams) {
        this.boot();
        return this.client.getStaticIp(this.ops["GetStaticIp"].apply(partialParams));
    }
    invokeGetStaticIps(partialParams) {
        this.boot();
        return this.client.getStaticIps(this.ops["GetStaticIps"].apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        this.boot();
        return this.client.importKeyPair(this.ops["ImportKeyPair"].apply(partialParams));
    }
    invokeIsVpcPeered(partialParams) {
        this.boot();
        return this.client.isVpcPeered(this.ops["IsVpcPeered"].apply(partialParams));
    }
    invokeOpenInstancePublicPorts(partialParams) {
        this.boot();
        return this.client.openInstancePublicPorts(this.ops["OpenInstancePublicPorts"].apply(partialParams));
    }
    invokePeerVpc(partialParams) {
        this.boot();
        return this.client.peerVpc(this.ops["PeerVpc"].apply(partialParams));
    }
    invokePutAlarm(partialParams) {
        this.boot();
        return this.client.putAlarm(this.ops["PutAlarm"].apply(partialParams));
    }
    invokePutInstancePublicPorts(partialParams) {
        this.boot();
        return this.client.putInstancePublicPorts(this.ops["PutInstancePublicPorts"].apply(partialParams));
    }
    invokeRebootInstance(partialParams) {
        this.boot();
        return this.client.rebootInstance(this.ops["RebootInstance"].apply(partialParams));
    }
    invokeRebootRelationalDatabase(partialParams) {
        this.boot();
        return this.client.rebootRelationalDatabase(this.ops["RebootRelationalDatabase"].apply(partialParams));
    }
    invokeRegisterContainerImage(partialParams) {
        this.boot();
        return this.client.registerContainerImage(this.ops["RegisterContainerImage"].apply(partialParams));
    }
    invokeReleaseStaticIp(partialParams) {
        this.boot();
        return this.client.releaseStaticIp(this.ops["ReleaseStaticIp"].apply(partialParams));
    }
    invokeResetDistributionCache(partialParams) {
        this.boot();
        return this.client.resetDistributionCache(this.ops["ResetDistributionCache"].apply(partialParams));
    }
    invokeSendContactMethodVerification(partialParams) {
        this.boot();
        return this.client.sendContactMethodVerification(this.ops["SendContactMethodVerification"].apply(partialParams));
    }
    invokeSetIpAddressType(partialParams) {
        this.boot();
        return this.client.setIpAddressType(this.ops["SetIpAddressType"].apply(partialParams));
    }
    invokeSetResourceAccessForBucket(partialParams) {
        this.boot();
        return this.client.setResourceAccessForBucket(this.ops["SetResourceAccessForBucket"].apply(partialParams));
    }
    invokeStartInstance(partialParams) {
        this.boot();
        return this.client.startInstance(this.ops["StartInstance"].apply(partialParams));
    }
    invokeStartRelationalDatabase(partialParams) {
        this.boot();
        return this.client.startRelationalDatabase(this.ops["StartRelationalDatabase"].apply(partialParams));
    }
    invokeStopInstance(partialParams) {
        this.boot();
        return this.client.stopInstance(this.ops["StopInstance"].apply(partialParams));
    }
    invokeStopRelationalDatabase(partialParams) {
        this.boot();
        return this.client.stopRelationalDatabase(this.ops["StopRelationalDatabase"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestAlarm(partialParams) {
        this.boot();
        return this.client.testAlarm(this.ops["TestAlarm"].apply(partialParams));
    }
    invokeUnpeerVpc(partialParams) {
        this.boot();
        return this.client.unpeerVpc(this.ops["UnpeerVpc"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateBucket(partialParams) {
        this.boot();
        return this.client.updateBucket(this.ops["UpdateBucket"].apply(partialParams));
    }
    invokeUpdateBucketBundle(partialParams) {
        this.boot();
        return this.client.updateBucketBundle(this.ops["UpdateBucketBundle"].apply(partialParams));
    }
    invokeUpdateContainerService(partialParams) {
        this.boot();
        return this.client.updateContainerService(this.ops["UpdateContainerService"].apply(partialParams));
    }
    invokeUpdateDistribution(partialParams) {
        this.boot();
        return this.client.updateDistribution(this.ops["UpdateDistribution"].apply(partialParams));
    }
    invokeUpdateDistributionBundle(partialParams) {
        this.boot();
        return this.client.updateDistributionBundle(this.ops["UpdateDistributionBundle"].apply(partialParams));
    }
    invokeUpdateDomainEntry(partialParams) {
        this.boot();
        return this.client.updateDomainEntry(this.ops["UpdateDomainEntry"].apply(partialParams));
    }
    invokeUpdateLoadBalancerAttribute(partialParams) {
        this.boot();
        return this.client.updateLoadBalancerAttribute(this.ops["UpdateLoadBalancerAttribute"].apply(partialParams));
    }
    invokeUpdateRelationalDatabase(partialParams) {
        this.boot();
        return this.client.updateRelationalDatabase(this.ops["UpdateRelationalDatabase"].apply(partialParams));
    }
    invokeUpdateRelationalDatabaseParameters(partialParams) {
        this.boot();
        return this.client.updateRelationalDatabaseParameters(this.ops["UpdateRelationalDatabaseParameters"].apply(partialParams));
    }
}
exports.default = default_1;
