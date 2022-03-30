
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.devicefarm.Project {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.devicefarm.Project>) {
        super(...args)
        this.client = new awssdk.DeviceFarm()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/devicefarm-2015-06-23.normal.json"), this.client)
    }

    invokeCreateDevicePool(partialParams: ToOptional<{
      [K in keyof CreateDevicePoolRequest & keyof CreateDevicePoolRequest]: (CreateDevicePoolRequest & CreateDevicePoolRequest)[K]
    }>): CreateDevicePoolResult {
        return this.client.createDevicePool(
            this.ops["CreateDevicePool"].apply(partialParams)
        );
    }

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest & keyof CreateInstanceProfileRequest]: (CreateInstanceProfileRequest & CreateInstanceProfileRequest)[K]
    }>): CreateInstanceProfileResult {
        return this.client.createInstanceProfile(
            this.ops["CreateInstanceProfile"].apply(partialParams)
        );
    }

    invokeCreateNetworkProfile(partialParams: ToOptional<{
      [K in keyof CreateNetworkProfileRequest & keyof CreateNetworkProfileRequest]: (CreateNetworkProfileRequest & CreateNetworkProfileRequest)[K]
    }>): CreateNetworkProfileResult {
        return this.client.createNetworkProfile(
            this.ops["CreateNetworkProfile"].apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectRequest & keyof CreateProjectRequest]: (CreateProjectRequest & CreateProjectRequest)[K]
    }>): CreateProjectResult {
        return this.client.createProject(
            this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof CreateRemoteAccessSessionRequest & keyof CreateRemoteAccessSessionRequest]: (CreateRemoteAccessSessionRequest & CreateRemoteAccessSessionRequest)[K]
    }>): CreateRemoteAccessSessionResult {
        return this.client.createRemoteAccessSession(
            this.ops["CreateRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeCreateTestGridProject(partialParams: ToOptional<{
      [K in keyof CreateTestGridProjectRequest & keyof CreateTestGridProjectRequest]: (CreateTestGridProjectRequest & CreateTestGridProjectRequest)[K]
    }>): CreateTestGridProjectResult {
        return this.client.createTestGridProject(
            this.ops["CreateTestGridProject"].apply(partialParams)
        );
    }

    invokeCreateTestGridUrl(partialParams: ToOptional<{
      [K in keyof CreateTestGridUrlRequest & keyof CreateTestGridUrlRequest]: (CreateTestGridUrlRequest & CreateTestGridUrlRequest)[K]
    }>): CreateTestGridUrlResult {
        return this.client.createTestGridUrl(
            this.ops["CreateTestGridUrl"].apply(partialParams)
        );
    }

    invokeCreateUpload(partialParams: ToOptional<{
      [K in keyof CreateUploadRequest & keyof CreateUploadRequest]: (CreateUploadRequest & CreateUploadRequest)[K]
    }>): CreateUploadResult {
        return this.client.createUpload(
            this.ops["CreateUpload"].apply(partialParams)
        );
    }

    invokeCreateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof CreateVPCEConfigurationRequest & keyof CreateVPCEConfigurationRequest]: (CreateVPCEConfigurationRequest & CreateVPCEConfigurationRequest)[K]
    }>): CreateVPCEConfigurationResult {
        return this.client.createVPCEConfiguration(
            this.ops["CreateVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<DeleteDevicePoolRequest, "arn"> & keyof DeleteDevicePoolRequest]: (Omit<DeleteDevicePoolRequest, "arn"> & DeleteDevicePoolRequest)[K]
    }>): DeleteDevicePoolResult {
        return this.client.deleteDevicePool(
            this.ops["DeleteDevicePool"].apply(partialParams)
        );
    }

    invokeDeleteInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<DeleteInstanceProfileRequest, "arn"> & keyof DeleteInstanceProfileRequest]: (Omit<DeleteInstanceProfileRequest, "arn"> & DeleteInstanceProfileRequest)[K]
    }>): DeleteInstanceProfileResult {
        return this.client.deleteInstanceProfile(
            this.ops["DeleteInstanceProfile"].apply(partialParams)
        );
    }

    invokeDeleteNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<DeleteNetworkProfileRequest, "arn"> & keyof DeleteNetworkProfileRequest]: (Omit<DeleteNetworkProfileRequest, "arn"> & DeleteNetworkProfileRequest)[K]
    }>): DeleteNetworkProfileResult {
        return this.client.deleteNetworkProfile(
            this.ops["DeleteNetworkProfile"].apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof Omit<DeleteProjectRequest, "arn"> & keyof DeleteProjectRequest]: (Omit<DeleteProjectRequest, "arn"> & DeleteProjectRequest)[K]
    }>): DeleteProjectResult {
        return this.client.deleteProject(
            this.ops["DeleteProject"].apply(partialParams)
        );
    }

    invokeDeleteRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<DeleteRemoteAccessSessionRequest, "arn"> & keyof DeleteRemoteAccessSessionRequest]: (Omit<DeleteRemoteAccessSessionRequest, "arn"> & DeleteRemoteAccessSessionRequest)[K]
    }>): DeleteRemoteAccessSessionResult {
        return this.client.deleteRemoteAccessSession(
            this.ops["DeleteRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeDeleteRun(partialParams: ToOptional<{
      [K in keyof Omit<DeleteRunRequest, "arn"> & keyof DeleteRunRequest]: (Omit<DeleteRunRequest, "arn"> & DeleteRunRequest)[K]
    }>): DeleteRunResult {
        return this.client.deleteRun(
            this.ops["DeleteRun"].apply(partialParams)
        );
    }

    invokeDeleteTestGridProject(partialParams: ToOptional<{
      [K in keyof DeleteTestGridProjectRequest & keyof DeleteTestGridProjectRequest]: (DeleteTestGridProjectRequest & DeleteTestGridProjectRequest)[K]
    }>): DeleteTestGridProjectResult {
        return this.client.deleteTestGridProject(
            this.ops["DeleteTestGridProject"].apply(partialParams)
        );
    }

    invokeDeleteUpload(partialParams: ToOptional<{
      [K in keyof Omit<DeleteUploadRequest, "arn"> & keyof DeleteUploadRequest]: (Omit<DeleteUploadRequest, "arn"> & DeleteUploadRequest)[K]
    }>): DeleteUploadResult {
        return this.client.deleteUpload(
            this.ops["DeleteUpload"].apply(partialParams)
        );
    }

    invokeDeleteVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<DeleteVPCEConfigurationRequest, "arn"> & keyof DeleteVPCEConfigurationRequest]: (Omit<DeleteVPCEConfigurationRequest, "arn"> & DeleteVPCEConfigurationRequest)[K]
    }>): DeleteVPCEConfigurationResult {
        return this.client.deleteVPCEConfiguration(
            this.ops["DeleteVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeGetDevice(partialParams: ToOptional<{
      [K in keyof Omit<GetDeviceRequest, "arn"> & keyof GetDeviceRequest]: (Omit<GetDeviceRequest, "arn"> & GetDeviceRequest)[K]
    }>): GetDeviceResult {
        return this.client.getDevice(
            this.ops["GetDevice"].apply(partialParams)
        );
    }

    invokeGetDeviceInstance(partialParams: ToOptional<{
      [K in keyof Omit<GetDeviceInstanceRequest, "arn"> & keyof GetDeviceInstanceRequest]: (Omit<GetDeviceInstanceRequest, "arn"> & GetDeviceInstanceRequest)[K]
    }>): GetDeviceInstanceResult {
        return this.client.getDeviceInstance(
            this.ops["GetDeviceInstance"].apply(partialParams)
        );
    }

    invokeGetDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<GetDevicePoolRequest, "arn"> & keyof GetDevicePoolRequest]: (Omit<GetDevicePoolRequest, "arn"> & GetDevicePoolRequest)[K]
    }>): GetDevicePoolResult {
        return this.client.getDevicePool(
            this.ops["GetDevicePool"].apply(partialParams)
        );
    }

    invokeGetDevicePoolCompatibility(partialParams: ToOptional<{
      [K in keyof GetDevicePoolCompatibilityRequest & keyof GetDevicePoolCompatibilityRequest]: (GetDevicePoolCompatibilityRequest & GetDevicePoolCompatibilityRequest)[K]
    }>): GetDevicePoolCompatibilityResult {
        return this.client.getDevicePoolCompatibility(
            this.ops["GetDevicePoolCompatibility"].apply(partialParams)
        );
    }

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<GetInstanceProfileRequest, "arn"> & keyof GetInstanceProfileRequest]: (Omit<GetInstanceProfileRequest, "arn"> & GetInstanceProfileRequest)[K]
    }>): GetInstanceProfileResult {
        return this.client.getInstanceProfile(
            this.ops["GetInstanceProfile"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof Omit<GetJobRequest, "arn"> & keyof GetJobRequest]: (Omit<GetJobRequest, "arn"> & GetJobRequest)[K]
    }>): GetJobResult {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<GetNetworkProfileRequest, "arn"> & keyof GetNetworkProfileRequest]: (Omit<GetNetworkProfileRequest, "arn"> & GetNetworkProfileRequest)[K]
    }>): GetNetworkProfileResult {
        return this.client.getNetworkProfile(
            this.ops["GetNetworkProfile"].apply(partialParams)
        );
    }

    invokeGetProject(partialParams: ToOptional<{
      [K in keyof Omit<GetProjectRequest, "arn"> & keyof GetProjectRequest]: (Omit<GetProjectRequest, "arn"> & GetProjectRequest)[K]
    }>): GetProjectResult {
        return this.client.getProject(
            this.ops["GetProject"].apply(partialParams)
        );
    }

    invokeGetRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<GetRemoteAccessSessionRequest, "arn"> & keyof GetRemoteAccessSessionRequest]: (Omit<GetRemoteAccessSessionRequest, "arn"> & GetRemoteAccessSessionRequest)[K]
    }>): GetRemoteAccessSessionResult {
        return this.client.getRemoteAccessSession(
            this.ops["GetRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeGetRun(partialParams: ToOptional<{
      [K in keyof Omit<GetRunRequest, "arn"> & keyof GetRunRequest]: (Omit<GetRunRequest, "arn"> & GetRunRequest)[K]
    }>): GetRunResult {
        return this.client.getRun(
            this.ops["GetRun"].apply(partialParams)
        );
    }

    invokeGetSuite(partialParams: ToOptional<{
      [K in keyof Omit<GetSuiteRequest, "arn"> & keyof GetSuiteRequest]: (Omit<GetSuiteRequest, "arn"> & GetSuiteRequest)[K]
    }>): GetSuiteResult {
        return this.client.getSuite(
            this.ops["GetSuite"].apply(partialParams)
        );
    }

    invokeGetTest(partialParams: ToOptional<{
      [K in keyof Omit<GetTestRequest, "arn"> & keyof GetTestRequest]: (Omit<GetTestRequest, "arn"> & GetTestRequest)[K]
    }>): GetTestResult {
        return this.client.getTest(
            this.ops["GetTest"].apply(partialParams)
        );
    }

    invokeGetTestGridProject(partialParams: ToOptional<{
      [K in keyof GetTestGridProjectRequest & keyof GetTestGridProjectRequest]: (GetTestGridProjectRequest & GetTestGridProjectRequest)[K]
    }>): GetTestGridProjectResult {
        return this.client.getTestGridProject(
            this.ops["GetTestGridProject"].apply(partialParams)
        );
    }

    invokeGetUpload(partialParams: ToOptional<{
      [K in keyof Omit<GetUploadRequest, "arn"> & keyof GetUploadRequest]: (Omit<GetUploadRequest, "arn"> & GetUploadRequest)[K]
    }>): GetUploadResult {
        return this.client.getUpload(
            this.ops["GetUpload"].apply(partialParams)
        );
    }

    invokeGetVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<GetVPCEConfigurationRequest, "arn"> & keyof GetVPCEConfigurationRequest]: (Omit<GetVPCEConfigurationRequest, "arn"> & GetVPCEConfigurationRequest)[K]
    }>): GetVPCEConfigurationResult {
        return this.client.getVPCEConfiguration(
            this.ops["GetVPCEConfiguration"].apply(partialParams)
        );
    }

    invokeInstallToRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof InstallToRemoteAccessSessionRequest & keyof InstallToRemoteAccessSessionRequest]: (InstallToRemoteAccessSessionRequest & InstallToRemoteAccessSessionRequest)[K]
    }>): InstallToRemoteAccessSessionResult {
        return this.client.installToRemoteAccessSession(
            this.ops["InstallToRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof Omit<ListArtifactsRequest, "arn"> & keyof ListArtifactsRequest]: (Omit<ListArtifactsRequest, "arn"> & ListArtifactsRequest)[K]
    }>): ListArtifactsResult {
        return this.client.listArtifacts(
            this.ops["ListArtifacts"].apply(partialParams)
        );
    }

    invokeListDevicePools(partialParams: ToOptional<{
      [K in keyof Omit<ListDevicePoolsRequest, "arn"> & keyof ListDevicePoolsRequest]: (Omit<ListDevicePoolsRequest, "arn"> & ListDevicePoolsRequest)[K]
    }>): ListDevicePoolsResult {
        return this.client.listDevicePools(
            this.ops["ListDevicePools"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof Omit<ListJobsRequest, "arn"> & keyof ListJobsRequest]: (Omit<ListJobsRequest, "arn"> & ListJobsRequest)[K]
    }>): ListJobsResult {
        return this.client.listJobs(
            this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListNetworkProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListNetworkProfilesRequest, "arn"> & keyof ListNetworkProfilesRequest]: (Omit<ListNetworkProfilesRequest, "arn"> & ListNetworkProfilesRequest)[K]
    }>): ListNetworkProfilesResult {
        return this.client.listNetworkProfiles(
            this.ops["ListNetworkProfiles"].apply(partialParams)
        );
    }

    invokeListRemoteAccessSessions(partialParams: ToOptional<{
      [K in keyof Omit<ListRemoteAccessSessionsRequest, "arn"> & keyof ListRemoteAccessSessionsRequest]: (Omit<ListRemoteAccessSessionsRequest, "arn"> & ListRemoteAccessSessionsRequest)[K]
    }>): ListRemoteAccessSessionsResult {
        return this.client.listRemoteAccessSessions(
            this.ops["ListRemoteAccessSessions"].apply(partialParams)
        );
    }

    invokeListRuns(partialParams: ToOptional<{
      [K in keyof Omit<ListRunsRequest, "arn"> & keyof ListRunsRequest]: (Omit<ListRunsRequest, "arn"> & ListRunsRequest)[K]
    }>): ListRunsResult {
        return this.client.listRuns(
            this.ops["ListRuns"].apply(partialParams)
        );
    }

    invokeListSamples(partialParams: ToOptional<{
      [K in keyof Omit<ListSamplesRequest, "arn"> & keyof ListSamplesRequest]: (Omit<ListSamplesRequest, "arn"> & ListSamplesRequest)[K]
    }>): ListSamplesResult {
        return this.client.listSamples(
            this.ops["ListSamples"].apply(partialParams)
        );
    }

    invokeListSuites(partialParams: ToOptional<{
      [K in keyof Omit<ListSuitesRequest, "arn"> & keyof ListSuitesRequest]: (Omit<ListSuitesRequest, "arn"> & ListSuitesRequest)[K]
    }>): ListSuitesResult {
        return this.client.listSuites(
            this.ops["ListSuites"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTestGridSessionActions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionActionsRequest & keyof ListTestGridSessionActionsRequest]: (ListTestGridSessionActionsRequest & ListTestGridSessionActionsRequest)[K]
    }>): ListTestGridSessionActionsResult {
        return this.client.listTestGridSessionActions(
            this.ops["ListTestGridSessionActions"].apply(partialParams)
        );
    }

    invokeListTestGridSessionArtifacts(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionArtifactsRequest & keyof ListTestGridSessionArtifactsRequest]: (ListTestGridSessionArtifactsRequest & ListTestGridSessionArtifactsRequest)[K]
    }>): ListTestGridSessionArtifactsResult {
        return this.client.listTestGridSessionArtifacts(
            this.ops["ListTestGridSessionArtifacts"].apply(partialParams)
        );
    }

    invokeListTestGridSessions(partialParams: ToOptional<{
      [K in keyof ListTestGridSessionsRequest & keyof ListTestGridSessionsRequest]: (ListTestGridSessionsRequest & ListTestGridSessionsRequest)[K]
    }>): ListTestGridSessionsResult {
        return this.client.listTestGridSessions(
            this.ops["ListTestGridSessions"].apply(partialParams)
        );
    }

    invokeListTests(partialParams: ToOptional<{
      [K in keyof Omit<ListTestsRequest, "arn"> & keyof ListTestsRequest]: (Omit<ListTestsRequest, "arn"> & ListTestsRequest)[K]
    }>): ListTestsResult {
        return this.client.listTests(
            this.ops["ListTests"].apply(partialParams)
        );
    }

    invokeListUniqueProblems(partialParams: ToOptional<{
      [K in keyof Omit<ListUniqueProblemsRequest, "arn"> & keyof ListUniqueProblemsRequest]: (Omit<ListUniqueProblemsRequest, "arn"> & ListUniqueProblemsRequest)[K]
    }>): ListUniqueProblemsResult {
        return this.client.listUniqueProblems(
            this.ops["ListUniqueProblems"].apply(partialParams)
        );
    }

    invokeListUploads(partialParams: ToOptional<{
      [K in keyof Omit<ListUploadsRequest, "arn"> & keyof ListUploadsRequest]: (Omit<ListUploadsRequest, "arn"> & ListUploadsRequest)[K]
    }>): ListUploadsResult {
        return this.client.listUploads(
            this.ops["ListUploads"].apply(partialParams)
        );
    }

    invokePurchaseOffering(partialParams: ToOptional<{
      [K in keyof PurchaseOfferingRequest & keyof PurchaseOfferingRequest]: (PurchaseOfferingRequest & PurchaseOfferingRequest)[K]
    }>): PurchaseOfferingResult {
        return this.client.purchaseOffering(
            this.ops["PurchaseOffering"].apply(partialParams)
        );
    }

    invokeRenewOffering(partialParams: ToOptional<{
      [K in keyof RenewOfferingRequest & keyof RenewOfferingRequest]: (RenewOfferingRequest & RenewOfferingRequest)[K]
    }>): RenewOfferingResult {
        return this.client.renewOffering(
            this.ops["RenewOffering"].apply(partialParams)
        );
    }

    invokeScheduleRun(partialParams: ToOptional<{
      [K in keyof ScheduleRunRequest & keyof ScheduleRunRequest]: (ScheduleRunRequest & ScheduleRunRequest)[K]
    }>): ScheduleRunResult {
        return this.client.scheduleRun(
            this.ops["ScheduleRun"].apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof Omit<StopJobRequest, "arn"> & keyof StopJobRequest]: (Omit<StopJobRequest, "arn"> & StopJobRequest)[K]
    }>): StopJobResult {
        return this.client.stopJob(
            this.ops["StopJob"].apply(partialParams)
        );
    }

    invokeStopRemoteAccessSession(partialParams: ToOptional<{
      [K in keyof Omit<StopRemoteAccessSessionRequest, "arn"> & keyof StopRemoteAccessSessionRequest]: (Omit<StopRemoteAccessSessionRequest, "arn"> & StopRemoteAccessSessionRequest)[K]
    }>): StopRemoteAccessSessionResult {
        return this.client.stopRemoteAccessSession(
            this.ops["StopRemoteAccessSession"].apply(partialParams)
        );
    }

    invokeStopRun(partialParams: ToOptional<{
      [K in keyof Omit<StopRunRequest, "arn"> & keyof StopRunRequest]: (Omit<StopRunRequest, "arn"> & StopRunRequest)[K]
    }>): StopRunResult {
        return this.client.stopRun(
            this.ops["StopRun"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDeviceInstance(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDeviceInstanceRequest, "arn"> & keyof UpdateDeviceInstanceRequest]: (Omit<UpdateDeviceInstanceRequest, "arn"> & UpdateDeviceInstanceRequest)[K]
    }>): UpdateDeviceInstanceResult {
        return this.client.updateDeviceInstance(
            this.ops["UpdateDeviceInstance"].apply(partialParams)
        );
    }

    invokeUpdateDevicePool(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDevicePoolRequest, "arn"> & keyof UpdateDevicePoolRequest]: (Omit<UpdateDevicePoolRequest, "arn"> & UpdateDevicePoolRequest)[K]
    }>): UpdateDevicePoolResult {
        return this.client.updateDevicePool(
            this.ops["UpdateDevicePool"].apply(partialParams)
        );
    }

    invokeUpdateInstanceProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateInstanceProfileRequest, "arn"> & keyof UpdateInstanceProfileRequest]: (Omit<UpdateInstanceProfileRequest, "arn"> & UpdateInstanceProfileRequest)[K]
    }>): UpdateInstanceProfileResult {
        return this.client.updateInstanceProfile(
            this.ops["UpdateInstanceProfile"].apply(partialParams)
        );
    }

    invokeUpdateNetworkProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateNetworkProfileRequest, "arn"> & keyof UpdateNetworkProfileRequest]: (Omit<UpdateNetworkProfileRequest, "arn"> & UpdateNetworkProfileRequest)[K]
    }>): UpdateNetworkProfileResult {
        return this.client.updateNetworkProfile(
            this.ops["UpdateNetworkProfile"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof Omit<UpdateProjectRequest, "arn"> & keyof UpdateProjectRequest]: (Omit<UpdateProjectRequest, "arn"> & UpdateProjectRequest)[K]
    }>): UpdateProjectResult {
        return this.client.updateProject(
            this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateTestGridProject(partialParams: ToOptional<{
      [K in keyof UpdateTestGridProjectRequest & keyof UpdateTestGridProjectRequest]: (UpdateTestGridProjectRequest & UpdateTestGridProjectRequest)[K]
    }>): UpdateTestGridProjectResult {
        return this.client.updateTestGridProject(
            this.ops["UpdateTestGridProject"].apply(partialParams)
        );
    }

    invokeUpdateUpload(partialParams: ToOptional<{
      [K in keyof Omit<UpdateUploadRequest, "arn"> & keyof UpdateUploadRequest]: (Omit<UpdateUploadRequest, "arn"> & UpdateUploadRequest)[K]
    }>): UpdateUploadResult {
        return this.client.updateUpload(
            this.ops["UpdateUpload"].apply(partialParams)
        );
    }

    invokeUpdateVPCEConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<UpdateVPCEConfigurationRequest, "arn"> & keyof UpdateVPCEConfigurationRequest]: (Omit<UpdateVPCEConfigurationRequest, "arn"> & UpdateVPCEConfigurationRequest)[K]
    }>): UpdateVPCEConfigurationResult {
        return this.client.updateVPCEConfiguration(
            this.ops["UpdateVPCEConfiguration"].apply(partialParams)
        );
    }
}