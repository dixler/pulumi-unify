
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/amplify-2017-07-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.amplify.Webhook {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.amplify.Webhook>) {
        super(...args)
        this.client = new awssdk.Amplify()
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].applicator.apply(partialParams)
        );
    }

    invokeCreateBackendEnvironment(partialParams: ToOptional<{
      [K in keyof Omit<CreateBackendEnvironmentRequest, "appId"> & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest]: (Omit<CreateBackendEnvironmentRequest, "appId"> & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest)[K]
    }>): Request<CreateBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackendEnvironment(
          this.ops["CreateBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof Omit<CreateBranchRequest, "appId"> & keyof CreateBranchRequest & keyof Omit<CreateBranchRequest, "branchName"> & keyof CreateBranchRequest & keyof CreateBranchRequest]: (Omit<CreateBranchRequest, "appId"> & CreateBranchRequest & Omit<CreateBranchRequest, "branchName"> & CreateBranchRequest & CreateBranchRequest)[K]
    }>): Request<CreateBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBranch(
          this.ops["CreateBranch"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof Omit<CreateDeploymentRequest, "appId"> & keyof CreateDeploymentRequest & keyof Omit<CreateDeploymentRequest, "branchName"> & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (Omit<CreateDeploymentRequest, "appId"> & CreateDeploymentRequest & Omit<CreateDeploymentRequest, "branchName"> & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainAssociation(partialParams: ToOptional<{
      [K in keyof Omit<CreateDomainAssociationRequest, "appId"> & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest]: (Omit<CreateDomainAssociationRequest, "appId"> & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest)[K]
    }>): Request<CreateDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainAssociation(
          this.ops["CreateDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof Omit<CreateWebhookRequest, "appId"> & keyof CreateWebhookRequest & keyof Omit<CreateWebhookRequest, "branchName"> & keyof CreateWebhookRequest & keyof CreateWebhookRequest]: (Omit<CreateWebhookRequest, "appId"> & CreateWebhookRequest & Omit<CreateWebhookRequest, "branchName"> & CreateWebhookRequest & CreateWebhookRequest)[K]
    }>): Request<CreateWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebhook(
          this.ops["CreateWebhook"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof Omit<DeleteAppRequest, "appId"> & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (Omit<DeleteAppRequest, "appId"> & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): Request<DeleteAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackendEnvironment(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBackendEnvironmentRequest, "appId"> & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest]: (Omit<DeleteBackendEnvironmentRequest, "appId"> & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest)[K]
    }>): Request<DeleteBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackendEnvironment(
          this.ops["DeleteBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof Omit<DeleteBranchRequest, "appId"> & keyof DeleteBranchRequest & keyof Omit<DeleteBranchRequest, "branchName"> & keyof DeleteBranchRequest & keyof DeleteBranchRequest]: (Omit<DeleteBranchRequest, "appId"> & DeleteBranchRequest & Omit<DeleteBranchRequest, "branchName"> & DeleteBranchRequest & DeleteBranchRequest)[K]
    }>): Request<DeleteBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBranch(
          this.ops["DeleteBranch"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainAssociation(partialParams: ToOptional<{
      [K in keyof Omit<DeleteDomainAssociationRequest, "appId"> & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest]: (Omit<DeleteDomainAssociationRequest, "appId"> & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest)[K]
    }>): Request<DeleteDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainAssociation(
          this.ops["DeleteDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof Omit<DeleteJobRequest, "appId"> & keyof DeleteJobRequest & keyof Omit<DeleteJobRequest, "branchName"> & keyof DeleteJobRequest & keyof DeleteJobRequest]: (Omit<DeleteJobRequest, "appId"> & DeleteJobRequest & Omit<DeleteJobRequest, "branchName"> & DeleteJobRequest & DeleteJobRequest)[K]
    }>): Request<DeleteJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest]: (DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest)[K]
    }>): Request<DeleteWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].applicator.apply(partialParams)
        );
    }

    invokeGenerateAccessLogs(partialParams: ToOptional<{
      [K in keyof Omit<GenerateAccessLogsRequest, "appId"> & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest]: (Omit<GenerateAccessLogsRequest, "appId"> & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest)[K]
    }>): Request<GenerateAccessLogsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateAccessLogs(
          this.ops["GenerateAccessLogs"].applicator.apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof Omit<GetAppRequest, "appId"> & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest]: (Omit<GetAppRequest, "appId"> & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest)[K]
    }>): Request<GetAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApp(
          this.ops["GetApp"].applicator.apply(partialParams)
        );
    }

    invokeGetArtifactUrl(partialParams: ToOptional<{
      [K in keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest]: (GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest)[K]
    }>): Request<GetArtifactUrlResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getArtifactUrl(
          this.ops["GetArtifactUrl"].applicator.apply(partialParams)
        );
    }

    invokeGetBackendEnvironment(partialParams: ToOptional<{
      [K in keyof Omit<GetBackendEnvironmentRequest, "appId"> & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest]: (Omit<GetBackendEnvironmentRequest, "appId"> & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest)[K]
    }>): Request<GetBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackendEnvironment(
          this.ops["GetBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeGetBranch(partialParams: ToOptional<{
      [K in keyof Omit<GetBranchRequest, "appId"> & keyof GetBranchRequest & keyof Omit<GetBranchRequest, "branchName"> & keyof GetBranchRequest & keyof GetBranchRequest]: (Omit<GetBranchRequest, "appId"> & GetBranchRequest & Omit<GetBranchRequest, "branchName"> & GetBranchRequest & GetBranchRequest)[K]
    }>): Request<GetBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBranch(
          this.ops["GetBranch"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainAssociation(partialParams: ToOptional<{
      [K in keyof Omit<GetDomainAssociationRequest, "appId"> & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest]: (Omit<GetDomainAssociationRequest, "appId"> & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest)[K]
    }>): Request<GetDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainAssociation(
          this.ops["GetDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof Omit<GetJobRequest, "appId"> & keyof GetJobRequest & keyof Omit<GetJobRequest, "branchName"> & keyof GetJobRequest & keyof GetJobRequest]: (Omit<GetJobRequest, "appId"> & GetJobRequest & Omit<GetJobRequest, "branchName"> & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetWebhook(partialParams: ToOptional<{
      [K in keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest]: (GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest)[K]
    }>): Request<GetWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebhook(
          this.ops["GetWebhook"].applicator.apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof Omit<ListArtifactsRequest, "appId"> & keyof ListArtifactsRequest & keyof Omit<ListArtifactsRequest, "branchName"> & keyof ListArtifactsRequest & keyof ListArtifactsRequest]: (Omit<ListArtifactsRequest, "appId"> & ListArtifactsRequest & Omit<ListArtifactsRequest, "branchName"> & ListArtifactsRequest & ListArtifactsRequest)[K]
    }>): Request<ListArtifactsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listArtifacts(
          this.ops["ListArtifacts"].applicator.apply(partialParams)
        );
    }

    invokeListBackendEnvironments(partialParams: ToOptional<{
      [K in keyof Omit<ListBackendEnvironmentsRequest, "appId"> & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest]: (Omit<ListBackendEnvironmentsRequest, "appId"> & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest)[K]
    }>): Request<ListBackendEnvironmentsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackendEnvironments(
          this.ops["ListBackendEnvironments"].applicator.apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof Omit<ListBranchesRequest, "appId"> & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest]: (Omit<ListBranchesRequest, "appId"> & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest)[K]
    }>): Request<ListBranchesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBranches(
          this.ops["ListBranches"].applicator.apply(partialParams)
        );
    }

    invokeListDomainAssociations(partialParams: ToOptional<{
      [K in keyof Omit<ListDomainAssociationsRequest, "appId"> & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest]: (Omit<ListDomainAssociationsRequest, "appId"> & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest)[K]
    }>): Request<ListDomainAssociationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomainAssociations(
          this.ops["ListDomainAssociations"].applicator.apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof Omit<ListJobsRequest, "appId"> & keyof ListJobsRequest & keyof Omit<ListJobsRequest, "branchName"> & keyof ListJobsRequest & keyof ListJobsRequest]: (Omit<ListJobsRequest, "appId"> & ListJobsRequest & Omit<ListJobsRequest, "branchName"> & ListJobsRequest & ListJobsRequest)[K]
    }>): Request<ListJobsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].applicator.apply(partialParams)
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

    invokeListWebhooks(partialParams: ToOptional<{
      [K in keyof Omit<ListWebhooksRequest, "appId"> & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest]: (Omit<ListWebhooksRequest, "appId"> & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest)[K]
    }>): Request<ListWebhooksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebhooks(
          this.ops["ListWebhooks"].applicator.apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof Omit<StartDeploymentRequest, "appId"> & keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "branchName"> & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (Omit<StartDeploymentRequest, "appId"> & StartDeploymentRequest & Omit<StartDeploymentRequest, "branchName"> & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].applicator.apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof Omit<StartJobRequest, "appId"> & keyof StartJobRequest & keyof Omit<StartJobRequest, "branchName"> & keyof StartJobRequest & keyof StartJobRequest]: (Omit<StartJobRequest, "appId"> & StartJobRequest & Omit<StartJobRequest, "branchName"> & StartJobRequest & StartJobRequest)[K]
    }>): Request<StartJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startJob(
          this.ops["StartJob"].applicator.apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof Omit<StopJobRequest, "appId"> & keyof StopJobRequest & keyof Omit<StopJobRequest, "branchName"> & keyof StopJobRequest & keyof StopJobRequest]: (Omit<StopJobRequest, "appId"> & StopJobRequest & Omit<StopJobRequest, "branchName"> & StopJobRequest & StopJobRequest)[K]
    }>): Request<StopJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopJob(
          this.ops["StopJob"].applicator.apply(partialParams)
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

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAppRequest, "appId"> & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest]: (Omit<UpdateAppRequest, "appId"> & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest)[K]
    }>): Request<UpdateAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApp(
          this.ops["UpdateApp"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBranch(partialParams: ToOptional<{
      [K in keyof Omit<UpdateBranchRequest, "appId"> & keyof UpdateBranchRequest & keyof Omit<UpdateBranchRequest, "branchName"> & keyof UpdateBranchRequest & keyof UpdateBranchRequest]: (Omit<UpdateBranchRequest, "appId"> & UpdateBranchRequest & Omit<UpdateBranchRequest, "branchName"> & UpdateBranchRequest & UpdateBranchRequest)[K]
    }>): Request<UpdateBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBranch(
          this.ops["UpdateBranch"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainAssociation(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDomainAssociationRequest, "appId"> & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest]: (Omit<UpdateDomainAssociationRequest, "appId"> & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest)[K]
    }>): Request<UpdateDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainAssociation(
          this.ops["UpdateDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest]: (UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest)[K]
    }>): Request<UpdateWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebhook(
          this.ops["UpdateWebhook"].applicator.apply(partialParams)
        );
    }
}