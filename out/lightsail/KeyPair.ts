
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    EnableAddOnRequest,
    ExportSnapshotRequest,
    GetAutoSnapshotsRequest,
    GetBucketAccessKeysRequest,
    GetBucketMetricDataRequest,
    GetContainerImagesRequest,
    GetContainerLogRequest,
    GetContainerServiceDeploymentsRequest,
    GetContainerServiceMetricDataRequest,
    GetDiskRequest,
    GetDiskSnapshotRequest,
    GetDistributionMetricDataRequest,
    GetDomainRequest,
    GetInstanceRequest,
    GetInstanceAccessDetailsRequest,
    GetInstanceMetricDataRequest,
    GetInstancePortStatesRequest,
    GetInstanceSnapshotRequest,
    GetInstanceStateRequest,
    GetKeyPairRequest,
    GetLoadBalancerRequest,
    GetLoadBalancerMetricDataRequest,
    GetLoadBalancerTlsCertificatesRequest,
    GetOperationRequest,
    GetOperationsForResourceRequest,
    GetRelationalDatabaseRequest,
    GetRelationalDatabaseEventsRequest,
    GetRelationalDatabaseLogEventsRequest,
    GetRelationalDatabaseLogStreamsRequest,
    GetRelationalDatabaseMasterUserPasswordRequest,
    GetRelationalDatabaseMetricDataRequest,
    GetRelationalDatabaseParametersRequest,
    GetRelationalDatabaseSnapshotRequest,
    GetStaticIpRequest,
    ImportKeyPairRequest,
    OpenInstancePublicPortsRequest,
    PutAlarmRequest,
    PutInstancePublicPortsRequest,
    RebootInstanceRequest,
    RebootRelationalDatabaseRequest,
    RegisterContainerImageRequest,
    ReleaseStaticIpRequest,
    SendContactMethodVerificationRequest,
    SetIpAddressTypeRequest,
    SetResourceAccessForBucketRequest,
    StartInstanceRequest,
    StartRelationalDatabaseRequest,
    StopInstanceRequest,
    StopRelationalDatabaseRequest,
    TagResourceRequest,
    TestAlarmRequest,
    UntagResourceRequest,
    UpdateBucketRequest,
    UpdateBucketBundleRequest,
    UpdateContainerServiceRequest,
    UpdateDistributionRequest,
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
    EnableAddOnResult,
    ExportSnapshotResult,
    GetAutoSnapshotsResult,
    GetBucketAccessKeysResult,
    GetBucketMetricDataResult,
    GetContainerImagesResult,
    GetContainerLogResult,
    GetContainerServiceDeploymentsResult,
    GetContainerServiceMetricDataResult,
    GetDiskResult,
    GetDiskSnapshotResult,
    GetDistributionMetricDataResult,
    GetDomainResult,
    GetInstanceResult,
    GetInstanceAccessDetailsResult,
    GetInstanceMetricDataResult,
    GetInstancePortStatesResult,
    GetInstanceSnapshotResult,
    GetInstanceStateResult,
    GetKeyPairResult,
    GetLoadBalancerResult,
    GetLoadBalancerMetricDataResult,
    GetLoadBalancerTlsCertificatesResult,
    GetOperationResult,
    GetOperationsForResourceResult,
    GetRelationalDatabaseResult,
    GetRelationalDatabaseEventsResult,
    GetRelationalDatabaseLogEventsResult,
    GetRelationalDatabaseLogStreamsResult,
    GetRelationalDatabaseMasterUserPasswordResult,
    GetRelationalDatabaseMetricDataResult,
    GetRelationalDatabaseParametersResult,
    GetRelationalDatabaseSnapshotResult,
    GetStaticIpResult,
    ImportKeyPairResult,
    OpenInstancePublicPortsResult,
    PutAlarmResult,
    PutInstancePublicPortsResult,
    RebootInstanceResult,
    RebootRelationalDatabaseResult,
    RegisterContainerImageResult,
    ReleaseStaticIpResult,
    SendContactMethodVerificationResult,
    SetIpAddressTypeResult,
    SetResourceAccessForBucketResult,
    StartInstanceResult,
    StartRelationalDatabaseResult,
    StopInstanceResult,
    StopRelationalDatabaseResult,
    TagResourceResult,
    TestAlarmResult,
    UntagResourceResult,
    UpdateBucketResult,
    UpdateBucketBundleResult,
    UpdateContainerServiceResult,
    UpdateDistributionResult,
    UpdateDomainEntryResult,
    UpdateLoadBalancerAttributeResult,
    UpdateRelationalDatabaseResult,
    UpdateRelationalDatabaseParametersResult
} from "aws-sdk/clients/lightsail";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lightsail.KeyPair {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.lightsail.KeyPair>) {
        super(...args)
        this.client = new awssdk.Lightsail()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/lightsail-2016-11-28.normal.json"), this.client)
    }

    invokeAllocateStaticIp(partialParams: ToOptional<{
      [K in keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest]: (AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest)[K]
    }>): AllocateStaticIpResult {
        return this.client.allocateStaticIp(
            this.ops["AllocateStaticIp"].apply(partialParams)
        );
    }

    invokeAttachCertificateToDistribution(partialParams: ToOptional<{
      [K in keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest]: (AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest)[K]
    }>): AttachCertificateToDistributionResult {
        return this.client.attachCertificateToDistribution(
            this.ops["AttachCertificateToDistribution"].apply(partialParams)
        );
    }

    invokeAttachDisk(partialParams: ToOptional<{
      [K in keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest]: (AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest)[K]
    }>): AttachDiskResult {
        return this.client.attachDisk(
            this.ops["AttachDisk"].apply(partialParams)
        );
    }

    invokeAttachInstancesToLoadBalancer(partialParams: ToOptional<{
      [K in keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest]: (AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest)[K]
    }>): AttachInstancesToLoadBalancerResult {
        return this.client.attachInstancesToLoadBalancer(
            this.ops["AttachInstancesToLoadBalancer"].apply(partialParams)
        );
    }

    invokeAttachLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest]: (AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest)[K]
    }>): AttachLoadBalancerTlsCertificateResult {
        return this.client.attachLoadBalancerTlsCertificate(
            this.ops["AttachLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeAttachStaticIp(partialParams: ToOptional<{
      [K in keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest]: (AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest)[K]
    }>): AttachStaticIpResult {
        return this.client.attachStaticIp(
            this.ops["AttachStaticIp"].apply(partialParams)
        );
    }

    invokeCloseInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest]: (CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest)[K]
    }>): CloseInstancePublicPortsResult {
        return this.client.closeInstancePublicPorts(
            this.ops["CloseInstancePublicPorts"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest]: (CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest)[K]
    }>): CopySnapshotResult {
        return this.client.copySnapshot(
            this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest]: (CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest)[K]
    }>): CreateBucketResult {
        return this.client.createBucket(
            this.ops["CreateBucket"].apply(partialParams)
        );
    }

    invokeCreateBucketAccessKey(partialParams: ToOptional<{
      [K in keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest]: (CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest)[K]
    }>): CreateBucketAccessKeyResult {
        return this.client.createBucketAccessKey(
            this.ops["CreateBucketAccessKey"].apply(partialParams)
        );
    }

    invokeCreateCertificate(partialParams: ToOptional<{
      [K in keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest]: (CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest)[K]
    }>): CreateCertificateResult {
        return this.client.createCertificate(
            this.ops["CreateCertificate"].apply(partialParams)
        );
    }

    invokeCreateCloudFormationStack(partialParams: ToOptional<{
      [K in keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest]: (CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest)[K]
    }>): CreateCloudFormationStackResult {
        return this.client.createCloudFormationStack(
            this.ops["CreateCloudFormationStack"].apply(partialParams)
        );
    }

    invokeCreateContactMethod(partialParams: ToOptional<{
      [K in keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest]: (CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest)[K]
    }>): CreateContactMethodResult {
        return this.client.createContactMethod(
            this.ops["CreateContactMethod"].apply(partialParams)
        );
    }

    invokeCreateContainerService(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest]: (CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest)[K]
    }>): CreateContainerServiceResult {
        return this.client.createContainerService(
            this.ops["CreateContainerService"].apply(partialParams)
        );
    }

    invokeCreateContainerServiceDeployment(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest]: (CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest)[K]
    }>): CreateContainerServiceDeploymentResult {
        return this.client.createContainerServiceDeployment(
            this.ops["CreateContainerServiceDeployment"].apply(partialParams)
        );
    }

    invokeCreateDisk(partialParams: ToOptional<{
      [K in keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest]: (CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest)[K]
    }>): CreateDiskResult {
        return this.client.createDisk(
            this.ops["CreateDisk"].apply(partialParams)
        );
    }

    invokeCreateDiskFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest]: (CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest)[K]
    }>): CreateDiskFromSnapshotResult {
        return this.client.createDiskFromSnapshot(
            this.ops["CreateDiskFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDiskSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest]: (CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest)[K]
    }>): CreateDiskSnapshotResult {
        return this.client.createDiskSnapshot(
            this.ops["CreateDiskSnapshot"].apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest]: (CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest)[K]
    }>): CreateDistributionResult {
        return this.client.createDistribution(
            this.ops["CreateDistribution"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): CreateDomainResult {
        return this.client.createDomain(
            this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateDomainEntry(partialParams: ToOptional<{
      [K in keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest]: (CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest)[K]
    }>): CreateDomainEntryResult {
        return this.client.createDomainEntry(
            this.ops["CreateDomainEntry"].apply(partialParams)
        );
    }

    invokeCreateInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest]: (CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest)[K]
    }>): CreateInstanceSnapshotResult {
        return this.client.createInstanceSnapshot(
            this.ops["CreateInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeCreateInstances(partialParams: ToOptional<{
      [K in keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest]: (CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest)[K]
    }>): CreateInstancesResult {
        return this.client.createInstances(
            this.ops["CreateInstances"].apply(partialParams)
        );
    }

    invokeCreateInstancesFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest]: (CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest)[K]
    }>): CreateInstancesFromSnapshotResult {
        return this.client.createInstancesFromSnapshot(
            this.ops["CreateInstancesFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest]: (CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest)[K]
    }>): CreateKeyPairResult {
        return this.client.createKeyPair(
            this.ops["CreateKeyPair"].apply(partialParams)
        );
    }

    invokeCreateLoadBalancer(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest]: (CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest)[K]
    }>): CreateLoadBalancerResult {
        return this.client.createLoadBalancer(
            this.ops["CreateLoadBalancer"].apply(partialParams)
        );
    }

    invokeCreateLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest]: (CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest)[K]
    }>): CreateLoadBalancerTlsCertificateResult {
        return this.client.createLoadBalancerTlsCertificate(
            this.ops["CreateLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest]: (CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest)[K]
    }>): CreateRelationalDatabaseResult {
        return this.client.createRelationalDatabase(
            this.ops["CreateRelationalDatabase"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest]: (CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest)[K]
    }>): CreateRelationalDatabaseFromSnapshotResult {
        return this.client.createRelationalDatabaseFromSnapshot(
            this.ops["CreateRelationalDatabaseFromSnapshot"].apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest]: (CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest)[K]
    }>): CreateRelationalDatabaseSnapshotResult {
        return this.client.createRelationalDatabaseSnapshot(
            this.ops["CreateRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteAlarm(partialParams: ToOptional<{
      [K in keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest]: (DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest)[K]
    }>): DeleteAlarmResult {
        return this.client.deleteAlarm(
            this.ops["DeleteAlarm"].apply(partialParams)
        );
    }

    invokeDeleteAutoSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest]: (DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest)[K]
    }>): DeleteAutoSnapshotResult {
        return this.client.deleteAutoSnapshot(
            this.ops["DeleteAutoSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest]: (DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest)[K]
    }>): DeleteBucketResult {
        return this.client.deleteBucket(
            this.ops["DeleteBucket"].apply(partialParams)
        );
    }

    invokeDeleteBucketAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest]: (DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest)[K]
    }>): DeleteBucketAccessKeyResult {
        return this.client.deleteBucketAccessKey(
            this.ops["DeleteBucketAccessKey"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest]: (DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest)[K]
    }>): DeleteCertificateResult {
        return this.client.deleteCertificate(
            this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteContactMethod(partialParams: ToOptional<{
      [K in keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest]: (DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest)[K]
    }>): DeleteContactMethodResult {
        return this.client.deleteContactMethod(
            this.ops["DeleteContactMethod"].apply(partialParams)
        );
    }

    invokeDeleteContainerImage(partialParams: ToOptional<{
      [K in keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest]: (DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest)[K]
    }>): DeleteContainerImageResult {
        return this.client.deleteContainerImage(
            this.ops["DeleteContainerImage"].apply(partialParams)
        );
    }

    invokeDeleteContainerService(partialParams: ToOptional<{
      [K in keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest]: (DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest)[K]
    }>): DeleteContainerServiceResult {
        return this.client.deleteContainerService(
            this.ops["DeleteContainerService"].apply(partialParams)
        );
    }

    invokeDeleteDisk(partialParams: ToOptional<{
      [K in keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest]: (DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest)[K]
    }>): DeleteDiskResult {
        return this.client.deleteDisk(
            this.ops["DeleteDisk"].apply(partialParams)
        );
    }

    invokeDeleteDiskSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest]: (DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest)[K]
    }>): DeleteDiskSnapshotResult {
        return this.client.deleteDiskSnapshot(
            this.ops["DeleteDiskSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): DeleteDomainResult {
        return this.client.deleteDomain(
            this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteDomainEntry(partialParams: ToOptional<{
      [K in keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest]: (DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest)[K]
    }>): DeleteDomainEntryResult {
        return this.client.deleteDomainEntry(
            this.ops["DeleteDomainEntry"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): DeleteInstanceResult {
        return this.client.deleteInstance(
            this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest]: (DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest)[K]
    }>): DeleteInstanceSnapshotResult {
        return this.client.deleteInstanceSnapshot(
            this.ops["DeleteInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteKeyPair(partialParams: ToOptional<{
      [K in keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest]: (DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest)[K]
    }>): DeleteKeyPairResult {
        return this.client.deleteKeyPair(
            this.ops["DeleteKeyPair"].apply(partialParams)
        );
    }

    invokeDeleteKnownHostKeys(partialParams: ToOptional<{
      [K in keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest]: (DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest)[K]
    }>): DeleteKnownHostKeysResult {
        return this.client.deleteKnownHostKeys(
            this.ops["DeleteKnownHostKeys"].apply(partialParams)
        );
    }

    invokeDeleteLoadBalancer(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest]: (DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest)[K]
    }>): DeleteLoadBalancerResult {
        return this.client.deleteLoadBalancer(
            this.ops["DeleteLoadBalancer"].apply(partialParams)
        );
    }

    invokeDeleteLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest]: (DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest)[K]
    }>): DeleteLoadBalancerTlsCertificateResult {
        return this.client.deleteLoadBalancerTlsCertificate(
            this.ops["DeleteLoadBalancerTlsCertificate"].apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabase(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest]: (DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest)[K]
    }>): DeleteRelationalDatabaseResult {
        return this.client.deleteRelationalDatabase(
            this.ops["DeleteRelationalDatabase"].apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest]: (DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest)[K]
    }>): DeleteRelationalDatabaseSnapshotResult {
        return this.client.deleteRelationalDatabaseSnapshot(
            this.ops["DeleteRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeDetachCertificateFromDistribution(partialParams: ToOptional<{
      [K in keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest]: (DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest)[K]
    }>): DetachCertificateFromDistributionResult {
        return this.client.detachCertificateFromDistribution(
            this.ops["DetachCertificateFromDistribution"].apply(partialParams)
        );
    }

    invokeDetachDisk(partialParams: ToOptional<{
      [K in keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest]: (DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest)[K]
    }>): DetachDiskResult {
        return this.client.detachDisk(
            this.ops["DetachDisk"].apply(partialParams)
        );
    }

    invokeDetachInstancesFromLoadBalancer(partialParams: ToOptional<{
      [K in keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest]: (DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest)[K]
    }>): DetachInstancesFromLoadBalancerResult {
        return this.client.detachInstancesFromLoadBalancer(
            this.ops["DetachInstancesFromLoadBalancer"].apply(partialParams)
        );
    }

    invokeDetachStaticIp(partialParams: ToOptional<{
      [K in keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest]: (DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest)[K]
    }>): DetachStaticIpResult {
        return this.client.detachStaticIp(
            this.ops["DetachStaticIp"].apply(partialParams)
        );
    }

    invokeDisableAddOn(partialParams: ToOptional<{
      [K in keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest]: (DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest)[K]
    }>): DisableAddOnResult {
        return this.client.disableAddOn(
            this.ops["DisableAddOn"].apply(partialParams)
        );
    }

    invokeEnableAddOn(partialParams: ToOptional<{
      [K in keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest]: (EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest)[K]
    }>): EnableAddOnResult {
        return this.client.enableAddOn(
            this.ops["EnableAddOn"].apply(partialParams)
        );
    }

    invokeExportSnapshot(partialParams: ToOptional<{
      [K in keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest]: (ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest)[K]
    }>): ExportSnapshotResult {
        return this.client.exportSnapshot(
            this.ops["ExportSnapshot"].apply(partialParams)
        );
    }

    invokeGetAutoSnapshots(partialParams: ToOptional<{
      [K in keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest]: (GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest)[K]
    }>): GetAutoSnapshotsResult {
        return this.client.getAutoSnapshots(
            this.ops["GetAutoSnapshots"].apply(partialParams)
        );
    }

    invokeGetBucketAccessKeys(partialParams: ToOptional<{
      [K in keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest]: (GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest)[K]
    }>): GetBucketAccessKeysResult {
        return this.client.getBucketAccessKeys(
            this.ops["GetBucketAccessKeys"].apply(partialParams)
        );
    }

    invokeGetBucketMetricData(partialParams: ToOptional<{
      [K in keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest]: (GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest)[K]
    }>): GetBucketMetricDataResult {
        return this.client.getBucketMetricData(
            this.ops["GetBucketMetricData"].apply(partialParams)
        );
    }

    invokeGetContainerImages(partialParams: ToOptional<{
      [K in keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest]: (GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest)[K]
    }>): GetContainerImagesResult {
        return this.client.getContainerImages(
            this.ops["GetContainerImages"].apply(partialParams)
        );
    }

    invokeGetContainerLog(partialParams: ToOptional<{
      [K in keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest]: (GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest)[K]
    }>): GetContainerLogResult {
        return this.client.getContainerLog(
            this.ops["GetContainerLog"].apply(partialParams)
        );
    }

    invokeGetContainerServiceDeployments(partialParams: ToOptional<{
      [K in keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest]: (GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest)[K]
    }>): GetContainerServiceDeploymentsResult {
        return this.client.getContainerServiceDeployments(
            this.ops["GetContainerServiceDeployments"].apply(partialParams)
        );
    }

    invokeGetContainerServiceMetricData(partialParams: ToOptional<{
      [K in keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest]: (GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest)[K]
    }>): GetContainerServiceMetricDataResult {
        return this.client.getContainerServiceMetricData(
            this.ops["GetContainerServiceMetricData"].apply(partialParams)
        );
    }

    invokeGetDisk(partialParams: ToOptional<{
      [K in keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest]: (GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest)[K]
    }>): GetDiskResult {
        return this.client.getDisk(
            this.ops["GetDisk"].apply(partialParams)
        );
    }

    invokeGetDiskSnapshot(partialParams: ToOptional<{
      [K in keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest]: (GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest)[K]
    }>): GetDiskSnapshotResult {
        return this.client.getDiskSnapshot(
            this.ops["GetDiskSnapshot"].apply(partialParams)
        );
    }

    invokeGetDistributionMetricData(partialParams: ToOptional<{
      [K in keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest]: (GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest)[K]
    }>): GetDistributionMetricDataResult {
        return this.client.getDistributionMetricData(
            this.ops["GetDistributionMetricData"].apply(partialParams)
        );
    }

    invokeGetDomain(partialParams: ToOptional<{
      [K in keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest]: (GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest)[K]
    }>): GetDomainResult {
        return this.client.getDomain(
            this.ops["GetDomain"].apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest]: (GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest)[K]
    }>): GetInstanceResult {
        return this.client.getInstance(
            this.ops["GetInstance"].apply(partialParams)
        );
    }

    invokeGetInstanceAccessDetails(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest]: (GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest)[K]
    }>): GetInstanceAccessDetailsResult {
        return this.client.getInstanceAccessDetails(
            this.ops["GetInstanceAccessDetails"].apply(partialParams)
        );
    }

    invokeGetInstanceMetricData(partialParams: ToOptional<{
      [K in keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest]: (GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest)[K]
    }>): GetInstanceMetricDataResult {
        return this.client.getInstanceMetricData(
            this.ops["GetInstanceMetricData"].apply(partialParams)
        );
    }

    invokeGetInstancePortStates(partialParams: ToOptional<{
      [K in keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest]: (GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest)[K]
    }>): GetInstancePortStatesResult {
        return this.client.getInstancePortStates(
            this.ops["GetInstancePortStates"].apply(partialParams)
        );
    }

    invokeGetInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest]: (GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest)[K]
    }>): GetInstanceSnapshotResult {
        return this.client.getInstanceSnapshot(
            this.ops["GetInstanceSnapshot"].apply(partialParams)
        );
    }

    invokeGetInstanceState(partialParams: ToOptional<{
      [K in keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest]: (GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest)[K]
    }>): GetInstanceStateResult {
        return this.client.getInstanceState(
            this.ops["GetInstanceState"].apply(partialParams)
        );
    }

    invokeGetKeyPair(partialParams: ToOptional<{
      [K in keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest]: (GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest)[K]
    }>): GetKeyPairResult {
        return this.client.getKeyPair(
            this.ops["GetKeyPair"].apply(partialParams)
        );
    }

    invokeGetLoadBalancer(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest]: (GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest)[K]
    }>): GetLoadBalancerResult {
        return this.client.getLoadBalancer(
            this.ops["GetLoadBalancer"].apply(partialParams)
        );
    }

    invokeGetLoadBalancerMetricData(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest]: (GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest)[K]
    }>): GetLoadBalancerMetricDataResult {
        return this.client.getLoadBalancerMetricData(
            this.ops["GetLoadBalancerMetricData"].apply(partialParams)
        );
    }

    invokeGetLoadBalancerTlsCertificates(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest]: (GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest)[K]
    }>): GetLoadBalancerTlsCertificatesResult {
        return this.client.getLoadBalancerTlsCertificates(
            this.ops["GetLoadBalancerTlsCertificates"].apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest]: (GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest)[K]
    }>): GetOperationResult {
        return this.client.getOperation(
            this.ops["GetOperation"].apply(partialParams)
        );
    }

    invokeGetOperationsForResource(partialParams: ToOptional<{
      [K in keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest]: (GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest)[K]
    }>): GetOperationsForResourceResult {
        return this.client.getOperationsForResource(
            this.ops["GetOperationsForResource"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabase(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest]: (GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest)[K]
    }>): GetRelationalDatabaseResult {
        return this.client.getRelationalDatabase(
            this.ops["GetRelationalDatabase"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest]: (GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest)[K]
    }>): GetRelationalDatabaseEventsResult {
        return this.client.getRelationalDatabaseEvents(
            this.ops["GetRelationalDatabaseEvents"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest]: (GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest)[K]
    }>): GetRelationalDatabaseLogEventsResult {
        return this.client.getRelationalDatabaseLogEvents(
            this.ops["GetRelationalDatabaseLogEvents"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogStreams(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest]: (GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest)[K]
    }>): GetRelationalDatabaseLogStreamsResult {
        return this.client.getRelationalDatabaseLogStreams(
            this.ops["GetRelationalDatabaseLogStreams"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMasterUserPassword(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest]: (GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest)[K]
    }>): GetRelationalDatabaseMasterUserPasswordResult {
        return this.client.getRelationalDatabaseMasterUserPassword(
            this.ops["GetRelationalDatabaseMasterUserPassword"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMetricData(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest]: (GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest)[K]
    }>): GetRelationalDatabaseMetricDataResult {
        return this.client.getRelationalDatabaseMetricData(
            this.ops["GetRelationalDatabaseMetricData"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest]: (GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest)[K]
    }>): GetRelationalDatabaseParametersResult {
        return this.client.getRelationalDatabaseParameters(
            this.ops["GetRelationalDatabaseParameters"].apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest]: (GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest)[K]
    }>): GetRelationalDatabaseSnapshotResult {
        return this.client.getRelationalDatabaseSnapshot(
            this.ops["GetRelationalDatabaseSnapshot"].apply(partialParams)
        );
    }

    invokeGetStaticIp(partialParams: ToOptional<{
      [K in keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest]: (GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest)[K]
    }>): GetStaticIpResult {
        return this.client.getStaticIp(
            this.ops["GetStaticIp"].apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest]: (ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest)[K]
    }>): ImportKeyPairResult {
        return this.client.importKeyPair(
            this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeOpenInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest]: (OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest)[K]
    }>): OpenInstancePublicPortsResult {
        return this.client.openInstancePublicPorts(
            this.ops["OpenInstancePublicPorts"].apply(partialParams)
        );
    }

    invokePutAlarm(partialParams: ToOptional<{
      [K in keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest]: (PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest)[K]
    }>): PutAlarmResult {
        return this.client.putAlarm(
            this.ops["PutAlarm"].apply(partialParams)
        );
    }

    invokePutInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest]: (PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest)[K]
    }>): PutInstancePublicPortsResult {
        return this.client.putInstancePublicPorts(
            this.ops["PutInstancePublicPorts"].apply(partialParams)
        );
    }

    invokeRebootInstance(partialParams: ToOptional<{
      [K in keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest]: (RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest)[K]
    }>): RebootInstanceResult {
        return this.client.rebootInstance(
            this.ops["RebootInstance"].apply(partialParams)
        );
    }

    invokeRebootRelationalDatabase(partialParams: ToOptional<{
      [K in keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest]: (RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest)[K]
    }>): RebootRelationalDatabaseResult {
        return this.client.rebootRelationalDatabase(
            this.ops["RebootRelationalDatabase"].apply(partialParams)
        );
    }

    invokeRegisterContainerImage(partialParams: ToOptional<{
      [K in keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest]: (RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest)[K]
    }>): RegisterContainerImageResult {
        return this.client.registerContainerImage(
            this.ops["RegisterContainerImage"].apply(partialParams)
        );
    }

    invokeReleaseStaticIp(partialParams: ToOptional<{
      [K in keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest]: (ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest)[K]
    }>): ReleaseStaticIpResult {
        return this.client.releaseStaticIp(
            this.ops["ReleaseStaticIp"].apply(partialParams)
        );
    }

    invokeSendContactMethodVerification(partialParams: ToOptional<{
      [K in keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest]: (SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest)[K]
    }>): SendContactMethodVerificationResult {
        return this.client.sendContactMethodVerification(
            this.ops["SendContactMethodVerification"].apply(partialParams)
        );
    }

    invokeSetIpAddressType(partialParams: ToOptional<{
      [K in keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest]: (SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest)[K]
    }>): SetIpAddressTypeResult {
        return this.client.setIpAddressType(
            this.ops["SetIpAddressType"].apply(partialParams)
        );
    }

    invokeSetResourceAccessForBucket(partialParams: ToOptional<{
      [K in keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest]: (SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest)[K]
    }>): SetResourceAccessForBucketResult {
        return this.client.setResourceAccessForBucket(
            this.ops["SetResourceAccessForBucket"].apply(partialParams)
        );
    }

    invokeStartInstance(partialParams: ToOptional<{
      [K in keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest]: (StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest)[K]
    }>): StartInstanceResult {
        return this.client.startInstance(
            this.ops["StartInstance"].apply(partialParams)
        );
    }

    invokeStartRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest]: (StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest)[K]
    }>): StartRelationalDatabaseResult {
        return this.client.startRelationalDatabase(
            this.ops["StartRelationalDatabase"].apply(partialParams)
        );
    }

    invokeStopInstance(partialParams: ToOptional<{
      [K in keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest]: (StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest)[K]
    }>): StopInstanceResult {
        return this.client.stopInstance(
            this.ops["StopInstance"].apply(partialParams)
        );
    }

    invokeStopRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest]: (StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest)[K]
    }>): StopRelationalDatabaseResult {
        return this.client.stopRelationalDatabase(
            this.ops["StopRelationalDatabase"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResult {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestAlarm(partialParams: ToOptional<{
      [K in keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest]: (TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest)[K]
    }>): TestAlarmResult {
        return this.client.testAlarm(
            this.ops["TestAlarm"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResult {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBucket(partialParams: ToOptional<{
      [K in keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest]: (UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest)[K]
    }>): UpdateBucketResult {
        return this.client.updateBucket(
            this.ops["UpdateBucket"].apply(partialParams)
        );
    }

    invokeUpdateBucketBundle(partialParams: ToOptional<{
      [K in keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest]: (UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest)[K]
    }>): UpdateBucketBundleResult {
        return this.client.updateBucketBundle(
            this.ops["UpdateBucketBundle"].apply(partialParams)
        );
    }

    invokeUpdateContainerService(partialParams: ToOptional<{
      [K in keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest]: (UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest)[K]
    }>): UpdateContainerServiceResult {
        return this.client.updateContainerService(
            this.ops["UpdateContainerService"].apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest]: (UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest)[K]
    }>): UpdateDistributionResult {
        return this.client.updateDistribution(
            this.ops["UpdateDistribution"].apply(partialParams)
        );
    }

    invokeUpdateDomainEntry(partialParams: ToOptional<{
      [K in keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest]: (UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest)[K]
    }>): UpdateDomainEntryResult {
        return this.client.updateDomainEntry(
            this.ops["UpdateDomainEntry"].apply(partialParams)
        );
    }

    invokeUpdateLoadBalancerAttribute(partialParams: ToOptional<{
      [K in keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest]: (UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest)[K]
    }>): UpdateLoadBalancerAttributeResult {
        return this.client.updateLoadBalancerAttribute(
            this.ops["UpdateLoadBalancerAttribute"].apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest]: (UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest)[K]
    }>): UpdateRelationalDatabaseResult {
        return this.client.updateRelationalDatabase(
            this.ops["UpdateRelationalDatabase"].apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest]: (UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest)[K]
    }>): UpdateRelationalDatabaseParametersResult {
        return this.client.updateRelationalDatabaseParameters(
            this.ops["UpdateRelationalDatabaseParameters"].apply(partialParams)
        );
    }
}