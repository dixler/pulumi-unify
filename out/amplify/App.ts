
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateAppRequest,
    CreateBackendEnvironmentRequest,
    CreateBranchRequest,
    CreateDeploymentRequest,
    CreateDomainAssociationRequest,
    CreateWebhookRequest,
    DeleteAppRequest,
    DeleteBackendEnvironmentRequest,
    DeleteBranchRequest,
    DeleteDomainAssociationRequest,
    DeleteJobRequest,
    DeleteWebhookRequest,
    GenerateAccessLogsRequest,
    GetAppRequest,
    GetArtifactUrlRequest,
    GetBackendEnvironmentRequest,
    GetBranchRequest,
    GetDomainAssociationRequest,
    GetJobRequest,
    GetWebhookRequest,
    ListArtifactsRequest,
    ListBackendEnvironmentsRequest,
    ListBranchesRequest,
    ListDomainAssociationsRequest,
    ListJobsRequest,
    ListTagsForResourceRequest,
    ListWebhooksRequest,
    StartDeploymentRequest,
    StartJobRequest,
    StopJobRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAppRequest,
    UpdateBranchRequest,
    UpdateDomainAssociationRequest,
    UpdateWebhookRequest,
    CreateAppResult,
    CreateBackendEnvironmentResult,
    CreateBranchResult,
    CreateDeploymentResult,
    CreateDomainAssociationResult,
    CreateWebhookResult,
    DeleteAppResult,
    DeleteBackendEnvironmentResult,
    DeleteBranchResult,
    DeleteDomainAssociationResult,
    DeleteJobResult,
    DeleteWebhookResult,
    GenerateAccessLogsResult,
    GetAppResult,
    GetArtifactUrlResult,
    GetBackendEnvironmentResult,
    GetBranchResult,
    GetDomainAssociationResult,
    GetJobResult,
    GetWebhookResult,
    ListArtifactsResult,
    ListBackendEnvironmentsResult,
    ListBranchesResult,
    ListDomainAssociationsResult,
    ListJobsResult,
    ListTagsForResourceResponse,
    ListWebhooksResult,
    StartDeploymentResult,
    StartJobResult,
    StopJobResult,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAppResult,
    UpdateBranchResult,
    UpdateDomainAssociationResult,
    UpdateWebhookResult
} from "aws-sdk/clients/amplify";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.amplify.App {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.amplify.App>) {
        super(...args)
        this.client = new awssdk.Amplify()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/amplify-2017-07-25.normal.json"), this.client)
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): CreateAppResult {
        return this.client.createApp(
            this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateBackendEnvironment(partialParams: ToOptional<{
      [K in keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest]: (CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest)[K]
    }>): CreateBackendEnvironmentResult {
        return this.client.createBackendEnvironment(
            this.ops["CreateBackendEnvironment"].apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest]: (CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest)[K]
    }>): CreateBranchResult {
        return this.client.createBranch(
            this.ops["CreateBranch"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): CreateDeploymentResult {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDomainAssociation(partialParams: ToOptional<{
      [K in keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest]: (CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest)[K]
    }>): CreateDomainAssociationResult {
        return this.client.createDomainAssociation(
            this.ops["CreateDomainAssociation"].apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest]: (CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest)[K]
    }>): CreateWebhookResult {
        return this.client.createWebhook(
            this.ops["CreateWebhook"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): DeleteAppResult {
        return this.client.deleteApp(
            this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteBackendEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest]: (DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest)[K]
    }>): DeleteBackendEnvironmentResult {
        return this.client.deleteBackendEnvironment(
            this.ops["DeleteBackendEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest]: (DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest)[K]
    }>): DeleteBranchResult {
        return this.client.deleteBranch(
            this.ops["DeleteBranch"].apply(partialParams)
        );
    }

    invokeDeleteDomainAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest]: (DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest)[K]
    }>): DeleteDomainAssociationResult {
        return this.client.deleteDomainAssociation(
            this.ops["DeleteDomainAssociation"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest)[K]
    }>): DeleteJobResult {
        return this.client.deleteJob(
            this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest]: (DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest)[K]
    }>): DeleteWebhookResult {
        return this.client.deleteWebhook(
            this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeGenerateAccessLogs(partialParams: ToOptional<{
      [K in keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest]: (GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest)[K]
    }>): GenerateAccessLogsResult {
        return this.client.generateAccessLogs(
            this.ops["GenerateAccessLogs"].apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest]: (GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest)[K]
    }>): GetAppResult {
        return this.client.getApp(
            this.ops["GetApp"].apply(partialParams)
        );
    }

    invokeGetArtifactUrl(partialParams: ToOptional<{
      [K in keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest]: (GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest)[K]
    }>): GetArtifactUrlResult {
        return this.client.getArtifactUrl(
            this.ops["GetArtifactUrl"].apply(partialParams)
        );
    }

    invokeGetBackendEnvironment(partialParams: ToOptional<{
      [K in keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest]: (GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest)[K]
    }>): GetBackendEnvironmentResult {
        return this.client.getBackendEnvironment(
            this.ops["GetBackendEnvironment"].apply(partialParams)
        );
    }

    invokeGetBranch(partialParams: ToOptional<{
      [K in keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest]: (GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest)[K]
    }>): GetBranchResult {
        return this.client.getBranch(
            this.ops["GetBranch"].apply(partialParams)
        );
    }

    invokeGetDomainAssociation(partialParams: ToOptional<{
      [K in keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest]: (GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest)[K]
    }>): GetDomainAssociationResult {
        return this.client.getDomainAssociation(
            this.ops["GetDomainAssociation"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): GetJobResult {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetWebhook(partialParams: ToOptional<{
      [K in keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest]: (GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest)[K]
    }>): GetWebhookResult {
        return this.client.getWebhook(
            this.ops["GetWebhook"].apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest]: (ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest)[K]
    }>): ListArtifactsResult {
        return this.client.listArtifacts(
            this.ops["ListArtifacts"].apply(partialParams)
        );
    }

    invokeListBackendEnvironments(partialParams: ToOptional<{
      [K in keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest]: (ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest)[K]
    }>): ListBackendEnvironmentsResult {
        return this.client.listBackendEnvironments(
            this.ops["ListBackendEnvironments"].apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest]: (ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest)[K]
    }>): ListBranchesResult {
        return this.client.listBranches(
            this.ops["ListBranches"].apply(partialParams)
        );
    }

    invokeListDomainAssociations(partialParams: ToOptional<{
      [K in keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest]: (ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest)[K]
    }>): ListDomainAssociationsResult {
        return this.client.listDomainAssociations(
            this.ops["ListDomainAssociations"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest]: (ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest)[K]
    }>): ListJobsResult {
        return this.client.listJobs(
            this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWebhooks(partialParams: ToOptional<{
      [K in keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest]: (ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest)[K]
    }>): ListWebhooksResult {
        return this.client.listWebhooks(
            this.ops["ListWebhooks"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): StartDeploymentResult {
        return this.client.startDeployment(
            this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest]: (StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest)[K]
    }>): StartJobResult {
        return this.client.startJob(
            this.ops["StartJob"].apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest]: (StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest)[K]
    }>): StopJobResult {
        return this.client.stopJob(
            this.ops["StopJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest]: (UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest)[K]
    }>): UpdateAppResult {
        return this.client.updateApp(
            this.ops["UpdateApp"].apply(partialParams)
        );
    }

    invokeUpdateBranch(partialParams: ToOptional<{
      [K in keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest]: (UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest)[K]
    }>): UpdateBranchResult {
        return this.client.updateBranch(
            this.ops["UpdateBranch"].apply(partialParams)
        );
    }

    invokeUpdateDomainAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest]: (UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest)[K]
    }>): UpdateDomainAssociationResult {
        return this.client.updateDomainAssociation(
            this.ops["UpdateDomainAssociation"].apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest]: (UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest)[K]
    }>): UpdateWebhookResult {
        return this.client.updateWebhook(
            this.ops["UpdateWebhook"].apply(partialParams)
        );
    }
}