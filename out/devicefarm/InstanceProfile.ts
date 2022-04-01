
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
    GetAccountSettingsRequest,
    GetDeviceRequest,
    GetDeviceInstanceRequest,
    GetDevicePoolRequest,
    GetDevicePoolCompatibilityRequest,
    GetInstanceProfileRequest,
    GetJobRequest,
    GetNetworkProfileRequest,
    GetOfferingStatusRequest,
    GetProjectRequest,
    GetRemoteAccessSessionRequest,
    GetRunRequest,
    GetSuiteRequest,
    GetTestRequest,
    GetTestGridProjectRequest,
    GetTestGridSessionRequest,
    GetUploadRequest,
    GetVPCEConfigurationRequest,
    InstallToRemoteAccessSessionRequest,
    ListArtifactsRequest,
    ListDeviceInstancesRequest,
    ListDevicePoolsRequest,
    ListDevicesRequest,
    ListInstanceProfilesRequest,
    ListJobsRequest,
    ListNetworkProfilesRequest,
    ListOfferingPromotionsRequest,
    ListOfferingTransactionsRequest,
    ListOfferingsRequest,
    ListProjectsRequest,
    ListRemoteAccessSessionsRequest,
    ListRunsRequest,
    ListSamplesRequest,
    ListSuitesRequest,
    ListTagsForResourceRequest,
    ListTestGridProjectsRequest,
    ListTestGridSessionActionsRequest,
    ListTestGridSessionArtifactsRequest,
    ListTestGridSessionsRequest,
    ListTestsRequest,
    ListUniqueProblemsRequest,
    ListUploadsRequest,
    ListVPCEConfigurationsRequest,
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
    GetAccountSettingsResult,
    GetDeviceResult,
    GetDeviceInstanceResult,
    GetDevicePoolResult,
    GetDevicePoolCompatibilityResult,
    GetInstanceProfileResult,
    GetJobResult,
    GetNetworkProfileResult,
    GetOfferingStatusResult,
    GetProjectResult,
    GetRemoteAccessSessionResult,
    GetRunResult,
    GetSuiteResult,
    GetTestResult,
    GetTestGridProjectResult,
    GetTestGridSessionResult,
    GetUploadResult,
    GetVPCEConfigurationResult,
    InstallToRemoteAccessSessionResult,
    ListArtifactsResult,
    ListDeviceInstancesResult,
    ListDevicePoolsResult,
    ListDevicesResult,
    ListInstanceProfilesResult,
    ListJobsResult,
    ListNetworkProfilesResult,
    ListOfferingPromotionsResult,
    ListOfferingTransactionsResult,
    ListOfferingsResult,
    ListProjectsResult,
    ListRemoteAccessSessionsResult,
    ListRunsResult,
    ListSamplesResult,
    ListSuitesResult,
    ListTagsForResourceResponse,
    ListTestGridProjectsResult,
    ListTestGridSessionActionsResult,
    ListTestGridSessionArtifactsResult,
    ListTestGridSessionsResult,
    ListTestsResult,
    ListUniqueProblemsResult,
    ListUploadsResult,
    ListVPCEConfigurationsResult,
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

