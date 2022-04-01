
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AllocateStaticIpRequest,
    AttachCertificateToDistributionRequest,
    AttachDiskRequest,
    AttachInstancesToLoadBalancerRequest,
    AttachLoadBalancerTlsCertificateRequest,
    AttachStaticIpRequest,
    CloseInstancePublicPortsRequest,
    CopySnapshotRequest,
    CreateBucketRequest,
    CreateBucketAccessKeyRequest,
    CreateCertificateRequest,
    CreateCloudFormationStackRequest,
    CreateContactMethodRequest,
    CreateContainerServiceRequest,
    CreateContainerServiceDeploymentRequest,
    CreateContainerServiceRegistryLoginRequest,
    CreateDiskRequest,
    CreateDiskFromSnapshotRequest,
    CreateDiskSnapshotRequest,
    CreateDistributionRequest,
    CreateDomainRequest,
    CreateDomainEntryRequest,
    CreateInstanceSnapshotRequest,
    CreateInstancesRequest,
    CreateInstancesFromSnapshotRequest,
    CreateKeyPairRequest,
    CreateLoadBalancerRequest,
    CreateLoadBalancerTlsCertificateRequest,
    CreateRelationalDatabaseRequest,
    CreateRelationalDatabaseFromSnapshotRequest,
    CreateRelationalDatabaseSnapshotRequest,
    DeleteAlarmRequest,
    DeleteAutoSnapshotRequest,
    DeleteBucketRequest,
    DeleteBucketAccessKeyRequest,
    DeleteCertificateRequest,
    DeleteContactMethodRequest,
    DeleteContainerImageRequest,
    DeleteContainerServiceRequest,
    DeleteDiskRequest,
    DeleteDiskSnapshotRequest,
    DeleteDistributionRequest,
    DeleteDomainRequest,
    DeleteDomainEntryRequest,
    DeleteInstanceRequest,
    DeleteInstanceSnapshotRequest,
    DeleteKeyPairRequest,
    DeleteKnownHostKeysRequest,
    DeleteLoadBalancerRequest,
    DeleteLoadBalancerTlsCertificateRequest,
    DeleteRelationalDatabaseRequest,
    DeleteRelationalDatabaseSnapshotRequest,
    DetachCertificateFromDistributionRequest,
    DetachDiskRequest,
    DetachInstancesFromLoadBalancerRequest,
    DetachStaticIpRequest,
    DisableAddOnRequest,
    DownloadDefaultKeyPairRequest,
    EnableAddOnRequest,
    ExportSnapshotRequest,
    GetActiveNamesRequest,
    GetAlarmsRequest,
    GetAutoSnapshotsRequest,
    GetBlueprintsRequest,
    GetBucketAccessKeysRequest,
    GetBucketBundlesRequest,
    GetBucketMetricDataRequest,
    GetBucketsRequest,
    GetBundlesRequest,
    GetCertificatesRequest,
    GetCloudFormationStackRecordsRequest,
    GetContactMethodsRequest,
    GetContainerAPIMetadataRequest,
    GetContainerImagesRequest,
    GetContainerLogRequest,
    GetContainerServiceDeploymentsRequest,
    GetContainerServiceMetricDataRequest,
    GetContainerServicePowersRequest,
    GetContainerServicesRequest,
    GetDiskRequest,
    GetDiskSnapshotRequest,
    GetDiskSnapshotsRequest,
    GetDisksRequest,
    GetDistributionBundlesRequest,
    GetDistributionLatestCacheResetRequest,
    GetDistributionMetricDataRequest,
    GetDistributionsRequest,
    GetDomainRequest,
    GetDomainsRequest,
    GetExportSnapshotRecordsRequest,
    GetInstanceRequest,
    GetInstanceAccessDetailsRequest,
    GetInstanceMetricDataRequest,
    GetInstancePortStatesRequest,
    GetInstanceSnapshotRequest,
    GetInstanceSnapshotsRequest,
    GetInstanceStateRequest,
    GetInstancesRequest,
    GetKeyPairRequest,
    GetKeyPairsRequest,
    GetLoadBalancerRequest,
    GetLoadBalancerMetricDataRequest,
    GetLoadBalancerTlsCertificatesRequest,
    GetLoadBalancersRequest,
    GetOperationRequest,
    GetOperationsRequest,
    GetOperationsForResourceRequest,
    GetRegionsRequest,
    GetRelationalDatabaseRequest,
    GetRelationalDatabaseBlueprintsRequest,
    GetRelationalDatabaseBundlesRequest,
    GetRelationalDatabaseEventsRequest,
    GetRelationalDatabaseLogEventsRequest,
    GetRelationalDatabaseLogStreamsRequest,
    GetRelationalDatabaseMasterUserPasswordRequest,
    GetRelationalDatabaseMetricDataRequest,
    GetRelationalDatabaseParametersRequest,
    GetRelationalDatabaseSnapshotRequest,
    GetRelationalDatabaseSnapshotsRequest,
    GetRelationalDatabasesRequest,
    GetStaticIpRequest,
    GetStaticIpsRequest,
    ImportKeyPairRequest,
    IsVpcPeeredRequest,
    OpenInstancePublicPortsRequest,
    PeerVpcRequest,
    PutAlarmRequest,
    PutInstancePublicPortsRequest,
    RebootInstanceRequest,
    RebootRelationalDatabaseRequest,
    RegisterContainerImageRequest,
    ReleaseStaticIpRequest,
    ResetDistributionCacheRequest,
    SendContactMethodVerificationRequest,
    SetIpAddressTypeRequest,
    SetResourceAccessForBucketRequest,
    StartInstanceRequest,
    StartRelationalDatabaseRequest,
    StopInstanceRequest,
    StopRelationalDatabaseRequest,
    TagResourceRequest,
    TestAlarmRequest,
    UnpeerVpcRequest,
    UntagResourceRequest,
    UpdateBucketRequest,
    UpdateBucketBundleRequest,
    UpdateContainerServiceRequest,
    UpdateDistributionRequest,
    UpdateDistributionBundleRequest,
    UpdateDomainEntryRequest,
    UpdateLoadBalancerAttributeRequest,
    UpdateRelationalDatabaseRequest,
    UpdateRelationalDatabaseParametersRequest,
    AllocateStaticIpResult,
    AttachCertificateToDistributionResult,
    AttachDiskResult,
    AttachInstancesToLoadBalancerResult,
    AttachLoadBalancerTlsCertificateResult,
    AttachStaticIpResult,
    CloseInstancePublicPortsResult,
    CopySnapshotResult,
    CreateBucketResult,
    CreateBucketAccessKeyResult,
    CreateCertificateResult,
    CreateCloudFormationStackResult,
    CreateContactMethodResult,
    CreateContainerServiceResult,
    CreateContainerServiceDeploymentResult,
    CreateContainerServiceRegistryLoginResult,
    CreateDiskResult,
    CreateDiskFromSnapshotResult,
    CreateDiskSnapshotResult,
    CreateDistributionResult,
    CreateDomainResult,
    CreateDomainEntryResult,
    CreateInstanceSnapshotResult,
    CreateInstancesResult,
    CreateInstancesFromSnapshotResult,
    CreateKeyPairResult,
    CreateLoadBalancerResult,
    CreateLoadBalancerTlsCertificateResult,
    CreateRelationalDatabaseResult,
    CreateRelationalDatabaseFromSnapshotResult,
    CreateRelationalDatabaseSnapshotResult,
    DeleteAlarmResult,
    DeleteAutoSnapshotResult,
    DeleteBucketResult,
    DeleteBucketAccessKeyResult,
    DeleteCertificateResult,
    DeleteContactMethodResult,
    DeleteContainerImageResult,
    DeleteContainerServiceResult,
    DeleteDiskResult,
    DeleteDiskSnapshotResult,
    DeleteDistributionResult,
    DeleteDomainResult,
    DeleteDomainEntryResult,
    DeleteInstanceResult,
    DeleteInstanceSnapshotResult,
    DeleteKeyPairResult,
    DeleteKnownHostKeysResult,
    DeleteLoadBalancerResult,
    DeleteLoadBalancerTlsCertificateResult,
    DeleteRelationalDatabaseResult,
    DeleteRelationalDatabaseSnapshotResult,
    DetachCertificateFromDistributionResult,
    DetachDiskResult,
    DetachInstancesFromLoadBalancerResult,
    DetachStaticIpResult,
    DisableAddOnResult,
    DownloadDefaultKeyPairResult,
    EnableAddOnResult,
    ExportSnapshotResult,
    GetActiveNamesResult,
    GetAlarmsResult,
    GetAutoSnapshotsResult,
    GetBlueprintsResult,
    GetBucketAccessKeysResult,
    GetBucketBundlesResult,
    GetBucketMetricDataResult,
    GetBucketsResult,
    GetBundlesResult,
    GetCertificatesResult,
    GetCloudFormationStackRecordsResult,
    GetContactMethodsResult,
    GetContainerAPIMetadataResult,
    GetContainerImagesResult,
    GetContainerLogResult,
    GetContainerServiceDeploymentsResult,
    GetContainerServiceMetricDataResult,
    GetContainerServicePowersResult,
    ContainerServicesListResult,
    GetDiskResult,
    GetDiskSnapshotResult,
    GetDiskSnapshotsResult,
    GetDisksResult,
    GetDistributionBundlesResult,
    GetDistributionLatestCacheResetResult,
    GetDistributionMetricDataResult,
    GetDistributionsResult,
    GetDomainResult,
    GetDomainsResult,
    GetExportSnapshotRecordsResult,
    GetInstanceResult,
    GetInstanceAccessDetailsResult,
    GetInstanceMetricDataResult,
    GetInstancePortStatesResult,
    GetInstanceSnapshotResult,
    GetInstanceSnapshotsResult,
    GetInstanceStateResult,
    GetInstancesResult,
    GetKeyPairResult,
    GetKeyPairsResult,
    GetLoadBalancerResult,
    GetLoadBalancerMetricDataResult,
    GetLoadBalancerTlsCertificatesResult,
    GetLoadBalancersResult,
    GetOperationResult,
    GetOperationsResult,
    GetOperationsForResourceResult,
    GetRegionsResult,
    GetRelationalDatabaseResult,
    GetRelationalDatabaseBlueprintsResult,
    GetRelationalDatabaseBundlesResult,
    GetRelationalDatabaseEventsResult,
    GetRelationalDatabaseLogEventsResult,
    GetRelationalDatabaseLogStreamsResult,
    GetRelationalDatabaseMasterUserPasswordResult,
    GetRelationalDatabaseMetricDataResult,
    GetRelationalDatabaseParametersResult,
    GetRelationalDatabaseSnapshotResult,
    GetRelationalDatabaseSnapshotsResult,
    GetRelationalDatabasesResult,
    GetStaticIpResult,
    GetStaticIpsResult,
    ImportKeyPairResult,
    IsVpcPeeredResult,
    OpenInstancePublicPortsResult,
    PeerVpcResult,
    PutAlarmResult,
    PutInstancePublicPortsResult,
    RebootInstanceResult,
    RebootRelationalDatabaseResult,
    RegisterContainerImageResult,
    ReleaseStaticIpResult,
    ResetDistributionCacheResult,
    SendContactMethodVerificationResult,
    SetIpAddressTypeResult,
    SetResourceAccessForBucketResult,
    StartInstanceResult,
    StartRelationalDatabaseResult,
    StopInstanceResult,
    StopRelationalDatabaseResult,
    TagResourceResult,
    TestAlarmResult,
    UnpeerVpcResult,
    UntagResourceResult,
    UpdateBucketResult,
    UpdateBucketBundleResult,
    UpdateContainerServiceResult,
    UpdateDistributionResult,
    UpdateDistributionBundleResult,
    UpdateDomainEntryResult,
    UpdateLoadBalancerAttributeResult,
    UpdateRelationalDatabaseResult,
    UpdateRelationalDatabaseParametersResult
} from "aws-sdk/clients/lightsail";
const schema = require("../apis/lightsail-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lightsail.StaticIp {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lightsail.StaticIp>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Lightsail()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAllocateStaticIp(partialParams: ToOptional<{
      [K in keyof AllocateStaticIpRequest]: (AllocateStaticIpRequest)[K]
    }>): Request<AllocateStaticIpResult, AWSError> {
        this.boot();
        return this.client.allocateStaticIp(
          this.ops["AllocateStaticIp"].apply(partialParams)
        );
    }

    invokeAttachCertificateToDistribution(partialParams: ToOptional<{
      [K in keyof AttachCertificateToDistributionRequest]: (AttachCertificateToDistributionRequest)[K]
    }>): Request<AttachCertificateToDistributionResult, AWSError> {
        this.boot();
        return this.client.attachCertificateToDistribution(
          this.ops["AttachCertificateToDistribution"].apply(partialParams)
        );
    }

    invokeAttachDisk(partialParams: ToOptional<{
      [K in keyof AttachDiskRequest]: (AttachDiskRequest)[K]
    }>): Request<AttachDiskResult, AWSError> {
        this.boot();
        return this.client.attachDisk(
          this.ops["AttachDisk"].apply(partialParams)
        );
    }

    invokeAttachInstancesToLoadBalancer(partialParams: ToOptional<{
      [K in keyof AttachInstancesToLoadBalancerRequest]: (AttachInstancesToLoadBalancerRequest)[K]
    }>): Request<AttachInstancesToLoadBalancerResult, AWSError> {
        this.boot();
        return this.client.attachInstancesToLoadBalancer(
          this.ops["AttachInstancesToLoadBalancer"].apply(partialParams)
        );
    }

    invokeAttachLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTlsCertificateRequest]: (AttachLoadBalancerTlsCertificateRequest)[K]
    }>): Request<AttachLoadBalancerTlsCertificateResult, AWSError> {
        this.boot();
        return this.client.attachLoadBalancerTlsCertificate(
          this.ops["AttachLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeAttachStaticIp(partialParams: ToOptional<{
      [K in keyof AttachStaticIpRequest]: (AttachStaticIpRequest)[K]
    }>): Request<AttachStaticIpResult, AWSError> {
        this.boot();
        return this.client.attachStaticIp(
          this.ops["AttachStaticIp"].apply(partialParams)
        );
    }

    invokeCloseInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof CloseInstancePublicPortsRequest]: (CloseInstancePublicPortsRequest)[K]
    }>): Request<CloseInstancePublicPortsResult, AWSError> {
        this.boot();
        return this.client.closeInstancePublicPorts(
          this.ops["CloseInstancePublicPorts"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest]: (CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest]: (CreateBucketRequest)[K]
    }>): Request<CreateBucketResult, AWSError> {
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateBucketAccessKey(partialParams: ToOptional<{
      [K in keyof CreateBucketAccessKeyRequest]: (CreateBucketAccessKeyRequest)[K]
    }>): Request<CreateBucketAccessKeyResult, AWSError> {
        this.boot();
        return this.client.createBucketAccessKey(
          this.ops["CreateBucketAccessKey"].apply(partialParams)
        );
    }

    invokeCreateCertificate(partialParams: ToOptional<{
      [K in keyof CreateCertificateRequest]: (CreateCertificateRequest)[K]
    }>): Request<CreateCertificateResult, AWSError> {
        this.boot();
        return this.client.createCertificate(
          this.ops["CreateCertificate"].apply(partialParams)
        );
    }

    invokeCreateCloudFormationStack(partialParams: ToOptional<{
      [K in keyof CreateCloudFormationStackRequest]: (CreateCloudFormationStackRequest)[K]
    }>): Request<CreateCloudFormationStackResult, AWSError> {
        this.boot();
        return this.client.createCloudFormationStack(
          this.ops["CreateCloudFormationStack"].apply(partialParams)
        );
    }

    invokeCreateContactMethod(partialParams: ToOptional<{
      [K in keyof CreateContactMethodRequest]: (CreateContactMethodRequest)[K]
    }>): Request<CreateContactMethodResult, AWSError> {
        this.boot();
        return this.client.createContactMethod(
          this.ops["CreateContactMethod"].apply(partialParams)
        );
    }

    invokeCreateContainerService(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceRequest]: (CreateContainerServiceRequest)[K]
    }>): Request<CreateContainerServiceResult, AWSError> {
        this.boot();
        return this.client.createContainerService(
          this.ops["CreateContainerService"].apply(partialParams)
        );
    }

    invokeCreateContainerServiceDeployment(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceDeploymentRequest]: (CreateContainerServiceDeploymentRequest)[K]
    }>): Request<CreateContainerServiceDeploymentResult, AWSError> {
        this.boot();
        return this.client.createContainerServiceDeployment(
          this.ops["CreateContainerServiceDeployment"].apply(partialParams)
        );
    }

    invokeCreateContainerServiceRegistryLogin(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceRegistryLoginRequest]: (CreateContainerServiceRegistryLoginRequest)[K]
    }>): Request<CreateContainerServiceRegistryLoginResult, AWSError> {
        this.boot();
        return this.client.createContainerServiceRegistryLogin(
          this.ops["CreateContainerServiceRegistryLogin"].apply(partialParams)
        );
    }

    invokeCreateDisk(partialParams: ToOptional<{
      [K in keyof CreateDiskRequest]: (CreateDiskRequest)[K]
    }>): Request<CreateDiskResult, AWSError> {
        this.boot();
        return this.client.createDisk(
          this.ops["CreateDisk"].apply(partialParams)
        );
    }

    invokeCreateDiskFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskFromSnapshotRequest]: (CreateDiskFromSnapshotRequest)[K]
    }>): Request<CreateDiskFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.createDiskFromSnapshot(
          this.ops["CreateDiskFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDiskSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskSnapshotRequest]: (CreateDiskSnapshotRequest)[K]
    }>): Request<CreateDiskSnapshotResult, AWSError> {
        this.boot();
        return this.client.createDiskSnapshot(
          this.ops["CreateDiskSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest]: (CreateDistributionRequest)[K]
    }>): Request<CreateDistributionResult, AWSError> {
        this.boot();
        return this.client.createDistribution(
          this.ops["CreateDistribution"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest]: (CreateDomainRequest)[K]
    }>): Request<CreateDomainResult, AWSError> {
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateDomainEntry(partialParams: ToOptional<{
      [K in keyof CreateDomainEntryRequest]: (CreateDomainEntryRequest)[K]
    }>): Request<CreateDomainEntryResult, AWSError> {
        this.boot();
        return this.client.createDomainEntry(
          this.ops["CreateDomainEntry"].apply(partialParams)
        );
    }

    invokeCreateInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstanceSnapshotRequest]: (CreateInstanceSnapshotRequest)[K]
    }>): Request<CreateInstanceSnapshotResult, AWSError> {
        this.boot();
        return this.client.createInstanceSnapshot(
          this.ops["CreateInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeCreateInstances(partialParams: ToOptional<{
      [K in keyof CreateInstancesRequest]: (CreateInstancesRequest)[K]
    }>): Request<CreateInstancesResult, AWSError> {
        this.boot();
        return this.client.createInstances(
          this.ops["CreateInstances"].apply(partialParams)
        );
    }

    invokeCreateInstancesFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstancesFromSnapshotRequest]: (CreateInstancesFromSnapshotRequest)[K]
    }>): Request<CreateInstancesFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.createInstancesFromSnapshot(
          this.ops["CreateInstancesFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest]: (CreateKeyPairRequest)[K]
    }>): Request<CreateKeyPairResult, AWSError> {
        this.boot();
        return this.client.createKeyPair(
          this.ops["CreateKeyPair"].apply(partialParams)
        );
    }

    invokeCreateLoadBalancer(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerRequest]: (CreateLoadBalancerRequest)[K]
    }>): Request<CreateLoadBalancerResult, AWSError> {
        this.boot();
        return this.client.createLoadBalancer(
          this.ops["CreateLoadBalancer"].apply(partialParams)
        );
    }

    invokeCreateLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerTlsCertificateRequest]: (CreateLoadBalancerTlsCertificateRequest)[K]
    }>): Request<CreateLoadBalancerTlsCertificateResult, AWSError> {
        this.boot();
        return this.client.createLoadBalancerTlsCertificate(
          this.ops["CreateLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseRequest]: (CreateRelationalDatabaseRequest)[K]
    }>): Request<CreateRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.createRelationalDatabase(
          this.ops["CreateRelationalDatabase"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseFromSnapshotRequest]: (CreateRelationalDatabaseFromSnapshotRequest)[K]
    }>): Request<CreateRelationalDatabaseFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.createRelationalDatabaseFromSnapshot(
          this.ops["CreateRelationalDatabaseFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseSnapshotRequest]: (CreateRelationalDatabaseSnapshotRequest)[K]
    }>): Request<CreateRelationalDatabaseSnapshotResult, AWSError> {
        this.boot();
        return this.client.createRelationalDatabaseSnapshot(
          this.ops["CreateRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteAlarm(partialParams: ToOptional<{
      [K in keyof DeleteAlarmRequest]: (DeleteAlarmRequest)[K]
    }>): Request<DeleteAlarmResult, AWSError> {
        this.boot();
        return this.client.deleteAlarm(
          this.ops["DeleteAlarm"].apply(partialParams)
        );
    }

    invokeDeleteAutoSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteAutoSnapshotRequest]: (DeleteAutoSnapshotRequest)[K]
    }>): Request<DeleteAutoSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteAutoSnapshot(
          this.ops["DeleteAutoSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest]: (DeleteBucketRequest)[K]
    }>): Request<DeleteBucketResult, AWSError> {
        this.boot();
        return this.client.deleteBucket(
          this.ops["DeleteBucket"].apply(partialParams)
        );
    }

    invokeDeleteBucketAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteBucketAccessKeyRequest]: (DeleteBucketAccessKeyRequest)[K]
    }>): Request<DeleteBucketAccessKeyResult, AWSError> {
        this.boot();
        return this.client.deleteBucketAccessKey(
          this.ops["DeleteBucketAccessKey"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateRequest]: (DeleteCertificateRequest)[K]
    }>): Request<DeleteCertificateResult, AWSError> {
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteContactMethod(partialParams: ToOptional<{
      [K in keyof DeleteContactMethodRequest]: (DeleteContactMethodRequest)[K]
    }>): Request<DeleteContactMethodResult, AWSError> {
        this.boot();
        return this.client.deleteContactMethod(
          this.ops["DeleteContactMethod"].apply(partialParams)
        );
    }

    invokeDeleteContainerImage(partialParams: ToOptional<{
      [K in keyof DeleteContainerImageRequest]: (DeleteContainerImageRequest)[K]
    }>): Request<DeleteContainerImageResult, AWSError> {
        this.boot();
        return this.client.deleteContainerImage(
          this.ops["DeleteContainerImage"].apply(partialParams)
        );
    }

    invokeDeleteContainerService(partialParams: ToOptional<{
      [K in keyof DeleteContainerServiceRequest]: (DeleteContainerServiceRequest)[K]
    }>): Request<DeleteContainerServiceResult, AWSError> {
        this.boot();
        return this.client.deleteContainerService(
          this.ops["DeleteContainerService"].apply(partialParams)
        );
    }

    invokeDeleteDisk(partialParams: ToOptional<{
      [K in keyof DeleteDiskRequest]: (DeleteDiskRequest)[K]
    }>): Request<DeleteDiskResult, AWSError> {
        this.boot();
        return this.client.deleteDisk(
          this.ops["DeleteDisk"].apply(partialParams)
        );
    }

    invokeDeleteDiskSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDiskSnapshotRequest]: (DeleteDiskSnapshotRequest)[K]
    }>): Request<DeleteDiskSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteDiskSnapshot(
          this.ops["DeleteDiskSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDistribution(partialParams: ToOptional<{
      [K in keyof DeleteDistributionRequest]: (DeleteDistributionRequest)[K]
    }>): Request<DeleteDistributionResult, AWSError> {
        this.boot();
        return this.client.deleteDistribution(
          this.ops["DeleteDistribution"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest]: (DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResult, AWSError> {
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteDomainEntry(partialParams: ToOptional<{
      [K in keyof DeleteDomainEntryRequest]: (DeleteDomainEntryRequest)[K]
    }>): Request<DeleteDomainEntryResult, AWSError> {
        this.boot();
        return this.client.deleteDomainEntry(
          this.ops["DeleteDomainEntry"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest]: (DeleteInstanceRequest)[K]
    }>): Request<DeleteInstanceResult, AWSError> {
        this.boot();
        return this.client.deleteInstance(
          this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteInstanceSnapshotRequest]: (DeleteInstanceSnapshotRequest)[K]
    }>): Request<DeleteInstanceSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteInstanceSnapshot(
          this.ops["DeleteInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteKeyPair(partialParams: ToOptional<{
      [K in keyof DeleteKeyPairRequest]: (DeleteKeyPairRequest)[K]
    }>): Request<DeleteKeyPairResult, AWSError> {
        this.boot();
        return this.client.deleteKeyPair(
          this.ops["DeleteKeyPair"].apply(partialParams)
        );
    }

    invokeDeleteKnownHostKeys(partialParams: ToOptional<{
      [K in keyof DeleteKnownHostKeysRequest]: (DeleteKnownHostKeysRequest)[K]
    }>): Request<DeleteKnownHostKeysResult, AWSError> {
        this.boot();
        return this.client.deleteKnownHostKeys(
          this.ops["DeleteKnownHostKeys"].apply(partialParams)
        );
    }

    invokeDeleteLoadBalancer(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerRequest]: (DeleteLoadBalancerRequest)[K]
    }>): Request<DeleteLoadBalancerResult, AWSError> {
        this.boot();
        return this.client.deleteLoadBalancer(
          this.ops["DeleteLoadBalancer"].apply(partialParams)
        );
    }

    invokeDeleteLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerTlsCertificateRequest]: (DeleteLoadBalancerTlsCertificateRequest)[K]
    }>): Request<DeleteLoadBalancerTlsCertificateResult, AWSError> {
        this.boot();
        return this.client.deleteLoadBalancerTlsCertificate(
          this.ops["DeleteLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabase(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseRequest]: (DeleteRelationalDatabaseRequest)[K]
    }>): Request<DeleteRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.deleteRelationalDatabase(
          this.ops["DeleteRelationalDatabase"].apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseSnapshotRequest]: (DeleteRelationalDatabaseSnapshotRequest)[K]
    }>): Request<DeleteRelationalDatabaseSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteRelationalDatabaseSnapshot(
          this.ops["DeleteRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeDetachCertificateFromDistribution(partialParams: ToOptional<{
      [K in keyof DetachCertificateFromDistributionRequest]: (DetachCertificateFromDistributionRequest)[K]
    }>): Request<DetachCertificateFromDistributionResult, AWSError> {
        this.boot();
        return this.client.detachCertificateFromDistribution(
          this.ops["DetachCertificateFromDistribution"].apply(partialParams)
        );
    }

    invokeDetachDisk(partialParams: ToOptional<{
      [K in keyof DetachDiskRequest]: (DetachDiskRequest)[K]
    }>): Request<DetachDiskResult, AWSError> {
        this.boot();
        return this.client.detachDisk(
          this.ops["DetachDisk"].apply(partialParams)
        );
    }

    invokeDetachInstancesFromLoadBalancer(partialParams: ToOptional<{
      [K in keyof DetachInstancesFromLoadBalancerRequest]: (DetachInstancesFromLoadBalancerRequest)[K]
    }>): Request<DetachInstancesFromLoadBalancerResult, AWSError> {
        this.boot();
        return this.client.detachInstancesFromLoadBalancer(
          this.ops["DetachInstancesFromLoadBalancer"].apply(partialParams)
        );
    }

    invokeDetachStaticIp(partialParams: ToOptional<{
      [K in keyof DetachStaticIpRequest]: (DetachStaticIpRequest)[K]
    }>): Request<DetachStaticIpResult, AWSError> {
        this.boot();
        return this.client.detachStaticIp(
          this.ops["DetachStaticIp"].apply(partialParams)
        );
    }

    invokeDisableAddOn(partialParams: ToOptional<{
      [K in keyof DisableAddOnRequest]: (DisableAddOnRequest)[K]
    }>): Request<DisableAddOnResult, AWSError> {
        this.boot();
        return this.client.disableAddOn(
          this.ops["DisableAddOn"].apply(partialParams)
        );
    }

    invokeDownloadDefaultKeyPair(partialParams: ToOptional<{
      [K in keyof DownloadDefaultKeyPairRequest]: (DownloadDefaultKeyPairRequest)[K]
    }>): Request<DownloadDefaultKeyPairResult, AWSError> {
        this.boot();
        return this.client.downloadDefaultKeyPair(
          this.ops["DownloadDefaultKeyPair"].apply(partialParams)
        );
    }

    invokeEnableAddOn(partialParams: ToOptional<{
      [K in keyof EnableAddOnRequest]: (EnableAddOnRequest)[K]
    }>): Request<EnableAddOnResult, AWSError> {
        this.boot();
        return this.client.enableAddOn(
          this.ops["EnableAddOn"].apply(partialParams)
        );
    }

    invokeExportSnapshot(partialParams: ToOptional<{
      [K in keyof ExportSnapshotRequest]: (ExportSnapshotRequest)[K]
    }>): Request<ExportSnapshotResult, AWSError> {
        this.boot();
        return this.client.exportSnapshot(
          this.ops["ExportSnapshot"].apply(partialParams)
        );
    }

    invokeGetActiveNames(partialParams: ToOptional<{
      [K in keyof GetActiveNamesRequest]: (GetActiveNamesRequest)[K]
    }>): Request<GetActiveNamesResult, AWSError> {
        this.boot();
        return this.client.getActiveNames(
          this.ops["GetActiveNames"].apply(partialParams)
        );
    }

    invokeGetAlarms(partialParams: ToOptional<{
      [K in keyof GetAlarmsRequest]: (GetAlarmsRequest)[K]
    }>): Request<GetAlarmsResult, AWSError> {
        this.boot();
        return this.client.getAlarms(
          this.ops["GetAlarms"].apply(partialParams)
        );
    }

    invokeGetAutoSnapshots(partialParams: ToOptional<{
      [K in keyof GetAutoSnapshotsRequest]: (GetAutoSnapshotsRequest)[K]
    }>): Request<GetAutoSnapshotsResult, AWSError> {
        this.boot();
        return this.client.getAutoSnapshots(
          this.ops["GetAutoSnapshots"].apply(partialParams)
        );
    }

    invokeGetBlueprints(partialParams: ToOptional<{
      [K in keyof GetBlueprintsRequest]: (GetBlueprintsRequest)[K]
    }>): Request<GetBlueprintsResult, AWSError> {
        this.boot();
        return this.client.getBlueprints(
          this.ops["GetBlueprints"].apply(partialParams)
        );
    }

    invokeGetBucketAccessKeys(partialParams: ToOptional<{
      [K in keyof GetBucketAccessKeysRequest]: (GetBucketAccessKeysRequest)[K]
    }>): Request<GetBucketAccessKeysResult, AWSError> {
        this.boot();
        return this.client.getBucketAccessKeys(
          this.ops["GetBucketAccessKeys"].apply(partialParams)
        );
    }

    invokeGetBucketBundles(partialParams: ToOptional<{
      [K in keyof GetBucketBundlesRequest]: (GetBucketBundlesRequest)[K]
    }>): Request<GetBucketBundlesResult, AWSError> {
        this.boot();
        return this.client.getBucketBundles(
          this.ops["GetBucketBundles"].apply(partialParams)
        );
    }

    invokeGetBucketMetricData(partialParams: ToOptional<{
      [K in keyof GetBucketMetricDataRequest]: (GetBucketMetricDataRequest)[K]
    }>): Request<GetBucketMetricDataResult, AWSError> {
        this.boot();
        return this.client.getBucketMetricData(
          this.ops["GetBucketMetricData"].apply(partialParams)
        );
    }

    invokeGetBuckets(partialParams: ToOptional<{
      [K in keyof GetBucketsRequest]: (GetBucketsRequest)[K]
    }>): Request<GetBucketsResult, AWSError> {
        this.boot();
        return this.client.getBuckets(
          this.ops["GetBuckets"].apply(partialParams)
        );
    }

    invokeGetBundles(partialParams: ToOptional<{
      [K in keyof GetBundlesRequest]: (GetBundlesRequest)[K]
    }>): Request<GetBundlesResult, AWSError> {
        this.boot();
        return this.client.getBundles(
          this.ops["GetBundles"].apply(partialParams)
        );
    }

    invokeGetCertificates(partialParams: ToOptional<{
      [K in keyof GetCertificatesRequest]: (GetCertificatesRequest)[K]
    }>): Request<GetCertificatesResult, AWSError> {
        this.boot();
        return this.client.getCertificates(
          this.ops["GetCertificates"].apply(partialParams)
        );
    }

    invokeGetCloudFormationStackRecords(partialParams: ToOptional<{
      [K in keyof GetCloudFormationStackRecordsRequest]: (GetCloudFormationStackRecordsRequest)[K]
    }>): Request<GetCloudFormationStackRecordsResult, AWSError> {
        this.boot();
        return this.client.getCloudFormationStackRecords(
          this.ops["GetCloudFormationStackRecords"].apply(partialParams)
        );
    }

    invokeGetContactMethods(partialParams: ToOptional<{
      [K in keyof GetContactMethodsRequest]: (GetContactMethodsRequest)[K]
    }>): Request<GetContactMethodsResult, AWSError> {
        this.boot();
        return this.client.getContactMethods(
          this.ops["GetContactMethods"].apply(partialParams)
        );
    }

    invokeGetContainerAPIMetadata(partialParams: ToOptional<{
      [K in keyof GetContainerAPIMetadataRequest]: (GetContainerAPIMetadataRequest)[K]
    }>): Request<GetContainerAPIMetadataResult, AWSError> {
        this.boot();
        return this.client.getContainerAPIMetadata(
          this.ops["GetContainerAPIMetadata"].apply(partialParams)
        );
    }

    invokeGetContainerImages(partialParams: ToOptional<{
      [K in keyof GetContainerImagesRequest]: (GetContainerImagesRequest)[K]
    }>): Request<GetContainerImagesResult, AWSError> {
        this.boot();
        return this.client.getContainerImages(
          this.ops["GetContainerImages"].apply(partialParams)
        );
    }

    invokeGetContainerLog(partialParams: ToOptional<{
      [K in keyof GetContainerLogRequest]: (GetContainerLogRequest)[K]
    }>): Request<GetContainerLogResult, AWSError> {
        this.boot();
        return this.client.getContainerLog(
          this.ops["GetContainerLog"].apply(partialParams)
        );
    }

    invokeGetContainerServiceDeployments(partialParams: ToOptional<{
      [K in keyof GetContainerServiceDeploymentsRequest]: (GetContainerServiceDeploymentsRequest)[K]
    }>): Request<GetContainerServiceDeploymentsResult, AWSError> {
        this.boot();
        return this.client.getContainerServiceDeployments(
          this.ops["GetContainerServiceDeployments"].apply(partialParams)
        );
    }

    invokeGetContainerServiceMetricData(partialParams: ToOptional<{
      [K in keyof GetContainerServiceMetricDataRequest]: (GetContainerServiceMetricDataRequest)[K]
    }>): Request<GetContainerServiceMetricDataResult, AWSError> {
        this.boot();
        return this.client.getContainerServiceMetricData(
          this.ops["GetContainerServiceMetricData"].apply(partialParams)
        );
    }

    invokeGetContainerServicePowers(partialParams: ToOptional<{
      [K in keyof GetContainerServicePowersRequest]: (GetContainerServicePowersRequest)[K]
    }>): Request<GetContainerServicePowersResult, AWSError> {
        this.boot();
        return this.client.getContainerServicePowers(
          this.ops["GetContainerServicePowers"].apply(partialParams)
        );
    }

    invokeGetContainerServices(partialParams: ToOptional<{
      [K in keyof GetContainerServicesRequest]: (GetContainerServicesRequest)[K]
    }>): Request<ContainerServicesListResult, AWSError> {
        this.boot();
        return this.client.getContainerServices(
          this.ops["GetContainerServices"].apply(partialParams)
        );
    }

    invokeGetDisk(partialParams: ToOptional<{
      [K in keyof GetDiskRequest]: (GetDiskRequest)[K]
    }>): Request<GetDiskResult, AWSError> {
        this.boot();
        return this.client.getDisk(
          this.ops["GetDisk"].apply(partialParams)
        );
    }

    invokeGetDiskSnapshot(partialParams: ToOptional<{
      [K in keyof GetDiskSnapshotRequest]: (GetDiskSnapshotRequest)[K]
    }>): Request<GetDiskSnapshotResult, AWSError> {
        this.boot();
        return this.client.getDiskSnapshot(
          this.ops["GetDiskSnapshot"].apply(partialParams)
        );
    }

    invokeGetDiskSnapshots(partialParams: ToOptional<{
      [K in keyof GetDiskSnapshotsRequest]: (GetDiskSnapshotsRequest)[K]
    }>): Request<GetDiskSnapshotsResult, AWSError> {
        this.boot();
        return this.client.getDiskSnapshots(
          this.ops["GetDiskSnapshots"].apply(partialParams)
        );
    }

    invokeGetDisks(partialParams: ToOptional<{
      [K in keyof GetDisksRequest]: (GetDisksRequest)[K]
    }>): Request<GetDisksResult, AWSError> {
        this.boot();
        return this.client.getDisks(
          this.ops["GetDisks"].apply(partialParams)
        );
    }

    invokeGetDistributionBundles(partialParams: ToOptional<{
      [K in keyof GetDistributionBundlesRequest]: (GetDistributionBundlesRequest)[K]
    }>): Request<GetDistributionBundlesResult, AWSError> {
        this.boot();
        return this.client.getDistributionBundles(
          this.ops["GetDistributionBundles"].apply(partialParams)
        );
    }

    invokeGetDistributionLatestCacheReset(partialParams: ToOptional<{
      [K in keyof GetDistributionLatestCacheResetRequest]: (GetDistributionLatestCacheResetRequest)[K]
    }>): Request<GetDistributionLatestCacheResetResult, AWSError> {
        this.boot();
        return this.client.getDistributionLatestCacheReset(
          this.ops["GetDistributionLatestCacheReset"].apply(partialParams)
        );
    }

    invokeGetDistributionMetricData(partialParams: ToOptional<{
      [K in keyof GetDistributionMetricDataRequest]: (GetDistributionMetricDataRequest)[K]
    }>): Request<GetDistributionMetricDataResult, AWSError> {
        this.boot();
        return this.client.getDistributionMetricData(
          this.ops["GetDistributionMetricData"].apply(partialParams)
        );
    }

    invokeGetDistributions(partialParams: ToOptional<{
      [K in keyof GetDistributionsRequest]: (GetDistributionsRequest)[K]
    }>): Request<GetDistributionsResult, AWSError> {
        this.boot();
        return this.client.getDistributions(
          this.ops["GetDistributions"].apply(partialParams)
        );
    }

    invokeGetDomain(partialParams: ToOptional<{
      [K in keyof GetDomainRequest]: (GetDomainRequest)[K]
    }>): Request<GetDomainResult, AWSError> {
        this.boot();
        return this.client.getDomain(
          this.ops["GetDomain"].apply(partialParams)
        );
    }

    invokeGetDomains(partialParams: ToOptional<{
      [K in keyof GetDomainsRequest]: (GetDomainsRequest)[K]
    }>): Request<GetDomainsResult, AWSError> {
        this.boot();
        return this.client.getDomains(
          this.ops["GetDomains"].apply(partialParams)
        );
    }

    invokeGetExportSnapshotRecords(partialParams: ToOptional<{
      [K in keyof GetExportSnapshotRecordsRequest]: (GetExportSnapshotRecordsRequest)[K]
    }>): Request<GetExportSnapshotRecordsResult, AWSError> {
        this.boot();
        return this.client.getExportSnapshotRecords(
          this.ops["GetExportSnapshotRecords"].apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest]: (GetInstanceRequest)[K]
    }>): Request<GetInstanceResult, AWSError> {
        this.boot();
        return this.client.getInstance(
          this.ops["GetInstance"].apply(partialParams)
        );
    }

    invokeGetInstanceAccessDetails(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessDetailsRequest]: (GetInstanceAccessDetailsRequest)[K]
    }>): Request<GetInstanceAccessDetailsResult, AWSError> {
        this.boot();
        return this.client.getInstanceAccessDetails(
          this.ops["GetInstanceAccessDetails"].apply(partialParams)
        );
    }

    invokeGetInstanceMetricData(partialParams: ToOptional<{
      [K in keyof GetInstanceMetricDataRequest]: (GetInstanceMetricDataRequest)[K]
    }>): Request<GetInstanceMetricDataResult, AWSError> {
        this.boot();
        return this.client.getInstanceMetricData(
          this.ops["GetInstanceMetricData"].apply(partialParams)
        );
    }

    invokeGetInstancePortStates(partialParams: ToOptional<{
      [K in keyof GetInstancePortStatesRequest]: (GetInstancePortStatesRequest)[K]
    }>): Request<GetInstancePortStatesResult, AWSError> {
        this.boot();
        return this.client.getInstancePortStates(
          this.ops["GetInstancePortStates"].apply(partialParams)
        );
    }

    invokeGetInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof GetInstanceSnapshotRequest]: (GetInstanceSnapshotRequest)[K]
    }>): Request<GetInstanceSnapshotResult, AWSError> {
        this.boot();
        return this.client.getInstanceSnapshot(
          this.ops["GetInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeGetInstanceSnapshots(partialParams: ToOptional<{
      [K in keyof GetInstanceSnapshotsRequest]: (GetInstanceSnapshotsRequest)[K]
    }>): Request<GetInstanceSnapshotsResult, AWSError> {
        this.boot();
        return this.client.getInstanceSnapshots(
          this.ops["GetInstanceSnapshots"].apply(partialParams)
        );
    }

    invokeGetInstanceState(partialParams: ToOptional<{
      [K in keyof GetInstanceStateRequest]: (GetInstanceStateRequest)[K]
    }>): Request<GetInstanceStateResult, AWSError> {
        this.boot();
        return this.client.getInstanceState(
          this.ops["GetInstanceState"].apply(partialParams)
        );
    }

    invokeGetInstances(partialParams: ToOptional<{
      [K in keyof GetInstancesRequest]: (GetInstancesRequest)[K]
    }>): Request<GetInstancesResult, AWSError> {
        this.boot();
        return this.client.getInstances(
          this.ops["GetInstances"].apply(partialParams)
        );
    }

    invokeGetKeyPair(partialParams: ToOptional<{
      [K in keyof GetKeyPairRequest]: (GetKeyPairRequest)[K]
    }>): Request<GetKeyPairResult, AWSError> {
        this.boot();
        return this.client.getKeyPair(
          this.ops["GetKeyPair"].apply(partialParams)
        );
    }

    invokeGetKeyPairs(partialParams: ToOptional<{
      [K in keyof GetKeyPairsRequest]: (GetKeyPairsRequest)[K]
    }>): Request<GetKeyPairsResult, AWSError> {
        this.boot();
        return this.client.getKeyPairs(
          this.ops["GetKeyPairs"].apply(partialParams)
        );
    }

    invokeGetLoadBalancer(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerRequest]: (GetLoadBalancerRequest)[K]
    }>): Request<GetLoadBalancerResult, AWSError> {
        this.boot();
        return this.client.getLoadBalancer(
          this.ops["GetLoadBalancer"].apply(partialParams)
        );
    }

    invokeGetLoadBalancerMetricData(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerMetricDataRequest]: (GetLoadBalancerMetricDataRequest)[K]
    }>): Request<GetLoadBalancerMetricDataResult, AWSError> {
        this.boot();
        return this.client.getLoadBalancerMetricData(
          this.ops["GetLoadBalancerMetricData"].apply(partialParams)
        );
    }

    invokeGetLoadBalancerTlsCertificates(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerTlsCertificatesRequest]: (GetLoadBalancerTlsCertificatesRequest)[K]
    }>): Request<GetLoadBalancerTlsCertificatesResult, AWSError> {
        this.boot();
        return this.client.getLoadBalancerTlsCertificates(
          this.ops["GetLoadBalancerTlsCertificates"].apply(partialParams)
        );
    }

    invokeGetLoadBalancers(partialParams: ToOptional<{
      [K in keyof GetLoadBalancersRequest]: (GetLoadBalancersRequest)[K]
    }>): Request<GetLoadBalancersResult, AWSError> {
        this.boot();
        return this.client.getLoadBalancers(
          this.ops["GetLoadBalancers"].apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest]: (GetOperationRequest)[K]
    }>): Request<GetOperationResult, AWSError> {
        this.boot();
        return this.client.getOperation(
          this.ops["GetOperation"].apply(partialParams)
        );
    }

    invokeGetOperations(partialParams: ToOptional<{
      [K in keyof GetOperationsRequest]: (GetOperationsRequest)[K]
    }>): Request<GetOperationsResult, AWSError> {
        this.boot();
        return this.client.getOperations(
          this.ops["GetOperations"].apply(partialParams)
        );
    }

    invokeGetOperationsForResource(partialParams: ToOptional<{
      [K in keyof GetOperationsForResourceRequest]: (GetOperationsForResourceRequest)[K]
    }>): Request<GetOperationsForResourceResult, AWSError> {
        this.boot();
        return this.client.getOperationsForResource(
          this.ops["GetOperationsForResource"].apply(partialParams)
        );
    }

    invokeGetRegions(partialParams: ToOptional<{
      [K in keyof GetRegionsRequest]: (GetRegionsRequest)[K]
    }>): Request<GetRegionsResult, AWSError> {
        this.boot();
        return this.client.getRegions(
          this.ops["GetRegions"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabase(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseRequest]: (GetRelationalDatabaseRequest)[K]
    }>): Request<GetRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabase(
          this.ops["GetRelationalDatabase"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseBlueprints(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseBlueprintsRequest]: (GetRelationalDatabaseBlueprintsRequest)[K]
    }>): Request<GetRelationalDatabaseBlueprintsResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseBlueprints(
          this.ops["GetRelationalDatabaseBlueprints"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseBundles(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseBundlesRequest]: (GetRelationalDatabaseBundlesRequest)[K]
    }>): Request<GetRelationalDatabaseBundlesResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseBundles(
          this.ops["GetRelationalDatabaseBundles"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseEventsRequest]: (GetRelationalDatabaseEventsRequest)[K]
    }>): Request<GetRelationalDatabaseEventsResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseEvents(
          this.ops["GetRelationalDatabaseEvents"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogEventsRequest]: (GetRelationalDatabaseLogEventsRequest)[K]
    }>): Request<GetRelationalDatabaseLogEventsResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseLogEvents(
          this.ops["GetRelationalDatabaseLogEvents"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogStreams(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogStreamsRequest]: (GetRelationalDatabaseLogStreamsRequest)[K]
    }>): Request<GetRelationalDatabaseLogStreamsResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseLogStreams(
          this.ops["GetRelationalDatabaseLogStreams"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMasterUserPassword(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMasterUserPasswordRequest]: (GetRelationalDatabaseMasterUserPasswordRequest)[K]
    }>): Request<GetRelationalDatabaseMasterUserPasswordResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseMasterUserPassword(
          this.ops["GetRelationalDatabaseMasterUserPassword"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMetricData(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMetricDataRequest]: (GetRelationalDatabaseMetricDataRequest)[K]
    }>): Request<GetRelationalDatabaseMetricDataResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseMetricData(
          this.ops["GetRelationalDatabaseMetricData"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseParametersRequest]: (GetRelationalDatabaseParametersRequest)[K]
    }>): Request<GetRelationalDatabaseParametersResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseParameters(
          this.ops["GetRelationalDatabaseParameters"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseSnapshotRequest]: (GetRelationalDatabaseSnapshotRequest)[K]
    }>): Request<GetRelationalDatabaseSnapshotResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseSnapshot(
          this.ops["GetRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseSnapshots(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseSnapshotsRequest]: (GetRelationalDatabaseSnapshotsRequest)[K]
    }>): Request<GetRelationalDatabaseSnapshotsResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabaseSnapshots(
          this.ops["GetRelationalDatabaseSnapshots"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabases(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabasesRequest]: (GetRelationalDatabasesRequest)[K]
    }>): Request<GetRelationalDatabasesResult, AWSError> {
        this.boot();
        return this.client.getRelationalDatabases(
          this.ops["GetRelationalDatabases"].apply(partialParams)
        );
    }

    invokeGetStaticIp(partialParams: ToOptional<{
      [K in keyof GetStaticIpRequest]: (GetStaticIpRequest)[K]
    }>): Request<GetStaticIpResult, AWSError> {
        this.boot();
        return this.client.getStaticIp(
          this.ops["GetStaticIp"].apply(partialParams)
        );
    }

    invokeGetStaticIps(partialParams: ToOptional<{
      [K in keyof GetStaticIpsRequest]: (GetStaticIpsRequest)[K]
    }>): Request<GetStaticIpsResult, AWSError> {
        this.boot();
        return this.client.getStaticIps(
          this.ops["GetStaticIps"].apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest]: (ImportKeyPairRequest)[K]
    }>): Request<ImportKeyPairResult, AWSError> {
        this.boot();
        return this.client.importKeyPair(
          this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeIsVpcPeered(partialParams: ToOptional<{
      [K in keyof IsVpcPeeredRequest]: (IsVpcPeeredRequest)[K]
    }>): Request<IsVpcPeeredResult, AWSError> {
        this.boot();
        return this.client.isVpcPeered(
          this.ops["IsVpcPeered"].apply(partialParams)
        );
    }

    invokeOpenInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof OpenInstancePublicPortsRequest]: (OpenInstancePublicPortsRequest)[K]
    }>): Request<OpenInstancePublicPortsResult, AWSError> {
        this.boot();
        return this.client.openInstancePublicPorts(
          this.ops["OpenInstancePublicPorts"].apply(partialParams)
        );
    }

    invokePeerVpc(partialParams: ToOptional<{
      [K in keyof PeerVpcRequest]: (PeerVpcRequest)[K]
    }>): Request<PeerVpcResult, AWSError> {
        this.boot();
        return this.client.peerVpc(
          this.ops["PeerVpc"].apply(partialParams)
        );
    }

    invokePutAlarm(partialParams: ToOptional<{
      [K in keyof PutAlarmRequest]: (PutAlarmRequest)[K]
    }>): Request<PutAlarmResult, AWSError> {
        this.boot();
        return this.client.putAlarm(
          this.ops["PutAlarm"].apply(partialParams)
        );
    }

    invokePutInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof PutInstancePublicPortsRequest]: (PutInstancePublicPortsRequest)[K]
    }>): Request<PutInstancePublicPortsResult, AWSError> {
        this.boot();
        return this.client.putInstancePublicPorts(
          this.ops["PutInstancePublicPorts"].apply(partialParams)
        );
    }

    invokeRebootInstance(partialParams: ToOptional<{
      [K in keyof RebootInstanceRequest]: (RebootInstanceRequest)[K]
    }>): Request<RebootInstanceResult, AWSError> {
        this.boot();
        return this.client.rebootInstance(
          this.ops["RebootInstance"].apply(partialParams)
        );
    }

    invokeRebootRelationalDatabase(partialParams: ToOptional<{
      [K in keyof RebootRelationalDatabaseRequest]: (RebootRelationalDatabaseRequest)[K]
    }>): Request<RebootRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.rebootRelationalDatabase(
          this.ops["RebootRelationalDatabase"].apply(partialParams)
        );
    }

    invokeRegisterContainerImage(partialParams: ToOptional<{
      [K in keyof RegisterContainerImageRequest]: (RegisterContainerImageRequest)[K]
    }>): Request<RegisterContainerImageResult, AWSError> {
        this.boot();
        return this.client.registerContainerImage(
          this.ops["RegisterContainerImage"].apply(partialParams)
        );
    }

    invokeReleaseStaticIp(partialParams: ToOptional<{
      [K in keyof ReleaseStaticIpRequest]: (ReleaseStaticIpRequest)[K]
    }>): Request<ReleaseStaticIpResult, AWSError> {
        this.boot();
        return this.client.releaseStaticIp(
          this.ops["ReleaseStaticIp"].apply(partialParams)
        );
    }

    invokeResetDistributionCache(partialParams: ToOptional<{
      [K in keyof ResetDistributionCacheRequest]: (ResetDistributionCacheRequest)[K]
    }>): Request<ResetDistributionCacheResult, AWSError> {
        this.boot();
        return this.client.resetDistributionCache(
          this.ops["ResetDistributionCache"].apply(partialParams)
        );
    }

    invokeSendContactMethodVerification(partialParams: ToOptional<{
      [K in keyof SendContactMethodVerificationRequest]: (SendContactMethodVerificationRequest)[K]
    }>): Request<SendContactMethodVerificationResult, AWSError> {
        this.boot();
        return this.client.sendContactMethodVerification(
          this.ops["SendContactMethodVerification"].apply(partialParams)
        );
    }

    invokeSetIpAddressType(partialParams: ToOptional<{
      [K in keyof SetIpAddressTypeRequest]: (SetIpAddressTypeRequest)[K]
    }>): Request<SetIpAddressTypeResult, AWSError> {
        this.boot();
        return this.client.setIpAddressType(
          this.ops["SetIpAddressType"].apply(partialParams)
        );
    }

    invokeSetResourceAccessForBucket(partialParams: ToOptional<{
      [K in keyof SetResourceAccessForBucketRequest]: (SetResourceAccessForBucketRequest)[K]
    }>): Request<SetResourceAccessForBucketResult, AWSError> {
        this.boot();
        return this.client.setResourceAccessForBucket(
          this.ops["SetResourceAccessForBucket"].apply(partialParams)
        );
    }

    invokeStartInstance(partialParams: ToOptional<{
      [K in keyof StartInstanceRequest]: (StartInstanceRequest)[K]
    }>): Request<StartInstanceResult, AWSError> {
        this.boot();
        return this.client.startInstance(
          this.ops["StartInstance"].apply(partialParams)
        );
    }

    invokeStartRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StartRelationalDatabaseRequest]: (StartRelationalDatabaseRequest)[K]
    }>): Request<StartRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.startRelationalDatabase(
          this.ops["StartRelationalDatabase"].apply(partialParams)
        );
    }

    invokeStopInstance(partialParams: ToOptional<{
      [K in keyof StopInstanceRequest]: (StopInstanceRequest)[K]
    }>): Request<StopInstanceResult, AWSError> {
        this.boot();
        return this.client.stopInstance(
          this.ops["StopInstance"].apply(partialParams)
        );
    }

    invokeStopRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StopRelationalDatabaseRequest]: (StopRelationalDatabaseRequest)[K]
    }>): Request<StopRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.stopRelationalDatabase(
          this.ops["StopRelationalDatabase"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResult, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestAlarm(partialParams: ToOptional<{
      [K in keyof TestAlarmRequest]: (TestAlarmRequest)[K]
    }>): Request<TestAlarmResult, AWSError> {
        this.boot();
        return this.client.testAlarm(
          this.ops["TestAlarm"].apply(partialParams)
        );
    }

    invokeUnpeerVpc(partialParams: ToOptional<{
      [K in keyof UnpeerVpcRequest]: (UnpeerVpcRequest)[K]
    }>): Request<UnpeerVpcResult, AWSError> {
        this.boot();
        return this.client.unpeerVpc(
          this.ops["UnpeerVpc"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResult, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBucket(partialParams: ToOptional<{
      [K in keyof UpdateBucketRequest]: (UpdateBucketRequest)[K]
    }>): Request<UpdateBucketResult, AWSError> {
        this.boot();
        return this.client.updateBucket(
          this.ops["UpdateBucket"].apply(partialParams)
        );
    }

    invokeUpdateBucketBundle(partialParams: ToOptional<{
      [K in keyof UpdateBucketBundleRequest]: (UpdateBucketBundleRequest)[K]
    }>): Request<UpdateBucketBundleResult, AWSError> {
        this.boot();
        return this.client.updateBucketBundle(
          this.ops["UpdateBucketBundle"].apply(partialParams)
        );
    }

    invokeUpdateContainerService(partialParams: ToOptional<{
      [K in keyof UpdateContainerServiceRequest]: (UpdateContainerServiceRequest)[K]
    }>): Request<UpdateContainerServiceResult, AWSError> {
        this.boot();
        return this.client.updateContainerService(
          this.ops["UpdateContainerService"].apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest]: (UpdateDistributionRequest)[K]
    }>): Request<UpdateDistributionResult, AWSError> {
        this.boot();
        return this.client.updateDistribution(
          this.ops["UpdateDistribution"].apply(partialParams)
        );
    }

    invokeUpdateDistributionBundle(partialParams: ToOptional<{
      [K in keyof UpdateDistributionBundleRequest]: (UpdateDistributionBundleRequest)[K]
    }>): Request<UpdateDistributionBundleResult, AWSError> {
        this.boot();
        return this.client.updateDistributionBundle(
          this.ops["UpdateDistributionBundle"].apply(partialParams)
        );
    }

    invokeUpdateDomainEntry(partialParams: ToOptional<{
      [K in keyof UpdateDomainEntryRequest]: (UpdateDomainEntryRequest)[K]
    }>): Request<UpdateDomainEntryResult, AWSError> {
        this.boot();
        return this.client.updateDomainEntry(
          this.ops["UpdateDomainEntry"].apply(partialParams)
        );
    }

    invokeUpdateLoadBalancerAttribute(partialParams: ToOptional<{
      [K in keyof UpdateLoadBalancerAttributeRequest]: (UpdateLoadBalancerAttributeRequest)[K]
    }>): Request<UpdateLoadBalancerAttributeResult, AWSError> {
        this.boot();
        return this.client.updateLoadBalancerAttribute(
          this.ops["UpdateLoadBalancerAttribute"].apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseRequest]: (UpdateRelationalDatabaseRequest)[K]
    }>): Request<UpdateRelationalDatabaseResult, AWSError> {
        this.boot();
        return this.client.updateRelationalDatabase(
          this.ops["UpdateRelationalDatabase"].apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseParametersRequest]: (UpdateRelationalDatabaseParametersRequest)[K]
    }>): Request<UpdateRelationalDatabaseParametersResult, AWSError> {
        this.boot();
        return this.client.updateRelationalDatabaseParameters(
          this.ops["UpdateRelationalDatabaseParameters"].apply(partialParams)
        );
    }
}