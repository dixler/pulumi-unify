
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
    ListResourcesInput,
    UpdateResourceInput,
    CancelResourceRequestOutput,
    CreateResourceOutput,
    DeleteResourceOutput,
    GetResourceOutput,
    GetResourceRequestStatusOutput,
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
    constructor(...args: ConstructorParameters<typeof aws.cloudcontrol.Resource>) {
        super(...args)
        this.client = new awssdk.CloudControl()
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

    invokeCancelResourceRequest(partialParams: ToOptional<{
      [K in keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput & keyof CancelResourceRequestInput]: (CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput & CancelResourceRequestInput)[K]
    }>): Request<CancelResourceRequestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelResourceRequest(
          this.ops["CancelResourceRequest"].applicator.apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput & keyof CreateResourceInput]: (CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput & CreateResourceInput)[K]
    }>): Request<CreateResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResource(
          this.ops["CreateResource"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput & keyof DeleteResourceInput]: (DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput & DeleteResourceInput)[K]
    }>): Request<DeleteResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResource(
          this.ops["DeleteResource"].applicator.apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput & keyof GetResourceInput]: (GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput & GetResourceInput)[K]
    }>): Request<GetResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResource(
          this.ops["GetResource"].applicator.apply(partialParams)
        );
    }

    invokeGetResourceRequestStatus(partialParams: ToOptional<{
      [K in keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput & keyof GetResourceRequestStatusInput]: (GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput & GetResourceRequestStatusInput)[K]
    }>): Request<GetResourceRequestStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceRequestStatus(
          this.ops["GetResourceRequestStatus"].applicator.apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput & keyof ListResourcesInput]: (ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput & ListResourcesInput)[K]
    }>): Request<ListResourcesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResources(
          this.ops["ListResources"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceInput & keyof UpdateResourceInput & keyof UpdateResourceInput & keyof UpdateResourceInput & keyof Omit<UpdateResourceInput, "TypeName"> & keyof UpdateResourceInput]: (UpdateResourceInput & UpdateResourceInput & UpdateResourceInput & UpdateResourceInput & Omit<UpdateResourceInput, "TypeName"> & UpdateResourceInput)[K]
    }>): Request<UpdateResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].applicator.apply(partialParams)
        );
    }
}