export default class extends aws.devicefarm.InstanceProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.devicefarm.InstanceProfile>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DeviceFarm()
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

    invokeCreateDevicePool(partialParams: ToOptional<{
      [K in keyof CreateDevicePoolRequest]: (CreateDevicePoolRequest)[K]
    }>): Request<CreateDevicePoolResult, AWSError> {
        this.boot();
        return this.client.createDevicePool(
          this.ops["CreateDevicePool"].apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].apply(partialParams)
        );
    }

    invokeCreateNetworkProfile(partialParams: ToOptional<{
      [K in keyof CreateNetworkProfileRequest]: (CreateNetworkProfileRequest)[K]
    }>): Request<CreateNetworkProfileResult, AWSError> {
        this.boot();
        return this.client.createNetworkProfile(
          this.ops["CreateNetworkProfile"].apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectRequest]: (CreateProjectRequest)[K]
    }>): Request<CreateProjectResult, AWSError> {
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof CreateRemoteAccessSessionRequest]: (CreateRemoteAccessSessionRequest)[K]
    }>): Request<CreateRemoteAccessSessionResult, AWSError> {
        this.boot();
        return this.client.createRemoteAccessSession(
          this.ops["CreateRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeCreateTestGridProject(partialParams: ToOptional<{
      [K in keyof CreateTestGridProjectRequest]: (CreateTestGridProjectRequest)[K]
    }>): Request<CreateTestGridProjectResult, AWSError> {
        this.boot();
        return this.client.createTestGridProject(
          this.ops["CreateTestGridProject"].apply(partialParams)
        );
    }

    invokeCreateTestGridUrl(partialParams: ToOptional<{
      [K in keyof CreateTestGridUrlRequest]: (CreateTestGridUrlRequest)[K]
    }>): Request<CreateTestGridUrlResult, AWSError> {
        this.boot();
        return this.client.createTestGridUrl(
          this.ops["CreateTestGridUrl"].apply(partialParams)
        );
    }

    invokeCreateUpload(partialParams: ToOptional<{
      [K in keyof CreateUploadRequest]: (CreateUploadRequest)[K]
    }>): Request<CreateUploadResult, AWSError> {
        this.boot();
        return this.client.createUpload(
          this.ops["CreateUpload"].apply(partialParams)
        );
    }

    invokeCreateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof CreateVPCEConfigurationRequest]: (CreateVPCEConfigurationRequest)[K]
    }>): Request<CreateVPCEConfigurationResult, AWSError> {
        this.boot();
        return this.client.createVPCEConfiguration(
          this.ops["CreateVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteDevicePool(partialParams: ToOptional<{
      [K in keyof DeleteDevicePoolRequest]: (DeleteDevicePoolRequest)[K]
    }>): Request<DeleteDevicePoolResult, AWSError> {
        this.boot();
        return this.client.deleteDevicePool(
          this.ops["DeleteDevicePool"].apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof DeleteInstanceProfileRequest]: (DeleteInstanceProfileRequest)[K]
    }>): Request<DeleteInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.deleteInstanceProfile(
          this.ops["DeleteInstanceProfile"].apply(partialParams)
        );
    }

    invokeDeleteNetworkProfile(partialParams: ToOptional<{
      [K in keyof DeleteNetworkProfileRequest]: (DeleteNetworkProfileRequest)[K]
    }>): Request<DeleteNetworkProfileResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkProfile(
          this.ops["DeleteNetworkProfile"].apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectRequest]: (DeleteProjectRequest)[K]
    }>): Request<DeleteProjectResult, AWSError> {
        this.boot();
        return this.client.deleteProject(
          this.ops["DeleteProject"].apply(partialParams)
        );
    }

    invokeDeleteRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof DeleteRemoteAccessSessionRequest]: (DeleteRemoteAccessSessionRequest)[K]
    }>): Request<DeleteRemoteAccessSessionResult, AWSError> {
        this.boot();
        return this.client.deleteRemoteAccessSession(
          this.ops["DeleteRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeDeleteRun(partialParams: ToOptional<{
      [K in keyof DeleteRunRequest]: (DeleteRunRequest)[K]
    }>): Request<DeleteRunResult, AWSError> {
        this.boot();
        return this.client.deleteRun(
          this.ops["DeleteRun"].apply(partialParams)
        );
    }

    invokeDeleteTestGridProject(partialParams: ToOptional<{
      [K in keyof DeleteTestGridProjectRequest]: (DeleteTestGridProjectRequest)[K]
    }>): Request<DeleteTestGridProjectResult, AWSError> {
        this.boot();
        return this.client.deleteTestGridProject(
          this.ops["DeleteTestGridProject"].apply(partialParams)
        );
    }

    invokeDeleteUpload(partialParams: ToOptional<{
      [K in keyof DeleteUploadRequest]: (DeleteUploadRequest)[K]
    }>): Request<DeleteUploadResult, AWSError> {
        this.boot();
        return this.client.deleteUpload(
          this.ops["DeleteUpload"].apply(partialParams)
        );
    }

    invokeDeleteVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteVPCEConfigurationRequest]: (DeleteVPCEConfigurationRequest)[K]
    }>): Request<DeleteVPCEConfigurationResult, AWSError> {
        this.boot();
        return this.client.deleteVPCEConfiguration(
          this.ops["DeleteVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest)[K]
    }>): Request<GetAccountSettingsResult, AWSError> {
        this.boot();
        return this.client.getAccountSettings(
          this.ops["GetAccountSettings"].apply(partialParams)
        );
    }

    invokeGetDevice(partialParams: ToOptional<{
      [K in keyof GetDeviceRequest]: (GetDeviceRequest)[K]
    }>): Request<GetDeviceResult, AWSError> {
        this.boot();
        return this.client.getDevice(
          this.ops["GetDevice"].apply(partialParams)
        );
    }

    invokeGetDeviceInstance(partialParams: ToOptional<{
      [K in keyof GetDeviceInstanceRequest]: (GetDeviceInstanceRequest)[K]
    }>): Request<GetDeviceInstanceResult, AWSError> {
        this.boot();
        return this.client.getDeviceInstance(
          this.ops["GetDeviceInstance"].apply(partialParams)
        );
    }

    invokeGetDevicePool(partialParams: ToOptional<{
      [K in keyof GetDevicePoolRequest]: (GetDevicePoolRequest)[K]
    }>): Request<GetDevicePoolResult, AWSError> {
        this.boot();
        return this.client.getDevicePool(
          this.ops["GetDevicePool"].apply(partialParams)
        );
    }

    invokeGetDevicePoolCompatibility(partialParams: ToOptional<{
      [K in keyof GetDevicePoolCompatibilityRequest]: (GetDevicePoolCompatibilityRequest)[K]
    }>): Request<GetDevicePoolCompatibilityResult, AWSError> {
        this.boot();
        return this.client.getDevicePoolCompatibility(
          this.ops["GetDevicePoolCompatibility"].apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest]: (GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest]: (GetJobRequest)[K]
    }>): Request<GetJobResult, AWSError> {
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetNetworkProfile(partialParams: ToOptional<{
      [K in keyof GetNetworkProfileRequest]: (GetNetworkProfileRequest)[K]
    }>): Request<GetNetworkProfileResult, AWSError> {
        this.boot();
        return this.client.getNetworkProfile(
          this.ops["GetNetworkProfile"].apply(partialParams)
        );
    }

    invokeGetOfferingStatus(partialParams: ToOptional<{
      [K in keyof GetOfferingStatusRequest]: (GetOfferingStatusRequest)[K]
    }>): Request<GetOfferingStatusResult, AWSError> {
        this.boot();
        return this.client.getOfferingStatus(
          this.ops["GetOfferingStatus"].apply(partialParams)
        );
    }

    invokeGetProject(partialParams: ToOptional<{
      [K in keyof GetProjectRequest]: (GetProjectRequest)[K]
    }>): Request<GetProjectResult, AWSError> {
        this.boot();
        return this.client.getProject(
          this.ops["GetProject"].apply(partialParams)
        );
    }

    invokeGetRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof GetRemoteAccessSessionRequest]: (GetRemoteAccessSessionRequest)[K]
    }>): Request<GetRemoteAccessSessionResult, AWSError> {
        this.boot();
        return this.client.getRemoteAccessSession(
          this.ops["GetRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeGetRun(partialParams: ToOptional<{
      [K in keyof GetRunRequest]: (GetRunRequest)[K]
    }>): Request<GetRunResult, AWSError> {
        this.boot();
        return this.client.getRun(
          this.ops["GetRun"].apply(partialParams)
        );
    }

    invokeGetSuite(partialParams: ToOptional<{
      [K in keyof GetSuiteRequest]: (GetSuiteRequest)[K]
    }>): Request<GetSuiteResult, AWSError> {
        this.boot();
        return this.client.getSuite(
          this.ops["GetSuite"].apply(partialParams)
        );
    }

    invokeGetTest(partialParams: ToOptional<{
      [K in keyof GetTestRequest]: (GetTestRequest)[K]
    }>): Request<GetTestResult, AWSError> {
        this.boot();
        return this.client.getTest(
          this.ops["GetTest"].apply(partialParams)
        );
    }

    invokeGetTestGridProject(partialParams: ToOptional<{
      [K in keyof GetTestGridProjectRequest]: (GetTestGridProjectRequest)[K]
    }>): Request<GetTestGridProjectResult, AWSError> {
        this.boot();
        return this.client.getTestGridProject(
          this.ops["GetTestGridProject"].apply(partialParams)
        );
    }

    invokeGetTestGridSession(partialParams: ToOptional<{
      [K in keyof GetTestGridSessionRequest]: (GetTestGridSessionRequest)[K]
    }>): Request<GetTestGridSessionResult, AWSError> {
        this.boot();
        return this.client.getTestGridSession(
          this.ops["GetTestGridSession"].apply(partialParams)
        );
    }

    invokeGetUpload(partialParams: ToOptional<{
      [K in keyof GetUploadRequest]: (GetUploadRequest)[K]
    }>): Request<GetUploadResult, AWSError> {
        this.boot();
        return this.client.getUpload(
          this.ops["GetUpload"].apply(partialParams)
        );
    }

    invokeGetVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof GetVPCEConfigurationRequest]: (GetVPCEConfigurationRequest)[K]
    }>): Request<GetVPCEConfigurationResult, AWSError> {
        this.boot();
        return this.client.getVPCEConfiguration(
          this.ops["GetVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeInstallToRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof InstallToRemoteAccessSessionRequest]: (InstallToRemoteAccessSessionRequest)[K]
    }>): Request<InstallToRemoteAccessSessionResult, AWSError> {
        this.boot();
        return this.client.installToRemoteAccessSession(
          this.ops["InstallToRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof ListArtifactsRequest]: (ListArtifactsRequest)[K]
    }>): Request<ListArtifactsResult, AWSError> {
        this.boot();
        return this.client.listArtifacts(
          this.ops["ListArtifacts"].apply(partialParams)
        );
    }

    invokeListDeviceInstances(partialParams: ToOptional<{
      [K in keyof ListDeviceInstancesRequest]: (ListDeviceInstancesRequest)[K]
    }>): Request<ListDeviceInstancesResult, AWSError> {
        this.boot();
        return this.client.listDeviceInstances(
          this.ops["ListDeviceInstances"].apply(partialParams)
        );
    }

    invokeListDevicePools(partialParams: ToOptional<{
      [K in keyof ListDevicePoolsRequest]: (ListDevicePoolsRequest)[K]
    }>): Request<ListDevicePoolsResult, AWSError> {
        this.boot();
        return this.client.listDevicePools(
          this.ops["ListDevicePools"].apply(partialParams)
        );
    }

    invokeListDevices(partialParams: ToOptional<{
      [K in keyof ListDevicesRequest]: (ListDevicesRequest)[K]
    }>): Request<ListDevicesResult, AWSError> {
        this.boot();
        return this.client.listDevices(
          this.ops["ListDevices"].apply(partialParams)
        );
    }

    invokeListInstanceProfiles(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesRequest]: (ListInstanceProfilesRequest)[K]
    }>): Request<ListInstanceProfilesResult, AWSError> {
        this.boot();
        return this.client.listInstanceProfiles(
          this.ops["ListInstanceProfiles"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest]: (ListJobsRequest)[K]
    }>): Request<ListJobsResult, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListNetworkProfiles(partialParams: ToOptional<{
      [K in keyof ListNetworkProfilesRequest]: (ListNetworkProfilesRequest)[K]
    }>): Request<ListNetworkProfilesResult, AWSError> {
        this.boot();
        return this.client.listNetworkProfiles(
          this.ops["ListNetworkProfiles"].apply(partialParams)
        );
    }

    invokeListOfferingPromotions(partialParams: ToOptional<{
      [K in keyof ListOfferingPromotionsRequest]: (ListOfferingPromotionsRequest)[K]
    }>): Request<ListOfferingPromotionsResult, AWSError> {
        this.boot();
        return this.client.listOfferingPromotions(
          this.ops["ListOfferingPromotions"].apply(partialParams)
        );
    }

    invokeListOfferingTransactions(partialParams: ToOptional<{
      [K in keyof ListOfferingTransactionsRequest]: (ListOfferingTransactionsRequest)[K]
    }>): Request<ListOfferingTransactionsResult, AWSError> {
        this.boot();
        return this.client.listOfferingTransactions(
          this.ops["ListOfferingTransactions"].apply(partialParams)
        );
    }

    invokeListOfferings(partialParams: ToOptional<{
      [K in keyof ListOfferingsRequest]: (ListOfferingsRequest)[K]
    }>): Request<ListOfferingsResult, AWSError> {
        this.boot();
        return this.client.listOfferings(
          this.ops["ListOfferings"].apply(partialParams)
        );
    }

    invokeListProjects(partialParams: ToOptional<{
      [K in keyof ListProjectsRequest]: (ListProjectsRequest)[K]
    }>): Request<ListProjectsResult, AWSError> {
        this.boot();
        return this.client.listProjects(
          this.ops["ListProjects"].apply(partialParams)
        );
    }

    invokeListRemoteAccessSessions(partialParams: ToOptional<{
      [K in keyof ListRemoteAccessSessionsRequest]: (ListRemoteAccessSessionsRequest)[K]
    }>): Request<ListRemoteAccessSessionsResult, AWSError> {
        this.boot();
        return this.client.listRemoteAccessSessions(
          this.ops["ListRemoteAccessSessions"].apply(partialParams)
        );
    }

    invokeListRuns(partialParams: ToOptional<{
      [K in keyof ListRunsRequest]: (ListRunsRequest)[K]
    }>): Request<ListRunsResult, AWSError> {
        this.boot();
        return this.client.listRuns(
          this.ops["ListRuns"].apply(partialParams)
        );
    }

    invokeListSamples(partialParams: ToOptional<{
      [K in keyof ListSamplesRequest]: (ListSamplesRequest)[K]
    }>): Request<ListSamplesResult, AWSError> {
        this.boot();
        return this.client.listSamples(
          this.ops["ListSamples"].apply(partialParams)
        );
    }

    invokeListSuites(partialParams: ToOptional<{
      [K in keyof ListSuitesRequest]: (ListSuitesRequest)[K]
    }>): Request<ListSuitesResult, AWSError> {
        this.boot();
        return this.client.listSuites(
          this.ops["ListSuites"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTestGridProjects(partialParams: ToOptional<{
      [K in keyof ListTestGridProjectsRequest]: (ListTestGridProjectsRequest)[K]
    }>): Request<ListTestGridProjectsResult, AWSError> {
        this.boot();
        return this.client.listTestGridProjects(
          this.ops["ListTestGridProjects"].apply(partialParams)
        );
    }

    invokeListTestGridSessionActions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionActionsRequest]: (ListTestGridSessionActionsRequest)[K]
    }>): Request<ListTestGridSessionActionsResult, AWSError> {
        this.boot();
        return this.client.listTestGridSessionActions(
          this.ops["ListTestGridSessionActions"].apply(partialParams)
        );
    }

    invokeListTestGridSessionArtifacts(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionArtifactsRequest]: (ListTestGridSessionArtifactsRequest)[K]
    }>): Request<ListTestGridSessionArtifactsResult, AWSError> {
        this.boot();
        return this.client.listTestGridSessionArtifacts(
          this.ops["ListTestGridSessionArtifacts"].apply(partialParams)
        );
    }

    invokeListTestGridSessions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionsRequest]: (ListTestGridSessionsRequest)[K]
    }>): Request<ListTestGridSessionsResult, AWSError> {
        this.boot();
        return this.client.listTestGridSessions(
          this.ops["ListTestGridSessions"].apply(partialParams)
        );
    }

    invokeListTests(partialParams: ToOptional<{
      [K in keyof ListTestsRequest]: (ListTestsRequest)[K]
    }>): Request<ListTestsResult, AWSError> {
        this.boot();
        return this.client.listTests(
          this.ops["ListTests"].apply(partialParams)
        );
    }

    invokeListUniqueProblems(partialParams: ToOptional<{
      [K in keyof ListUniqueProblemsRequest]: (ListUniqueProblemsRequest)[K]
    }>): Request<ListUniqueProblemsResult, AWSError> {
        this.boot();
        return this.client.listUniqueProblems(
          this.ops["ListUniqueProblems"].apply(partialParams)
        );
    }

    invokeListUploads(partialParams: ToOptional<{
      [K in keyof ListUploadsRequest]: (ListUploadsRequest)[K]
    }>): Request<ListUploadsResult, AWSError> {
        this.boot();
        return this.client.listUploads(
          this.ops["ListUploads"].apply(partialParams)
        );
    }

    invokeListVPCEConfigurations(partialParams: ToOptional<{
      [K in keyof ListVPCEConfigurationsRequest]: (ListVPCEConfigurationsRequest)[K]
    }>): Request<ListVPCEConfigurationsResult, AWSError> {
        this.boot();
        return this.client.listVPCEConfigurations(
          this.ops["ListVPCEConfigurations"].apply(partialParams)
        );
    }

    invokePurchaseOffering(partialParams: ToOptional<{
      [K in keyof PurchaseOfferingRequest]: (PurchaseOfferingRequest)[K]
    }>): Request<PurchaseOfferingResult, AWSError> {
        this.boot();
        return this.client.purchaseOffering(
          this.ops["PurchaseOffering"].apply(partialParams)
        );
    }

    invokeRenewOffering(partialParams: ToOptional<{
      [K in keyof RenewOfferingRequest]: (RenewOfferingRequest)[K]
    }>): Request<RenewOfferingResult, AWSError> {
        this.boot();
        return this.client.renewOffering(
          this.ops["RenewOffering"].apply(partialParams)
        );
    }

    invokeScheduleRun(partialParams: ToOptional<{
      [K in keyof ScheduleRunRequest]: (ScheduleRunRequest)[K]
    }>): Request<ScheduleRunResult, AWSError> {
        this.boot();
        return this.client.scheduleRun(
          this.ops["ScheduleRun"].apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof StopJobRequest]: (StopJobRequest)[K]
    }>): Request<StopJobResult, AWSError> {
        this.boot();
        return this.client.stopJob(
          this.ops["StopJob"].apply(partialParams)
        );
    }

    invokeStopRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof StopRemoteAccessSessionRequest]: (StopRemoteAccessSessionRequest)[K]
    }>): Request<StopRemoteAccessSessionResult, AWSError> {
        this.boot();
        return this.client.stopRemoteAccessSession(
          this.ops["StopRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeStopRun(partialParams: ToOptional<{
      [K in keyof StopRunRequest]: (StopRunRequest)[K]
    }>): Request<StopRunResult, AWSError> {
        this.boot();
        return this.client.stopRun(
          this.ops["StopRun"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDeviceInstance(partialParams: ToOptional<{
      [K in keyof UpdateDeviceInstanceRequest]: (UpdateDeviceInstanceRequest)[K]
    }>): Request<UpdateDeviceInstanceResult, AWSError> {
        this.boot();
        return this.client.updateDeviceInstance(
          this.ops["UpdateDeviceInstance"].apply(partialParams)
        );
    }

    invokeUpdateDevicePool(partialParams: ToOptional<{
      [K in keyof UpdateDevicePoolRequest]: (UpdateDevicePoolRequest)[K]
    }>): Request<UpdateDevicePoolResult, AWSError> {
        this.boot();
        return this.client.updateDevicePool(
          this.ops["UpdateDevicePool"].apply(partialParams)
        );
    }

    invokeUpdateInstanceProfile(partialParams: ToOptional<{
      [K in keyof UpdateInstanceProfileRequest]: (UpdateInstanceProfileRequest)[K]
    }>): Request<UpdateInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.updateInstanceProfile(
          this.ops["UpdateInstanceProfile"].apply(partialParams)
        );
    }

    invokeUpdateNetworkProfile(partialParams: ToOptional<{
      [K in keyof UpdateNetworkProfileRequest]: (UpdateNetworkProfileRequest)[K]
    }>): Request<UpdateNetworkProfileResult, AWSError> {
        this.boot();
        return this.client.updateNetworkProfile(
          this.ops["UpdateNetworkProfile"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectRequest]: (UpdateProjectRequest)[K]
    }>): Request<UpdateProjectResult, AWSError> {
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateTestGridProject(partialParams: ToOptional<{
      [K in keyof UpdateTestGridProjectRequest]: (UpdateTestGridProjectRequest)[K]
    }>): Request<UpdateTestGridProjectResult, AWSError> {
        this.boot();
        return this.client.updateTestGridProject(
          this.ops["UpdateTestGridProject"].apply(partialParams)
        );
    }

    invokeUpdateUpload(partialParams: ToOptional<{
      [K in keyof UpdateUploadRequest]: (UpdateUploadRequest)[K]
    }>): Request<UpdateUploadResult, AWSError> {
        this.boot();
        return this.client.updateUpload(
          this.ops["UpdateUpload"].apply(partialParams)
        );
    }

    invokeUpdateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateVPCEConfigurationRequest]: (UpdateVPCEConfigurationRequest)[K]
    }>): Request<UpdateVPCEConfigurationResult, AWSError> {
        this.boot();
        return this.client.updateVPCEConfiguration(
          this.ops["UpdateVPCEConfiguration"].apply(partialParams)
        );
    }
}