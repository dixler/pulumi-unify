
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAlertManagerDefinitionRequest,
    CreateRuleGroupsNamespaceRequest,
    DeleteAlertManagerDefinitionRequest,
    DeleteRuleGroupsNamespaceRequest,
    DeleteWorkspaceRequest,
    DescribeAlertManagerDefinitionRequest,
    DescribeRuleGroupsNamespaceRequest,
    DescribeWorkspaceRequest,
    ListRuleGroupsNamespacesRequest,
    ListTagsForResourceRequest,
    PutAlertManagerDefinitionRequest,
    PutRuleGroupsNamespaceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateWorkspaceAliasRequest,
    CreateAlertManagerDefinitionResponse,
    CreateRuleGroupsNamespaceResponse,
    DescribeAlertManagerDefinitionResponse,
    DescribeRuleGroupsNamespaceResponse,
    DescribeWorkspaceResponse,
    ListRuleGroupsNamespacesResponse,
    ListTagsForResourceResponse,
    PutAlertManagerDefinitionResponse,
    PutRuleGroupsNamespaceResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/amp";
const schema = require("../apis/amp-2020-08-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.amp.Workspace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.amp.Workspace>) {
        super(...args)
        this.client = new awssdk.Amp()
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

    invokeCreateAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof CreateAlertManagerDefinitionRequest & keyof CreateAlertManagerDefinitionRequest & keyof CreateAlertManagerDefinitionRequest]: (CreateAlertManagerDefinitionRequest & CreateAlertManagerDefinitionRequest & CreateAlertManagerDefinitionRequest)[K]
    }>): Request<CreateAlertManagerDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlertManagerDefinition(
          this.ops["CreateAlertManagerDefinition"].applicator.apply(partialParams)
        );
    }

    invokeCreateRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupsNamespaceRequest & keyof CreateRuleGroupsNamespaceRequest & keyof CreateRuleGroupsNamespaceRequest]: (CreateRuleGroupsNamespaceRequest & CreateRuleGroupsNamespaceRequest & CreateRuleGroupsNamespaceRequest)[K]
    }>): Request<CreateRuleGroupsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRuleGroupsNamespace(
          this.ops["CreateRuleGroupsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof DeleteAlertManagerDefinitionRequest & keyof DeleteAlertManagerDefinitionRequest & keyof DeleteAlertManagerDefinitionRequest]: (DeleteAlertManagerDefinitionRequest & DeleteAlertManagerDefinitionRequest & DeleteAlertManagerDefinitionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlertManagerDefinition(
          this.ops["DeleteAlertManagerDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupsNamespaceRequest & keyof DeleteRuleGroupsNamespaceRequest & keyof DeleteRuleGroupsNamespaceRequest]: (DeleteRuleGroupsNamespaceRequest & DeleteRuleGroupsNamespaceRequest & DeleteRuleGroupsNamespaceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRuleGroupsNamespace(
          this.ops["DeleteRuleGroupsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkspace(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceRequest & keyof DeleteWorkspaceRequest & keyof DeleteWorkspaceRequest]: (DeleteWorkspaceRequest & DeleteWorkspaceRequest & DeleteWorkspaceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkspace(
          this.ops["DeleteWorkspace"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof DescribeAlertManagerDefinitionRequest & keyof DescribeAlertManagerDefinitionRequest & keyof DescribeAlertManagerDefinitionRequest]: (DescribeAlertManagerDefinitionRequest & DescribeAlertManagerDefinitionRequest & DescribeAlertManagerDefinitionRequest)[K]
    }>): Request<DescribeAlertManagerDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAlertManagerDefinition(
          this.ops["DescribeAlertManagerDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof DescribeRuleGroupsNamespaceRequest & keyof DescribeRuleGroupsNamespaceRequest & keyof DescribeRuleGroupsNamespaceRequest]: (DescribeRuleGroupsNamespaceRequest & DescribeRuleGroupsNamespaceRequest & DescribeRuleGroupsNamespaceRequest)[K]
    }>): Request<DescribeRuleGroupsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRuleGroupsNamespace(
          this.ops["DescribeRuleGroupsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkspace(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceRequest & keyof DescribeWorkspaceRequest & keyof DescribeWorkspaceRequest]: (DescribeWorkspaceRequest & DescribeWorkspaceRequest & DescribeWorkspaceRequest)[K]
    }>): Request<DescribeWorkspaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkspace(
          this.ops["DescribeWorkspace"].applicator.apply(partialParams)
        );
    }

    invokeListRuleGroupsNamespaces(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsNamespacesRequest & keyof ListRuleGroupsNamespacesRequest & keyof ListRuleGroupsNamespacesRequest]: (ListRuleGroupsNamespacesRequest & ListRuleGroupsNamespacesRequest & ListRuleGroupsNamespacesRequest)[K]
    }>): Request<ListRuleGroupsNamespacesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRuleGroupsNamespaces(
          this.ops["ListRuleGroupsNamespaces"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof PutAlertManagerDefinitionRequest & keyof PutAlertManagerDefinitionRequest & keyof PutAlertManagerDefinitionRequest]: (PutAlertManagerDefinitionRequest & PutAlertManagerDefinitionRequest & PutAlertManagerDefinitionRequest)[K]
    }>): Request<PutAlertManagerDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAlertManagerDefinition(
          this.ops["PutAlertManagerDefinition"].applicator.apply(partialParams)
        );
    }

    invokePutRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof PutRuleGroupsNamespaceRequest & keyof PutRuleGroupsNamespaceRequest & keyof PutRuleGroupsNamespaceRequest]: (PutRuleGroupsNamespaceRequest & PutRuleGroupsNamespaceRequest & PutRuleGroupsNamespaceRequest)[K]
    }>): Request<PutRuleGroupsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRuleGroupsNamespace(
          this.ops["PutRuleGroupsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkspaceAlias(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceAliasRequest & keyof UpdateWorkspaceAliasRequest & keyof UpdateWorkspaceAliasRequest]: (UpdateWorkspaceAliasRequest & UpdateWorkspaceAliasRequest & UpdateWorkspaceAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkspaceAlias(
          this.ops["UpdateWorkspaceAlias"].applicator.apply(partialParams)
        );
    }
}