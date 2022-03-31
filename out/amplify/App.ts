
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

export default class extends aws.amplify.App {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.amplify.App>) {
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
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].applicator.apply(partialParams)
        );
    }

    invokeCreateBackendEnvironment(partialParams: ToOptional<{
      [K in keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest & keyof CreateBackendEnvironmentRequest]: (CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest & CreateBackendEnvironmentRequest)[K]
    }>): Request<CreateBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackendEnvironment(
          this.ops["CreateBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest & keyof CreateBranchRequest]: (CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest & CreateBranchRequest)[K]
    }>): Request<CreateBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBranch(
          this.ops["CreateBranch"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainAssociation(partialParams: ToOptional<{
      [K in keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest & keyof CreateDomainAssociationRequest]: (CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest & CreateDomainAssociationRequest)[K]
    }>): Request<CreateDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainAssociation(
          this.ops["CreateDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest & keyof CreateWebhookRequest]: (CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest & CreateWebhookRequest)[K]
    }>): Request<CreateWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebhook(
          this.ops["CreateWebhook"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): Request<DeleteAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackendEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest & keyof DeleteBackendEnvironmentRequest]: (DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest & DeleteBackendEnvironmentRequest)[K]
    }>): Request<DeleteBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackendEnvironment(
          this.ops["DeleteBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest & keyof DeleteBranchRequest]: (DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest & DeleteBranchRequest)[K]
    }>): Request<DeleteBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBranch(
          this.ops["DeleteBranch"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest & keyof DeleteDomainAssociationRequest]: (DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest & DeleteDomainAssociationRequest)[K]
    }>): Request<DeleteDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainAssociation(
          this.ops["DeleteDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJob(partialParams: ToOptional<{
      [K in keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest & keyof DeleteJobRequest]: (DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest & DeleteJobRequest)[K]
    }>): Request<DeleteJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJob(
          this.ops["DeleteJob"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest & keyof DeleteWebhookRequest]: (DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest & DeleteWebhookRequest)[K]
    }>): Request<DeleteWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].applicator.apply(partialParams)
        );
    }

    invokeGenerateAccessLogs(partialParams: ToOptional<{
      [K in keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest & keyof GenerateAccessLogsRequest]: (GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest & GenerateAccessLogsRequest)[K]
    }>): Request<GenerateAccessLogsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateAccessLogs(
          this.ops["GenerateAccessLogs"].applicator.apply(partialParams)
        );
    }

    invokeGetApp(partialParams: ToOptional<{
      [K in keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest & keyof GetAppRequest]: (GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest & GetAppRequest)[K]
    }>): Request<GetAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApp(
          this.ops["GetApp"].applicator.apply(partialParams)
        );
    }

    invokeGetArtifactUrl(partialParams: ToOptional<{
      [K in keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest & keyof GetArtifactUrlRequest]: (GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest & GetArtifactUrlRequest)[K]
    }>): Request<GetArtifactUrlResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getArtifactUrl(
          this.ops["GetArtifactUrl"].applicator.apply(partialParams)
        );
    }

    invokeGetBackendEnvironment(partialParams: ToOptional<{
      [K in keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest & keyof GetBackendEnvironmentRequest]: (GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest & GetBackendEnvironmentRequest)[K]
    }>): Request<GetBackendEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackendEnvironment(
          this.ops["GetBackendEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeGetBranch(partialParams: ToOptional<{
      [K in keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest & keyof GetBranchRequest]: (GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest & GetBranchRequest)[K]
    }>): Request<GetBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBranch(
          this.ops["GetBranch"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainAssociation(partialParams: ToOptional<{
      [K in keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest & keyof GetDomainAssociationRequest]: (GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest & GetDomainAssociationRequest)[K]
    }>): Request<GetDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainAssociation(
          this.ops["GetDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetWebhook(partialParams: ToOptional<{
      [K in keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest & keyof GetWebhookRequest]: (GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest & GetWebhookRequest)[K]
    }>): Request<GetWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWebhook(
          this.ops["GetWebhook"].applicator.apply(partialParams)
        );
    }

    invokeListArtifacts(partialParams: ToOptional<{
      [K in keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest & keyof ListArtifactsRequest]: (ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest & ListArtifactsRequest)[K]
    }>): Request<ListArtifactsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listArtifacts(
          this.ops["ListArtifacts"].applicator.apply(partialParams)
        );
    }

    invokeListBackendEnvironments(partialParams: ToOptional<{
      [K in keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest & keyof ListBackendEnvironmentsRequest]: (ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest & ListBackendEnvironmentsRequest)[K]
    }>): Request<ListBackendEnvironmentsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackendEnvironments(
          this.ops["ListBackendEnvironments"].applicator.apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest & keyof ListBranchesRequest]: (ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest & ListBranchesRequest)[K]
    }>): Request<ListBranchesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBranches(
          this.ops["ListBranches"].applicator.apply(partialParams)
        );
    }

    invokeListDomainAssociations(partialParams: ToOptional<{
      [K in keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest & keyof ListDomainAssociationsRequest]: (ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest & ListDomainAssociationsRequest)[K]
    }>): Request<ListDomainAssociationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomainAssociations(
          this.ops["ListDomainAssociations"].applicator.apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest & keyof ListJobsRequest]: (ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest & ListJobsRequest)[K]
    }>): Request<ListJobsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListWebhooks(partialParams: ToOptional<{
      [K in keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest & keyof ListWebhooksRequest]: (ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest & ListWebhooksRequest)[K]
    }>): Request<ListWebhooksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebhooks(
          this.ops["ListWebhooks"].applicator.apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].applicator.apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest]: (StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest)[K]
    }>): Request<StartJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startJob(
          this.ops["StartJob"].applicator.apply(partialParams)
        );
    }

    invokeStopJob(partialParams: ToOptional<{
      [K in keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest & keyof StopJobRequest]: (StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest & StopJobRequest)[K]
    }>): Request<StopJobResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopJob(
          this.ops["StopJob"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest]: (UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest)[K]
    }>): Request<UpdateAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApp(
          this.ops["UpdateApp"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBranch(partialParams: ToOptional<{
      [K in keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest & keyof UpdateBranchRequest]: (UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest & UpdateBranchRequest)[K]
    }>): Request<UpdateBranchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBranch(
          this.ops["UpdateBranch"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest & keyof UpdateDomainAssociationRequest]: (UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest & UpdateDomainAssociationRequest)[K]
    }>): Request<UpdateDomainAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainAssociation(
          this.ops["UpdateDomainAssociation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest & keyof UpdateWebhookRequest]: (UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest & UpdateWebhookRequest)[K]
    }>): Request<UpdateWebhookResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebhook(
          this.ops["UpdateWebhook"].applicator.apply(partialParams)
        );
    }
}