
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchDeleteBuildsInput,
    BatchGetBuildBatchesInput,
    BatchGetBuildsInput,
    BatchGetProjectsInput,
    BatchGetReportGroupsInput,
    BatchGetReportsInput,
    CreateProjectInput,
    CreateReportGroupInput,
    CreateWebhookInput,
    DeleteBuildBatchInput,
    DeleteProjectInput,
    DeleteReportInput,
    DeleteReportGroupInput,
    DeleteResourcePolicyInput,
    DeleteSourceCredentialsInput,
    DeleteWebhookInput,
    DescribeCodeCoveragesInput,
    DescribeTestCasesInput,
    GetReportGroupTrendInput,
    GetResourcePolicyInput,
    ImportSourceCredentialsInput,
    InvalidateProjectCacheInput,
    ListBuildsForProjectInput,
    ListReportsForReportGroupInput,
    PutResourcePolicyInput,
    StartBuildInput,
    StartBuildBatchInput,
    StopBuildInput,
    StopBuildBatchInput,
    UpdateProjectInput,
    UpdateProjectVisibilityInput,
    UpdateReportGroupInput,
    UpdateWebhookInput,
    BatchDeleteBuildsOutput,
    BatchGetBuildBatchesOutput,
    BatchGetBuildsOutput,
    BatchGetProjectsOutput,
    BatchGetReportGroupsOutput,
    BatchGetReportsOutput,
    CreateProjectOutput,
    CreateReportGroupOutput,
    CreateWebhookOutput,
    DeleteBuildBatchOutput,
    DeleteProjectOutput,
    DeleteReportOutput,
    DeleteReportGroupOutput,
    DeleteResourcePolicyOutput,
    DeleteSourceCredentialsOutput,
    DeleteWebhookOutput,
    DescribeCodeCoveragesOutput,
    DescribeTestCasesOutput,
    GetReportGroupTrendOutput,
    GetResourcePolicyOutput,
    ImportSourceCredentialsOutput,
    InvalidateProjectCacheOutput,
    ListBuildsForProjectOutput,
    ListReportsForReportGroupOutput,
    PutResourcePolicyOutput,
    StartBuildOutput,
    StartBuildBatchOutput,
    StopBuildOutput,
    StopBuildBatchOutput,
    UpdateProjectOutput,
    UpdateProjectVisibilityOutput,
    UpdateReportGroupOutput,
    UpdateWebhookOutput
} from "aws-sdk/clients/codebuild";
const schema = require("../apis/codebuild-2016-10-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codebuild.Project {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.codebuild.Project>) {
        super(...args)
        this.client = new awssdk.CodeBuild()
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

    invokeBatchDeleteBuilds(partialParams: ToOptional<{
      [K in keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput]: (BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput)[K]
    }>): Request<BatchDeleteBuildsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteBuilds(
          this.ops["BatchDeleteBuilds"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetBuildBatches(partialParams: ToOptional<{
      [K in keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput]: (BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput)[K]
    }>): Request<BatchGetBuildBatchesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBuildBatches(
          this.ops["BatchGetBuildBatches"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetBuilds(partialParams: ToOptional<{
      [K in keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput]: (BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput)[K]
    }>): Request<BatchGetBuildsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBuilds(
          this.ops["BatchGetBuilds"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetProjects(partialParams: ToOptional<{
      [K in keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput]: (BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput)[K]
    }>): Request<BatchGetProjectsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetProjects(
          this.ops["BatchGetProjects"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetReportGroups(partialParams: ToOptional<{
      [K in keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput]: (BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput)[K]
    }>): Request<BatchGetReportGroupsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetReportGroups(
          this.ops["BatchGetReportGroups"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetReports(partialParams: ToOptional<{
      [K in keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput]: (BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput)[K]
    }>): Request<BatchGetReportsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetReports(
          this.ops["BatchGetReports"].applicator.apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput]: (CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput)[K]
    }>): Request<CreateProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].applicator.apply(partialParams)
        );
    }

    invokeCreateReportGroup(partialParams: ToOptional<{
      [K in keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput]: (CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput)[K]
    }>): Request<CreateReportGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReportGroup(
          this.ops["CreateReportGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput]: (CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput)[K]
    }>): Request<CreateWebhookOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebhook(
          this.ops["CreateWebhook"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBuildBatch(partialParams: ToOptional<{
      [K in keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput]: (DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput)[K]
    }>): Request<DeleteBuildBatchOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBuildBatch(
          this.ops["DeleteBuildBatch"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput]: (DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput)[K]
    }>): Request<DeleteProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(
          this.ops["DeleteProject"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReport(partialParams: ToOptional<{
      [K in keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput]: (DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput)[K]
    }>): Request<DeleteReportOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReport(
          this.ops["DeleteReport"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReportGroup(partialParams: ToOptional<{
      [K in keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput]: (DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput)[K]
    }>): Request<DeleteReportGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReportGroup(
          this.ops["DeleteReportGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput]: (DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput)[K]
    }>): Request<DeleteResourcePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourcePolicy(
          this.ops["DeleteResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSourceCredentials(partialParams: ToOptional<{
      [K in keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput]: (DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput)[K]
    }>): Request<DeleteSourceCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSourceCredentials(
          this.ops["DeleteSourceCredentials"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput]: (DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput)[K]
    }>): Request<DeleteWebhookOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCodeCoverages(partialParams: ToOptional<{
      [K in keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput]: (DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput)[K]
    }>): Request<DescribeCodeCoveragesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCodeCoverages(
          this.ops["DescribeCodeCoverages"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTestCases(partialParams: ToOptional<{
      [K in keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput]: (DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput)[K]
    }>): Request<DescribeTestCasesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTestCases(
          this.ops["DescribeTestCases"].applicator.apply(partialParams)
        );
    }

    invokeGetReportGroupTrend(partialParams: ToOptional<{
      [K in keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput]: (GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput)[K]
    }>): Request<GetReportGroupTrendOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReportGroupTrend(
          this.ops["GetReportGroupTrend"].applicator.apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput]: (GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput)[K]
    }>): Request<GetResourcePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourcePolicy(
          this.ops["GetResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeImportSourceCredentials(partialParams: ToOptional<{
      [K in keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput]: (ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput)[K]
    }>): Request<ImportSourceCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importSourceCredentials(
          this.ops["ImportSourceCredentials"].applicator.apply(partialParams)
        );
    }

    invokeInvalidateProjectCache(partialParams: ToOptional<{
      [K in keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput]: (InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput)[K]
    }>): Request<InvalidateProjectCacheOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invalidateProjectCache(
          this.ops["InvalidateProjectCache"].applicator.apply(partialParams)
        );
    }

    invokeListBuildsForProject(partialParams: ToOptional<{
      [K in keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput]: (ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput)[K]
    }>): Request<ListBuildsForProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBuildsForProject(
          this.ops["ListBuildsForProject"].applicator.apply(partialParams)
        );
    }

    invokeListReportsForReportGroup(partialParams: ToOptional<{
      [K in keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput]: (ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput)[K]
    }>): Request<ListReportsForReportGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listReportsForReportGroup(
          this.ops["ListReportsForReportGroup"].applicator.apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput]: (PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput)[K]
    }>): Request<PutResourcePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeStartBuild(partialParams: ToOptional<{
      [K in keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput]: (StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput)[K]
    }>): Request<StartBuildOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBuild(
          this.ops["StartBuild"].applicator.apply(partialParams)
        );
    }

    invokeStartBuildBatch(partialParams: ToOptional<{
      [K in keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput]: (StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput)[K]
    }>): Request<StartBuildBatchOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBuildBatch(
          this.ops["StartBuildBatch"].applicator.apply(partialParams)
        );
    }

    invokeStopBuild(partialParams: ToOptional<{
      [K in keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput]: (StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput)[K]
    }>): Request<StopBuildOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBuild(
          this.ops["StopBuild"].applicator.apply(partialParams)
        );
    }

    invokeStopBuildBatch(partialParams: ToOptional<{
      [K in keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput]: (StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput)[K]
    }>): Request<StopBuildBatchOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBuildBatch(
          this.ops["StopBuildBatch"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof Omit<UpdateProjectInput, "name"> & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput]: (UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & Omit<UpdateProjectInput, "name"> & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput)[K]
    }>): Request<UpdateProjectOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProjectVisibility(partialParams: ToOptional<{
      [K in keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof Omit<UpdateProjectVisibilityInput, "projectVisibility"> & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput]: (UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & Omit<UpdateProjectVisibilityInput, "projectVisibility"> & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput)[K]
    }>): Request<UpdateProjectVisibilityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProjectVisibility(
          this.ops["UpdateProjectVisibility"].applicator.apply(partialParams)
        );
    }

    invokeUpdateReportGroup(partialParams: ToOptional<{
      [K in keyof Omit<UpdateReportGroupInput, "arn"> & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput]: (Omit<UpdateReportGroupInput, "arn"> & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput)[K]
    }>): Request<UpdateReportGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateReportGroup(
          this.ops["UpdateReportGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput]: (UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput)[K]
    }>): Request<UpdateWebhookOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebhook(
          this.ops["UpdateWebhook"].applicator.apply(partialParams)
        );
    }
}