
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDevicePoolRequest,
    CreateInstanceProfileRequest,
    CreateNetworkProfileRequest,
    CreateProjectRequest,
    CreateRemoteAccessSessionRequest,
    CreateTestGridProjectRequest,
    CreateTestGridUrlRequest,
    CreateUploadRequest,
    CreateVPCEConfigurationRequest,
    DeleteDevicePoolRequest,
    DeleteInstanceProfileRequest,
    DeleteNetworkProfileRequest,
    DeleteProjectRequest,
    DeleteRemoteAccessSessionRequest,
    DeleteRunRequest,
    DeleteTestGridProjectRequest,
    DeleteUploadRequest,
    DeleteVPCEConfigurationRequest,
    GetDeviceRequest,
    GetDeviceInstanceRequest,
    GetDevicePoolRequest,
    GetDevicePoolCompatibilityRequest,
    GetInstanceProfileRequest,
    GetJobRequest,
    GetNetworkProfileRequest,
    GetProjectRequest,
    GetRemoteAccessSessionRequest,
    GetRunRequest,
    GetSuiteRequest,
    GetTestRequest,
    GetTestGridProjectRequest,
    GetUploadRequest,
    GetVPCEConfigurationRequest,
    InstallToRemoteAccessSessionRequest,
    ListArtifactsRequest,
    ListDevicePoolsRequest,
    ListJobsRequest,
    ListNetworkProfilesRequest,
    ListRemoteAccessSessionsRequest,
    ListRunsRequest,
    ListSamplesRequest,
    ListSuitesRequest,
    ListTagsForResourceRequest,
    ListTestGridSessionActionsRequest,
    ListTestGridSessionArtifactsRequest,
    ListTestGridSessionsRequest,
    ListTestsRequest,
    ListUniqueProblemsRequest,
    ListUploadsRequest,
    PurchaseOfferingRequest,
    RenewOfferingRequest,
    ScheduleRunRequest,
    StopJobRequest,
    StopRemoteAccessSessionRequest,
    StopRunRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateDeviceInstanceRequest,
    UpdateDevicePoolRequest,
    UpdateInstanceProfileRequest,
    UpdateNetworkProfileRequest,
    UpdateProjectRequest,
    UpdateTestGridProjectRequest,
    UpdateUploadRequest,
    UpdateVPCEConfigurationRequest,
    CreateDevicePoolResult,
    CreateInstanceProfileResult,
    CreateNetworkProfileResult,
    CreateProjectResult,
    CreateRemoteAccessSessionResult,
    CreateTestGridProjectResult,
    CreateTestGridUrlResult,
    CreateUploadResult,
    CreateVPCEConfigurationResult,
    DeleteDevicePoolResult,
    DeleteInstanceProfileResult,
    DeleteNetworkProfileResult,
    DeleteProjectResult,
    DeleteRemoteAccessSessionResult,
    DeleteRunResult,
    DeleteTestGridProjectResult,
    DeleteUploadResult,
    DeleteVPCEConfigurationResult,
    GetDeviceResult,
    GetDeviceInstanceResult,
    GetDevicePoolResult,
    GetDevicePoolCompatibilityResult,
    GetInstanceProfileResult,
    GetJobResult,
    GetNetworkProfileResult,
    GetProjectResult,
    GetRemoteAccessSessionResult,
    GetRunResult,
    GetSuiteResult,
    GetTestResult,
    GetTestGridProjectResult,
    GetUploadResult,
    GetVPCEConfigurationResult,
    InstallToRemoteAccessSessionResult,
    ListArtifactsResult,
    ListDevicePoolsResult,
    ListJobsResult,
    ListNetworkProfilesResult,
    ListRemoteAccessSessionsResult,
    ListRunsResult,
    ListSamplesResult,
    ListSuitesResult,
    ListTagsForResourceResponse,
    ListTestGridSessionActionsResult,
    ListTestGridSessionArtifactsResult,
    ListTestGridSessionsResult,
    ListTestsResult,
    ListUniqueProblemsResult,
    ListUploadsResult,
    PurchaseOfferingResult,
    RenewOfferingResult,
    ScheduleRunResult,
    StopJobResult,
    StopRemoteAccessSessionResult,
    StopRunResult,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateDeviceInstanceResult,
    UpdateDevicePoolResult,
    UpdateInstanceProfileResult,
    UpdateNetworkProfileResult,
    UpdateProjectResult,
    UpdateTestGridProjectResult,
    UpdateUploadResult,
    UpdateVPCEConfigurationResult
} from "aws-sdk/clients/devicefarm";
const schema = require("../apis/devicefarm-2015-06-23.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.devicefarm.NetworkProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.devicefarm.NetworkProfile>) {
        super(...args)
        this.client = new awssdk.DeviceFarm()
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

    invokeCreateDevicePool(partialParams: ToOptional<{
      [K in keyof CreateDevicePoolRequest & keyof CreateDevicePoolRequest & keyof CreateDevicePoolRequest & keyof Omit<CreateDevicePoolRequest, "projectArn"> & keyof CreateDevicePoolRequest]: (CreateDevicePoolRequest & CreateDevicePoolRequest & CreateDevicePoolRequest & Omit<CreateDevicePoolRequest, "projectArn"> & CreateDevicePoolRequest)[K]
    }>): Request<CreateDevicePoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDevicePool(
          this.ops["CreateDevicePool"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest & CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkProfile(partialParams: ToOptional<{
      [K in keyof CreateNetworkProfileRequest & keyof CreateNetworkProfileRequest & keyof CreateNetworkProfileRequest & keyof Omit<CreateNetworkProfileRequest, "projectArn"> & keyof CreateNetworkProfileRequest]: (CreateNetworkProfileRequest & CreateNetworkProfileRequest & CreateNetworkProfileRequest & Omit<CreateNetworkProfileRequest, "projectArn"> & CreateNetworkProfileRequest)[K]
    }>): Request<CreateNetworkProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkProfile(
          this.ops["CreateNetworkProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectRequest & keyof CreateProjectRequest & keyof CreateProjectRequest & keyof CreateProjectRequest & keyof CreateProjectRequest]: (CreateProjectRequest & CreateProjectRequest & CreateProjectRequest & CreateProjectRequest & CreateProjectRequest)[K]
    }>): Request<CreateProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].applicator.apply(partialParams)
        );
    }

    invokeCreateRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof CreateRemoteAccessSessionRequest & keyof CreateRemoteAccessSessionRequest & keyof CreateRemoteAccessSessionRequest & keyof Omit<CreateRemoteAccessSessionRequest, "projectArn"> & keyof CreateRemoteAccessSessionRequest]: (CreateRemoteAccessSessionRequest & CreateRemoteAccessSessionRequest & CreateRemoteAccessSessionRequest & Omit<CreateRemoteAccessSessionRequest, "projectArn"> & CreateRemoteAccessSessionRequest)[K]
    }>): Request<CreateRemoteAccessSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRemoteAccessSession(
          this.ops["CreateRemoteAccessSession"].applicator.apply(partialParams)
        );
    }

    invokeCreateTestGridProject(partialParams: ToOptional<{
      [K in keyof CreateTestGridProjectRequest & keyof CreateTestGridProjectRequest & keyof CreateTestGridProjectRequest & keyof CreateTestGridProjectRequest & keyof CreateTestGridProjectRequest]: (CreateTestGridProjectRequest & CreateTestGridProjectRequest & CreateTestGridProjectRequest & CreateTestGridProjectRequest & CreateTestGridProjectRequest)[K]
    }>): Request<CreateTestGridProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTestGridProject(
          this.ops["CreateTestGridProject"].applicator.apply(partialParams)
        );
    }

    invokeCreateTestGridUrl(partialParams: ToOptional<{
      [K in keyof CreateTestGridUrlRequest & keyof CreateTestGridUrlRequest & keyof CreateTestGridUrlRequest & keyof CreateTestGridUrlRequest & keyof CreateTestGridUrlRequest]: (CreateTestGridUrlRequest & CreateTestGridUrlRequest & CreateTestGridUrlRequest & CreateTestGridUrlRequest & CreateTestGridUrlRequest)[K]
    }>): Request<CreateTestGridUrlResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTestGridUrl(
          this.ops["CreateTestGridUrl"].applicator.apply(partialParams)
        );
    }

    invokeCreateUpload(partialParams: ToOptional<{
      [K in keyof CreateUploadRequest & keyof CreateUploadRequest & keyof CreateUploadRequest & keyof Omit<CreateUploadRequest, "projectArn"> & keyof CreateUploadRequest]: (CreateUploadRequest & CreateUploadRequest & CreateUploadRequest & Omit<CreateUploadRequest, "projectArn"> & CreateUploadRequest)[K]
    }>): Request<CreateUploadResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUpload(
          this.ops["CreateUpload"].applicator.apply(partialParams)
        );
    }

    invokeCreateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof CreateVPCEConfigurationRequest & keyof CreateVPCEConfigurationRequest & keyof CreateVPCEConfigurationRequest & keyof CreateVPCEConfigurationRequest & keyof CreateVPCEConfigurationRequest]: (CreateVPCEConfigurationRequest & CreateVPCEConfigurationRequest & CreateVPCEConfigurationRequest & CreateVPCEConfigurationRequest & CreateVPCEConfigurationRequest)[K]
    }>): Request<CreateVPCEConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVPCEConfiguration(
          this.ops["CreateVPCEConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<DeleteDevicePoolRequest, "arn"> & keyof DeleteDevicePoolRequest & keyof DeleteDevicePoolRequest & keyof DeleteDevicePoolRequest & keyof DeleteDevicePoolRequest]: (Omit<DeleteDevicePoolRequest, "arn"> & DeleteDevicePoolRequest & DeleteDevicePoolRequest & DeleteDevicePoolRequest & DeleteDevicePoolRequest)[K]
    }>): Request<DeleteDevicePoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDevicePool(
          this.ops["DeleteDevicePool"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<DeleteInstanceProfileRequest, "arn"> & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest & keyof DeleteInstanceProfileRequest]: (Omit<DeleteInstanceProfileRequest, "arn"> & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest & DeleteInstanceProfileRequest)[K]
    }>): Request<DeleteInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceProfile(
          this.ops["DeleteInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<DeleteNetworkProfileRequest, "arn"> & keyof DeleteNetworkProfileRequest & keyof DeleteNetworkProfileRequest & keyof DeleteNetworkProfileRequest & keyof DeleteNetworkProfileRequest]: (Omit<DeleteNetworkProfileRequest, "arn"> & DeleteNetworkProfileRequest & DeleteNetworkProfileRequest & DeleteNetworkProfileRequest & DeleteNetworkProfileRequest)[K]
    }>): Request<DeleteNetworkProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkProfile(
          this.ops["DeleteNetworkProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof Omit<DeleteProjectRequest, "arn"> & keyof DeleteProjectRequest & keyof DeleteProjectRequest & keyof DeleteProjectRequest & keyof DeleteProjectRequest]: (Omit<DeleteProjectRequest, "arn"> & DeleteProjectRequest & DeleteProjectRequest & DeleteProjectRequest & DeleteProjectRequest)[K]
    }>): Request<DeleteProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(
          this.ops["DeleteProject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<DeleteRemoteAccessSessionRequest, "arn"> & keyof DeleteRemoteAccessSessionRequest & keyof DeleteRemoteAccessSessionRequest & keyof DeleteRemoteAccessSessionRequest & keyof DeleteRemoteAccessSessionRequest]: (Omit<DeleteRemoteAccessSessionRequest, "arn"> & DeleteRemoteAccessSessionRequest & DeleteRemoteAccessSessionRequest & DeleteRemoteAccessSessionRequest & DeleteRemoteAccessSessionRequest)[K]
    }>): Request<DeleteRemoteAccessSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRemoteAccessSession(
          this.ops["DeleteRemoteAccessSession"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRun(partialParams: ToOptional<{
      [K in keyof Omit<DeleteRunRequest, "arn"> & keyof DeleteRunRequest & keyof DeleteRunRequest & keyof DeleteRunRequest & keyof DeleteRunRequest]: (Omit<DeleteRunRequest, "arn"> & DeleteRunRequest & DeleteRunRequest & DeleteRunRequest & DeleteRunRequest)[K]
    }>): Request<DeleteRunResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRun(
          this.ops["DeleteRun"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTestGridProject(partialParams: ToOptional<{
      [K in keyof DeleteTestGridProjectRequest & keyof DeleteTestGridProjectRequest & keyof DeleteTestGridProjectRequest & keyof DeleteTestGridProjectRequest & keyof DeleteTestGridProjectRequest]: (DeleteTestGridProjectRequest & DeleteTestGridProjectRequest & DeleteTestGridProjectRequest & DeleteTestGridProjectRequest & DeleteTestGridProjectRequest)[K]
    }>): Request<DeleteTestGridProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTestGridProject(
          this.ops["DeleteTestGridProject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUpload(partialParams: ToOptional<{
      [K in keyof Omit<DeleteUploadRequest, "arn"> & keyof DeleteUploadRequest & keyof DeleteUploadRequest & keyof DeleteUploadRequest & keyof DeleteUploadRequest]: (Omit<DeleteUploadRequest, "arn"> & DeleteUploadRequest & DeleteUploadRequest & DeleteUploadRequest & DeleteUploadRequest)[K]
    }>): Request<DeleteUploadResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUpload(
          this.ops["DeleteUpload"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteVPCEConfigurationRequest, "arn"> & keyof DeleteVPCEConfigurationRequest & keyof DeleteVPCEConfigurationRequest & keyof DeleteVPCEConfigurationRequest & keyof DeleteVPCEConfigurationRequest]: (Omit<DeleteVPCEConfigurationRequest, "arn"> & DeleteVPCEConfigurationRequest & DeleteVPCEConfigurationRequest & DeleteVPCEConfigurationRequest & DeleteVPCEConfigurationRequest)[K]
    }>): Request<DeleteVPCEConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVPCEConfiguration(
          this.ops["DeleteVPCEConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetDevice(partialParams: ToOptional<{
      [K in keyof Omit<GetDeviceRequest, "arn"> & keyof GetDeviceRequest & keyof GetDeviceRequest & keyof GetDeviceRequest & keyof GetDeviceRequest]: (Omit<GetDeviceRequest, "arn"> & GetDeviceRequest & GetDeviceRequest & GetDeviceRequest & GetDeviceRequest)[K]
    }>): Request<GetDeviceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevice(
          this.ops["GetDevice"].applicator.apply(partialParams)
        );
    }

    invokeGetDeviceInstance(partialParams: ToOptional<{
      [K in keyof Omit<GetDeviceInstanceRequest, "arn"> & keyof GetDeviceInstanceRequest & keyof GetDeviceInstanceRequest & keyof GetDeviceInstanceRequest & keyof GetDeviceInstanceRequest]: (Omit<GetDeviceInstanceRequest, "arn"> & GetDeviceInstanceRequest & GetDeviceInstanceRequest & GetDeviceInstanceRequest & GetDeviceInstanceRequest)[K]
    }>): Request<GetDeviceInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeviceInstance(
          this.ops["GetDeviceInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<GetDevicePoolRequest, "arn"> & keyof GetDevicePoolRequest & keyof GetDevicePoolRequest & keyof GetDevicePoolRequest & keyof GetDevicePoolRequest]: (Omit<GetDevicePoolRequest, "arn"> & GetDevicePoolRequest & GetDevicePoolRequest & GetDevicePoolRequest & GetDevicePoolRequest)[K]
    }>): Request<GetDevicePoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevicePool(
          this.ops["GetDevicePool"].applicator.apply(partialParams)
        );
    }

    invokeGetDevicePoolCompatibility(partialParams: ToOptional<{
      [K in keyof GetDevicePoolCompatibilityRequest & keyof GetDevicePoolCompatibilityRequest & keyof GetDevicePoolCompatibilityRequest & keyof GetDevicePoolCompatibilityRequest & keyof GetDevicePoolCompatibilityRequest]: (GetDevicePoolCompatibilityRequest & GetDevicePoolCompatibilityRequest & GetDevicePoolCompatibilityRequest & GetDevicePoolCompatibilityRequest & GetDevicePoolCompatibilityRequest)[K]
    }>): Request<GetDevicePoolCompatibilityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDevicePoolCompatibility(
          this.ops["GetDevicePoolCompatibility"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<GetInstanceProfileRequest, "arn"> & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest & keyof GetInstanceProfileRequest]: (Omit<GetInstanceProfileRequest, "arn"> & GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest & GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof Omit<GetJobRequest, "arn"> & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (Omit<GetJobRequest, "arn"> & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<GetNetworkProfileRequest, "arn"> & keyof GetNetworkProfileRequest & keyof GetNetworkProfileRequest & keyof GetNetworkProfileRequest & keyof GetNetworkProfileRequest]: (Omit<GetNetworkProfileRequest, "arn"> & GetNetworkProfileRequest & GetNetworkProfileRequest & GetNetworkProfileRequest & GetNetworkProfileRequest)[K]
    }>): Request<GetNetworkProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkProfile(
          this.ops["GetNetworkProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetProject(partialParams: ToOptional<{
      [K in keyof Omit<GetProjectRequest, "arn"> & keyof GetProjectRequest & keyof GetProjectRequest & keyof GetProjectRequest & keyof GetProjectRequest]: (Omit<GetProjectRequest, "arn"> & GetProjectRequest & GetProjectRequest & GetProjectRequest & GetProjectRequest)[K]
    }>): Request<GetProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProject(
          this.ops["GetProject"].applicator.apply(partialParams)
        );
    }

    invokeGetRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<GetRemoteAccessSessionRequest, "arn"> & keyof GetRemoteAccessSessionRequest & keyof GetRemoteAccessSessionRequest & keyof GetRemoteAccessSessionRequest & keyof GetRemoteAccessSessionRequest]: (Omit<GetRemoteAccessSessionRequest, "arn"> & GetRemoteAccessSessionRequest & GetRemoteAccessSessionRequest & GetRemoteAccessSessionRequest & GetRemoteAccessSessionRequest)[K]
    }>): Request<GetRemoteAccessSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRemoteAccessSession(
          this.ops["GetRemoteAccessSession"].applicator.apply(partialParams)
        );
    }

    invokeGetRun(partialParams: ToOptional<{
      [K in keyof Omit<GetRunRequest, "arn"> & keyof GetRunRequest & keyof GetRunRequest & keyof GetRunRequest & keyof GetRunRequest]: (Omit<GetRunRequest, "arn"> & GetRunRequest & GetRunRequest & GetRunRequest & GetRunRequest)[K]
    }>): Request<GetRunResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRun(
          this.ops["GetRun"].applicator.apply(partialParams)
        );
    }

    invokeGetSuite(partialParams: ToOptional<{
      [K in keyof Omit<GetSuiteRequest, "arn"> & keyof GetSuiteRequest & keyof GetSuiteRequest & keyof GetSuiteRequest & keyof GetSuiteRequest]: (Omit<GetSuiteRequest, "arn"> & GetSuiteRequest & GetSuiteRequest & GetSuiteRequest & GetSuiteRequest)[K]
    }>): Request<GetSuiteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSuite(
          this.ops["GetSuite"].applicator.apply(partialParams)
        );
    }

    invokeGetTest(partialParams: ToOptional<{
      [K in keyof Omit<GetTestRequest, "arn"> & keyof GetTestRequest & keyof GetTestRequest & keyof GetTestRequest & keyof GetTestRequest]: (Omit<GetTestRequest, "arn"> & GetTestRequest & GetTestRequest & GetTestRequest & GetTestRequest)[K]
    }>): Request<GetTestResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTest(
          this.ops["GetTest"].applicator.apply(partialParams)
        );
    }

    invokeGetTestGridProject(partialParams: ToOptional<{
      [K in keyof GetTestGridProjectRequest & keyof GetTestGridProjectRequest & keyof GetTestGridProjectRequest & keyof Omit<GetTestGridProjectRequest, "projectArn"> & keyof GetTestGridProjectRequest]: (GetTestGridProjectRequest & GetTestGridProjectRequest & GetTestGridProjectRequest & Omit<GetTestGridProjectRequest, "projectArn"> & GetTestGridProjectRequest)[K]
    }>): Request<GetTestGridProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTestGridProject(
          this.ops["GetTestGridProject"].applicator.apply(partialParams)
        );
    }

    invokeGetUpload(partialParams: ToOptional<{
      [K in keyof Omit<GetUploadRequest, "arn"> & keyof GetUploadRequest & keyof GetUploadRequest & keyof GetUploadRequest & keyof GetUploadRequest]: (Omit<GetUploadRequest, "arn"> & GetUploadRequest & GetUploadRequest & GetUploadRequest & GetUploadRequest)[K]
    }>): Request<GetUploadResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUpload(
          this.ops["GetUpload"].applicator.apply(partialParams)
        );
    }

    invokeGetVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetVPCEConfigurationRequest, "arn"> & keyof GetVPCEConfigurationRequest & keyof GetVPCEConfigurationRequest & keyof GetVPCEConfigurationRequest & keyof GetVPCEConfigurationRequest]: (Omit<GetVPCEConfigurationRequest, "arn"> & GetVPCEConfigurationRequest & GetVPCEConfigurationRequest & GetVPCEConfigurationRequest & GetVPCEConfigurationRequest)[K]
    }>): Request<GetVPCEConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVPCEConfiguration(
          this.ops["GetVPCEConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeInstallToRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof InstallToRemoteAccessSessionRequest & keyof InstallToRemoteAccessSessionRequest & keyof InstallToRemoteAccessSessionRequest & keyof InstallToRemoteAccessSessionRequest & keyof InstallToRemoteAccessSessionRequest]: (InstallToRemoteAccessSessionRequest & InstallToRemoteAccessSessionRequest & InstallToRemoteAccessSessionRequest & InstallToRemoteAccessSessionRequest & InstallToRemoteAccessSessionRequest)[K]
    }>): Request<InstallToRemoteAccessSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.installToRemoteAccessSession(
          this.ops["InstallToRemoteAccessSession"].applicator.apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof Omit<ListArtifactsRequest, "arn"> & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof Omit<ListArtifactsRequest, "type">]: (Omit<ListArtifactsRequest, "arn"> & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & Omit<ListArtifactsRequest, "type">)[K]
    }>): Request<ListArtifactsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listArtifacts(
          this.ops["ListArtifacts"].applicator.apply(partialParams)
        );
    }

    invokeListDevicePools(partialParams: ToOptional<{
      [K in keyof Omit<ListDevicePoolsRequest, "arn"> & keyof ListDevicePoolsRequest & keyof ListDevicePoolsRequest & keyof ListDevicePoolsRequest & keyof ListDevicePoolsRequest]: (Omit<ListDevicePoolsRequest, "arn"> & ListDevicePoolsRequest & ListDevicePoolsRequest & ListDevicePoolsRequest & ListDevicePoolsRequest)[K]
    }>): Request<ListDevicePoolsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDevicePools(
          this.ops["ListDevicePools"].applicator.apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof Omit<ListJobsRequest, "arn"> & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest]: (Omit<ListJobsRequest, "arn"> & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest)[K]
    }>): Request<ListJobsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].applicator.apply(partialParams)
        );
    }

    invokeListNetworkProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListNetworkProfilesRequest, "arn"> & keyof ListNetworkProfilesRequest & keyof ListNetworkProfilesRequest & keyof ListNetworkProfilesRequest & keyof ListNetworkProfilesRequest]: (Omit<ListNetworkProfilesRequest, "arn"> & ListNetworkProfilesRequest & ListNetworkProfilesRequest & ListNetworkProfilesRequest & ListNetworkProfilesRequest)[K]
    }>): Request<ListNetworkProfilesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listNetworkProfiles(
          this.ops["ListNetworkProfiles"].applicator.apply(partialParams)
        );
    }

    invokeListRemoteAccessSessions(partialParams: ToOptional<{
      [K in keyof Omit<ListRemoteAccessSessionsRequest, "arn"> & keyof ListRemoteAccessSessionsRequest & keyof ListRemoteAccessSessionsRequest & keyof ListRemoteAccessSessionsRequest & keyof ListRemoteAccessSessionsRequest]: (Omit<ListRemoteAccessSessionsRequest, "arn"> & ListRemoteAccessSessionsRequest & ListRemoteAccessSessionsRequest & ListRemoteAccessSessionsRequest & ListRemoteAccessSessionsRequest)[K]
    }>): Request<ListRemoteAccessSessionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRemoteAccessSessions(
          this.ops["ListRemoteAccessSessions"].applicator.apply(partialParams)
        );
    }

    invokeListRuns(partialParams: ToOptional<{
      [K in keyof Omit<ListRunsRequest, "arn"> & keyof ListRunsRequest & keyof ListRunsRequest & keyof ListRunsRequest & keyof ListRunsRequest]: (Omit<ListRunsRequest, "arn"> & ListRunsRequest & ListRunsRequest & ListRunsRequest & ListRunsRequest)[K]
    }>): Request<ListRunsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRuns(
          this.ops["ListRuns"].applicator.apply(partialParams)
        );
    }

    invokeListSamples(partialParams: ToOptional<{
      [K in keyof Omit<ListSamplesRequest, "arn"> & keyof ListSamplesRequest & keyof ListSamplesRequest & keyof ListSamplesRequest & keyof ListSamplesRequest]: (Omit<ListSamplesRequest, "arn"> & ListSamplesRequest & ListSamplesRequest & ListSamplesRequest & ListSamplesRequest)[K]
    }>): Request<ListSamplesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSamples(
          this.ops["ListSamples"].applicator.apply(partialParams)
        );
    }

    invokeListSuites(partialParams: ToOptional<{
      [K in keyof Omit<ListSuitesRequest, "arn"> & keyof ListSuitesRequest & keyof ListSuitesRequest & keyof ListSuitesRequest & keyof ListSuitesRequest]: (Omit<ListSuitesRequest, "arn"> & ListSuitesRequest & ListSuitesRequest & ListSuitesRequest & ListSuitesRequest)[K]
    }>): Request<ListSuitesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSuites(
          this.ops["ListSuites"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTestGridSessionActions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionActionsRequest & keyof ListTestGridSessionActionsRequest & keyof ListTestGridSessionActionsRequest & keyof ListTestGridSessionActionsRequest & keyof ListTestGridSessionActionsRequest]: (ListTestGridSessionActionsRequest & ListTestGridSessionActionsRequest & ListTestGridSessionActionsRequest & ListTestGridSessionActionsRequest & ListTestGridSessionActionsRequest)[K]
    }>): Request<ListTestGridSessionActionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessionActions(
          this.ops["ListTestGridSessionActions"].applicator.apply(partialParams)
        );
    }

    invokeListTestGridSessionArtifacts(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionArtifactsRequest & keyof ListTestGridSessionArtifactsRequest & keyof ListTestGridSessionArtifactsRequest & keyof ListTestGridSessionArtifactsRequest & keyof ListTestGridSessionArtifactsRequest]: (ListTestGridSessionArtifactsRequest & ListTestGridSessionArtifactsRequest & ListTestGridSessionArtifactsRequest & ListTestGridSessionArtifactsRequest & ListTestGridSessionArtifactsRequest)[K]
    }>): Request<ListTestGridSessionArtifactsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessionArtifacts(
          this.ops["ListTestGridSessionArtifacts"].applicator.apply(partialParams)
        );
    }

    invokeListTestGridSessions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionsRequest & keyof ListTestGridSessionsRequest & keyof ListTestGridSessionsRequest & keyof Omit<ListTestGridSessionsRequest, "projectArn"> & keyof ListTestGridSessionsRequest]: (ListTestGridSessionsRequest & ListTestGridSessionsRequest & ListTestGridSessionsRequest & Omit<ListTestGridSessionsRequest, "projectArn"> & ListTestGridSessionsRequest)[K]
    }>): Request<ListTestGridSessionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTestGridSessions(
          this.ops["ListTestGridSessions"].applicator.apply(partialParams)
        );
    }

    invokeListTests(partialParams: ToOptional<{
      [K in keyof Omit<ListTestsRequest, "arn"> & keyof ListTestsRequest & keyof ListTestsRequest & keyof ListTestsRequest & keyof ListTestsRequest]: (Omit<ListTestsRequest, "arn"> & ListTestsRequest & ListTestsRequest & ListTestsRequest & ListTestsRequest)[K]
    }>): Request<ListTestsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTests(
          this.ops["ListTests"].applicator.apply(partialParams)
        );
    }

    invokeListUniqueProblems(partialParams: ToOptional<{
      [K in keyof Omit<ListUniqueProblemsRequest, "arn"> & keyof ListUniqueProblemsRequest & keyof ListUniqueProblemsRequest & keyof ListUniqueProblemsRequest & keyof ListUniqueProblemsRequest]: (Omit<ListUniqueProblemsRequest, "arn"> & ListUniqueProblemsRequest & ListUniqueProblemsRequest & ListUniqueProblemsRequest & ListUniqueProblemsRequest)[K]
    }>): Request<ListUniqueProblemsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUniqueProblems(
          this.ops["ListUniqueProblems"].applicator.apply(partialParams)
        );
    }

    invokeListUploads(partialParams: ToOptional<{
      [K in keyof Omit<ListUploadsRequest, "arn"> & keyof ListUploadsRequest & keyof ListUploadsRequest & keyof ListUploadsRequest & keyof ListUploadsRequest]: (Omit<ListUploadsRequest, "arn"> & ListUploadsRequest & ListUploadsRequest & ListUploadsRequest & ListUploadsRequest)[K]
    }>): Request<ListUploadsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUploads(
          this.ops["ListUploads"].applicator.apply(partialParams)
        );
    }

    invokePurchaseOffering(partialParams: ToOptional<{
      [K in keyof PurchaseOfferingRequest & keyof PurchaseOfferingRequest & keyof PurchaseOfferingRequest & keyof PurchaseOfferingRequest & keyof PurchaseOfferingRequest]: (PurchaseOfferingRequest & PurchaseOfferingRequest & PurchaseOfferingRequest & PurchaseOfferingRequest & PurchaseOfferingRequest)[K]
    }>): Request<PurchaseOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseOffering(
          this.ops["PurchaseOffering"].applicator.apply(partialParams)
        );
    }

    invokeRenewOffering(partialParams: ToOptional<{
      [K in keyof RenewOfferingRequest & keyof RenewOfferingRequest & keyof RenewOfferingRequest & keyof RenewOfferingRequest & keyof RenewOfferingRequest]: (RenewOfferingRequest & RenewOfferingRequest & RenewOfferingRequest & RenewOfferingRequest & RenewOfferingRequest)[K]
    }>): Request<RenewOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.renewOffering(
          this.ops["RenewOffering"].applicator.apply(partialParams)
        );
    }

    invokeScheduleRun(partialParams: ToOptional<{
      [K in keyof ScheduleRunRequest & keyof ScheduleRunRequest & keyof ScheduleRunRequest & keyof Omit<ScheduleRunRequest, "projectArn"> & keyof ScheduleRunRequest]: (ScheduleRunRequest & ScheduleRunRequest & ScheduleRunRequest & Omit<ScheduleRunRequest, "projectArn"> & ScheduleRunRequest)[K]
    }>): Request<ScheduleRunResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scheduleRun(
          this.ops["ScheduleRun"].applicator.apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof Omit<StopJobRequest, "arn"> & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest]: (Omit<StopJobRequest, "arn"> & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest)[K]
    }>): Request<StopJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopJob(
          this.ops["StopJob"].applicator.apply(partialParams)
        );
    }

    invokeStopRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<StopRemoteAccessSessionRequest, "arn"> & keyof StopRemoteAccessSessionRequest & keyof StopRemoteAccessSessionRequest & keyof StopRemoteAccessSessionRequest & keyof StopRemoteAccessSessionRequest]: (Omit<StopRemoteAccessSessionRequest, "arn"> & StopRemoteAccessSessionRequest & StopRemoteAccessSessionRequest & StopRemoteAccessSessionRequest & StopRemoteAccessSessionRequest)[K]
    }>): Request<StopRemoteAccessSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRemoteAccessSession(
          this.ops["StopRemoteAccessSession"].applicator.apply(partialParams)
        );
    }

    invokeStopRun(partialParams: ToOptional<{
      [K in keyof Omit<StopRunRequest, "arn"> & keyof StopRunRequest & keyof StopRunRequest & keyof StopRunRequest & keyof StopRunRequest]: (Omit<StopRunRequest, "arn"> & StopRunRequest & StopRunRequest & StopRunRequest & StopRunRequest)[K]
    }>): Request<StopRunResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopRun(
          this.ops["StopRun"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeviceInstance(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDeviceInstanceRequest, "arn"> & keyof UpdateDeviceInstanceRequest & keyof UpdateDeviceInstanceRequest & keyof UpdateDeviceInstanceRequest & keyof UpdateDeviceInstanceRequest]: (Omit<UpdateDeviceInstanceRequest, "arn"> & UpdateDeviceInstanceRequest & UpdateDeviceInstanceRequest & UpdateDeviceInstanceRequest & UpdateDeviceInstanceRequest)[K]
    }>): Request<UpdateDeviceInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeviceInstance(
          this.ops["UpdateDeviceInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDevicePoolRequest, "arn"> & keyof UpdateDevicePoolRequest & keyof UpdateDevicePoolRequest & keyof UpdateDevicePoolRequest & keyof UpdateDevicePoolRequest]: (Omit<UpdateDevicePoolRequest, "arn"> & UpdateDevicePoolRequest & UpdateDevicePoolRequest & UpdateDevicePoolRequest & UpdateDevicePoolRequest)[K]
    }>): Request<UpdateDevicePoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevicePool(
          this.ops["UpdateDevicePool"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceProfileRequest, "arn"> & keyof UpdateInstanceProfileRequest & keyof UpdateInstanceProfileRequest & keyof UpdateInstanceProfileRequest & keyof UpdateInstanceProfileRequest]: (Omit<UpdateInstanceProfileRequest, "arn"> & UpdateInstanceProfileRequest & UpdateInstanceProfileRequest & UpdateInstanceProfileRequest & UpdateInstanceProfileRequest)[K]
    }>): Request<UpdateInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceProfile(
          this.ops["UpdateInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateNetworkProfileRequest, "arn"> & keyof UpdateNetworkProfileRequest & keyof UpdateNetworkProfileRequest & keyof UpdateNetworkProfileRequest & keyof UpdateNetworkProfileRequest]: (Omit<UpdateNetworkProfileRequest, "arn"> & UpdateNetworkProfileRequest & UpdateNetworkProfileRequest & UpdateNetworkProfileRequest & UpdateNetworkProfileRequest)[K]
    }>): Request<UpdateNetworkProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNetworkProfile(
          this.ops["UpdateNetworkProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof Omit<UpdateProjectRequest, "arn"> & keyof UpdateProjectRequest & keyof UpdateProjectRequest & keyof UpdateProjectRequest & keyof UpdateProjectRequest]: (Omit<UpdateProjectRequest, "arn"> & UpdateProjectRequest & UpdateProjectRequest & UpdateProjectRequest & UpdateProjectRequest)[K]
    }>): Request<UpdateProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTestGridProject(partialParams: ToOptional<{
      [K in keyof UpdateTestGridProjectRequest & keyof UpdateTestGridProjectRequest & keyof UpdateTestGridProjectRequest & keyof Omit<UpdateTestGridProjectRequest, "projectArn"> & keyof UpdateTestGridProjectRequest]: (UpdateTestGridProjectRequest & UpdateTestGridProjectRequest & UpdateTestGridProjectRequest & Omit<UpdateTestGridProjectRequest, "projectArn"> & UpdateTestGridProjectRequest)[K]
    }>): Request<UpdateTestGridProjectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTestGridProject(
          this.ops["UpdateTestGridProject"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUpload(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUploadRequest, "arn"> & keyof UpdateUploadRequest & keyof UpdateUploadRequest & keyof UpdateUploadRequest & keyof UpdateUploadRequest]: (Omit<UpdateUploadRequest, "arn"> & UpdateUploadRequest & UpdateUploadRequest & UpdateUploadRequest & UpdateUploadRequest)[K]
    }>): Request<UpdateUploadResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUpload(
          this.ops["UpdateUpload"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<UpdateVPCEConfigurationRequest, "arn"> & keyof UpdateVPCEConfigurationRequest & keyof UpdateVPCEConfigurationRequest & keyof UpdateVPCEConfigurationRequest & keyof UpdateVPCEConfigurationRequest]: (Omit<UpdateVPCEConfigurationRequest, "arn"> & UpdateVPCEConfigurationRequest & UpdateVPCEConfigurationRequest & UpdateVPCEConfigurationRequest & UpdateVPCEConfigurationRequest)[K]
    }>): Request<UpdateVPCEConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVPCEConfiguration(
          this.ops["UpdateVPCEConfiguration"].applicator.apply(partialParams)
        );
    }
}