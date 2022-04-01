
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelResourceRequestInput,
    CreateResourceInput,
    DeleteResourceInput,
    GetResourceInput,
    GetResourceRequestStatusInput,
    ListResourceRequestsInput,
    ListResourcesInput,
    UpdateResourceInput,
    CancelResourceRequestOutput,
    CreateResourceOutput,
    DeleteResourceOutput,
    GetResourceOutput,
    GetResourceRequestStatusOutput,
    ListResourceRequestsOutput,
    ListResourcesOutput,
    UpdateResourceOutput
} from "aws-sdk/clients/cloudcontrol";
const schema = require("../apis/cloudcontrol-2021-09-30.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudcontrol.Resource {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudcontrol.Resource>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudControl()
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

    invokeCancelResourceRequest(partialParams: ToOptional<{
      [K in keyof CancelResourceRequestInput]: (CancelResourceRequestInput)[K]
    }>): Request<CancelResourceRequestOutput, AWSError> {
        this.boot();
        return this.client.cancelResourceRequest(
          this.ops["CancelResourceRequest"].apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceInput & keyof Omit<CreateResourceInput, "TypeName" | "DesiredState">]: (CreateResourceInput)[K]
    }>): Request<CreateResourceOutput, AWSError> {
        this.boot();
        return this.client.createResource(
          this.ops["CreateResource"].apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceInput & keyof Omit<DeleteResourceInput, "TypeName">]: (DeleteResourceInput)[K]
    }>): Request<DeleteResourceOutput, AWSError> {
        this.boot();
        return this.client.deleteResource(
          this.ops["DeleteResource"].apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceInput & keyof Omit<GetResourceInput, "TypeName">]: (GetResourceInput)[K]
    }>): Request<GetResourceOutput, AWSError> {
        this.boot();
        return this.client.getResource(
          this.ops["GetResource"].apply(partialParams)
        );
    }

    invokeGetResourceRequestStatus(partialParams: ToOptional<{
      [K in keyof GetResourceRequestStatusInput]: (GetResourceRequestStatusInput)[K]
    }>): Request<GetResourceRequestStatusOutput, AWSError> {
        this.boot();
        return this.client.getResourceRequestStatus(
          this.ops["GetResourceRequestStatus"].apply(partialParams)
        );
    }

    invokeListResourceRequests(partialParams: ToOptional<{
      [K in keyof ListResourceRequestsInput]: (ListResourceRequestsInput)[K]
    }>): Request<ListResourceRequestsOutput, AWSError> {
        this.boot();
        return this.client.listResourceRequests(
          this.ops["ListResourceRequests"].apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesInput & keyof Omit<ListResourcesInput, "TypeName">]: (ListResourcesInput)[K]
    }>): Request<ListResourcesOutput, AWSError> {
        this.boot();
        return this.client.listResources(
          this.ops["ListResources"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceInput & keyof Omit<UpdateResourceInput, "TypeName">]: (UpdateResourceInput)[K]
    }>): Request<UpdateResourceOutput, AWSError> {
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].apply(partialParams)
        );
    }
}