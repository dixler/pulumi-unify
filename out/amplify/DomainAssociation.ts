
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
    ListAppsRequest,
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
    ListAppsResult,
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

export default class extends aws.amplify.DomainAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.amplify.DomainAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Amplify()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest]: (CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateBackendEnvironment(partialParams: ToOptional<{
      [K in keyof CreateBackendEnvironmentRequest]: (CreateBackendEnvironmentRequest)[K]
    }>): Request<CreateBackendEnvironmentResult, AWSError> {
        this.boot();
        return this.client.createBackendEnvironment(
          this.ops["CreateBackendEnvironment"].apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof CreateBranchRequest]: (CreateBranchRequest)[K]
    }>): Request<CreateBranchResult, AWSError> {
        this.boot();
        return this.client.createBranch(
          this.ops["CreateBranch"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest]: (CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResult, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDomainAssociation(partialParams: ToOptional<{
      [K in keyof CreateDomainAssociationRequest]: (CreateDomainAssociationRequest)[K]
    }>): Request<CreateDomainAssociationResult, AWSError> {
        this.boot();
        return this.client.createDomainAssociation(
          this.ops["CreateDomainAssociation"].apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookRequest]: (CreateWebhookRequest)[K]
    }>): Request<CreateWebhookResult, AWSError> {
        this.boot();
        return this.client.createWebhook(
          this.ops["CreateWebhook"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest]: (DeleteAppRequest)[K]
    }>): Request<DeleteAppResult, AWSError> {
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteBackendEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteBackendEnvironmentRequest]: (DeleteBackendEnvironmentRequest)[K]
    }>): Request<DeleteBackendEnvironmentResult, AWSError> {
        this.boot();
        return this.client.deleteBackendEnvironment(
          this.ops["DeleteBackendEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchRequest]: (DeleteBranchRequest)[K]
    }>): Request<DeleteBranchResult, AWSError> {
        this.boot();
        return this.client.deleteBranch(
          this.ops["DeleteBranch"].apply(partialParams)
        );
    }

    invokeDeleteDomainAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDomainAssociationRequest]: (DeleteDomainAssociationRequest)[K]
    }>): Request<DeleteDomainAssociationResult, AWSError> {
        this.boot();
        return this.client.deleteDomainAssociation(
          this.ops["DeleteDomainAssociation"].apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest]: (DeleteJobRequest)[K]
    }>): Request<DeleteJobResult, AWSError> {
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookRequest]: (DeleteWebhookRequest)[K]
    }>): Request<DeleteWebhookResult, AWSError> {
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeGenerateAccessLogs(partialParams: ToOptional<{
      [K in keyof GenerateAccessLogsRequest]: (GenerateAccessLogsRequest)[K]
    }>): Request<GenerateAccessLogsResult, AWSError> {
        this.boot();
        return this.client.generateAccessLogs(
          this.ops["GenerateAccessLogs"].apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest]: (GetAppRequest)[K]
    }>): Request<GetAppResult, AWSError> {
        this.boot();
        return this.client.getApp(
          this.ops["GetApp"].apply(partialParams)
        );
    }

    invokeGetArtifactUrl(partialParams: ToOptional<{
      [K in keyof GetArtifactUrlRequest]: (GetArtifactUrlRequest)[K]
    }>): Request<GetArtifactUrlResult, AWSError> {
        this.boot();
        return this.client.getArtifactUrl(
          this.ops["GetArtifactUrl"].apply(partialParams)
        );
    }

    invokeGetBackendEnvironment(partialParams: ToOptional<{
      [K in keyof GetBackendEnvironmentRequest]: (GetBackendEnvironmentRequest)[K]
    }>): Request<GetBackendEnvironmentResult, AWSError> {
        this.boot();
        return this.client.getBackendEnvironment(
          this.ops["GetBackendEnvironment"].apply(partialParams)
        );
    }

    invokeGetBranch(partialParams: ToOptional<{
      [K in keyof GetBranchRequest]: (GetBranchRequest)[K]
    }>): Request<GetBranchResult, AWSError> {
        this.boot();
        return this.client.getBranch(
          this.ops["GetBranch"].apply(partialParams)
        );
    }

    invokeGetDomainAssociation(partialParams: ToOptional<{
      [K in keyof GetDomainAssociationRequest]: (GetDomainAssociationRequest)[K]
    }>): Request<GetDomainAssociationResult, AWSError> {
        this.boot();
        return this.client.getDomainAssociation(
          this.ops["GetDomainAssociation"].apply(partialParams)
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

    invokeGetWebhook(partialParams: ToOptional<{
      [K in keyof GetWebhookRequest]: (GetWebhookRequest)[K]
    }>): Request<GetWebhookResult, AWSError> {
        this.boot();
        return this.client.getWebhook(
          this.ops["GetWebhook"].apply(partialParams)
        );
    }

    invokeListApps(partialParams: ToOptional<{
      [K in keyof ListAppsRequest]: (ListAppsRequest)[K]
    }>): Request<ListAppsResult, AWSError> {
        this.boot();
        return this.client.listApps(
          this.ops["ListApps"].apply(partialParams)
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

    invokeListBackendEnvironments(partialParams: ToOptional<{
      [K in keyof ListBackendEnvironmentsRequest]: (ListBackendEnvironmentsRequest)[K]
    }>): Request<ListBackendEnvironmentsResult, AWSError> {
        this.boot();
        return this.client.listBackendEnvironments(
          this.ops["ListBackendEnvironments"].apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesRequest]: (ListBranchesRequest)[K]
    }>): Request<ListBranchesResult, AWSError> {
        this.boot();
        return this.client.listBranches(
          this.ops["ListBranches"].apply(partialParams)
        );
    }

    invokeListDomainAssociations(partialParams: ToOptional<{
      [K in keyof ListDomainAssociationsRequest]: (ListDomainAssociationsRequest)[K]
    }>): Request<ListDomainAssociationsResult, AWSError> {
        this.boot();
        return this.client.listDomainAssociations(
          this.ops["ListDomainAssociations"].apply(partialParams)
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

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWebhooks(partialParams: ToOptional<{
      [K in keyof ListWebhooksRequest]: (ListWebhooksRequest)[K]
    }>): Request<ListWebhooksResult, AWSError> {
        this.boot();
        return this.client.listWebhooks(
          this.ops["ListWebhooks"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest]: (StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResult, AWSError> {
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest]: (StartJobRequest)[K]
    }>): Request<StartJobResult, AWSError> {
        this.boot();
        return this.client.startJob(
          this.ops["StartJob"].apply(partialParams)
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

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof UpdateAppRequest]: (UpdateAppRequest)[K]
    }>): Request<UpdateAppResult, AWSError> {
        this.boot();
        return this.client.updateApp(
          this.ops["UpdateApp"].apply(partialParams)
        );
    }

    invokeUpdateBranch(partialParams: ToOptional<{
      [K in keyof UpdateBranchRequest]: (UpdateBranchRequest)[K]
    }>): Request<UpdateBranchResult, AWSError> {
        this.boot();
        return this.client.updateBranch(
          this.ops["UpdateBranch"].apply(partialParams)
        );
    }

    invokeUpdateDomainAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDomainAssociationRequest]: (UpdateDomainAssociationRequest)[K]
    }>): Request<UpdateDomainAssociationResult, AWSError> {
        this.boot();
        return this.client.updateDomainAssociation(
          this.ops["UpdateDomainAssociation"].apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookRequest]: (UpdateWebhookRequest)[K]
    }>): Request<UpdateWebhookResult, AWSError> {
        this.boot();
        return this.client.updateWebhook(
          this.ops["UpdateWebhook"].apply(partialParams)
        );
    }
}