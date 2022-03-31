
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
const schema = require("../apis/lightsail-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lightsail.KeyPair {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.lightsail.KeyPair>) {
        super(...args)
        this.client = new awssdk.Lightsail()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAllocateStaticIp(partialParams: ToOptional<{
      [K in keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest & keyof AllocateStaticIpRequest]: (AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest & AllocateStaticIpRequest)[K]
    }>): Request<AllocateStaticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateStaticIp(
          this.ops["AllocateStaticIp"].applicator.apply(partialParams)
        );
    }

    invokeAttachCertificateToDistribution(partialParams: ToOptional<{
      [K in keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest & keyof AttachCertificateToDistributionRequest]: (AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest & AttachCertificateToDistributionRequest)[K]
    }>): Request<AttachCertificateToDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachCertificateToDistribution(
          this.ops["AttachCertificateToDistribution"].applicator.apply(partialParams)
        );
    }

    invokeAttachDisk(partialParams: ToOptional<{
      [K in keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest & keyof AttachDiskRequest]: (AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest & AttachDiskRequest)[K]
    }>): Request<AttachDiskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachDisk(
          this.ops["AttachDisk"].applicator.apply(partialParams)
        );
    }

    invokeAttachInstancesToLoadBalancer(partialParams: ToOptional<{
      [K in keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest & keyof AttachInstancesToLoadBalancerRequest]: (AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest & AttachInstancesToLoadBalancerRequest)[K]
    }>): Request<AttachInstancesToLoadBalancerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInstancesToLoadBalancer(
          this.ops["AttachInstancesToLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeAttachLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest & keyof AttachLoadBalancerTlsCertificateRequest]: (AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest & AttachLoadBalancerTlsCertificateRequest)[K]
    }>): Request<AttachLoadBalancerTlsCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancerTlsCertificate(
          this.ops["AttachLoadBalancerTlsCertificate"].applicator.apply(partialParams)
        );
    }

    invokeAttachStaticIp(partialParams: ToOptional<{
      [K in keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest & keyof AttachStaticIpRequest]: (AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest & AttachStaticIpRequest)[K]
    }>): Request<AttachStaticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachStaticIp(
          this.ops["AttachStaticIp"].applicator.apply(partialParams)
        );
    }

    invokeCloseInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest & keyof CloseInstancePublicPortsRequest]: (CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest & CloseInstancePublicPortsRequest)[K]
    }>): Request<CloseInstancePublicPortsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.closeInstancePublicPorts(
          this.ops["CloseInstancePublicPorts"].applicator.apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest]: (CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateBucket(partialParams: ToOptional<{
      [K in keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest & keyof CreateBucketRequest]: (CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest & CreateBucketRequest)[K]
    }>): Request<CreateBucketResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucket(
          this.ops["CreateBucket"].applicator.apply(partialParams)
        );
    }

    invokeCreateBucketAccessKey(partialParams: ToOptional<{
      [K in keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest & keyof CreateBucketAccessKeyRequest]: (CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest & CreateBucketAccessKeyRequest)[K]
    }>): Request<CreateBucketAccessKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBucketAccessKey(
          this.ops["CreateBucketAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateCertificate(partialParams: ToOptional<{
      [K in keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest & keyof CreateCertificateRequest]: (CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest & CreateCertificateRequest)[K]
    }>): Request<CreateCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCertificate(
          this.ops["CreateCertificate"].applicator.apply(partialParams)
        );
    }

    invokeCreateCloudFormationStack(partialParams: ToOptional<{
      [K in keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest & keyof CreateCloudFormationStackRequest]: (CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest & CreateCloudFormationStackRequest)[K]
    }>): Request<CreateCloudFormationStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCloudFormationStack(
          this.ops["CreateCloudFormationStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateContactMethod(partialParams: ToOptional<{
      [K in keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest & keyof CreateContactMethodRequest]: (CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest & CreateContactMethodRequest)[K]
    }>): Request<CreateContactMethodResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactMethod(
          this.ops["CreateContactMethod"].applicator.apply(partialParams)
        );
    }

    invokeCreateContainerService(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest & keyof CreateContainerServiceRequest]: (CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest & CreateContainerServiceRequest)[K]
    }>): Request<CreateContainerServiceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerService(
          this.ops["CreateContainerService"].applicator.apply(partialParams)
        );
    }

    invokeCreateContainerServiceDeployment(partialParams: ToOptional<{
      [K in keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest & keyof CreateContainerServiceDeploymentRequest]: (CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest & CreateContainerServiceDeploymentRequest)[K]
    }>): Request<CreateContainerServiceDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainerServiceDeployment(
          this.ops["CreateContainerServiceDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDisk(partialParams: ToOptional<{
      [K in keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest & keyof CreateDiskRequest]: (CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest & CreateDiskRequest)[K]
    }>): Request<CreateDiskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDisk(
          this.ops["CreateDisk"].applicator.apply(partialParams)
        );
    }

    invokeCreateDiskFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest & keyof CreateDiskFromSnapshotRequest]: (CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest & CreateDiskFromSnapshotRequest)[K]
    }>): Request<CreateDiskFromSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDiskFromSnapshot(
          this.ops["CreateDiskFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateDiskSnapshot(partialParams: ToOptional<{
      [K in keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest & keyof CreateDiskSnapshotRequest]: (CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest & CreateDiskSnapshotRequest)[K]
    }>): Request<CreateDiskSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDiskSnapshot(
          this.ops["CreateDiskSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateDistribution(partialParams: ToOptional<{
      [K in keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest & keyof CreateDistributionRequest]: (CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest & CreateDistributionRequest)[K]
    }>): Request<CreateDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistribution(
          this.ops["CreateDistribution"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): Request<CreateDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainEntry(partialParams: ToOptional<{
      [K in keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest & keyof CreateDomainEntryRequest]: (CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest & CreateDomainEntryRequest)[K]
    }>): Request<CreateDomainEntryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainEntry(
          this.ops["CreateDomainEntry"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest & keyof CreateInstanceSnapshotRequest]: (CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest & CreateInstanceSnapshotRequest)[K]
    }>): Request<CreateInstanceSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceSnapshot(
          this.ops["CreateInstanceSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstances(partialParams: ToOptional<{
      [K in keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest & keyof CreateInstancesRequest]: (CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest & CreateInstancesRequest)[K]
    }>): Request<CreateInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstances(
          this.ops["CreateInstances"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstancesFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest & keyof CreateInstancesFromSnapshotRequest]: (CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest & CreateInstancesFromSnapshotRequest)[K]
    }>): Request<CreateInstancesFromSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstancesFromSnapshot(
          this.ops["CreateInstancesFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest]: (CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest)[K]
    }>): Request<CreateKeyPairResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyPair(
          this.ops["CreateKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeCreateLoadBalancer(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest & keyof CreateLoadBalancerRequest]: (CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest & CreateLoadBalancerRequest)[K]
    }>): Request<CreateLoadBalancerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoadBalancer(
          this.ops["CreateLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeCreateLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest & keyof CreateLoadBalancerTlsCertificateRequest]: (CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest & CreateLoadBalancerTlsCertificateRequest)[K]
    }>): Request<CreateLoadBalancerTlsCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLoadBalancerTlsCertificate(
          this.ops["CreateLoadBalancerTlsCertificate"].applicator.apply(partialParams)
        );
    }

    invokeCreateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest & keyof CreateRelationalDatabaseRequest]: (CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest & CreateRelationalDatabaseRequest)[K]
    }>): Request<CreateRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabase(
          this.ops["CreateRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseFromSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest & keyof CreateRelationalDatabaseFromSnapshotRequest]: (CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest & CreateRelationalDatabaseFromSnapshotRequest)[K]
    }>): Request<CreateRelationalDatabaseFromSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabaseFromSnapshot(
          this.ops["CreateRelationalDatabaseFromSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest & keyof CreateRelationalDatabaseSnapshotRequest]: (CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest & CreateRelationalDatabaseSnapshotRequest)[K]
    }>): Request<CreateRelationalDatabaseSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRelationalDatabaseSnapshot(
          this.ops["CreateRelationalDatabaseSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlarm(partialParams: ToOptional<{
      [K in keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest & keyof DeleteAlarmRequest]: (DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest & DeleteAlarmRequest)[K]
    }>): Request<DeleteAlarmResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlarm(
          this.ops["DeleteAlarm"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAutoSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest & keyof DeleteAutoSnapshotRequest]: (DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest & DeleteAutoSnapshotRequest)[K]
    }>): Request<DeleteAutoSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutoSnapshot(
          this.ops["DeleteAutoSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucket(partialParams: ToOptional<{
      [K in keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest & keyof DeleteBucketRequest]: (DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest & DeleteBucketRequest)[K]
    }>): Request<DeleteBucketResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucket(
          this.ops["DeleteBucket"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBucketAccessKey(partialParams: ToOptional<{
      [K in keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest & keyof DeleteBucketAccessKeyRequest]: (DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest & DeleteBucketAccessKeyRequest)[K]
    }>): Request<DeleteBucketAccessKeyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBucketAccessKey(
          this.ops["DeleteBucketAccessKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest]: (DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest)[K]
    }>): Request<DeleteCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContactMethod(partialParams: ToOptional<{
      [K in keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest & keyof DeleteContactMethodRequest]: (DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest & DeleteContactMethodRequest)[K]
    }>): Request<DeleteContactMethodResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactMethod(
          this.ops["DeleteContactMethod"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainerImage(partialParams: ToOptional<{
      [K in keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest & keyof DeleteContainerImageRequest]: (DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest & DeleteContainerImageRequest)[K]
    }>): Request<DeleteContainerImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerImage(
          this.ops["DeleteContainerImage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainerService(partialParams: ToOptional<{
      [K in keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest & keyof DeleteContainerServiceRequest]: (DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest & DeleteContainerServiceRequest)[K]
    }>): Request<DeleteContainerServiceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerService(
          this.ops["DeleteContainerService"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDisk(partialParams: ToOptional<{
      [K in keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest & keyof DeleteDiskRequest]: (DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest & DeleteDiskRequest)[K]
    }>): Request<DeleteDiskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDisk(
          this.ops["DeleteDisk"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDiskSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest & keyof DeleteDiskSnapshotRequest]: (DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest & DeleteDiskSnapshotRequest)[K]
    }>): Request<DeleteDiskSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDiskSnapshot(
          this.ops["DeleteDiskSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainEntry(partialParams: ToOptional<{
      [K in keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest & keyof DeleteDomainEntryRequest]: (DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest & DeleteDomainEntryRequest)[K]
    }>): Request<DeleteDomainEntryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainEntry(
          this.ops["DeleteDomainEntry"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): Request<DeleteInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(
          this.ops["DeleteInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest & keyof DeleteInstanceSnapshotRequest]: (DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest & DeleteInstanceSnapshotRequest)[K]
    }>): Request<DeleteInstanceSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceSnapshot(
          this.ops["DeleteInstanceSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteKeyPair(partialParams: ToOptional<{
      [K in keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest & keyof DeleteKeyPairRequest]: (DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest & DeleteKeyPairRequest)[K]
    }>): Request<DeleteKeyPairResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeyPair(
          this.ops["DeleteKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeDeleteKnownHostKeys(partialParams: ToOptional<{
      [K in keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest & keyof DeleteKnownHostKeysRequest]: (DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest & DeleteKnownHostKeysRequest)[K]
    }>): Request<DeleteKnownHostKeysResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKnownHostKeys(
          this.ops["DeleteKnownHostKeys"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoadBalancer(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest & keyof DeleteLoadBalancerRequest]: (DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest & DeleteLoadBalancerRequest)[K]
    }>): Request<DeleteLoadBalancerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoadBalancer(
          this.ops["DeleteLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLoadBalancerTlsCertificate(partialParams: ToOptional<{
      [K in keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest & keyof DeleteLoadBalancerTlsCertificateRequest]: (DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest & DeleteLoadBalancerTlsCertificateRequest)[K]
    }>): Request<DeleteLoadBalancerTlsCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLoadBalancerTlsCertificate(
          this.ops["DeleteLoadBalancerTlsCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabase(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest & keyof DeleteRelationalDatabaseRequest]: (DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest & DeleteRelationalDatabaseRequest)[K]
    }>): Request<DeleteRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRelationalDatabase(
          this.ops["DeleteRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest & keyof DeleteRelationalDatabaseSnapshotRequest]: (DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest & DeleteRelationalDatabaseSnapshotRequest)[K]
    }>): Request<DeleteRelationalDatabaseSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRelationalDatabaseSnapshot(
          this.ops["DeleteRelationalDatabaseSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDetachCertificateFromDistribution(partialParams: ToOptional<{
      [K in keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest & keyof DetachCertificateFromDistributionRequest]: (DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest & DetachCertificateFromDistributionRequest)[K]
    }>): Request<DetachCertificateFromDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachCertificateFromDistribution(
          this.ops["DetachCertificateFromDistribution"].applicator.apply(partialParams)
        );
    }

    invokeDetachDisk(partialParams: ToOptional<{
      [K in keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest & keyof DetachDiskRequest]: (DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest & DetachDiskRequest)[K]
    }>): Request<DetachDiskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachDisk(
          this.ops["DetachDisk"].applicator.apply(partialParams)
        );
    }

    invokeDetachInstancesFromLoadBalancer(partialParams: ToOptional<{
      [K in keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest & keyof DetachInstancesFromLoadBalancerRequest]: (DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest & DetachInstancesFromLoadBalancerRequest)[K]
    }>): Request<DetachInstancesFromLoadBalancerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInstancesFromLoadBalancer(
          this.ops["DetachInstancesFromLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeDetachStaticIp(partialParams: ToOptional<{
      [K in keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest & keyof DetachStaticIpRequest]: (DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest & DetachStaticIpRequest)[K]
    }>): Request<DetachStaticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachStaticIp(
          this.ops["DetachStaticIp"].applicator.apply(partialParams)
        );
    }

    invokeDisableAddOn(partialParams: ToOptional<{
      [K in keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest & keyof DisableAddOnRequest]: (DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest & DisableAddOnRequest)[K]
    }>): Request<DisableAddOnResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableAddOn(
          this.ops["DisableAddOn"].applicator.apply(partialParams)
        );
    }

    invokeEnableAddOn(partialParams: ToOptional<{
      [K in keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest & keyof EnableAddOnRequest]: (EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest & EnableAddOnRequest)[K]
    }>): Request<EnableAddOnResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableAddOn(
          this.ops["EnableAddOn"].applicator.apply(partialParams)
        );
    }

    invokeExportSnapshot(partialParams: ToOptional<{
      [K in keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest & keyof ExportSnapshotRequest]: (ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest & ExportSnapshotRequest)[K]
    }>): Request<ExportSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportSnapshot(
          this.ops["ExportSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeGetAutoSnapshots(partialParams: ToOptional<{
      [K in keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest & keyof GetAutoSnapshotsRequest]: (GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest & GetAutoSnapshotsRequest)[K]
    }>): Request<GetAutoSnapshotsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAutoSnapshots(
          this.ops["GetAutoSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketAccessKeys(partialParams: ToOptional<{
      [K in keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest & keyof GetBucketAccessKeysRequest]: (GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest & GetBucketAccessKeysRequest)[K]
    }>): Request<GetBucketAccessKeysResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketAccessKeys(
          this.ops["GetBucketAccessKeys"].applicator.apply(partialParams)
        );
    }

    invokeGetBucketMetricData(partialParams: ToOptional<{
      [K in keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest & keyof GetBucketMetricDataRequest]: (GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest & GetBucketMetricDataRequest)[K]
    }>): Request<GetBucketMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBucketMetricData(
          this.ops["GetBucketMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerImages(partialParams: ToOptional<{
      [K in keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest & keyof GetContainerImagesRequest]: (GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest & GetContainerImagesRequest)[K]
    }>): Request<GetContainerImagesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerImages(
          this.ops["GetContainerImages"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerLog(partialParams: ToOptional<{
      [K in keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest & keyof GetContainerLogRequest]: (GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest & GetContainerLogRequest)[K]
    }>): Request<GetContainerLogResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerLog(
          this.ops["GetContainerLog"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerServiceDeployments(partialParams: ToOptional<{
      [K in keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest & keyof GetContainerServiceDeploymentsRequest]: (GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest & GetContainerServiceDeploymentsRequest)[K]
    }>): Request<GetContainerServiceDeploymentsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerServiceDeployments(
          this.ops["GetContainerServiceDeployments"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerServiceMetricData(partialParams: ToOptional<{
      [K in keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest & keyof GetContainerServiceMetricDataRequest]: (GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest & GetContainerServiceMetricDataRequest)[K]
    }>): Request<GetContainerServiceMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerServiceMetricData(
          this.ops["GetContainerServiceMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetDisk(partialParams: ToOptional<{
      [K in keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest & keyof GetDiskRequest]: (GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest & GetDiskRequest)[K]
    }>): Request<GetDiskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDisk(
          this.ops["GetDisk"].applicator.apply(partialParams)
        );
    }

    invokeGetDiskSnapshot(partialParams: ToOptional<{
      [K in keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest & keyof GetDiskSnapshotRequest]: (GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest & GetDiskSnapshotRequest)[K]
    }>): Request<GetDiskSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDiskSnapshot(
          this.ops["GetDiskSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeGetDistributionMetricData(partialParams: ToOptional<{
      [K in keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest & keyof GetDistributionMetricDataRequest]: (GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest & GetDistributionMetricDataRequest)[K]
    }>): Request<GetDistributionMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionMetricData(
          this.ops["GetDistributionMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetDomain(partialParams: ToOptional<{
      [K in keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest & keyof GetDomainRequest]: (GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest & GetDomainRequest)[K]
    }>): Request<GetDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomain(
          this.ops["GetDomain"].applicator.apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest]: (GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest)[K]
    }>): Request<GetInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstance(
          this.ops["GetInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceAccessDetails(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest & keyof GetInstanceAccessDetailsRequest]: (GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest & GetInstanceAccessDetailsRequest)[K]
    }>): Request<GetInstanceAccessDetailsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceAccessDetails(
          this.ops["GetInstanceAccessDetails"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceMetricData(partialParams: ToOptional<{
      [K in keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest & keyof GetInstanceMetricDataRequest]: (GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest & GetInstanceMetricDataRequest)[K]
    }>): Request<GetInstanceMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceMetricData(
          this.ops["GetInstanceMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetInstancePortStates(partialParams: ToOptional<{
      [K in keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest & keyof GetInstancePortStatesRequest]: (GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest & GetInstancePortStatesRequest)[K]
    }>): Request<GetInstancePortStatesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstancePortStates(
          this.ops["GetInstancePortStates"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceSnapshot(partialParams: ToOptional<{
      [K in keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest & keyof GetInstanceSnapshotRequest]: (GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest & GetInstanceSnapshotRequest)[K]
    }>): Request<GetInstanceSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceSnapshot(
          this.ops["GetInstanceSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceState(partialParams: ToOptional<{
      [K in keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest & keyof GetInstanceStateRequest]: (GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest & GetInstanceStateRequest)[K]
    }>): Request<GetInstanceStateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceState(
          this.ops["GetInstanceState"].applicator.apply(partialParams)
        );
    }

    invokeGetKeyPair(partialParams: ToOptional<{
      [K in keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest & keyof GetKeyPairRequest]: (GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest & GetKeyPairRequest)[K]
    }>): Request<GetKeyPairResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyPair(
          this.ops["GetKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeGetLoadBalancer(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest & keyof GetLoadBalancerRequest]: (GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest & GetLoadBalancerRequest)[K]
    }>): Request<GetLoadBalancerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancer(
          this.ops["GetLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeGetLoadBalancerMetricData(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest & keyof GetLoadBalancerMetricDataRequest]: (GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest & GetLoadBalancerMetricDataRequest)[K]
    }>): Request<GetLoadBalancerMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancerMetricData(
          this.ops["GetLoadBalancerMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetLoadBalancerTlsCertificates(partialParams: ToOptional<{
      [K in keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest & keyof GetLoadBalancerTlsCertificatesRequest]: (GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest & GetLoadBalancerTlsCertificatesRequest)[K]
    }>): Request<GetLoadBalancerTlsCertificatesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLoadBalancerTlsCertificates(
          this.ops["GetLoadBalancerTlsCertificates"].applicator.apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest]: (GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest)[K]
    }>): Request<GetOperationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOperation(
          this.ops["GetOperation"].applicator.apply(partialParams)
        );
    }

    invokeGetOperationsForResource(partialParams: ToOptional<{
      [K in keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest & keyof GetOperationsForResourceRequest]: (GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest & GetOperationsForResourceRequest)[K]
    }>): Request<GetOperationsForResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOperationsForResource(
          this.ops["GetOperationsForResource"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabase(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest & keyof GetRelationalDatabaseRequest]: (GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest & GetRelationalDatabaseRequest)[K]
    }>): Request<GetRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabase(
          this.ops["GetRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest & keyof GetRelationalDatabaseEventsRequest]: (GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest & GetRelationalDatabaseEventsRequest)[K]
    }>): Request<GetRelationalDatabaseEventsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseEvents(
          this.ops["GetRelationalDatabaseEvents"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogEvents(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest & keyof GetRelationalDatabaseLogEventsRequest]: (GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest & GetRelationalDatabaseLogEventsRequest)[K]
    }>): Request<GetRelationalDatabaseLogEventsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseLogEvents(
          this.ops["GetRelationalDatabaseLogEvents"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseLogStreams(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest & keyof GetRelationalDatabaseLogStreamsRequest]: (GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest & GetRelationalDatabaseLogStreamsRequest)[K]
    }>): Request<GetRelationalDatabaseLogStreamsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseLogStreams(
          this.ops["GetRelationalDatabaseLogStreams"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMasterUserPassword(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest & keyof GetRelationalDatabaseMasterUserPasswordRequest]: (GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest & GetRelationalDatabaseMasterUserPasswordRequest)[K]
    }>): Request<GetRelationalDatabaseMasterUserPasswordResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseMasterUserPassword(
          this.ops["GetRelationalDatabaseMasterUserPassword"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseMetricData(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest & keyof GetRelationalDatabaseMetricDataRequest]: (GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest & GetRelationalDatabaseMetricDataRequest)[K]
    }>): Request<GetRelationalDatabaseMetricDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseMetricData(
          this.ops["GetRelationalDatabaseMetricData"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest & keyof GetRelationalDatabaseParametersRequest]: (GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest & GetRelationalDatabaseParametersRequest)[K]
    }>): Request<GetRelationalDatabaseParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseParameters(
          this.ops["GetRelationalDatabaseParameters"].applicator.apply(partialParams)
        );
    }

    invokeGetRelationalDatabaseSnapshot(partialParams: ToOptional<{
      [K in keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest & keyof GetRelationalDatabaseSnapshotRequest]: (GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest & GetRelationalDatabaseSnapshotRequest)[K]
    }>): Request<GetRelationalDatabaseSnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRelationalDatabaseSnapshot(
          this.ops["GetRelationalDatabaseSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeGetStaticIp(partialParams: ToOptional<{
      [K in keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest & keyof GetStaticIpRequest]: (GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest & GetStaticIpRequest)[K]
    }>): Request<GetStaticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStaticIp(
          this.ops["GetStaticIp"].applicator.apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest]: (ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest)[K]
    }>): Request<ImportKeyPairResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyPair(
          this.ops["ImportKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeOpenInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest & keyof OpenInstancePublicPortsRequest]: (OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest & OpenInstancePublicPortsRequest)[K]
    }>): Request<OpenInstancePublicPortsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.openInstancePublicPorts(
          this.ops["OpenInstancePublicPorts"].applicator.apply(partialParams)
        );
    }

    invokePutAlarm(partialParams: ToOptional<{
      [K in keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest & keyof PutAlarmRequest]: (PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest & PutAlarmRequest)[K]
    }>): Request<PutAlarmResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAlarm(
          this.ops["PutAlarm"].applicator.apply(partialParams)
        );
    }

    invokePutInstancePublicPorts(partialParams: ToOptional<{
      [K in keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest & keyof PutInstancePublicPortsRequest]: (PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest & PutInstancePublicPortsRequest)[K]
    }>): Request<PutInstancePublicPortsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putInstancePublicPorts(
          this.ops["PutInstancePublicPorts"].applicator.apply(partialParams)
        );
    }

    invokeRebootInstance(partialParams: ToOptional<{
      [K in keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest]: (RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest)[K]
    }>): Request<RebootInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstance(
          this.ops["RebootInstance"].applicator.apply(partialParams)
        );
    }

    invokeRebootRelationalDatabase(partialParams: ToOptional<{
      [K in keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest & keyof RebootRelationalDatabaseRequest]: (RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest & RebootRelationalDatabaseRequest)[K]
    }>): Request<RebootRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootRelationalDatabase(
          this.ops["RebootRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeRegisterContainerImage(partialParams: ToOptional<{
      [K in keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest & keyof RegisterContainerImageRequest]: (RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest & RegisterContainerImageRequest)[K]
    }>): Request<RegisterContainerImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerContainerImage(
          this.ops["RegisterContainerImage"].applicator.apply(partialParams)
        );
    }

    invokeReleaseStaticIp(partialParams: ToOptional<{
      [K in keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest & keyof ReleaseStaticIpRequest]: (ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest & ReleaseStaticIpRequest)[K]
    }>): Request<ReleaseStaticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseStaticIp(
          this.ops["ReleaseStaticIp"].applicator.apply(partialParams)
        );
    }

    invokeSendContactMethodVerification(partialParams: ToOptional<{
      [K in keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest & keyof SendContactMethodVerificationRequest]: (SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest & SendContactMethodVerificationRequest)[K]
    }>): Request<SendContactMethodVerificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendContactMethodVerification(
          this.ops["SendContactMethodVerification"].applicator.apply(partialParams)
        );
    }

    invokeSetIpAddressType(partialParams: ToOptional<{
      [K in keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest & keyof SetIpAddressTypeRequest]: (SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest & SetIpAddressTypeRequest)[K]
    }>): Request<SetIpAddressTypeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setIpAddressType(
          this.ops["SetIpAddressType"].applicator.apply(partialParams)
        );
    }

    invokeSetResourceAccessForBucket(partialParams: ToOptional<{
      [K in keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest & keyof SetResourceAccessForBucketRequest]: (SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest & SetResourceAccessForBucketRequest)[K]
    }>): Request<SetResourceAccessForBucketResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setResourceAccessForBucket(
          this.ops["SetResourceAccessForBucket"].applicator.apply(partialParams)
        );
    }

    invokeStartInstance(partialParams: ToOptional<{
      [K in keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest]: (StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest)[K]
    }>): Request<StartInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstance(
          this.ops["StartInstance"].applicator.apply(partialParams)
        );
    }

    invokeStartRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest & keyof StartRelationalDatabaseRequest]: (StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest & StartRelationalDatabaseRequest)[K]
    }>): Request<StartRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startRelationalDatabase(
          this.ops["StartRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeStopInstance(partialParams: ToOptional<{
      [K in keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest]: (StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest)[K]
    }>): Request<StopInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstance(
          this.ops["StopInstance"].applicator.apply(partialParams)
        );
    }

    invokeStopRelationalDatabase(partialParams: ToOptional<{
      [K in keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest & keyof StopRelationalDatabaseRequest]: (StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest & StopRelationalDatabaseRequest)[K]
    }>): Request<StopRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRelationalDatabase(
          this.ops["StopRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestAlarm(partialParams: ToOptional<{
      [K in keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest & keyof TestAlarmRequest]: (TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest & TestAlarmRequest)[K]
    }>): Request<TestAlarmResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testAlarm(
          this.ops["TestAlarm"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBucket(partialParams: ToOptional<{
      [K in keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest & keyof UpdateBucketRequest]: (UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest & UpdateBucketRequest)[K]
    }>): Request<UpdateBucketResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBucket(
          this.ops["UpdateBucket"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBucketBundle(partialParams: ToOptional<{
      [K in keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest & keyof UpdateBucketBundleRequest]: (UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest & UpdateBucketBundleRequest)[K]
    }>): Request<UpdateBucketBundleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBucketBundle(
          this.ops["UpdateBucketBundle"].applicator.apply(partialParams)
        );
    }

    invokeUpdateContainerService(partialParams: ToOptional<{
      [K in keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest & keyof UpdateContainerServiceRequest]: (UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest & UpdateContainerServiceRequest)[K]
    }>): Request<UpdateContainerServiceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContainerService(
          this.ops["UpdateContainerService"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDistribution(partialParams: ToOptional<{
      [K in keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest & keyof UpdateDistributionRequest]: (UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest & UpdateDistributionRequest)[K]
    }>): Request<UpdateDistributionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistribution(
          this.ops["UpdateDistribution"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainEntry(partialParams: ToOptional<{
      [K in keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest & keyof UpdateDomainEntryRequest]: (UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest & UpdateDomainEntryRequest)[K]
    }>): Request<UpdateDomainEntryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainEntry(
          this.ops["UpdateDomainEntry"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLoadBalancerAttribute(partialParams: ToOptional<{
      [K in keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest & keyof UpdateLoadBalancerAttributeRequest]: (UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest & UpdateLoadBalancerAttributeRequest)[K]
    }>): Request<UpdateLoadBalancerAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLoadBalancerAttribute(
          this.ops["UpdateLoadBalancerAttribute"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabase(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest & keyof UpdateRelationalDatabaseRequest]: (UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest & UpdateRelationalDatabaseRequest)[K]
    }>): Request<UpdateRelationalDatabaseResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRelationalDatabase(
          this.ops["UpdateRelationalDatabase"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRelationalDatabaseParameters(partialParams: ToOptional<{
      [K in keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest & keyof UpdateRelationalDatabaseParametersRequest]: (UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest & UpdateRelationalDatabaseParametersRequest)[K]
    }>): Request<UpdateRelationalDatabaseParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRelationalDatabaseParameters(
          this.ops["UpdateRelationalDatabaseParameters"].applicator.apply(partialParams)
        );
    }
}